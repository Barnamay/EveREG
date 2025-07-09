// // // 'use client'

// // // import { useEffect, useState } from 'react'
// // // import { useParams, useRouter } from 'next/navigation'

// // // export default function EditEventPage() {
// // //   const { id } = useParams()
// // //   const router = useRouter()

// // //   const [form, setForm] = useState({
// // //     title: '',
// // //     description: '',
// // //     date: '',
// // //     time: ''
// // //   })

// // //   const [loading, setLoading] = useState(true)

// // //   useEffect(() => {
// // //     const fetchEvent = async () => {
// // //       try {
// // //         const res = await fetch(`/api/events`)
// // //         const data = await res.json()
// // //         const event = data.find(e => e.event_id === parseInt(id))
// // //         if (!event) throw new Error("Not found")
// // //         setForm({
// // //           title: event.title,
// // //           description: event.description,
// // //           date: event.date.slice(0, 10),
// // //           time: new Date(event.time).toISOString().slice(11, 16)
// // //         })
// // //       } catch (err) {
// // //         console.error(err)
// // //         alert("Error loading event")
// // //       } finally {
// // //         setLoading(false)
// // //       }
// // //     }

// // //     fetchEvent()
// // //   }, [id])

// // //   const handleChange = e => {
// // //     setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
// // //   }

// // //   const handleSubmit = async e => {
// // //     e.preventDefault()
// // //     const res = await fetch(`/api/events/${id}/edit`, {
// // //       method: 'PUT',
// // //       headers: { 'Content-Type': 'application/json' },
// // //       body: JSON.stringify(form)
// // //     })

// // //     if (res.ok) {
// // //       alert('Event updated!')
// // //       router.push('/admin/events')
// // //     } else {
// // //       const data = await res.json()
// // //       alert(`Error: ${data.error}`)
// // //     }
// // //   }

// // //   if (loading) return <p className="text-center mt-10">Loading...</p>

// // //   return (
// // //     <div className="max-w-xl mx-auto p-6">
// // //       <h1 className="text-2xl font-bold mb-6">✏️ Edit Event</h1>
// // //       <form onSubmit={handleSubmit} className="space-y-4">
// // //         {['title', 'description', 'date', 'time'].map(field => (
// // //           <div key={field}>
// // //             <label className="block text-white mb-1">{field.charAt(0).toUpperCase() + field.slice(1)}</label>
// // //             <input
// // //               type={field === 'date' ? 'date' : field === 'time' ? 'time' : 'text'}
// // //               name={field}
// // //               value={form[field]}
// // //               onChange={handleChange}
// // //               required
// // //               className="w-full p-2 rounded bg-white/10 text-white outline-none"
// // //             />
// // //           </div>
// // //         ))}
// // //         <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Update</button>
// // //       </form>
// // //     </div>
// // //   )
// // // }






// // 'use client'

// // import { useEffect, useState } from 'react'
// // import { useParams, useRouter } from 'next/navigation'
// // import { motion } from 'framer-motion'

// // export default function EditEventPage() {
// //   const { id } = useParams()
// //   const router = useRouter()

// //   const [form, setForm] = useState({
// //     title: '',
// //     description: '',
// //     date: '',
// //     time: ''
// //   })

// //   const [loading, setLoading] = useState(true)

// //   useEffect(() => {
// //     const fetchEvent = async () => {
// //       try {
// //         const res = await fetch(`/api/events`)
// //         const data = await res.json()
// //         const event = data.find(e => e.event_id === parseInt(id))
// //         if (!event) throw new Error("Not found")
// //         setForm({
// //           title: event.title,
// //           description: event.description,
// //           date: event.date.slice(0, 10),
// //           time: new Date(event.time).toISOString().slice(11, 16)
// //         })
// //       } catch (err) {
// //         console.error(err)
// //         alert("Error loading event")
// //       } finally {
// //         setLoading(false)
// //       }
// //     }

// //     fetchEvent()
// //   }, [id])

// //   const handleChange = e => {
// //     setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
// //   }

// //   const handleSubmit = async e => {
// //     e.preventDefault()
// //     const res = await fetch(`/api/events/${id}/edit`, {
// //       method: 'PUT',
// //       headers: { 'Content-Type': 'application/json' },
// //       body: JSON.stringify(form)
// //     })

