// import { prisma } from '@/lib/prisma'
// import { getServerSession } from 'next-auth'

// export async function POST(req) {
//   const session = await getServerSession()
//   if (!session || session.user.role !== 'participant')
//     return new Response('Unauthorized', { status: 401 })

//   const { reason } = await req.json()

//   const existing = await prisma.operatorRequest.findUnique({ where: { uid: session.user.uid } })
//   if (existing) return new Response('Already requested', { status: 400 })

//   const reqRecord = await prisma.operatorRequest.create({
//     data: {
//       uid: session.user.uid,
//       reason,
//     },
//   })

//   return Response.json(reqRecord)
// }

// export async function GET() {
//   const session = await getServerSession()
//   if (!session || session.user.role !== 'admin')
//     return new Response('Unauthorized', { status: 401 })

//   const requests = await prisma.operatorRequest.findMany({
//     where: { status: 'pending' },
//     include: { user: true }
//   })

//   return Response.json(requests)
// }



// import { prisma } from '@/lib/prisma'
// import { getServerSession } from 'next-auth'

// export async function POST(req) {
//   const session = await getServerSession()

//   if (!session || session.user.role !== 'participant')
//     return new Response('Unauthorized', { status: 401 })

//   const { reason } = await req.json()

//   const existing = await prisma.operatorRequest.findUnique({
//     where: { uid: session.user.uid }
//   })

//   if (existing) return new Response('Already requested', { status: 400 })

//   const newRequest = await prisma.operatorRequest.create({
//     data: {
//       uid: session.user.uid,
//       reason
//     }
//   })

//   return Response.json(newRequest)
// }

// export async function GET() {
//   const session = await getServerSession()

//   if (!session || session.user.role !== 'admin')
//     return new Response('Unauthorized', { status: 401 })

//   const requests = await prisma.operatorRequest.findMany({
//     where: { status: 'pending' },
//     include: { user: true }
//   })

//   return Response.json(requests)
// }


// export async function POST(req) {
//   const session = await getServerSession()

//   if (!session || session.user.role !== 'participant')
//     return new Response('Unauthorized', { status: 401 })

//   const { reason } = await req.json()

//   const existing = await prisma.operatorRequest.findFirst({
//     where: {
//       uid: session.user.uid,
//       status: 'pending'
//     }
//   })

//   if (existing) return new Response('Already requested', { status: 400 })

//   const newRequest = await prisma.operatorRequest.create({
//     data: {
//       uid: session.user.uid,
//       reason
//     }
//   })

//   return Response.json(newRequest)
// }


// import { prisma } from '@/lib/prisma'
// import { getServerSession } from 'next-auth'
// import { authoptions } from '@/app/api/auth/[...nextauth]/options'

// export async function POST(req) {
//   const session = await getServerSession(authoptions)

//   if (!session || session.user.role !== 'participant')
//     return new Response('Unauthorized', { status: 401 })

//   const { reason } = await req.json()

//   const existing = await prisma.operatorRequest.findFirst({
//     where: {
//       uid: session.user.uid,
//       status: 'pending'
//     }
//   })

//   if (existing) return new Response('Already requested', { status: 400 })

//   const newRequest = await prisma.operatorRequest.create({
//     data: {
//       uid: session.user.uid,
//       reason
//     }
//   })

//   return Response.json(newRequest)
// }


// import { prisma } from '@/lib/prisma'
// import { getServerSession } from 'next-auth'
// import { authoptions } from '@/app/api/auth/[...nextauth]/options'

// export async function POST(req) {
//   const session = await getServerSession(authoptions)

//   if (!session || session.user.role !== 'participant') {
//     return new Response('Unauthorized', { status: 401 })
//   }

//   const { reason } = await req.json()

//   // Get the full user with uid
//   const user = await prisma.user.findUnique({
//     where: { email: session.user.email }
//   })

//   if (!user) return new Response('User not found', { status: 404 })

//   const existing = await prisma.operatorRequest.findFirst({
//     where: {
//       uid: user.uid,
//       status: 'pending'
//     }
//   })

//   if (existing) return new Response('Already requested', { status: 400 })

//   const newRequest = await prisma.operatorRequest.create({
//     data: {
//       uid: user.uid,
//       reason
//     }
//   })

//   return Response.json(newRequest)
// }



import { prisma } from '@/lib/prisma'
import { getServerSession } from 'next-auth'
import { authoptions } from '@/app/api/auth/[...nextauth]/options'

export async function POST(req) {
  const session = await getServerSession(authoptions)

  if (!session || session.user.role !== 'prouser') {
    return new Response('Unauthorized', { status: 401 })
  }

  const { reason } = await req.json()

  const user = await prisma.user.findUnique({
    where: { email: session.user.email }
  })

  if (!user) return new Response('User not found', { status: 404 })

  const existing = await prisma.operatorRequest.findFirst({
    where: {
      uid: user.uid,
      status: 'pending'
    }
  })

  if (existing) return new Response('Already requested', { status: 400 })

  const newRequest = await prisma.operatorRequest.create({
    data: {
      uid: user.uid,
      reason
    }
  })

  return Response.json(newRequest)
}

export async function GET() {
  const session = await getServerSession(authoptions)

  if (!session || session.user.role !== 'admin') {
    return new Response('Unauthorized', { status: 401 })
  }

  const requests = await prisma.operatorRequest.findMany({
    where: { status: 'pending' },
    include: { user: true }
  })

  return Response.json(requests)
}
