'use client'

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'

export default function EditDetailsPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [form, setForm] = useState({
    name: '',
    age: '',
    phone: '',
    district: '',
    state: '',
    pincode: ''
  })

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const res = await fetch('/api/edit-details')
        if (!res.ok) throw new Error('Failed to load user details')
        const data = await res.json()
        if (data.user) {
          setForm({
            name: data.user.name || '',
            age: data.user.age || '',
            phone: data.user.phone || '',
            district: data.user.district || '',
            state: data.user.state || '',
            pincode: data.user.pincode || ''
          })
        }
      } catch (err) {
        console.error('Error fetching user details:', err)
      }
    }

    fetchUserDetails()
  }, [])

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await fetch('/api/edit-details', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
    if (res.ok) {
      alert('✅ Details Updated!')
      router.push('/events')
    } else {
      alert('❌ Failed to update details')
    }
  }

  if (status === 'loading') return <div className="text-white text-center mt-10">Loading...</div>

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] flex items-center justify-center px-4 py-10 text-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-xl bg-white/10 backdrop-blur-lg p-8 rounded-3xl shadow-[0_10px_40px_rgba(0,255,255,0.08)] border border-white/10"
      >
        <h1 className="text-4xl font-extrabold mb-10 text-center bg-clip-text">
          ✏️ <span className="text-4xl font-extrabold mb-10 text-center bg-gradient-to-r from-pink-400 via-fuchsia-500 to-purple-500 bg-clip-text text-transparent" >Edit Your Details</span>
        </h1>

        <form onSubmit={handleSubmit} className="space-y-7">
          {[
            { name: 'name', type: 'text', label: 'Full Name' },
            { name: 'age', type: 'number', label: 'Age' },
            { name: 'phone', type: 'tel', label: 'Phone' },
            { name: 'district', type: 'text', label: 'District' },
            { name: 'state', type: 'text', label: 'State' },
            { name: 'pincode', type: 'number', label: 'Pincode' },
          ].map(({ name, type, label }) => (
            <div key={name} className="relative">
              <input
                id={name}
                type={type}
                name={name}
                value={form[name]}
                onChange={handleChange}
                placeholder=" "
                required
                className="peer w-full px-4 py-3 bg-white/10 border border-white/20 text-white rounded-xl outline-none shadow-md focus:ring-2 ring-cyan-400 placeholder-transparent transition-all"
              />
              <label
                htmlFor={name}
                className="absolute left-4 top-2.5 text-sm text-white/70 transition-all duration-300 
                  peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-white/50 
                  peer-focus:top-2 peer-focus:text-sm peer-focus:text-cyan-300"
              >
                {label}
              </label>
            </div>
          ))}

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-green-400 to-lime-400 hover:from-green-500 hover:to-lime-500 text-black font-bold py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            🚀 Update Details
          </button>
        </form>
      </motion.div>
    </div>
  )
}
