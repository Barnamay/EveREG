// app/api/events/[id]/unapprove/route.js
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function PUT(_, { params }) {
  const session = await getServerSession(authOptions)

  if (!session || session.user.role !== 'admin') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const id = parseInt(params.id)

  try {
    const updated = await prisma.event.update({
      where: { event_id: id },
      data: {
        is_approved: false,
        is_published: false
      }
    })

    return NextResponse.json({ success: true, updated })
  } catch (error) {
    console.error('Unapprove error:', error)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
