// scripts/create-admin.js
import { prisma } from '../lib/prisma.js' // ✅ Adjust path as per your structure

async function main() {
  const adminEmail = 'barnamay1234@gmail.com'

  const existing = await prisma.user.findUnique({
    where: { email: adminEmail }
  })

  if (!existing) {
    await prisma.user.create({
      data: {
        username: 'Admin',
        email: adminEmail,
        password: 'github-login', // ✅ placeholder if using GitHub OAuth
        role: 'admin',
        name: 'BARNAMAY CHOWDHURY' ,
        age: 23 ,
      },
    })
    console.log('✅ Admin user created')
  } else {
    console.log('ℹ️ Admin already exists')
  }
}

main()
  .catch((e) => {
    console.error('❌ Error creating admin:', e)
    process.exit(1)
  })
  .finally(() => prisma.$disconnect())
