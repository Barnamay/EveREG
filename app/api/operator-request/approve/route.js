import { prisma } from '@/lib/prisma'
import { getServerSession } from 'next-auth'
import { authoptions } from '@/app/api/auth/[...nextauth]/options'

export async function PUT(req) {
  const session = await getServerSession(authoptions)

  if (!session || session.user.role !== 'admin') {
    return new Response('Unauthorized', { status: 401 })
  }

  const { id } = await req.json()

  // Get the operator request
  const request = await prisma.operatorRequest.findUnique({
    where: { id },
  })

  if (!request) {
    return new Response('Request not found', { status: 404 })
  }

  // 1. Update the request status to 'approved'
  // 2. Change user's role to 'operator'
  await prisma.$transaction([
    prisma.operatorRequest.update({
      where: { id },
      data: { status: 'approved' },
    }),
    prisma.user.update({
      where: { uid: request.uid },
      data: { role: 'operator' },
    }),
  ])

  return Response.json({ success: true })
}
