// // // 'use client'
// // // import { useState } from 'react'

// // // export default function RequestOperatorPage() {
// // //   const [reason, setReason] = useState('')

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault()
// // //     const res = await fetch('/api/operator-request', {
// // //       method: 'POST',
// // //       headers: { 'Content-Type': 'application/json' },
// // //       body: JSON.stringify({ reason }),
// // //     })

// // //     if (res.ok) alert('Request submitted!')
// // //     else alert('Error submitting request.')
// // //   }

// // //   return (
// // //     <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto space-y-4">
// // //       <h2 className="text-xl font-bold">Apply to Become Operator</h2>
// // //       <textarea
// // //         className="border w-full p-2"
// // //         placeholder="Why do you want to be an operator?"
// // //         value={reason}
// // //         onChange={e => setReason(e.target.value)}
// // //         required
// // //       />
// // //       <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Submit Request</button>
// // //     </form>
// // //   )
// // // }




// // // 'use client'

// // // import { useState } from 'react'

// // // export default function RequestOperatorPage() {
// // //   const [reason, setReason] = useState('')

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault()

// // //     const res = await fetch('/api/operator-request', {
// // //       method: 'POST',
// // //       headers: { 'Content-Type': 'application/json' },
// // //       body: JSON.stringify({ reason })
// // //     })

// // //     if (res.ok) alert('Request submitted!')
// // //     else alert('You may have already requested or not authorized.')
// // //   }

// // //   return (
// // //     <form onSubmit={handleSubmit} className="p-6 max-w-md mx-auto space-y-4">
// // //       <h2 className="text-xl font-bold">Apply to Become Operator</h2>
// // //       <textarea
// // //         className="border w-full p-2 rounded"
// // //         placeholder="Why do you want to be an operator?"
// // //         value={reason}
// // //         onChange={(e) => setReason(e.target.value)}
// // //         required
// // //       />
// // //       <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
// // //         Submit Request
// // //       </button>
// // //     </form>
// // //   )
// // // }


// // 'use client'

// // import { useState } from 'react'
// // import { motion } from 'framer-motion'

// // export default function RequestOperatorPage() {
// //   const [reason, setReason] = useState('')
// //   const [submitted, setSubmitted] = useState(false)

// //   const handleSubmit = async (e) => {
// //     e.preventDefault()

// //     const res = await fetch('/api/operator-request', {
// //       method: 'POST',
// //       headers: { 'Content-Type': 'application/json' },
// //       body: JSON.stringify({ reason })
// //     })

// //     if (res.ok) {
// //       alert('Request submitted!')
// //       setSubmitted(true)
// //       setReason('')
// //     } else {
// //       alert('You may have already requested or not authorized.')
// //     }
// //   }

// //   return (
// //     <div className="min-h-screen bg-gradient-to-tr from-[#0f0c29] via-[#302b63] to-[#24243e] text-white flex items-center justify-center px-4 py-10">
// //       <motion.div 
// //         initial={{ opacity: 0, y: 30 }} 
// //         animate={{ opacity: 1, y: 0 }} 
// //         transition={{ duration: 0.6, ease: 'easeOut' }}
// //         className="w-full max-w-xl bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-2xl"
// //       >
// //         <h2 className="text-3xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mb-6">
// //           🚀 Become an Operator
// //         </h2>

// //         <p className="text-sm text-gray-300 text-center mb-6">
// //           Apply to get event management access. Approved users can create and manage events.
// //         </p>

// //         {submitted ? (
// //           <div className="text-green-400 text-center text-lg font-semibold mt-6">
// //             ✅ Request Submitted Successfully!
// //           </div>
// //         ) : (
// //           <form onSubmit={handleSubmit} className="space-y-5">
// //             <div>
// //               <label className="block text-sm text-gray-200 mb-1">Your Reason</label>
// //               <textarea
// //                 className="w-full h-32 p-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
// //                 placeholder="Why do you want to be an operator?"
// //                 value={reason}
// //                 onChange={(e) => setReason(e.target.value)}
// //                 required
// //               />
// //             </div>

// //             <button
// //               type="submit"
// //               className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-bold py-3 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300"
// //             >
// //               ✨ Submit Request
// //             </button>
// //           </form>
// //         )}

// //         <div className="mt-6 text-center text-xs text-gray-400">
// //           Only <span className="font-semibold text-blue-300">approved participants</span> can apply.
// //         </div>
// //       </motion.div>
// //     </div>
// //   )
// // }



// 'use client'

// import { useState } from 'react'
// import { motion } from 'framer-motion'
// import { FaUserShield } from 'react-icons/fa'

// export default function RequestOperatorPage() {
//   const [reason, setReason] = useState('')
//   const [submitted, setSubmitted] = useState(false)

//   const handleSubmit = async (e) => {
//     e.preventDefault()

//     const res = await fetch('/api/operator-request', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ reason })
//     })

