'use client'

import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'

export default function UserProfilePage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [user, setUser] = useState(null)
  const [results, setResults] = useState([])

  useEffect(() => {
    if (status === 'loading') return
    if (!session) router.push('/api/auth/signin')

    const fetchProfile = async () => {
      try {
        const res = await fetch('/api/user-profile')
        const data = await res.json()
        setUser(data)

        const res2 = await fetch(`/api/results/${data.uid}`)
        const resultsData = await res2.json()
        setResults(Array.isArray(resultsData) ? resultsData : [])
      } catch (err) {
        console.error('❌ Failed to load profile or results:', err)
      }
    }

    fetchProfile()
  }, [session, status])

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white text-lg animate-pulse">
        ⏳ Loading your profile...
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-[#121212] to-[#1a1a1a] text-white px-6 py-10">
      <div className="max-w-4xl mx-auto bg-white/5 p-8 rounded-3xl shadow-2xl border border-white/10 backdrop-blur-sm">
        <h1 className="text-4xl font-extrabold text-center mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text">
          👤<span className="text-4xl font-extrabold text-center mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"> 
            Your Profile </span>
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10 text-sm md:text-base">
          <div><span className="font-semibold text-white/80">Name:</span> {user.name}</div>
          <div><span className="font-semibold text-white/80">Username:</span> {user.username}</div>
          <div><span className="font-semibold text-white/80">Email:</span> {user.email}</div>
          <div><span className="font-semibold text-white/80">Phone:</span> {user.phone}</div>
          <div><span className="font-semibold text-white/80">Age:</span> {user.age}</div>
          <div><span className="font-semibold text-white/80">District:</span> {user.district}</div>
          <div><span className="font-semibold text-white/80">State:</span> {user.state}</div>
          <div><span className="font-semibold text-white/80">Pincode:</span> {user.pincode}</div>
        </div>

        <h2 className="text-2xl font-bold text-green-400 mb-6">🏆 Your Event Results</h2>

        {results.length === 0 ? (
          <p className="text-yellow-400 text-sm">No results submitted yet.</p>
        ) : (
          <div className="grid gap-5">
            {results.map((r, i) => (
              <motion.div
                key={`${r.uid}-${r.event_id}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="bg-white/10 border border-white/10 p-4 rounded-xl shadow hover:shadow-lg transition"
              >
                <p><strong>🎯 Event:</strong> {r.event?.title || 'N/A'}</p>
                <p><strong>📈 Score:</strong> {r.score}</p>
                <p>
                  <strong>🏅 Position:</strong>{' '}
                  {r.position === 1 ? '🥇' : r.position === 2 ? '🥈' : r.position === 3 ? '🥉' : r.position}
                </p>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
