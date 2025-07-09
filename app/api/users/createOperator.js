import { prisma } from '@/lib/prisma'
import { getServerSession } from 'next-auth'
import bcrypt from 'bcryptjs'

export async function POST(req) {
  const session = await getServerSession()
  if (!session || session.user.role !== 'admin') {
    return new Response("Unauthorized", { status: 401 })
  }

  const { username, email, password } = await req.json()

  // ✅ Input validation (optional but recommended)
  if (!username || !email || !password) {
    return new Response("Missing required fields", { status: 400 })
  }

  // ✅ Hash the password before saving
  const hashedPassword = await bcrypt.hash(password, 10)

  const operator = await prisma.user.create({
    data: {
      username,
      email,
      password: hashedPassword,
      role: 'operator',
    }
  })

  // Optional: Do not return the hashed password
  const { password: _, ...safeData } = operator

  return Response.json(safeData)
}
