import { prisma } from '@/lib/prisma'
import { getServerSession } from 'next-auth'
import { authoptions } from '@/app/api/auth/[...nextauth]/options'

export async function GET() {
  const session = await getServerSession(authoptions)

  if (!session || session.user.role !== 'admin') {
    return new Response('Unauthorized', { status: 401 })
  }

  const operators = await prisma.user.findMany({
    where: { role: 'operator' },
    select: {
      uid: true,
      username: true,
      email: true,
      createdAt: true,
    },
    orderBy: { createdAt: 'desc' }
  })

  return Response.json(operators)
}
