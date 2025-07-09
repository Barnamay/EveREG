// app/api/user-profile/route.js
import { getServerSession } from 'next-auth'
import { authoptions } from '../auth/[...nextauth]/options'
import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET() {
  const session = await getServerSession(authoptions)

  if (!session || !session.user?.email) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
    select: {
      uid: true,
      username: true,
      email: true,
      name: true,
      age: true,
      phone: true,
      district: true,
      state: true,
      pincode: true
    }
  })

  if (!user) {
    return NextResponse.json({ message: 'User not found' }, { status: 404 })
  }

  return NextResponse.json(user)
}
