// // app/api/events/[id]/route.js

// import { NextResponse } from 'next/server'
// import { prisma } from '@/lib/prisma'

// export async function GET(req, { params }) {
//   const eventId = parseInt(params.id)

//   try {
//     const event = await prisma.event.findUnique({
//       where: { event_id: eventId }
//     })

//     if (!event) {
//       return NextResponse.json({ error: 'Event not found' }, { status: 404 })
//     }

//     return NextResponse.json(event)
//   } catch (err) {
//     console.error(err)
//     return NextResponse.json({ error: 'Internal error' }, { status: 500 })
//   }
// }



// app/api/events/[id]/route.js

//import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server' // ✅ Required import

export async function GET(req, { params }) {
  //const { params } = context
  const id = parseInt(params.id)

  try {
    const event = await prisma.event.findUnique({
      where: { event_id: id }
    })

    if (!event) {
      return NextResponse.json({ error: 'Event not found' }, { status: 404 })
    }

    // ✅ Validate time format (expects HH:mm, 24-hour format)
    const timeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/
    if (!event.time || !timeRegex.test(event.time)) {
      console.warn(`Invalid or missing time for event ${id}:`, event.time)
      event.time = null // or fallback value like "00:00"
    }

    return NextResponse.json(event)
  } catch (err) {
    console.error('Error fetching event:', err)
    return NextResponse.json({ error: 'Internal error' }, { status: 500 })
  }
}
