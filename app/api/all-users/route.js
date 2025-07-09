// import { getServerSession } from 'next-auth'
// import { authOptions } from '../auth/[...nextauth]/options'
// import prisma from '@/lib/prisma'
// import { NextResponse } from 'next/server'

// export async function GET() {
//   const session = await getServerSession(authOptions)

//   if (!session) {
//     return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
//   }

//   const user = await prisma.user.findUnique({
//     where: { email: session.user.email },
//     select: {
//       uid: true,
//       username: true,
//       email: true,
//       name: true,
//       age: true,
//       phone: true,
//       district: true,
//       state: true,
//       pincode: true
//     }
//   })

//   if (!user) {
//     return NextResponse.json({ message: 'User not found' }, { status: 404 })
//   }

//   return NextResponse.json(user)
// }


// import { getServerSession } from 'next-auth'
// import { authOptions } from '../auth/[...nextauth]/options'
// import { prisma } from '@/lib/prisma'
// import { NextResponse } from 'next/server'

// export async function GET() {
//   try {
//     const session = await getServerSession(authOptions)

//     if (!session || !session.user?.email) {
//       return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
//     }

//     const user = await prisma.user.findUnique({
//       where: { email: session.user.email },
//       select: {
//         uid: true,
//         username: true,
//         email: true,
//         role: true,
//         name: true,
//         age: true,
//         phone: true,
//         district: true,
//         state: true,
//         pincode: true,
//         createdAt: true
//       }
//     })

//     if (!user) {
//       return NextResponse.json({ message: 'User not found' }, { status: 404 })
//     }

//     return NextResponse.json(user)
//   } catch (error) {
//     console.error('🔥 Error fetching user profile:', error)
//     return NextResponse.json({ message: 'Server error' }, { status: 500 })
//   }
// }


import { getServerSession } from 'next-auth'
import { authOptions } from '../auth/[...nextauth]/options'
import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET() {
  const session = await getServerSession(authOptions)

  if (!session || !['admin', 'operator'].includes(session.user.role)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const users = await prisma.user.findMany({
    select: {
      uid: true,
      name: true,
      email: true
    }
  })

  return NextResponse.json(users)
}
