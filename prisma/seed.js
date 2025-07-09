// // const { PrismaClient } = require('@prisma/client')
// // const prisma = new PrismaClient()

// // async function main() {
// //   const adminEmail = 'barnamay1234@gmail.com'

// //   // Create admin if not exists
// //   let admin = await prisma.user.findUnique({ where: { email: adminEmail } })
// //   if (!admin) {
// //     admin = await prisma.user.create({
// //       data: {
// //         username: 'Admin',
// //         email: adminEmail,
// //         password: 'github-login', // Replace with hashed in production
// //         role: 'admin',
// //       },
// //     })
// //   }

// //   // Create default event if not exists
// //   const eventTitle = 'Fill Basic Details'
// //   const existing = await prisma.event.findFirst({ where: { title: eventTitle } })
// //   if (!existing) {
// //     await prisma.event.create({
// //       data: {
// //         title: eventTitle,
// //         description: 'Upload your documents and profile information.',
// //         date: new Date(),
// //         time: new Date(),
// //         created_by: admin.uid,
// //         is_approved: true,
// //         is_published: true,
// //       },
// //     })
// //   }

// //   console.log('✅ Seeded default admin and Fill Basic Details event.')
// // }

// // main().catch(console.error).finally(() => prisma.$disconnect())




// const { PrismaClient } = require('@prisma/client')
// const prisma = new PrismaClient()

// async function main() {
//   const adminEmail = 'barnamay1234@gmail.com'

//   let admin = await prisma.user.findUnique({ where: { email: adminEmail } })
//   if (!admin) {
//     admin = await prisma.user.create({
//       data: {
//         username: 'Admin',
//         email: adminEmail,
//         password: 'github-login',
//         role: 'admin',
//       },
//     })
//   }

//   const eventTitle = 'Fill Basic Details'
//   const existing = await prisma.event.findFirst({ where: { title: eventTitle } })
//   if (!existing) {
//     const now = new Date()
//     const formattedTime = now.toLocaleTimeString('en-US', {
//       hour: '2-digit',
//       minute: '2-digit',
//       hour12: true,
//     })

//     await prisma.event.create({
//       data: {
//         title: eventTitle,
//         description: 'Upload your documents and profile information.',
//         date: now,
//         time: formattedTime, // <- Stored as "02:30 PM"
//         created_by: admin.uid,
//         is_approved: true,
//         is_published: true,
//       },
//     })
//   }

//   console.log('✅ Seeded default admin and Fill Basic Details event.')
// }

// main().catch(console.error).finally(() => prisma.$disconnect())


const formatTime = (timeValue) => {
  if (!timeValue) return 'Time not available';

  try {
    // If it's already a string like "02:30 PM" or "14:30"
    if (typeof timeValue === 'string') {
      const date = new Date(`1970-01-01T${timeValue}`);
      if (isNaN(date)) return timeValue; // fallback to raw string
      return date.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      });
    }

    // If it's a Date object or DateTime string
    const date = new Date(timeValue);
    if (isNaN(date)) return 'Invalid time';

    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });
  } catch (err) {
    return 'Time not available';
  }
}
