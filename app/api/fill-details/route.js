// import { prisma } from '@/lib/prisma'
// import { getServerSession } from 'next-auth'

// export async function POST(req) {
//   const session = await getServerSession()
//   const uid = session?.user?.id
//   if (!uid) return new Response('Unauthorized', { status: 401 })

//   const data = await req.json()

//   // Optional: Upsert to avoid duplicate fill
//   const saved = await prisma.registration.upsert({
//     where: {
//       uid_event_id: {
//         uid,
//         event_id: 1 // Assuming 'Fill Basic Details' event ID is 1
//       }
//     },
//     update: data,
//     create: {
//       ...data,
//       uid,
//       event_id: 1
//     }
//   })

//   return Response.json(saved)
// }


// import { prisma } from '@/lib/prisma'
// import { getServerSession } from 'next-auth/next'
// import { authoptions } from '@/app/api/auth/[...nextauth]/options'
// import { NextResponse } from 'next/server'

// export async function GET() {
//   try {
//     const session = await getServerSession(authoptions)

//     if (!session?.user?.email) {
//       return NextResponse.json({ alreadyFilled: false }, { status: 200 })
//     }

//     const user = await prisma.user.findUnique({
//       where: { email: session.user.email }
//     })

//     const alreadyFilled = !!(user?.name && user?.phone && user?.district && user?.state)

//     return NextResponse.json({ alreadyFilled }, { status: 200 })
//   } catch (error) {
//     console.error('🔥 ERROR in /api/fill-details (GET):', error)
//     return NextResponse.json({ alreadyFilled: false, error: 'Internal Server Error' }, { status: 500 })
//   }
// }

// export async function POST(req) {
//   try {
//     const session = await getServerSession(authoptions)
//     if (!session?.user?.email) {
//       return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
//     }

//     const data = await req.json()

//     const updated = await prisma.user.update({
//       where: { email: session.user.email },
//       data: {
//         name: data.name,
//         age: parseInt(data.age),
//         phone: data.phone,
//         district: data.district,
//         state: data.state,
//         pincode: data.pincode,
//         role: 'prouser'
//       },
//     })

//     return NextResponse.json({ success: true }, { status: 200 })
//   } catch (error) {
//     console.error('🔥 ERROR in /api/fill-details (POST):', error)
//     return NextResponse.json({ error: 'Something went wrong' }, { status: 500 })
//   }
// }


import { prisma } from '@/lib/prisma'
import { getServerSession } from 'next-auth/next'
import { authoptions } from '@/app/api/auth/[...nextauth]/options'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const session = await getServerSession(authoptions)

    if (!session?.user?.email) {
      return NextResponse.json({ alreadyFilled: false }, { status: 200 })
    }

    const user = await prisma.user.findUnique({
      where: { email: session.user.email }
    })

    const alreadyFilled = !!(user?.name && user?.phone && user?.district && user?.state)

    return NextResponse.json({ alreadyFilled }, { status: 200 })
  } catch (error) {
    console.error('🔥 ERROR in /api/fill-details (GET):', error)
    return NextResponse.json({ alreadyFilled: false, error: 'Internal Server Error' }, { status: 500 })
  }
}

export async function POST(req) {
  try {
    const session = await getServerSession(authoptions)
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const data = await req.json()

    await prisma.user.update({
      where: { email: session.user.email },
      data: {
        name: data.name,
        age: parseInt(data.age),
        phone: data.phone,
        district: data.district,
        state: data.state,
        pincode: data.pincode,
        role: 'prouser'  // 👈 update role
      },
    })

    // Return success flag
    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error('🔥 ERROR in /api/fill-details (POST):', error)
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 })
  }
}
