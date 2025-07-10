

import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white py-6 px-8 border-t border-white/10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

        {/* Creator Info */}
        <div className="flex items-center gap-4">
          <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-cyan-400 shadow-md shadow-cyan-600/30">
            <Image src="/me1.jpg" alt="Barnamay" fill className="object-cover" />
          </div>
          <div>
            <p className="text-sm md:text-base font-semibold text-cyan-300 animate-pulse">Created by Barnamay Chowdhury ❤️</p>
            <div className="flex gap-3 text-xl mt-1">
              <a href="https://github.com/Barnamay" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition">
                <FaGithub title="GitHub" />
              </a>
              <a href="mailto:barnamay1234@gmail.com" className="hover:text-cyan-400 transition">
                <FaEnvelope title="Email" />
              </a>
              <a href="https://linkedin.com/in/barnamay-chowdhury-614524257" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition">
                <FaLinkedin title="LinkedIn" />
              </a>
            </div>
          </div>
        </div>

        {/* Credits */}
        <div className="text-center text-xs text-gray-400">
          <p>© {new Date().getFullYear()} Event Registration Portal</p>
          <p>Built with <span className="text-pink-400 animate-heartBeat inline-block"><FaHeart className="inline" /></span> using Next.js, Tailwind, Prisma & PostgreSQL</p>
          <a href="https://lordicon.com/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition">
            Icons by Lordicon
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
