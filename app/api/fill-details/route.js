
import { prisma } from '@/lib/prisma'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/app/api/auth/[...nextauth]/options'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const session = await getServerSession(authOptions)

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
    const session = await getServerSession(authOptions)
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
