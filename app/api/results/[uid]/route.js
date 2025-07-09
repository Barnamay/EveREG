// app/api/results/[uid]/route.js
// app/api/results/[uid]/route.js
// app/api/results/[uid]/route.js
// app/api/results/[uid]/route.js

import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET(req, { params }) {
  const uid = parseInt(params.uid, 10) // ✅ Convert string to number

  if (isNaN(uid)) {
    return NextResponse.json({ message: 'Invalid user ID' }, { status: 400 })
  }

  try {
    const results = await prisma.result.findMany({
      where: { uid },
      include: {
        event: true,
        user: true
      }
    })

    return NextResponse.json(results)
  } catch (error) {
    console.error('Error fetching results:', error)
    return NextResponse.json([], { status: 500 })
  }
}