//     if (res.ok) {
//       alert('Request submitted!')
//       setSubmitted(true)
//       setReason('')
//     } else {
//       alert('You may have already requested or not authorized.')
//     }
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-tr from-[#000212] via-[#1b1c3c] to-[#0f0c29] text-white flex items-center justify-center px-4 py-10 relative overflow-hidden">

//       {/* Animated Glow Circles */}
//       <div className="absolute top-0 left-0 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse -z-10" />
//       <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse -z-10" />

//       <motion.div
//         initial={{ opacity: 0, scale: 0.95 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.6, ease: 'easeOut' }}
//         className="w-full max-w-xl bg-white/10 backdrop-blur-xl border border-white/30 rounded-3xl p-10 shadow-2xl hover:shadow-blue-500/20 transition-shadow duration-300"
//       >
//         <div className="flex items-center justify-center mb-6">
//           <FaUserShield className="text-cyan-400 text-4xl animate-pulse" />
//         </div>

//         <h2 className="text-3xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500 mb-3 tracking-tight">
//           Become an Operator
//         </h2>
//         <p className="text-center text-gray-300 text-sm mb-8">
//           You’ll be able to create, edit, and manage events once approved.
//         </p>

//         {submitted ? (
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.4 }}
//             className="text-green-400 text-center text-lg font-semibold mt-6"
//           >
//             ✅ Your request has been submitted!
//           </motion.div>
//         ) : (
//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div>
//               <label className="block text-sm text-white mb-2 font-medium tracking-wide">Your Reason</label>
//               <textarea
//                 className="w-full h-32 p-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition shadow-inner"
//                 placeholder="Why do you want to be an operator?"
//                 value={reason}
//                 onChange={(e) => setReason(e.target.value)}
//                 required
//               />
//             </div>

//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.97 }}
//               type="submit"
//               className="w-full bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-3 rounded-full shadow-md hover:shadow-xl transition-all duration-300"
//             >
//               🚀 Submit Request
//             </motion.button>
//           </form>
//         )}

//         <div className="mt-8 text-center text-xs text-gray-400">
//           Only <span className="text-cyan-300 font-semibold">participants</span> can apply.
//         </div>
//       </motion.div>
//     </div>
//   )
// }





'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaUserShield } from 'react-icons/fa'
import { ImSpinner2 } from 'react-icons/im'

export default function RequestOperatorPage() {
  const [reason, setReason] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    const res = await fetch('/api/operator-request', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ reason })
    })

    if (res.ok) {
      setSubmitted(true)
      setReason('')
    } else {
      alert('You may have already requested or not authorized.')
    }

    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-tr from-[#01012b] via-[#100440] to-[#000000] text-white flex items-center justify-center px-4 py-10 relative overflow-hidden">

      {/* Aura Glow Circles */}
      <div className="absolute top-[-100px] left-[-100px] w-96 h-96 bg-pink-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-ping-slow -z-10" />
      <div className="absolute bottom-[-100px] right-[-100px] w-96 h-96 bg-cyan-400 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-ping-slow -z-10" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="relative w-full max-w-xl bg-white/10 border border-cyan-500/20 backdrop-blur-2xl rounded-3xl p-10 shadow-[0_0_30px_#0ff3] hover:shadow-[0_0_60px_#a5f3fc] transition-all duration-500"
      >
        <div className="flex justify-center mb-4">
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
            className="p-3 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 shadow-lg"
          >
            <FaUserShield className="text-white text-3xl" />
          </motion.div>
        </div>

        <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-fuchsia-400 to-rose-500 mb-3">
          Operator Access Request
        </h2>
        <p className="text-center text-gray-300 text-sm mb-8 tracking-wide">
          Get permission to manage events, handle participants and create experiences!
        </p>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-green-300 text-center text-lg font-semibold mt-6"
          >
            🎉 Your request has been submitted successfully!
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm text-white mb-2 font-semibold tracking-wide">
                Why should we approve you?
              </label>
              <textarea
                className="w-full h-36 p-4 rounded-xl bg-black/20 border border-cyan-500/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-600 transition shadow-inner hover:shadow-cyan-500/10"
                placeholder="Convince us why you're the perfect operator..."
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                required
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white font-extrabold text-lg py-3 rounded-full shadow-lg hover:shadow-indigo-500/50 transition-all duration-300 tracking-wide disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-3"
            >
              {loading ? (
                <>
                  <ImSpinner2 className="animate-spin text-white text-xl" /> Sending...
                </>
              ) : (
                <>
                  ✨ Submit Your Request
                </>
              )}
            </motion.button>
          </form>
        )}

        <div className="mt-8 text-center text-xs text-gray-400">
          Note: Only <span className="text-cyan-300 font-bold">participants</span> can apply for operator privileges.
        </div>
      </motion.div>
    </div>
  )
}
