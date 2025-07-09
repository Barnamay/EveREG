// import { getServerSession } from 'next-auth'
// import { authoptions } from '@/app/api/auth/[...nextauth]/options'
// import { prisma } from '@/lib/prisma'
// import { NextResponse } from 'next/server'

// // GET: Return all approved events or Fill Basic Details
// // GET: Return approved/upcoming events and delete expired ones
// export async function GET() {
//   try {
//     const now = new Date()

//     // 1. Fetch all events except "Fill Basic Details"
//     const allEvents = await prisma.event.findMany({
//       where: {
//         title: { not: 'Fill Basic Details' }
//       }
//     })

//     // 2. Filter past events
//     const expiredEventIds = allEvents
//       .filter(event => {
//         const eventDateTime = new Date(`${event.date}T${formatTime(event.time)}`)
//         return eventDateTime < now
//       })
//       .map(event => event.event_id)

//     // 3. Delete expired events
//     if (expiredEventIds.length > 0) {
//       await prisma.event.deleteMany({
//         where: {
//           event_id: { in: expiredEventIds }
//         }
//       })
//     }

//     // 4. Return only approved + "Fill Basic Details"
//     const events = await prisma.event.findMany({
//       where: {
//         OR: [
//           { is_approved: true },
//           { title: 'Fill Basic Details' }
//         ]
//       },
//       include: {
//         _count: {
//           select: { registrations: true }
//         }
//       },
//       orderBy: {
//         createdAt: 'desc'
//       }
//     })


//     return NextResponse.json(events)
//   } catch (error) {
//     console.error('[GET /api/events ERROR]', error)
//     return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
//   }
// }

// // Helper: ensure time is always formatted like HH:mm:ss
// function formatTime(time) {
//   return time.length === 5 ? `${time}:00` : time
// }


// // POST: Create new event by admin/operator
// export async function POST(req) {
//   const session = await getServerSession(authoptions)

//   if (!session || !['admin', 'operator'].includes(session.user.role)) {
//     return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
//   }

//   const { title, description, date, time } = await req.json()

//   const combinedDateTime = new Date(`${date}T${time}`)
//   if (isNaN(combinedDateTime.getTime())) {
//     return NextResponse.json({ error: "Invalid date or time format" }, { status: 400 })
//   }

//   const user = await prisma.user.findUnique({
//     where: { email: session.user.email }
//   })

//   if (!user) {
//     return NextResponse.json({ error: "User not found" }, { status: 404 })
//   }

//   const event = await prisma.event.create({
//     data: {
//       title,
//       description,
//       date: new Date(date),
//       time: combinedDateTime,
//       created_by: user.uid
//     }
//   })

//   return NextResponse.json(event)
// }


// import { getServerSession } from 'next-auth'
// import { authoptions } from '@/app/api/auth/[...nextauth]/options'
// import { prisma } from '@/lib/prisma'
// import { NextResponse } from 'next/server'

// // GET: Return all events for admin, approved + "Fill Basic Details" for others
// export async function GET(req) {
//   const session = await getServerSession(authoptions)
//   const isAdmin = session?.user?.role === 'admin'

//   try {
//     const events = await prisma.event.findMany({
//       where: isAdmin
//         ? {} // Admin sees everything
//         : {
//             OR: [
//               { is_approved: true },
//               { title: 'Fill Basic Details' }
//             ]
//           },
//       include: {
//         _count: {
//           select: { registrations: true }
//         }
//       },
//       orderBy: {
//         createdAt: 'desc'
//       }
//     })

//     return NextResponse.json(events)
//   } catch (error) {
//     console.error('[GET /api/events ERROR]', error)
//     return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
//   }
// }

// // Helper: ensure time is always formatted like HH:mm:ss
// function formatTime(time) {
//   return time.length === 5 ? `${time}:00` : time
// }

// // POST: Create new event by admin/operator
// export async function POST(req) {
//   const session = await getServerSession(authoptions)

//   if (!session || !['admin', 'operator'].includes(session.user.role)) {
//     return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
//   }

