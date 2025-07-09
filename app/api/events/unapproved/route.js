import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/options'

export async function GET(req) {
  const session = await getServerSession(authOptions)

  if (!session || session.user.role !== 'admin') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const unapprovedEvents = await prisma.event.findMany({
    where: { is_approved: false },
    orderBy: { createdAt: 'desc' },
  })

  return NextResponse.json(unapprovedEvents)
}
