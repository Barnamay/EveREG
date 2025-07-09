"use client"

import React, { useEffect } from 'react'
import { useSession } from "next-auth/react"
import { useRouter } from 'next/navigation'
import { motion } from "framer-motion"

const ProfilePage = ({ params }) => {
  const videoBg = "https://videos.pexels.com/video-files/5091624/5091624-hd_1920_1080_24fps.mp4"
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (!session) router.push('/login')
  }, [session, router])

  if (status === "loading") return <div className="text-center p-10 text-2xl text-white">Loading...</div>

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      
      {/* Hero Section */}
      <div className="relative h-[500px] overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={videoBg}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center text-center p-4">
          <motion.img
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            src="/me2.jpg"
            alt="Avatar"
            className="w-40 h-40 rounded-full border-4 border-yellow-400 shadow-xl mb-4"
          />

          <motion.h1
            className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-yellow-300 via-orange-400 to-red-500 bg-clip-text text-transparent"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            BARNAMAY
          </motion.h1>

          <motion.h1
            className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-indigo-300 via-blue-500 to-purple-600 bg-clip-text text-transparent mt-2"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            CHOWDHURY
          </motion.h1>
        </div>
      </div>

      {/* 🎨 Profile Card */}
      <div className="max-w-5xl mx-auto -mt-28 bg-white/10 backdrop-blur-lg border border-white/20 text-white rounded-2xl shadow-2xl p-8 relative z-10">
        <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-6 sm:space-y-0 sm:space-x-6">
          <img src="/me4.jpg" alt="Avatar" className="w-24 h-24 rounded-full shadow-md border-4 border-purple-500" />
          <div>
            <h2 className="text-3xl font-bold text-purple-300">Full Stack Developer</h2>
            <p className="text-gray-300 mt-2">🎬 Video Editor &nbsp; | &nbsp; 🎨 Content Creator &nbsp; | &nbsp; 💻 Open Source Lover</p>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="bg-gradient-to-tr from-purple-500 to-indigo-600 p-4 rounded-xl shadow-md">
            <p className="font-semibold text-lg">Projects</p>
            <p className="text-3xl font-bold">25+</p>
          </div>
          <div className="bg-gradient-to-tr from-pink-500 to-purple-500 p-4 rounded-xl shadow-md">
            <p className="font-semibold text-lg">Followers</p>
            <p className="text-3xl font-bold">5K+</p>
          </div>
          <div className="bg-gradient-to-tr from-green-400 to-lime-500 p-4 rounded-xl shadow-md">
            <p className="font-semibold text-lg">Experience</p>
            <p className="text-3xl font-bold">3+ Years</p>
          </div>
        </div>
        <div className="mt-6 text-center">
          <button className="bg-gradient-to-br from-purple-700 to-indigo-800 text-white px-6 py-2 rounded-full font-bold hover:scale-105 transition-all duration-300">
            💌 Contact Me
          </button>
        </div>
      </div>

      {/* Projects Showcase */}
      <div className="max-w-6xl mx-auto mt-16 p-6 text-center">
        <h2 className="text-4xl font-bold text-yellow-300 mb-4">🌟 Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map(i => (
            <div key={i} className="bg-white text-black rounded-xl p-4 shadow hover:shadow-xl transition duration-300">
              <img src={`/project${i}.jpg`} alt={`Project ${i}`} className="rounded-lg mb-3" />
              <h3 className="text-lg font-bold">Project Title {i}</h3>
              <p className="text-sm text-gray-600">Short description of the project goes here...</p>
            </div>
          ))}
        </div>
      </div>

      {/* YouTube Video Section */}
      <div className="max-w-5xl mx-auto mt-20 text-center px-4">
        <h2 className="text-4xl font-bold text-yellow-400 mb-6">📽️ Watch My Latest Creation</h2>
        <div className="relative w-full" style={{ paddingBottom: '56.25%', height: 0 }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-xl shadow-xl"
            src="https://www.youtube.com/embed/ac3422Rqawo"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Supporters and Payment */}
      <div className="max-w-6xl mx-auto p-6 mt-20 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className='bg-purple-900 rounded-xl p-6 text-white shadow-xl'>
          <h2 className='text-2xl font-bold mb-4'>❤️ Supporters</h2>
          <ul className='space-y-4'>
            {[...Array(6)].map((_, i) => (
              <li key={i} className='flex items-center space-x-3'>
                <img width={35} className='rounded-full' src='/avt.gif' alt='avatar' />
                <span><b>Argha</b> donated <b>$30</b> — "Great work Vi 💙💖💙"</span>
              </li>
            ))}
          </ul>
        </div>

        <div className='bg-indigo-900 rounded-xl p-6 text-white shadow-xl'>
          <h2 className='text-2xl font-bold mb-4'>💸 Make a Donation</h2>
          <div className='space-y-3'>
            <input className='w-full p-3 rounded-lg bg-slate-700' placeholder='Enter Name' />
            <input className='w-full p-3 rounded-lg bg-slate-700' placeholder='Enter Message' />
            <input className='w-full p-3 rounded-lg bg-slate-700' placeholder='Enter Amount' />
            <button className='w-full bg-gradient-to-br from-purple-800 to-blue-700 text-white py-2 rounded-lg font-semibold hover:opacity-90'>Donate Now</button>
          </div>
          <div className='flex gap-2 mt-5'>
            {[10, 20, 30].map(amount => (
              <button key={amount} className='bg-slate-800 px-4 py-2 rounded-lg'>${amount}</button>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 text-center text-sm text-gray-400">
        Built with 💖 by <span className="text-white font-semibold">Barnamay</span> — 2025
      </footer>
    </div>
  )
}

export default ProfilePage
