'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { motion } from 'framer-motion'

export default function ParticipantsPage() {
  const { id } = useParams()
  const [participants, setParticipants] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchParticipants = async () => {
      try {
        const res = await fetch(`/api/events/${id}/participants`)
        const data = await res.json()
        if (res.ok) setParticipants(data)
        else throw new Error(data.error || 'Failed to fetch')
      } catch (err) {
        alert('Error loading participants')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchParticipants()
  }, [id])

  return (
    <div className="min-h-screen px-4 py-10 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center mb-10 bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400 bg-clip-text ">
          👥 <span className="text-4xl font-extrabold text-center mb-10 bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400 bg-clip-text text-transparent"> 
            Registered Participants
        </span>
        </h1>

        {loading ? (
          <div className="text-center text-lg text-gray-300">⏳ Loading participants...</div>
        ) : participants.length === 0 ? (
          <div className="text-center text-yellow-400 font-medium">No participants registered yet.</div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="overflow-x-auto rounded-xl shadow-2xl backdrop-blur-sm"
          >
            <table className="min-w-full border-collapse bg-white/10 border border-white/10 rounded-xl overflow-hidden text-sm">
              <thead className="bg-gradient-to-r from-indigo-700 to-purple-700 text-white">
                <tr>
                  <th className="p-3 border-b border-white/20">Name</th>
                  <th className="p-3 border-b border-white/20">Email</th>
                  <th className="p-3 border-b border-white/20">Phone</th>
                  <th className="p-3 border-b border-white/20">District</th>
                  <th className="p-3 border-b border-white/20">State</th>
                  <th className="p-3 border-b border-white/20">Pincode</th>
                </tr>
              </thead>
              <tbody>
                {participants.map((p, i) => (
                  <tr
                    key={i}
                    className="text-center hover:bg-white/10 transition duration-150"
                  >
                    <td className="p-2 border-t border-white/10">{p.user.name}</td>
                    <td className="p-2 border-t border-white/10">{p.user.email}</td>
                    <td className="p-2 border-t border-white/10">{p.user.phone}</td>
                    <td className="p-2 border-t border-white/10">{p.user.district}</td>
                    <td className="p-2 border-t border-white/10">{p.user.state}</td>
                    <td className="p-2 border-t border-white/10">{p.user.pincode}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        )}
      </div>
    </div>
  )
}
