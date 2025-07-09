"use client"

import React, { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { useSession } from "next-auth/react"

export default function Home() {
  const { data: session } = useSession()
  const videos = ["/vid1.mp4", "/vid2.mp4", "/vid3.mp4", "/vid4.mp4", "/vid5.mp4", "/vid6.mp4", "/vid7.mp4"]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [nextIndex, setNextIndex] = useState(1)
  const videoRefs = [useRef(null), useRef(null)]

  useEffect(() => {
    const interval = setInterval(() => {
      const [currentRef, nextRef] = videoRefs
      currentRef.current.classList.add("opacity-0")
      nextRef.current.classList.remove("opacity-0")
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % videos.length)
        setNextIndex((prev) => (prev + 1) % videos.length)
        videoRefs.reverse()
      }, 1000)
    }, 8000)
    return () => clearInterval(interval)
  }, [])

  const galleryImages = [
    { src: "/ts.jpg", title: "Tech Summit 2025" },
    { src: "/event2.jpg", title: "Campus Fest" },
    { src: "/su.jpg", title: "Startup Launch" },
    { src: "/ws.jpg", title: "Workshop Day" },
    { src: "/cn.jpg", title: "Cultural Night" },
    { src: "/am.jpg", title: "Annual Meetup" },
  ]

  return (
    <>
      {/* Hero Video Section */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center overflow-hidden text-white">
        <video key={videos[currentIndex]} ref={videoRefs[0]} autoPlay loop muted playsInline
          className="absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-1000 opacity-100">
          <source src={videos[currentIndex]} type="video/mp4" />
        </video>
        <video key={videos[nextIndex]} ref={videoRefs[1]} autoPlay loop muted playsInline
          className="absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-1000 opacity-0">
          <source src={videos[nextIndex]} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-10" />
        <div className="relative z-20 px-6">
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-pink-400 to-blue-500 animate-text drop-shadow-[0_0_15px_rgba(255,255,255,0.7)]">
            Control. Coordinate. Celebrate.
          </h1>
          <p className="text-lg max-w-2xl mx-auto mb-6 text-gray-300">
            Seamlessly manage your event lifecycle — from creation to coordination to celebration.
          </p>
          <Link href="/events">
            <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-pink-600 hover:to-purple-600 transition rounded-2xl shadow-xl text-white font-bold hover:scale-110 backdrop-blur-lg border border-white/10">
              🚀 Start Exploring
            </button>
          </Link>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="relative py-24 bg-gradient-to-b from-black via-[#1b0033] to-black px-6 overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-purple-600 opacity-30 blur-3xl rounded-full animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-pink-500 opacity-20 blur-2xl rounded-full animate-pulse" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400 opacity-10 blur-[150px] rounded-full" />
        </div>

        <h2 className="text-white text-4xl font-bold text-center mb-16">
          Event Highlights Gallery
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto relative z-10">
          {galleryImages.map(({ src, title }, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl border border-purple-700 bg-white/5 backdrop-blur-md transition-all duration-500 shadow-[0_30px_60px_rgba(0,0,0,0.6)] hover:shadow-[0_40px_80px_rgba(255,0,255,0.3)] hover:scale-[1.07] hover:border-pink-500"
            >
              <img
                src={src}
                alt={title}
                className="w-full h-[340px] object-cover transition-transform duration-500 group-hover:scale-110 group-hover:blur-[2px] group-hover:brightness-75"
              />
              <div className="absolute inset-0 bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center px-4">
                <p className="text-white text-xl font-bold text-center">{title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Feature Section */}
      <section className="bg-gradient-to-b from-black via-[#1b0033] to-black py-24 px-6 text-white overflow-hidden">
        <h2 className="text-4xl font-bold text-center mb-16">
          From <span className="text-pink-500">Control</span> to <span className="text-purple-500">Celebration</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {[
            { title: "Control", desc: "Own your event workflow with precision.", icon: "/control.gif", color: "from-fuchsia-800 to-violet-600" },
            { title: "Coordinate", desc: "Collaborate smoothly with teams and participants.", icon: "/communication.gif", color: "from-sky-700 to-blue-500" },
            { title: "Celebrate", desc: "Enjoy the success of a flawlessly run event.", icon: "/celebrate3.gif", color: "from-pink-600 to-red-500" },
          ].map(({ title, desc, icon, color }) => (
            <div key={title}
              className="rounded-3xl p-6 bg-white/5 backdrop-blur-lg hover:scale-105 hover:rotate-1 transition-all duration-500 border border-white/10 hover:border-white/20 shadow-[0_8px_30px_rgba(255,255,255,0.1)]">
              <div className={`w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br ${color} flex items-center justify-center shadow-xl animate-pulse`}>
                <img src={icon} alt={title} className="w-14 h-14" />
              </div>
              <h3 className="text-2xl font-bold text-center mb-2">{title}</h3>
              <p className="text-center text-sm text-gray-300">{desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
