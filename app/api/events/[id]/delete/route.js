// // // app/api/events/[id]/delete/route.js
// // import { getServerSession } from 'next-auth'
// // import { authOptions } from '@/app/api/auth/[...nextauth]/route'
// // import { prisma } from '@/lib/prisma'
// // import { NextResponse } from 'next/server'

// // export async function DELETE(_, { params }) {
// //   const session = await getServerSession(authOptions)

// //   if (!session || session.user.role !== 'admin') {
// //     return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
// //   }

// //   const { id } = params

// //   try {
// //     await prisma.event.delete({
// //       where: { event_id: Number(id) }
// //     })
// //     return NextResponse.json({ message: 'Event deleted' })
// //   } catch (error) {
// //     console.error('Delete failed:', error)
// //     return NextResponse.json({ error: 'Failed to delete event' }, { status: 500 })
// //   }
// // }


// // app/api/events/[id]/delete/route.js
// import { getServerSession } from 'next-auth'
// import { authOptions } from '@/app/api/auth/[...nextauth]/options'
// import { prisma } from '@/lib/prisma'
// import { NextResponse } from 'next/server'

// export async function DELETE(_, { params }) {
//   const session = await getServerSession(authOptions)

//   if (!session || session.user.role !== 'admin') {
//     return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
//   }

//   const eventId = parseInt(params.id)

//   try {
//     await prisma.event.delete({
//       where: { event_id: eventId }
//     })
//     return NextResponse.json({ message: 'Event deleted' })
//   } catch (error) {
//     console.error('Delete failed:', error)
//     return NextResponse.json({ error: 'Failed to delete event' }, { status: 500 })
//   }
// }


// /api/events/[id]/delete/route.js
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/options'
import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function DELETE(_, { params }) {
  const session = await getServerSession(authOptions)

  if (!session || session.user.role !== 'admin') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const eventId = parseInt(params.id)

  try {
    await prisma.event.update({
      where: { event_id: eventId },
      data: { is_deleted: true }
    })
    return NextResponse.json({ message: 'Event soft-deleted' })
  } catch (error) {
    console.error('Delete failed:', error)
    return NextResponse.json({ error: 'Failed to delete event' }, { status: 500 })
  }
}
