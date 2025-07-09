// import React from 'react'
// import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

// const Footer = () => {
//   return (
//     <footer className='bg-gray-900 text-white py-4 px-6'>
//       <div className='max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4'>
        
//         {/* Site info */}
//         <div className='text-center sm:text-left'>
//           <p className='text-sm'>© {new Date().getFullYear()} Event Registration Portal</p>
//           <p className='text-xs text-gray-400'>Built with ❤️ using Next.js, Tailwind, Prisma, and PostgreSQL</p>
//         </div>

//         {/* Social and resources */}
//         <div className='flex items-center gap-4 text-lg'>
//           <a href='https://github.com/yourusername/event-registration' target='_blank' rel='noopener noreferrer' className='hover:text-gray-300'>
//             <FaGithub title="GitHub Repo" />
//           </a>
//           <a href='mailto:support@example.com' className='hover:text-gray-300'>
//             <FaEnvelope title="Contact Support" />
//           </a>
//           <a href='https://linkedin.com/in/yourprofile' target='_blank' rel='noopener noreferrer' className='hover:text-gray-300'>
//             <FaLinkedin title="LinkedIn" />
//           </a>
//         </div>

//         {/* Credits */}
//         <div className='text-xs text-gray-400 text-center sm:text-right'>
//           <a href="https://lordicon.com/" target="_blank" rel="noopener noreferrer" className='hover:text-gray-300'>
//             Icons by Lordicon
//           </a>
//         </div>
//       </div>
//     </footer>
//   )
// }

// export default Footer



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
              <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition">
                <FaGithub title="GitHub" />
              </a>
              <a href="mailto:your@email.com" className="hover:text-cyan-400 transition">
                <FaEnvelope title="Email" />
              </a>
              <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition">
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
