import { prisma } from '@/lib/prisma'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/options'
import { NextResponse } from 'next/server'

export async function GET(_, { params }) {
  const session = await getServerSession(authOptions)
  if (!session || session.user.role !== 'admin') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const participants = await prisma.registration.findMany({
      where: { event_id: parseInt(params.id) },
      include: { user: true }
    })
    return NextResponse.json(participants)
  } catch (err) {
    return NextResponse.json({ error: 'Failed to load participants' }, { status: 500 })
  }
}
