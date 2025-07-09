
'use client'

import React, { useState, useEffect } from 'react'
import { useSession, signOut } from 'next-auth/react'
import Link from 'next/link'

const Navbar = () => {
  const { data: session } = useSession()
  const [showdropdown, setShowdropdown] = useState(false)
  const username = session?.user?.email?.split('@')[0]

  // Inject lord-icon script on client
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://cdn.lordicon.com/lordicon.js'
    script.async = true
    document.body.appendChild(script)
  }, [])

  return (
    <nav className="bg-gradient-to-br from-[#0f0c29] via-[#1f1c47] to-[#2c2c54] text-white px-6 py-3 shadow-xl sticky top-0 z-50 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">

        {/* Logo */}
        <Link href="/" className="relative flex items-center gap-3 group">
          <div className="absolute -inset-4 bg-gradient-to-r from-[#00ffd0aa] to-[#0084ff88] rounded-full blur-xl opacity-60 animate-pulse group-hover:opacity-80 transition-all duration-500" />
          <div className="w-10 h-10 relative z-10">
            <lord-icon
              src="https://cdn.lordicon.com/qvyppzqz.json"
              trigger="loop"
              delay="1500"
              colors="primary:#00f6ff,secondary:#ffffff"
              style={{ width: '100%', height: '100%' }}
            />
          </div>
          <h2 className="text-3xl font-extrabold tracking-wider relative z-10 bg-gradient-to-r from-white via-cyan-300 to-cyan-500 text-transparent bg-clip-text drop-shadow-xl">
            Eve<span className="text-[#00E0FF]">REG</span>
          </h2>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-6 text-lg font-medium relative z-10">
          {['Home', 'About', 'Events'].map((label, index) => (
            <Link key={index} href={`/${label === 'Home' ? '' : label.toLowerCase()}`}>
              <span className="relative group cursor-pointer">
                <span className="transition-all duration-300 group-hover:text-[#00FFD0] group-hover:drop-shadow-md">{label}</span>
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#00FFD0] group-hover:w-full transition-all duration-300"></span>
              </span>
            </Link>
          ))}

          {/* Auth Section */}
          {session ? (
            <div className="relative flex items-center gap-4">
              <span className="text-sm font-semibold text-cyan-300 animate-fadeIn">
                Welcome, {username} 🎉
              </span>
              <button
                onClick={() => setShowdropdown(!showdropdown)}
                onBlur={() => setTimeout(() => setShowdropdown(false), 200)}
                className="bg-gradient-to-r from-[#00FFC6] to-[#00A8FF] text-black font-bold rounded-full px-5 py-2 shadow-md hover:scale-105 hover:shadow-cyan-300/30 transition-all flex items-center"
              >
                {username}
                <svg className="w-3 h-3 ml-2" viewBox="0 0 10 6" fill="none">
                  <path d="M1 1L5 5L9 1" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              {/* Dropdown */}
              <div className={`absolute right-0 top-16 w-60 rounded-2xl backdrop-blur-md bg-gradient-to-br from-[#1a1a3ccc] to-[#1f1c47cc] text-white shadow-xl transition-all duration-300 z-50 border border-cyan-400/10 ${showdropdown ? 'block' : 'hidden'}`}>
                <ul className="text-sm py-2 space-y-1">
                  {session?.user?.role === 'admin' && (
                    <>
                      <li><Link href="/admin/operator-requests" className="block px-4 py-2 hover:bg-white/10 rounded-xl transition">Operator Requests</Link></li>
                      <li><Link href="/admin/events" className="block px-4 py-2 hover:bg-white/10 rounded-xl transition">Admin Dashboard</Link></li>
                      <li><Link href="/admin/operator-list" className="block px-4 py-2 hover:bg-white/10 rounded-xl transition">Operator List</Link></li>
                      <li><Link href="/admin/events/unapproved" className="block px-4 py-2 hover:bg-white/10 rounded-xl transition">Manage Events</Link></li>
                    </>
                  )}
                  <li><Link href="/user-profile" className="block px-4 py-2 hover:bg-white/10 rounded-xl transition">User Profile</Link></li>
                  <li><Link href="/Username" className="block px-4 py-2 hover:bg-white/10 rounded-xl transition">Creator Profile</Link></li>
                  <li><Link href="/result" className="block px-4 py-2 hover:bg-white/10 rounded-xl transition">Check Result</Link></li>
                  <li><button onClick={() => signOut()} className="w-full text-left px-4 py-2 text-red-400 hover:bg-red-500/20 rounded-xl transition">Sign Out</button></li>
                </ul>
              </div>
            </div>
          ) : (
            <Link href="/login">
              <button className="bg-gradient-to-r from-[#00FFB3] to-[#00D4FF] text-black font-semibold px-6 py-2 rounded-xl shadow-lg hover:scale-105 transition">
                Log In
              </button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
