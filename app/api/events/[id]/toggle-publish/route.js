// import { prisma } from '@/lib/prisma'
// import { getServerSession } from 'next-auth'
// import { authoptions } from '@/app/api/auth/[...nextauth]/route'
// import { NextResponse } from 'next/server'

// export async function PUT(req, { params }) {
//   const session = await getServerSession(authoptions)
//   if (!session || session.user.role !== 'admin') {
//     return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
//   }

//   const { is_published } = await req.json()

//   try {
//     const updated = await prisma.event.update({
//       where: { event_id: parseInt(params.id) },
//       data: { is_published }
//     })
//     return NextResponse.json(updated)
//   } catch (err) {
//     return NextResponse.json({ error: 'Failed to toggle publish' }, { status: 500 })
//   }
// }


// app/api/events/[id]/toggle-publish/route.js
// import { getServerSession } from 'next-auth'
// import { authoptions } from '@/app/api/auth/[...nextauth]/options'
// // import { authoptions } from '@/app/api/auth/[...nextauth]/route'
// import { prisma } from '@/lib/prisma'
// import { NextResponse } from 'next/server'

// export async function PUT(_, { params }) {
//   const session = await getServerSession(authoptions)

//   if (!session || session.user.role !== 'admin') {
//     return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
//   }

//   const id = parseInt(params.id)

//   try {
//     const event = await prisma.event.findUnique({ where: { event_id: id } })
//     if (!event) return NextResponse.json({ error: 'Event not found' }, { status: 404 })

//     const updated = await prisma.event.update({
//       where: { event_id: id },
//       data: { is_published: !event.is_published }
//     })

//     return NextResponse.json({ success: true, updated })
//   } catch (error) {
//     console.error('Toggle publish error:', error)
//     return NextResponse.json({ error: 'Server error' }, { status: 500 })
//   }
// }


// import { getServerSession } from 'next-auth'
// import { authoptions } from '@/app/api/auth/[...nextauth]/options'
// import { prisma } from '@/lib/prisma'
// import { NextResponse } from 'next/server'

// export async function PUT(req, context) {
//   const session = await getServerSession(authoptions)

//   if (!session || session.user.role !== 'admin') {
//     return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
//   }

//   const id = parseInt(context.params.id)
//   if (isNaN(id)) {
//     return NextResponse.json({ error: 'Invalid event ID' }, { status: 400 })
//   }

//   try {
//     const event = await prisma.event.findUnique({ where: { event_id: id } })
//     if (!event) {
//       return NextResponse.json({ error: 'Event not found' }, { status: 404 })
//     }

//     const updated = await prisma.event.update({
//       where: { event_id: id },
//       data: { is_published: !event.is_published }
//     })

//     return NextResponse.json({ success: true, updated })
//   } catch (error) {
//     console.error('Toggle publish error:', error)
//     return NextResponse.json({ error: 'Server error' }, { status: 500 })
//   }
// }


// import { getServerSession } from 'next-auth/next'
// import { authOptions } from '@/app/api/auth/[...nextauth]/options'
// import { prisma } from '@/lib/prisma'
// import { NextResponse } from 'next/server'
// import { headers, cookies } from 'next/headers'

// export async function POST(req) {
//   // get session correctly
//   const session = await getServerSession(authOptions, headers(), cookies())

//   if (!session || !session.user) {
//     return NextResponse.json({ error: "Not authenticated" }, { status: 401 })
//   }

//   const user = await prisma.user.findUnique({
//     where: { email: session.user.email }
//   })

//   try {
//     const event = await prisma.event.findUnique({ where: { event_id: id } })
//     if (!event) {
//       return NextResponse.json({ error: 'Event not found' }, { status: 404 })
//     }

//     const updated = await prisma.event.update({
//       where: { event_id: id },
//       data: { is_published: !event.is_published }
//     })

//     return NextResponse.json({ success: true, updated })
//   } catch (error) {
//     console.error('Toggle publish error:', error)
//     return NextResponse.json({ error: 'Server error' }, { status: 500 })
//   }
// }


// import { getServerSession } from 'next-auth/next'
// import { authOptions } from '@/app/api/auth/[...nextauth]/options'
// import { headers, cookies } from 'next/headers'
// import { prisma } from '@/lib/prisma'
// import { NextResponse } from 'next/server'

// export async function POST(req) {
//   // 1. Get session using correct arguments for app router
//   const session = await getServerSession(authOptions, headers(), cookies())

//   // 2. Check if session or user is missing
//   if (!session || !session.user) {
//     return NextResponse.json({ error: 'Unauthorized: No session or user' }, { status: 401 })
//   }

//   try {
//     // 3. Find user by email from session
//     const user = await prisma.user.findUnique({
//       where: { email: session.user.email }
//     })

//     if (!user) {
//       return NextResponse.json({ error: 'User not found' }, { status: 404 })
//     }

//     // 4. Get the body data from request
//     const data = await req.json()

//     // Example: Use data and user to create a registration
//     const registration = await prisma.registration.create({
//       data: {
//         uid: user.uid,
//         event_id: data.event_id,
//         name: data.name,
//         age: data.age,
//         phone: data.phone,
//         email: data.email,
//         district: data.district,
//         state: data.state
//       }
//     })

//     return NextResponse.json({ success: true, registration })
//   } catch (error) {
//     console.error('Register POST error:', error)
//     return NextResponse.json({ error: 'Server error' }, { status: 500 })
//   }
// }



import { getServerSession } from 'next-auth/next'
import { authoptions } from '@/app/api/auth/[...nextauth]/options'
import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function POST(req) {
  const session = await getServerSession(authoptions)

  console.log('Session in /api/register:', session)

  if (!session?.user?.email) {
    return NextResponse.json({ error: 'Unauthorized: No session or user' }, { status: 401 })
  }

  try {
    const user = await prisma.user.findUnique({
      where: { email: session.user.email }
    })

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    const data = await req.json()

    const registration = await prisma.registration.create({
      data: {
        uid: user.uid,
        event_id: data.event_id,
        name: data.name,
        age: data.age,
        phone: data.phone,
        email: data.email,
        district: data.district,
        state: data.state,
      }
    })

    return NextResponse.json({ success: true, registration })
  } catch (error) {
    console.error('Register POST error:', error)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
