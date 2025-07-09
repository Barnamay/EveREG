import { getServerSession } from 'next-auth'
import { authoptions } from '@/app/api/auth/[...nextauth]/options'
import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function PUT(_, { params }) {
  const session = await getServerSession(authoptions)

  if (!session || session.user.role !== 'admin') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const eventId = parseInt(params.id)

  try {
    const updatedEvent = await prisma.event.update({
      where: { event_id: eventId },
      data: { is_deleted: false }
    })

    return NextResponse.json(updatedEvent)
  } catch (error) {
    console.error('[RESTORE EVENT ERROR]', error)
    return NextResponse.json({ error: 'Failed to restore event' }, { status: 500 })
  }
}
