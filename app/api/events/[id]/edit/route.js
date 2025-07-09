import { prisma } from '@/lib/prisma'
import { getServerSession } from 'next-auth'
import { authoptions } from '@/app/api/auth/[...nextauth]/route'
import { NextResponse } from 'next/server'

export async function PUT(req, { params }) {
  const session = await getServerSession(authoptions)
  if (!session || session.user.role !== 'admin') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const body = await req.json()
  const { title, description, date, time } = body

  try {
    const updated = await prisma.event.update({
      where: { event_id: parseInt(params.id) },
      data: { title, description, date: new Date(date), time: new Date(time) }
    })
    return NextResponse.json(updated)
  } catch (err) {
    return NextResponse.json({ error: 'Failed to update event' }, { status: 500 })
  }
}