// //     if (res.ok) {
// //       alert('✅ Event updated successfully!')
// //       router.push('/admin/events')
// //     } else {
// //       const data = await res.json()
// //       alert(`❌ Error: ${data.error}`)
// //     }
// //   }

// //   if (loading) return <p className="text-center mt-20 text-white text-lg">⏳ Loading event details...</p>

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] flex items-center justify-center px-4 py-10">
// //       <motion.div
// //         initial={{ opacity: 0, y: 40 }}
// //         animate={{ opacity: 1, y: 0 }}
// //         transition={{ duration: 0.6 }}
// //         className="w-full max-w-2xl bg-white/10 backdrop-blur-md p-8 rounded-3xl shadow-2xl border border-white/20 text-white"
// //       >
// //         <h1 className="text-3xl md:text-4xl font-extrabold mb-8 text-center text-white bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text  tracking-wide">
// //           ✏️ Edit Event Details
// //         </h1>

// //         <form onSubmit={handleSubmit} className="space-y-6">
// //           {[
// //             { name: 'title', type: 'text', label: 'Event Title' },
// //             { name: 'description', type: 'text', label: 'Description' },
// //             { name: 'date', type: 'date', label: 'Date' },
// //             { name: 'time', type: 'time', label: 'Time' }
// //           ].map(({ name, type, label }) => (
// //             <div key={name}>
// //               <label htmlFor={name} className="block mb-1 font-medium text-sm text-gray-200">{label}</label>
// //               <input
// //                 type={type}
// //                 id={name}
// //                 name={name}
// //                 value={form[name]}
// //                 onChange={handleChange}
// //                 required
// //                 className="w-full px-4 py-2 bg-white/20 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400 shadow-sm backdrop-blur placeholder:text-gray-300"
// //               />
// //             </div>
// //           ))}

// //           <motion.button
// //             whileHover={{ scale: 1.05 }}
// //             whileTap={{ scale: 0.97 }}
// //             type="submit"
// //             className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 rounded-xl shadow-lg transition-all duration-300"
// //           >
// //             💾 Update Event
// //           </motion.button>
// //         </form>
// //       </motion.div>
// //     </div>
// //   )
// // }




// // 'use client'

// // import { useEffect, useState } from 'react'
// // import { useParams, useRouter } from 'next/navigation'
// // import { motion } from 'framer-motion'

// // export default function EditEventPage() {
// //   const { id } = useParams()
// //   const router = useRouter()

// //   const [form, setForm] = useState({
// //     title: '',
// //     description: '',
// //     date: '',
// //     time: ''
// //   })

// //   const [loading, setLoading] = useState(true)

// //   useEffect(() => {
// //     const fetchEvent = async () => {
// //       try {
// //         const res = await fetch(`/api/events`)
// //         const data = await res.json()
// //         const event = data.find(e => e.event_id === parseInt(id))
// //         if (!event) throw new Error("Not found")
// //         setForm({
// //           title: event.title,
// //           description: event.description,
// //           date: event.date.slice(0, 10),
// //           time: new Date(event.time).toISOString().slice(11, 16)
// //         })
// //       } catch (err) {
// //         console.error(err)
// //         alert("Error loading event")
// //       } finally {
// //         setLoading(false)
// //       }
// //     }

// //     fetchEvent()
// //   }, [id])

// //   const handleChange = e => {
// //     setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
// //   }

// //   const handleSubmit = async e => {
// //     e.preventDefault()
// //     const res = await fetch(`/api/events/${id}/edit`, {
// //       method: 'PUT',
// //       headers: { 'Content-Type': 'application/json' },
// //       body: JSON.stringify(form)
// //     })

// //     if (res.ok) {
// //       alert('✅ Event updated!')
// //       router.push('/admin/events')
// //     } else {
// //       const data = await res.json()
// //       alert(`❌ Error: ${data.error}`)
// //     }
// //   }

// //   if (loading) return <p className="text-center mt-20 text-white text-xl">✨ Loading event info...</p>

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] flex items-center justify-center px-4 py-10">
// //       <motion.div
// //         initial={{ opacity: 0, y: 40 }}
// //         animate={{ opacity: 1, y: 0 }}
// //         transition={{ duration: 0.6 }}
// //         className="w-full max-w-2xl bg-white/5 backdrop-blur-lg p-10 rounded-3xl border border-white/10 shadow-[0_0_60px_10px_rgba(0,0,0,0.6)]"
// //       >
// //         <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-10 tracking-tight bg-gradient-to-r from-cyan-400 via-pink-500 to-yellow-400 bg-clip-text text-transparent animate-pulse drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
// //           🔮 Edit Your Magical Event
// //         </h1>

