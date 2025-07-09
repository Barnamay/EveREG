'use client'

import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export default function ResultSubmitPage() {
  const { data: session } = useSession()
  const router = useRouter()
  const [events, setEvents] = useState([])
  const [users, setUsers] = useState([])
  const [form, setForm] = useState({
    event_id: '',
    uid: '',
    position: '',
    score: ''
  })

  useEffect(() => {
    if (!session) return
    if (!['admin', 'operator'].includes(session.user.role)) {
      router.push('/events')
      return
    }

    const fetchData = async () => {
      try {
        const [eventsRes, usersRes] = await Promise.all([
          fetch('/api/events'),
          fetch('/api/all-users')
        ])
        const eventsData = await eventsRes.json()
        const usersData = await usersRes.json()
        setEvents(eventsData.filter(e => e.is_approved))
        setUsers(Array.isArray(usersData) ? usersData : [])
      } catch (error) {
        console.error('❌ Failed to fetch data:', error)
      }
    }

    fetchData()
  }, [session])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await fetch('/api/results', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...form,
        event_id: parseInt(form.event_id),
        position: parseInt(form.position),
        score: parseFloat(form.score)
      })
    })

    if (res.ok) {
      alert('✅ Result Submitted!')
      router.push('/admin/events')
    } else {
      const data = await res.json()
      alert(`❌ Error: ${data.error || 'Unknown error'}`)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-[#1a1a2b] to-black text-white px-4 py-12">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-10 animate-pulse">
        🏆 <span className="text-4xl md:text-5xl font-extrabold text-center mb-10 bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 text-transparent bg-clip-text animate-pulse" >Submit Event Result</span>
      </h1>

      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto bg-white/10 border border-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-[0_8px_30px_rgba(0,255,255,0.1)] space-y-6"
      >
        <div>
          <label className="block mb-1 text-sm font-semibold text-cyan-300">Select Event</label>
          <select
            name="event_id"
            value={form.event_id}
            onChange={e => setForm({ ...form, event_id: e.target.value })}
            required
            className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 ring-cyan-500"
          >
            <option value="">-- Choose an Event --</option>
            {events.map(ev => (
              <option key={ev.event_id} value={ev.event_id}>{ev.title}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block mb-1 text-sm font-semibold text-cyan-300">Select User</label>
          <input
            list="user-list"
            placeholder="Search by name or email..."
            onChange={e => {
              const u = users.find(u => u.email === e.target.value || u.name === e.target.value)
              if (u) setForm({ ...form, uid: u.uid })
            }}
            className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 ring-cyan-500"
            required
          />
          <datalist id="user-list">
            {users.map(u => (
              <option key={u.uid} value={u.email}>{u.name} ({u.email})</option>
            ))}
          </datalist>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block mb-1 text-sm font-semibold text-cyan-300">Position</label>
            <input
              type="number"
              value={form.position}
              onChange={e => setForm({ ...form, position: e.target.value })}
              className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 ring-cyan-500"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-semibold text-cyan-300">Score</label>
            <input
              type="number"
              value={form.score}
              onChange={e => setForm({ ...form, score: e.target.value })}
              className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 ring-cyan-500"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-teal-400 to-lime-400 text-black font-bold text-lg py-3 rounded-full shadow-md hover:scale-105 transition-all duration-300"
        >
          🚀 Submit Result
        </button>
      </form>
    </div>
  )
}
