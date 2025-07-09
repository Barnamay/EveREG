import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/options'
import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

// GET: Return only approved and active events
export async function GET() {
  try {
    const events = await prisma.event.findMany({
      where: {
        is_deleted: false,
        OR: [
          {
            is_approved: true,
            
          },
          {
            title: 'Fill Basic Details'
          }
        ]

      },
      include: {
        _count: {
          select: { registrations: true }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    })

    return NextResponse.json(events)
  } catch (error) {
    console.error('[GET /api/events ERROR]', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

// POST: Create new event by admin/operator
export async function POST(req) {
  const session = await getServerSession(authOptions)

  if (!session || !['admin', 'operator','prouser'].includes(session.user.role)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const { title, description, date, time } = await req.json()

  const combinedDateTime = new Date(`${date}T${time}`)
  if (isNaN(combinedDateTime.getTime())) {
    return NextResponse.json({ error: "Invalid date or time format" }, { status: 400 })
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email }
  })

  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 })
  }

  const event = await prisma.event.create({
    data: {
      title,
      description,
      date: new Date(date),
      time: combinedDateTime,
      created_by: user.uid,
      is_deleted: false
    }
  })

  return NextResponse.json(event)
}
