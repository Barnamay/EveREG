

import { prisma } from '@/lib/prisma'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/options'
import { NextResponse } from 'next/server'

export async function PUT(_, { params }) {
  const session = await getServerSession(authOptions)

  if (!session || session.user.role !== 'admin') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const updated = await prisma.event.update({
      where: { event_id: parseInt(params.id) },
      data: { is_published: true }
    })

    return NextResponse.json({ success: true, event: updated })
  } catch (err) {
    console.error("Publish Error:", err)
    return NextResponse.json({ error: 'Failed to publish event' }, { status: 500 })
  }
}
