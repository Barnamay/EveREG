'use client'

import { motion } from 'framer-motion'
import { useEffect } from 'react'

export default function AboutPage() {
  useEffect(() => {
    document.title = 'About | Evereg'
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-slate-950 text-white px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto text-center"
      >
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-yellow-300 via-pink-500 to-purple-600 bg-clip-text  mb-6">
         <span className="text-5xl font-extrabold bg-gradient-to-r from-yellow-300 via-pink-500 to-purple-600 bg-clip-text text-transparent mb-6"> Welcome to Evereg </span> 🌟
        </h1>
        <p className="text-lg text-gray-300 leading-relaxed mb-12">
          <span className="font-semibold text-white">Evereg</span> is your all-in-one, modern event management platform
          crafted for institutions, clubs, and communities who want a seamless, engaging experience for both organizers and participants.
        </p>
      </motion.div>

      {/* Features Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {[
          {
            title: '🎯 Role-Based Dashboards',
            desc: 'Admins, Operators, and Participants each get tailored experiences and tools to manage or join events effortlessly.'
          },
          {
            title: '📋 Dynamic Event Listings',
            desc: 'Filter events by status (Upcoming, Completed, Full), with badges and clear call-to-actions.'
          },
          {
            title: '📝 Smooth Registrations',
            desc: 'Participants can register with a single click after profile completion. Clean and fast!'
          },
          {
            title: '📊 Result Management',
            desc: 'Admins/operators can submit event results easily. Scores, positions, and winners are tracked smartly.'
          },
          {
            title: '📤 Export to CSV',
            desc: 'Need participant lists? Download them instantly as CSVs – no hassle, no delay.'
          },
          {
            title: '💡 Clean UI/UX',
            desc: 'Framer Motion animations, gradient themes, dark mode, and responsive design make Evereg a joy to use.'
          }
        ].map((feature, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-xl border border-white/20"
          >
            <h3 className="text-xl font-bold text-yellow-300 mb-2">{feature.title}</h3>
            <p className="text-sm text-gray-300">{feature.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* About Creator Section */}
      <div className="max-w-4xl mx-auto mt-20 text-center">
        <h2 className="text-3xl font-bold text-cyan-400 mb-4">👨‍💻 Built With Passion</h2>
        <p className="text-md text-gray-300 leading-relaxed mb-4">
          Evereg is lovingly crafted by <span className="text-white font-semibold">Barnamay Chowdhury</span>,
          a full stack developer and creative technologist who loves building useful tools, editing videos,
          and contributing to the open-source community.
        </p>
        <p className="text-sm text-gray-500">
          Built with <span className="text-pink-400">Next.js</span>, <span className="text-purple-400">Prisma</span>, <span className="text-green-400">NextAuth</span> and lots of ❤️.
        </p>
      </div>

      {/* Footer */}
      <footer className="mt-24 text-center text-sm text-gray-500">
        © 2025 Evereg. Designed & Developed by <span className="text-white font-semibold">Barnamay Chowdhury</span>.
      </footer>
    </div>
  )
}