//   const { title, description, date, time } = await req.json()

//   const combinedDateTime = new Date(`${date}T${time}`)
//   if (isNaN(combinedDateTime.getTime())) {
//     return NextResponse.json({ error: "Invalid date or time format" }, { status: 400 })
//   }

//   const user = await prisma.user.findUnique({
//     where: { email: session.user.email }
//   })

//   if (!user) {
//     return NextResponse.json({ error: "User not found" }, { status: 404 })
//   }

//   const event = await prisma.event.create({
//     data: {
//       title,
//       description,
//       date: new Date(date),
//       time: combinedDateTime,
//       created_by: user.uid
//     }
//   })

//   return NextResponse.json(event)
// }



// import { getServerSession } from 'next-auth'
// import { authoptions } from '@/app/api/auth/[...nextauth]/options'
// import { prisma } from '@/lib/prisma'
// import { NextResponse } from 'next/server'

// // GET: Return all events (admin sees everything including deleted)
// export async function GET(req) {
//   const session = await getServerSession(authoptions)
//   const isAdmin = session?.user?.role === 'admin'

//   try {
//     const events = await prisma.event.findMany({
//       where: {
//         ...(isAdmin
//           ? {} // Admin sees all
//           : {
//               is_deleted: false,
//               OR: [
//                 { is_approved: true },
//                 { title: 'Fill Basic Details' }
//               ]
//             })
//       },
//       include: {
//         _count: {
//           select: { registrations: true }
//         }
//       },
//       orderBy: {
//         createdAt: 'desc'
//       }
//     })

//     return NextResponse.json(events)
//   } catch (error) {
//     console.error('[GET /api/events ERROR]', error)
//     return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
//   }
// }

// // Helper
// function formatTime(time) {
//   return time.length === 5 ? `${time}:00` : time
// }

// // POST: Create new event by admin/operator
// export async function POST(req) {
//   const session = await getServerSession(authoptions)

//   if (!session || !['admin', 'operator'].includes(session.user.role)) {
//     return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
//   }

//   const { title, description, date, time } = await req.json()

//   const combinedDateTime = new Date(`${date}T${time}`)
//   if (isNaN(combinedDateTime.getTime())) {
//     return NextResponse.json({ error: "Invalid date or time format" }, { status: 400 })
//   }

//   const user = await prisma.user.findUnique({
//     where: { email: session.user.email }
//   })

//   if (!user) {
//     return NextResponse.json({ error: "User not found" }, { status: 404 })
//   }

//   const event = await prisma.event.create({
//     data: {
//       title,
//       description,
//       date: new Date(date),
//       time: combinedDateTime,
//       created_by: user.uid,
//       is_deleted: false // explicitly ensure it's not soft-deleted
//     }
//   })

//   return NextResponse.json(event)
// }



import { getServerSession } from 'next-auth'
import { authoptions } from '@/app/api/auth/[...nextauth]/options'
import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

// GET: Return only approved and active events
export async function GET() {
  try {
    const events = await prisma.event.findMany({
      where: {
        is_deleted: false,
        OR: [
          {
            is_approved: true,
            
          },
          {
            title: 'Fill Basic Details'
          }
        ]

      },
      include: {
        _count: {
          select: { registrations: true }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    })

    return NextResponse.json(events)
  } catch (error) {
    console.error('[GET /api/events ERROR]', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

// POST: Create new event by admin/operator
export async function POST(req) {
  const session = await getServerSession(authoptions)

  if (!session || !['admin', 'operator','prouser'].includes(session.user.role)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const { title, description, date, time } = await req.json()

  const combinedDateTime = new Date(`${date}T${time}`)
  if (isNaN(combinedDateTime.getTime())) {
    return NextResponse.json({ error: "Invalid date or time format" }, { status: 400 })
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email }
  })

  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 })
  }

  const event = await prisma.event.create({
    data: {
      title,
      description,
      date: new Date(date),
      time: combinedDateTime,
      created_by: user.uid,
      is_deleted: false
    }
  })

  return NextResponse.json(event)
}
