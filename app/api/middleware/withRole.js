// // app/api/middleware/withRole.js
// import { getServerSession } from "next-auth";
// import { authOptions } from "../auth/[...nextauth]/route";
// import prisma from "@/lib/prisma";

// export async function withRole(req, allowedRoles = []) {
//   const session = await getServerSession(authOptions);
//   if (!session || !session.user?.email) {
//     return { error: "Unauthorized", status: 401 };
//   }

//   const user = await prisma.user.findUnique({
//     where: { email: session.user.email },
//   });

//   if (!user || !allowedRoles.includes(user.role)) {
//     return { error: "Forbidden", status: 403 };
//   }

//   return { user };
// }



// app/api/middleware/withRole.js
import { getServerSession } from "next-auth"
import { authOptions } from "../auth/[...nextauth]/options"
import { prisma } from '@/lib/prisma'


const ENABLE_LOGGING = process.env.DEBUG_AUTH === 'true' // ✅ Optional flag

export async function withRole(req, allowedRoles = []) {
  try {
    const session = await getServerSession(authOptions)

    if (!session || !session.user?.email) {
      if (ENABLE_LOGGING) console.warn("🔒 No session found")
      return { error: "❌ Unauthorized: No session", status: 401 }
    }

    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
    })

    if (!user) {
      if (ENABLE_LOGGING) console.warn("🚫 User not found in DB")
      return { error: "❌ Unauthorized: User not found", status: 401 }
    }

    if (!allowedRoles.includes(user.role)) {
      if (ENABLE_LOGGING)
        console.warn(`🚫 Role '${user.role}' not allowed for this route`)
      return {
        error: `🚫 Forbidden: Role '${user.role}' is not allowed`,
        status: 403,
      }
    }

    if (ENABLE_LOGGING)
      console.info(`✅ Access granted to ${user.email} with role: ${user.role}`)

    return { user }
  } catch (err) {
    console.error("🔥 Middleware error:", err)
    return { error: "❌ Server error in auth middleware", status: 500 }
  }
}
