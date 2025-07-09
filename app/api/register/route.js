// import { prisma } from '@/lib/prisma'
// import { getServerSession } from 'next-auth'

// export async function POST(req) {
//   const session = await getServerSession()
//   if (!session || session.user.role !== 'participant') return new Response("Unauthorized", { status: 401 })

//   const data = await req.json()

//   const registration = await prisma.registration.create({
//     data: {
//       ...data,
//       uid: session.user.uid,
//       event_id: data.event_id
//     }
//   })

//   return Response.json(registration)
// }


// import prisma from '@/lib/prisma'
// import { getServerSession } from 'next-auth'
// import { authoptions } from '../auth/[...nextauth]/options'
// import { NextResponse } from 'next/server'

// export async function POST(req) {
//   const session = await getServerSession(authoptions)
//   if (!session || !session.user || session.user.role !== 'participant') {
//     return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
//   }

//   const { event_id } = await req.json()

//   if (!event_id || isNaN(parseInt(event_id))) {
//     return NextResponse.json({ message: 'Invalid event ID' }, { status: 400 })
//   }

//   const user = await prisma.user.findUnique({
//     where: { email: session.user.email }
//   })

//   if (!user || !user.name || !user.phone || !user.district || !user.state) {
//     return NextResponse.json({ message: 'Please complete your basic details first.' }, { status: 400 })
//   }

//   const alreadyRegistered = await prisma.registration.findFirst({
//     where: {
//       uid: user.uid,
//       event_id: parseInt(event_id)
//     }
//   })

//   if (alreadyRegistered) {
//     return NextResponse.json({ message: 'You have already registered for this event.' }, { status: 409 })
//   }

//   const registration = await prisma.registration.create({
//     data: {
//       uid: user.uid,
//       event_id: parseInt(event_id)
//     }
//   })

//   return NextResponse.json({ message: 'Successfully registered!', reg_id: registration.reg_id }, { status: 201 })
// }

import { getServerSession } from 'next-auth/next'
import { authoptions } from '@/app/api/auth/[...nextauth]/options'
import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function POST(req) {
  const session = await getServerSession(authoptions)

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
        // name: data.name,
        // age: data.age,
        // phone: data.phone,
        // email: data.email,
        // district: data.district,
        // state: data.state
      }
    })
    

    return NextResponse.json({ success: true, registration })
  } catch (error) {
    console.error('🔥 Register POST error:', error)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}

