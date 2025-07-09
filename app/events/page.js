'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useSession } from "next-auth/react"
import { FaPlus, FaTrash } from 'react-icons/fa'

export default function EventsPage() {
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [requested, setRequested] = useState(false)
  const { data: session } = useSession()
  const userRole = session?.user?.role

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch('/api/events')
        if (!res.ok) throw new Error('Failed to fetch events')
        const data = await res.json()

        const sorted = [...data].sort((a, b) => {
          const dateA = new Date(`${a.date}T${a.time}`)
          const dateB = new Date(`${b.date}T${b.time}`)
          return dateA - dateB
        })

        setEvents(sorted)
        setLoading(false)
      } catch (err) {
        console.error('Error loading events:', err)
        setError('Could not load events. Try again later.')
        setLoading(false)
      }
    }

    const checkOperatorRequest = async () => {
      if (session?.user?.role === 'participant') {
        const res = await fetch('/api/operator-request')
        if (res.status === 400) setRequested(true)
      }
    }

    fetchEvents()
    checkOperatorRequest()
  }, [session])

  const handleDelete = async (eventId) => {
    if (!confirm("Are you sure you want to delete this event?")) return
    const res = await fetch(`/api/events/${eventId}/delete`, { method: 'DELETE' })
    if (res.ok) {
      alert('Event deleted')
      setEvents(prev => prev.filter(e => e.event_id !== eventId))
    } else {
      alert('Failed to delete event')
    }
  }

  const isNew = (createdAt) => {
    const created = new Date(createdAt)
    const now = new Date()
    const diff = (now - created) / (1000 * 60 * 60 * 24)
    return diff <= 2
  }

  const isSoon = (dateStr, timeStr) => {
    const eventDate = new Date(`${dateStr}T${timeStr}`)
    const now = new Date()
    const diff = (eventDate - now) / (1000 * 60 * 60 * 24)
    return diff > 0 && diff <= 2
  }

  const isFull = (count) => count >= 100

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1e1e2f] via-[#302b63] to-[#0f0c29] text-white px-4 py-8 md:px-10">
      <div className="max-w-6xl mx-auto">
        <h1 className='text-5xl font-extrabold mb-10 text-center tracking-tight bg-clip-text'>
          🌟 <span className='text-transparent bg-gradient-to-r from-fuchsia-400 to-cyan-400 bg-clip-text'>Explore Our Events</span>
        </h1>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-end gap-4 mb-10">
          {['admin', 'operator'].includes(userRole) && (
            <>
              <Link href="/admin/events/create">
                <button className="flex items-center gap-2 bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white px-5 py-2 rounded-full shadow-lg hover:shadow-xl font-semibold text-sm transition-transform hover:scale-105">
                  <FaPlus /> Create Event
                </button>
              </Link>
              <Link href="/admin/results/submit">
                <button className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white px-5 py-2 rounded-full shadow-lg hover:shadow-xl font-semibold text-sm transition-transform hover:scale-105">
                  <FaPlus /> Submit Result
                </button>
              </Link>
            </>
          )}

          {userRole === 'prouser' && !requested && (
            <Link href="/request-operator">
              <button className="bg-gradient-to-r from-indigo-400 to-indigo-600 hover:from-indigo-500 hover:to-indigo-700 text-white px-5 py-2 rounded-full shadow-lg hover:shadow-xl font-semibold text-sm transition-transform hover:scale-105">
                ✨ Request Operator Access
              </button>
            </Link>
          )}
        </div>

        {userRole === 'prouser' && requested && (
          <p className="text-yellow-400 text-right font-medium mb-10">
            ✅ Operator request already submitted.
          </p>
        )}

        {/* Profile Reminder */}
        {userRole === 'participant' && (
          <div className="mb-12 bg-gradient-to-r from-yellow-300 via-orange-400 to-pink-500 text-black p-6 rounded-3xl shadow-2xl border border-white/20 backdrop-blur-md">
            <h2 className="text-2xl font-bold mb-2">📋 Complete Your Profile</h2>
            <p className="mb-4 text-sm">
              Please fill in your basic details before participating in any event.
            </p>
            <Link href="/fill-details">
              <button className="bg-black text-white px-6 py-2 rounded-full font-semibold hover:bg-gray-900 transition hover:scale-105">
                Fill Details Now
              </button>
            </Link>
          </div>
        )}

        {['admin', 'operator', 'prouser'].includes(userRole) && (
          <div className="mb-12 bg-gradient-to-r from-green-300 via-lime-400 to-emerald-400 text-black p-6 rounded-3xl shadow-2xl border border-white/20 backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold mb-2">✅ Profile Completed</h2>
              <p className="text-sm">You’ve successfully filled your basic details. You can now register for events.</p>
            </div>
            <Link href="/edit">
              <button className="bg-black text-white px-6 py-2 rounded-full font-semibold hover:bg-gray-900 transition hover:scale-105">
                ✏️ Edit Details
              </button>
            </Link>
          </div>
        )}

        {error && <p className="text-red-400 mb-6 text-center font-semibold">{error}</p>}

        {/* Events Grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="animate-pulse bg-white/10 border border-white/20 p-6 rounded-3xl shadow-lg h-48" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {events
              .filter(event => event.is_published)
              .map(event => {
                const badges = []
                if (isNew(event.createdAt)) badges.push('🆕 NEW')
                if (isFull(event._count?.registrations || 0)) badges.push('🚫 FULL')
                if (isSoon(event.date, event.time)) badges.push('⏳ SOON')

                return (
                  <div
                    key={event.event_id}
                    className="bg-white/10 border border-white/20 rounded-3xl p-6 shadow-lg backdrop-blur-md hover:shadow-2xl transition hover:scale-[1.015]"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h2 className="text-2xl font-bold text-white truncate w-3/4">{event.title}</h2>
                      <div className="flex flex-wrap gap-2 text-xs">
                        {badges.map((badge, idx) => (
                          <span key={idx} className="bg-pink-500/20 text-pink-200 px-3 py-1 rounded-full font-semibold">
                            {badge}
                          </span>
                        ))}
                      </div>
                    </div>

                    <p className="text-gray-300 text-sm mb-2 line-clamp-2">{event.description}</p>
                    <p className="text-xs text-gray-400 mb-4">
                      📅 {event.date} @ {event.time}
                    </p>

                    <div className="flex flex-wrap gap-3 mt-4">
                      {userRole === 'participant' ? (
                        <button
                          disabled
                          className="bg-gray-600 text-white px-5 py-2 rounded-full text-sm shadow-md font-semibold cursor-not-allowed"
                        >
                          Fill Profile to Register
                        </button>
                      ) : (
                        <Link href={`/events/${event.event_id}/register`}>
                          <button className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white px-5 py-2 rounded-full text-sm shadow-md font-semibold transition-transform hover:scale-105">
                            🚀 Register
                          </button>
                        </Link>
                      )}

                      {userRole === 'admin' && (
                        <button
                          onClick={() => handleDelete(event.event_id)}
                          className="flex items-center gap-2 bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-white px-5 py-2 rounded-full text-sm shadow-md font-semibold transition-transform hover:scale-105"
                        >
                          <FaTrash /> Delete
                        </button>
                      )}
                    </div>
                  </div>
                )
              })}
          </div>
        )}
      </div>
    </div>
  )
}