// //         <form onSubmit={handleSubmit} className="space-y-6 text-white">
// //           {[
// //             { name: 'title', type: 'text', label: '📝 Title' },
// //             { name: 'description', type: 'text', label: '🗒️ Description' },
// //             { name: 'date', type: 'date', label: '📅 Date' },
// //             { name: 'time', type: 'time', label: '⏰ Time' }
// //           ].map(({ name, type, label }) => (
// //             <div key={name}>
// //               <label htmlFor={name} className="block mb-1 font-semibold text-sm text-cyan-300">{label}</label>
// //               <input
// //                 type={type}
// //                 id={name}
// //                 name={name}
// //                 value={form[name]}
// //                 onChange={handleChange}
// //                 required
// //                 className="w-full px-4 py-2 rounded-xl bg-white/10 text-white placeholder-gray-300 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-pink-400 focus:bg-white/20 transition-all duration-300 shadow-inner shadow-black"
// //               />
// //             </div>
// //           ))}

// //           <motion.button
// //             whileHover={{ scale: 1.05, boxShadow: "0 0 20px #00ffff" }}
// //             whileTap={{ scale: 0.95 }}
// //             type="submit"
// //             className="w-full mt-6 bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-3 rounded-2xl shadow-xl shadow-blue-500/30 border border-white/10 transition-all duration-300"
// //           >
// //             💾 Save Changes
// //           </motion.button>
// //         </form>
// //       </motion.div>
// //     </div>
// //   )
// // }



// // 'use client'

// // import { useEffect, useState } from 'react'
// // import { useParams, useRouter } from 'next/navigation'
// // import { motion } from 'framer-motion'
// // import confetti from 'canvas-confetti'

// // export default function EditEventPage() {
// //   const { id } = useParams()
// //   const router = useRouter()

// //   const [form, setForm] = useState({
// //     title: '',
// //     description: '',
// //     date: '',
// //     time: ''
// //   })

// //   const [loading, setLoading] = useState(true)
// //   const [countdown, setCountdown] = useState('')

// //   useEffect(() => {
// //     const fetchEvent = async () => {
// //       try {
// //         const res = await fetch(`/api/events`)
// //         const data = await res.json()
// //         const event = data.find(e => e.event_id === parseInt(id))
// //         if (!event) throw new Error("Not found")
// //         setForm({
// //           title: event.title,
// //           description: event.description,
// //           date: event.date.slice(0, 10),
// //           time: new Date(event.time).toISOString().slice(11, 16)
// //         })

// //         // Countdown
// //         const eventDateTime = new Date(`${event.date}T${event.time}`)
// //         const interval = setInterval(() => {
// //           const now = new Date()
// //           const diff = eventDateTime - now
// //           if (diff <= 0) {
// //             setCountdown('🎉 Event Started!')
// //             clearInterval(interval)
// //           } else {
// //             const hrs = Math.floor(diff / (1000 * 60 * 60))
// //             const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
// //             const secs = Math.floor((diff % (1000 * 60)) / 1000)
// //             setCountdown(`⏳ ${hrs}h ${mins}m ${secs}s remaining`)
// //           }
// //         }, 1000)
// //         return () => clearInterval(interval)
// //       } catch (err) {
// //         console.error(err)
// //         alert("Error loading event")
// //       } finally {
// //         setLoading(false)
// //       }
// //     }

// //     fetchEvent()
// //   }, [id])

// //   const handleChange = e => {
// //     setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
// //   }

// //   const launchEmojiRain = () => {
// //     const emojis = ['🎉', '✨', '🚀', '🎊', '🔥']
// //     for (let i = 0; i < 100; i++) {
// //       confetti({
// //         particleCount: 1,
// //         origin: {
// //           x: Math.random(),
// //           y: Math.random() - 0.2
// //         },
// //         shapes: ['text'],
// //         scalar: 1.5,
// //         spread: 360,
// //         ticks: 200,
// //         gravity: 0.5,
// //         emoji: emojis[Math.floor(Math.random() * emojis.length)]
// //       })
// //     }
// //   }

