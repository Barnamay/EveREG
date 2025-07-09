'use client'

import { useEffect, useState } from 'react'
import { FaUserCheck, FaUserClock, FaEnvelope, FaShieldAlt } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function OperatorRequestsPage() {
  const [requests, setRequests] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const loadRequests = async () => {
      try {
        const res = await fetch('/api/operator-request')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setRequests(data)
      } catch (err) {
        setError('Could not load operator requests.')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    loadRequests()
  }, [])

  const handleApprove = async (id) => {
    const confirm = window.confirm('Approve this user as operator?')
    if (!confirm) return

    await fetch('/api/operator-request/approve', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id })
    })

    setRequests(prev => prev.filter(r => r.id !== id))
    alert('✅ Approved!')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#1e1e2f] text-white px-6 py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-extrabold text-center mb-12 tracking-tight bg-clip-text bg-gradient-to-r from-green-300 via-cyan-400 to-blue-500 animate-pulse">
          👥 <span className="text-5xl font-extrabold text-center mb-12 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-green-300 via-cyan-400 to-blue-500 animate-pulse">
             Pending Operator Requests</span>
        </h1>

        {loading && (
          <div className="text-center text-gray-300">⏳ Loading requests...</div>
        )}

        {error && (
          <div className="text-center text-red-400 font-semibold">{error}</div>
        )}

        {!loading && requests.length === 0 && (
          <div className="text-center text-lg text-white/80">
            <FaUserCheck className="inline text-green-400 text-2xl mr-2" />
            No pending operator requests.
          </div>
        )}

        <div className="grid gap-8">
          {requests.map((req, idx) => (
            <motion.div
              key={req.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white/10 border border-white/20 p-6 rounded-3xl shadow-xl backdrop-blur-md relative overflow-hidden hover:scale-[1.01] transition-all"
            >
              {/* Aura glow effect */}
              <div className="absolute -top-5 -left-5 w-40 h-40 bg-gradient-to-r from-green-400 to-cyan-500 opacity-20 blur-3xl rounded-full animate-pulse pointer-events-none" />

              <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center mb-4">
                <div>
                  <h2 className="text-2xl font-bold flex items-center gap-2">
                    <FaUserClock className="text-yellow-300" />
                    {req.user?.username || `User ${req.uid}`}
                  </h2>
                  <p className="text-sm text-gray-300 flex items-center gap-2 mt-1">
                    <FaEnvelope className="text-pink-400" />
                    {req.user?.email}
                  </p>
                  <p className="text-sm text-gray-400 flex items-center gap-2">
                    <FaShieldAlt className="text-indigo-400" />
                    Current Role: {req.user?.role}
                  </p>
                </div>
                <span className="text-xs text-gray-400 mt-3 md:mt-0">
                  Requested: {new Date(req.requestedAt).toLocaleString()}
                </span>
              </div>

              <p className="text-gray-100 italic bg-white/5 p-3 rounded-xl mb-6 border border-white/10">
                “{req.reason}”
              </p>

              <div className="text-right">
                <button
                  onClick={() => handleApprove(req.id)}
                  className="bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white px-6 py-2 rounded-full font-semibold shadow-md transition-transform hover:scale-105"
                >
                  ✅ Approve
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
