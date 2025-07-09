// import { prisma } from '@/lib/prisma'
// import { getServerSession } from 'next-auth'
// import { authOptions } from '@/app/api/auth/[...nextauth]/route'
// import { NextResponse } from 'next/server'

// export async function POST(req, { params }) {
//   const session = await getServerSession(authOptions)

//   if (!session || session.user.role !== 'admin') {
//     return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
//   }

//   try {
//     const eventId = parseInt(params.id) // 👈 important

//     const updatedEvent = await prisma.event.update({
//       where: { event_id: eventId },
//       data: { is_approved: true },
//     })

//     return NextResponse.json({ success: true, updatedEvent }) // 👈 return JSON
//   } catch (err) {
//     console.error("Approve Error:", err)
//     return NextResponse.json({ error: 'Failed to approve event' }, { status: 500 })
//   }
// }


import { prisma } from '@/lib/prisma'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/options'
import { NextResponse } from 'next/server'

export async function PUT(req, { params }) {
  const session = await getServerSession(authOptions)

  if (!session || session.user.role !== 'admin') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const eventId = parseInt(params.id)

    const updatedEvent = await prisma.event.update({
      where: { event_id: eventId },
      data: { is_approved: true },
    })

    return NextResponse.json({ success: true, updatedEvent })
  } catch (err) {
    console.error("Approve Error:", err)
    return NextResponse.json({ error: 'Failed to approve event' }, { status: 500 })
  }
}