// //   const handleSubmit = async e => {
// //     e.preventDefault()
// //     const res = await fetch(`/api/events/${id}/edit`, {
// //       method: 'PUT',
// //       headers: { 'Content-Type': 'application/json' },
// //       body: JSON.stringify(form)
// //     })

// //     if (res.ok) {
// //       confetti({ particleCount: 150, spread: 100 })
// //       launchEmojiRain()
// //       alert('🎉 Event updated successfully!')
// //       router.push('/admin/events')
// //     } else {
// //       const data = await res.json()
// //       alert(`❌ Error: ${data.error}`)
// //     }
// //   }

// //   if (loading) return <p className="text-center mt-20 text-white text-xl">🌠 Loading event...</p>

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-[#1f1c2c] via-[#928dab] to-[#2f0743] flex flex-col lg:flex-row items-start justify-center gap-10 px-4 py-10">
// //       <motion.div
// //         initial={{ opacity: 0, y: 30 }}
// //         animate={{ opacity: 1, y: 0 }}
// //         transition={{ duration: 0.7 }}
// //         className="w-full max-w-xl bg-white/10 backdrop-blur-md p-10 rounded-3xl border border-white/20 shadow-2xl relative"
// //       >
// //         <motion.div
// //           animate={{ y: [0, -10, 0] }}
// //           transition={{ repeat: Infinity, duration: 2 }}
// //           className="absolute text-5xl top-[-30px] left-[-20px]"
// //         >
// //           ✨
// //         </motion.div>

// //         <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-6 tracking-tight bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent animate-pulse">
// //           🎨 Edit Your Epic Event
// //         </h1>

// //         <p className="text-center text-sm text-white mb-4 font-mono italic">{countdown}</p>

// //         <form onSubmit={handleSubmit} className="space-y-6 text-white">
// //           {[
// //             { name: 'title', type: 'text', label: '🖋️ Title' },
// //             { name: 'description', type: 'text', label: '🗒️ Description' },
// //             { name: 'date', type: 'date', label: '📅 Date' },
// //             { name: 'time', type: 'time', label: '⏰ Time' }
// //           ].map(({ name, type, label }) => (
// //             <div key={name}>
// //               <label htmlFor={name} className="block mb-1 font-semibold text-sm text-pink-200">
// //                 {label}
// //               </label>
// //               <input
// //                 type={type}
// //                 id={name}
// //                 name={name}
// //                 value={form[name]}
// //                 onChange={handleChange}
// //                 required
// //                 className="w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-gray-300 backdrop-blur-sm border border-pink-400/20 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:bg-white/20 transition-all duration-300 shadow-[0_0_15px_#ff00cc44]"
// //               />
// //             </div>
// //           ))}

// //           <motion.button
// //             whileHover={{ scale: 1.05, boxShadow: "0 0 20px #00ffcc" }}
// //             whileTap={{ scale: 0.95 }}
// //             type="submit"
// //             className="w-full mt-6 bg-gradient-to-r from-fuchsia-500 to-cyan-500 hover:from-pink-500 hover:to-cyan-600 text-white font-bold py-3 rounded-2xl shadow-lg transition-all duration-300 border border-white/10"
// //           >
// //             💾 Update & Save
// //           </motion.button>
// //         </form>
// //       </motion.div>

// //       {/* Preview card */}
// //       <div className="w-full max-w-sm bg-white/10 border border-white/10 p-6 rounded-2xl shadow-xl text-white backdrop-blur-md">
// //         <h2 className="text-xl font-bold mb-4">📋 Event Preview</h2>
// //         <p><strong>🖋️ Title:</strong> {form.title}</p>
// //         <p><strong>🗒️ Description:</strong> {form.description}</p>
// //         <p><strong>📅 Date:</strong> {form.date}</p>
// //         <p><strong>⏰ Time:</strong> {form.time}</p>
// //       </div>
// //     </div>
// //   )
// // }




// "use client"

// import { useEffect, useState } from 'react'
// import { useParams, useRouter } from 'next/navigation'
// import { motion } from 'framer-motion'
// import Calendar from 'react-calendar'
// import 'react-calendar/dist/Calendar.css'

// export default function EditEventPage() {
//   const { id } = useParams()
//   const router = useRouter()

//   const [form, setForm] = useState({
//     title: '',
//     description: '',
//     date: '',
//     time: ''
//   })

//   const [loading, setLoading] = useState(true)
//   const [lastEdited, setLastEdited] = useState('')
//   const [calendarDate, setCalendarDate] = useState(new Date())
//   const [imagePreview, setImagePreview] = useState(null)

//   useEffect(() => {
//     const fetchEvent = async () => {
//       try {
//         const res = await fetch(`/api/events`)
//         const data = await res.json()
//         const event = data.find(e => e.event_id === parseInt(id))
//         if (!event) throw new Error("Not found")
//         setForm({
//           title: event.title,
//           description: event.description,
//           date: event.date.slice(0, 10),
//           time: new Date(event.time).toISOString().slice(11, 16)
//         })
//         setLastEdited(new Date(event.updatedAt || event.createdAt).toLocaleString())
//       } catch (err) {
//         console.error(err)
//         alert("Error loading event")
//       } finally {
//         setLoading(false)
//       }
//     }

//     fetchEvent()
//   }, [id])

//   const handleChange = e => {
//     setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
//   }

//   const handleImageUpload = (e) => {
//     const file = e.target.files[0]
//     if (file) {
//       const reader = new FileReader()
//       reader.onloadend = () => {
//         setImagePreview(reader.result)
//       }
//       reader.readAsDataURL(file)
//     }
//   }

//   const handleSubmit = async e => {
//     e.preventDefault()
//     const res = await fetch(`/api/events/${id}/edit`, {
//       method: 'PUT',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(form)
//     })

//     if (res.ok) {
//       alert('✅ Event updated!')
//       router.push('/admin/events')
//     } else {
//       const data = await res.json()
//       alert(`❌ Error: ${data.error}`)
//     }
//   }

//   if (loading) return <p className="text-center mt-20 text-white text-xl">✨ Loading event info...</p>

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] flex flex-col lg:flex-row items-start justify-center px-4 py-10 gap-8">
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="w-full max-w-2xl bg-white/5 backdrop-blur-lg p-10 rounded-3xl border border-white/10 shadow-[0_0_60px_10px_rgba(0,0,0,0.6)]"
//       >
//         <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-6 tracking-tight bg-gradient-to-r from-cyan-400 via-pink-500 to-yellow-400 bg-clip-text text-transparent animate-pulse drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
//           🔮 Edit Your Magical Event
//         </h1>

