// "use client"
// import { useState } from 'react'
// import { useSession } from "next-auth/react"

// export default function CreateEventPage() {
//   const { data: session, status } = useSession()
//   const [form, setForm] = useState({ title: '', description: '', date: '', time: '' })

//   const handleSubmit = async (e) => {
//     e.preventDefault()

//     const res = await fetch('/api/events', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       credentials: 'include', // ✅ required for session cookies
//       body: JSON.stringify(form)
//     })

//     const responseText = await res.text()
//     console.log("Create event response:", res.status, responseText)

//     if (res.ok) {
//       alert('Event created! Awaiting admin approval.')
//       setForm({ title: '', description: '', date: '', time: '' })
//     } else {
//       alert(`Failed to create event.\nServer says: ${responseText}`)
//     }
//   }

//   if (status === 'loading') return <p className="text-center mt-10">Loading...</p>
//   if (!session) return <p className="text-center mt-10">You must be logged in.</p>

//   const userRole = session.user?.role

//   return (
//     <div className="p-4 max-w-xl mx-auto text-white">
//       <h1 className="text-2xl font-bold mb-4 text-center">
//         {['admin', 'operator'].includes(userRole) ? 'Create Event' : 'Fill Basic Details'}
//       </h1>

//       {['admin', 'operator'].includes(userRole) ? (
//         <form onSubmit={handleSubmit} className="space-y-3">
//           {['title', 'description', 'date', 'time'].map(field => (
//             <input
//               key={field}
//               type={
//                 field === 'date' ? 'date'
//                 : field === 'time' ? 'time'
//                 : 'text'
//               }
//               placeholder={field}
//               value={form[field]}
//               onChange={e => setForm({ ...form, [field]: e.target.value })}
//               className="border w-full p-2 rounded"
//               required
//             />
//           ))}
//           <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
//             Create Event
//           </button>
//         </form>
//       ) : (
//         <div className="border-2 border-yellow-400 p-4 rounded-lg bg-yellow-100 shadow-sm">
//           <p className="text-yellow-900 mb-3">You must complete your basic profile to register for events.</p>
//           <a href="/fill-details">
//             <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded">
//               Fill Basic Details
//             </button>
//           </a>
//         </div>
//       )}
//     </div>
//   )
// }


// "use client"

// import { useState } from 'react'
// import { useSession } from "next-auth/react"
// import { motion } from 'framer-motion'

// export default function CreateEventPage() {
//   const { data: session, status } = useSession()
//   const [form, setForm] = useState({ title: '', description: '', date: '', time: '' })

//   const handleSubmit = async (e) => {
//     e.preventDefault()

//     const res = await fetch('/api/events', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       credentials: 'include',
//       body: JSON.stringify(form)
//     })

//     const responseText = await res.text()
//     console.log("Create event response:", res.status, responseText)

//     if (res.ok) {
//       alert('Event created! Awaiting admin approval.')
//       setForm({ title: '', description: '', date: '', time: '' })
//     } else {
//       alert(`Failed to create event.\nServer says: ${responseText}`)
//     }
//   }

//   if (status === 'loading') return <p className="text-center mt-10 text-white">Loading...</p>
//   if (!session) return <p className="text-center mt-10 text-white">You must be logged in.</p>

//   const userRole = session.user?.role

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-indigo-800 to-black px-4 py-12">
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="w-full max-w-2xl bg-white/10 backdrop-blur-md p-8 rounded-3xl shadow-2xl border border-white/20"
//       >
//         <h1 className="text-3xl font-bold text-white mb-6 text-center tracking-wide">
//           {['admin', 'operator'].includes(userRole) ? '✨ Create New Event' : '📋 Fill Basic Details'}
//         </h1>

//         {['admin', 'operator'].includes(userRole) ? (
//           <form onSubmit={handleSubmit} className="space-y-5">
//             {['title', 'description', 'date', 'time'].map(field => (
//               <div key={field} className="relative">
//                 <input
//                   type={
//                     field === 'date' ? 'date'
//                     : field === 'time' ? 'time'
//                     : 'text'
//                   }
//                   placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
//                   value={form[field]}
//                   onChange={e => setForm({ ...form, [field]: e.target.value })}
//                   className="w-full bg-white/20 text-white placeholder-white/50 px-4 py-3 rounded-xl outline-none transition focus:ring-2 focus:ring-indigo-300 shadow-md focus:bg-white/30"
//                   required
//                 />
//               </div>
//             ))}
//             <button
//               type="submit"
//               className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
//             >
//               Create Event
//             </button>
//           </form>
//         ) : (
//           <div className="border-2 border-yellow-400 p-6 rounded-2xl bg-yellow-100/80 shadow-md text-center">
//             <p className="text-yellow-900 mb-4 font-medium text-lg">
//               You must complete your basic profile to register for events.
//             </p>
//             <a href="/fill-details">
//               <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-2 rounded-lg font-semibold transition">
//                 Fill Basic Details
//               </button>
//             </a>
//           </div>
//         )}
//       </motion.div>
//     </div>
//   )
// }


"use client"

import { useState, useEffect } from 'react'
import { useSession } from "next-auth/react"
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'

export default function CreateEventPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [form, setForm] = useState({ title: '', description: '', date: '', time: '' })

  useEffect(() => {
    if (status === 'loading') return

    if (!session || !['admin', 'operator'].includes(session.user?.role)) {
      router.push('/') // Redirect unauthorized users
    }
  }, [status, session, router])

  const handleSubmit = async (e) => {
    e.preventDefault()

    const res = await fetch('/api/events', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify(form)
    })

    const responseText = await res.text()
    console.log("Create event response:", res.status, responseText)

    if (res.ok) {
      alert('Event created! Awaiting admin approval.')
      setForm({ title: '', description: '', date: '', time: '' })
    } else {
      alert(`Failed to create event.\nServer says: ${responseText}`)
    }
  }

  if (status === 'loading') return <p className="text-center mt-10 text-white">Loading...</p>
  if (!session) return <p className="text-center mt-10 text-white">You must be logged in.</p>

  const userRole = session.user?.role

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-indigo-800 to-black px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-2xl bg-white/10 backdrop-blur-md p-8 rounded-3xl shadow-2xl border border-white/20"
      >
        <h1 className="text-3xl font-bold text-white mb-6 text-center tracking-wide">
          ✨ Create New Event
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          {['title', 'description', 'date', 'time'].map(field => (
            <div key={field} className="relative">
              <input
                type={field === 'date' ? 'date' : field === 'time' ? 'time' : 'text'}
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                value={form[field]}
                onChange={e => setForm({ ...form, [field]: e.target.value })}
                className="w-full bg-white/20 text-white placeholder-white/50 px-4 py-3 rounded-xl outline-none transition focus:ring-2 focus:ring-indigo-300 shadow-md focus:bg-white/30"
                required
              />
            </div>
          ))}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Create Event
          </button>
        </form>
      </motion.div>
    </div>
  )
}
