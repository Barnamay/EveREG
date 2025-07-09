import { prisma } from '@/lib/prisma'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/options'

export async function PUT(req) {
  const session = await getServerSession(authOptions)

  if (!session || session.user.role !== 'admin') {
    return new Response('Unauthorized', { status: 401 })
  }

  const { uid } = await req.json()

  // Safety: only demote operators
  const user = await prisma.user.findUnique({
    where: { uid },
  })

  if (!user || user.role !== 'operator') {
    return new Response('User is not an operator', { status: 400 })
  }

  // Demote the user to 'participant'
  await prisma.user.update({
    where: { uid },
    data: { role: 'participant' },
  })

  return Response.json({ success: true })
}
