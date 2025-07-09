import GitHubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'
import { prisma } from '@/lib/prisma'

export const authoptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],

  callbacks: {
    async signIn({ user }) {
      const existing = await prisma.user.findUnique({
        where: { email: user.email },
      })

      if (!existing) {
        await prisma.user.create({
          data: {
            email: user.email,
            username: user.name || user.email.split('@')[0],
            role: user.email === 'barnamay1234@gmail.com' ? 'admin' : 'participant',
            password: 'github-login',
          },
        })
        console.log('✅ New user created:', user.email)
      }

      return true
    },

    async session({ session }) {
      const userInDb = await prisma.user.findUnique({
        where: { email: session.user.email },
      })

      session.user.id = userInDb?.uid || userInDb?.id  // ensure this matches your schema
      session.user.role = userInDb?.role || 'participant'
      return session
    },
  },
}
