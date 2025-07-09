

// app/api/results/route.js
import { prisma } from '@/lib/prisma'
import { withRole } from '../middleware/withRole'

// ✅ POST: Save or update result (admin/operator only)
export async function POST(req) {
  const { user, error, status } = await withRole(req, ['admin', 'operator'])
  if (error) return new Response(error, { status })

  const body = await req.json()
  const { uid, event_id, position, score } = body

  if (
    typeof uid !== 'number' ||
    typeof event_id !== 'number' ||
    typeof position !== 'number' ||
    typeof score !== 'number' ||
    isNaN(uid) || isNaN(event_id) || isNaN(position) || isNaN(score)
  ) {
    return new Response('❌ Invalid data: All fields must be valid numbers', { status: 400 })
  }

  try {
    const result = await prisma.result.upsert({
      where: { uid_event_id: { uid, event_id } },
      update: { position, score },
      create: { uid, event_id, position, score },
    })

    return Response.json({
      success: true,
      message: '✅ Result recorded successfully',
      data: result,
    })
  } catch (err) {
    console.error('🔥 Error saving result:', err)
    return new Response('❌ Server error while saving result', { status: 500 })
  }
}

// ✅ GET: Fetch all results (public or limited view)
export async function GET(req) {
  try {
    const results = await prisma.result.findMany({
      include: {
        user: {
          select: { uid: true, name: true, email: true },
        },
        event: {
          select: { title: true, event_id: true },
        }
      },
      orderBy: {
        score: 'desc'
      }
    })

    return Response.json(results)
  } catch (err) {
    console.error('🔥 Error fetching results:', err)
    return new Response('❌ Failed to fetch results', { status: 500 })
  }
}