//         {lastEdited && <p className="text-center text-sm italic text-white mb-4">🕓 Last edited: {lastEdited}</p>}

//         {imagePreview && (
//           <div className="flex justify-center mb-4">
//             <img src={imagePreview} alt="Event banner" className="w-40 h-40 object-cover rounded-full shadow-md border-4 border-white" />
//           </div>
//         )}

//         <form onSubmit={handleSubmit} className="space-y-6 text-white">
//           <input
//             type="file"
//             accept="image/*"
//             onChange={handleImageUpload}
//             className="text-sm text-white"
//           />

//           {[{ name: 'title', type: 'text', label: '📝 Title' }, { name: 'description', type: 'text', label: '🗒️ Description' }, { name: 'date', type: 'date', label: '📅 Date' }, { name: 'time', type: 'time', label: '⏰ Time' }].map(({ name, type, label }) => (
//             <div key={name}>
//               <label htmlFor={name} className="block mb-1 font-semibold text-sm text-cyan-300">{label}</label>
//               <input
//                 type={type}
//                 id={name}
//                 name={name}
//                 value={form[name]}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-4 py-2 rounded-xl bg-white/10 text-white placeholder-gray-300 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-pink-400 focus:bg-white/20 transition-all duration-300 shadow-inner shadow-black"
//               />
//             </div>
//           ))}

//           <motion.button
//             whileHover={{ scale: 1.05, boxShadow: "0 0 20px #00ffff" }}
//             whileTap={{ scale: 0.95 }}
//             type="submit"
//             className="w-full mt-6 bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-3 rounded-2xl shadow-xl shadow-blue-500/30 border border-white/10 transition-all duration-300"
//           >
//             💾 Save Changes
//           </motion.button>
//         </form>
//       </motion.div>

//       {/* Animated calendar */}
//       <div className="bg-white/10 p-4 rounded-xl text-white shadow-xl">
//         <h2 className="text-center text-lg mb-2">📆 Pick Date</h2>
//         <Calendar
//           onChange={setCalendarDate}
//           value={calendarDate}
//           className="rounded-md shadow-inner bg-white/10 text-black"
//         />
//       </div>
//     </div>
//   )
// }



