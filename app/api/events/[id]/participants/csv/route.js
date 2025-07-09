// import { prisma } from '@/lib/prisma'
// import { getServerSession } from 'next-auth'
// import { authOptions } from '@/app/api/auth/[...nextauth]/route'
// import { NextResponse } from 'next/server'

// export async function GET(_, { params }) {
//   const session = await getServerSession(authOptions)
//   if (!session || session.user.role !== 'admin') {
//     return new NextResponse('Unauthorized', { status: 401 })
//   }

//   const participants = await prisma.registration.findMany({
//     where: { event_id: parseInt(params.id) },
//     include: { user: true }
//   })

//   const csvRows = [
//     ['Name', 'Email', 'Phone', 'District', 'State', 'Pincode'],
//     ...participants.map(p => [
//       p.user.name,
//       p.user.email,
//       p.user.phone,
//       p.user.district,
//       p.user.state,
//       p.user.pincode
//     ])
//   ]

//   const csvContent = csvRows.map(row => row.join(',')).join('\n')

//   return new NextResponse(csvContent, {
//     headers: {
//       'Content-Type': 'text/csv',
//       'Content-Disposition': 'attachment; filename=participants.csv'
//     }
//   })
// }


import { prisma } from '@/lib/prisma'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/options' // ✅ fix import path
import { NextResponse } from 'next/server'

export async function GET(req, { params }) {
  const session = await getServerSession(authOptions)

  if (!session || session.user.role !== 'admin') {
    return new NextResponse('Unauthorized', { status: 401 })
  }

  const eventId = parseInt(params.id)
  if (isNaN(eventId)) {
    return new NextResponse('Invalid event ID', { status: 400 })
  }

  const participants = await prisma.registration.findMany({
    where: { event_id: eventId },
    include: { user: true }
  })

  const headers = ['Name', 'Email', 'Phone', 'District', 'State', 'Pincode']

  const rows = participants.map(p => [
    p.user?.name || '',
    p.user?.email || '',
    p.user?.phone || '',
    p.user?.district || '',
    p.user?.state || '',
    p.user?.pincode || ''
  ])

  const csv = [headers, ...rows]
    .map(row => row.map(field => `"${String(field).replace(/"/g, '""')}"`).join(','))
    .join('\n')

  return new NextResponse(csv, {
    status: 200,
    headers: {
      'Content-Type': 'text/csv; charset=utf-8',
      'Content-Disposition': `attachment; filename=event_${eventId}_participants.csv`
    }
  })
}
