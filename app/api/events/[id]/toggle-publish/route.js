import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/app/api/auth/[...nextauth]/options'
import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function POST(req) {
  const session = await getServerSession(authOptions)

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