"use client"

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

export default function EditEventPage() {
  const { id } = useParams()
  const router = useRouter()

  const [form, setForm] = useState({
    title: '',
    description: '',
    date: '',
    time: ''
  })

  const [loading, setLoading] = useState(true)
  const [lastEdited, setLastEdited] = useState('')
  const [calendarDate, setCalendarDate] = useState(new Date())
  const [imagePreview, setImagePreview] = useState(null)

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const res = await fetch(`/api/events`)
        const data = await res.json()
        const event = data.find(e => e.event_id === parseInt(id))
        if (!event) throw new Error("Not found")
        setForm({
          title: event.title,
          description: event.description,
          date: event.date.slice(0, 10),
          time: new Date(event.time).toISOString().slice(11, 16)
        })
        setLastEdited(new Date(event.updatedAt || event.createdAt).toLocaleString())
      } catch (err) {
        console.error(err)
        alert("Error loading event")
      } finally {
        setLoading(false)
      }
    }

    fetchEvent()
  }, [id])

  const handleChange = e => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleImageUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const res = await fetch(`/api/events/${id}/edit`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    })

    if (res.ok) {
      alert('✅ Event updated!')
      router.push('/admin/events')
    } else {
      const data = await res.json()
      alert(`❌ Error: ${data.error}`)
    }
  }

  if (loading) return <p className="text-center mt-20 text-white text-xl">✨ Loading event info...</p>

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] flex flex-col lg:flex-row items-start justify-center px-4 py-10 gap-8">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-2xl bg-white/5 backdrop-blur-lg p-10 rounded-3xl border border-white/10 shadow-[0_0_60px_10px_rgba(0,0,0,0.6)]"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-6 tracking-tight bg-gradient-to-r from-cyan-400 via-pink-500 to-yellow-400 bg-clip-text  animate-pulse drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
          🔮 <span className="text-4xl md:text-5xl font-extrabold text-center mb-6 tracking-tight bg-gradient-to-r from-cyan-400 via-pink-500 to-yellow-400 bg-clip-text text-transparent animate-pulse drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"> Edit Your Magical Event</span>
        </h1>

        {lastEdited && <p className="text-center text-sm italic text-white mb-4">🕓 Last edited: {lastEdited}</p>}

        {imagePreview && (
          <div className="flex justify-center mb-4">
            <img src={imagePreview} alt="Event banner" className="w-40 h-40 object-cover rounded-full shadow-md border-4 border-white" />
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6 text-white">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="text-sm text-white"
          />

          {[{ name: 'title', type: 'text', label: '📝 Title' }, { name: 'description', type: 'text', label: '🗒️ Description' }, { name: 'date', type: 'date', label: '📅 Date' }, { name: 'time', type: 'time', label: '⏰ Time' }].map(({ name, type, label }) => (
            <div key={name}>
              <label htmlFor={name} className="block mb-1 font-semibold text-sm text-cyan-300">{label}</label>
              <input
                type={type}
                id={name}
                name={name}
                value={form[name]}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-xl bg-white/10 text-white placeholder-gray-300 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-pink-400 focus:bg-white/20 transition-all duration-300 shadow-inner shadow-black"
              />
            </div>
          ))}

          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px #00ffff" }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full mt-6 bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-3 rounded-2xl shadow-xl shadow-blue-500/30 border border-white/10 transition-all duration-300"
          >
            💾 Save Changes
          </motion.button>
        </form>
      </motion.div>

      {/* Animated calendar */}
      <div className="bg-white/10 p-4 rounded-xl text-white shadow-xl">
        <h2 className="text-center text-lg mb-2">📆 Pick Date</h2>
        <Calendar
          onChange={setCalendarDate}
          value={calendarDate}
          className="rounded-md shadow-inner bg-white/10 text-black"
        />

        {/* Preview card */}
        <div className="mt-6 p-4 rounded-xl bg-white/10 text-white">
          <h3 className="text-lg font-bold mb-2 text-cyan-300">🎉 Preview</h3>
          <div className="text-sm">
            <p><strong>Title:</strong> {form.title}</p>
            <p><strong>Description:</strong> {form.description}</p>
            <p><strong>Date:</strong> {form.date}</p>
            <p><strong>Time:</strong> {form.time}</p>
          </div>
        </div>
      </div>
    </div>
  )
}