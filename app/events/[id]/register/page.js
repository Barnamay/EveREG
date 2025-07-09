// // // // // "use client"
// // // // // import { useState } from 'react'
// // // // // import { useParams } from 'next/navigation'

// // // // // export default function RegisterPage() {
// // // // //   const { id } = useParams()
// // // // //   const [form, setForm] = useState({ name: '', age: '', phone: '', email: '', district: '', state: '' })

// // // // //   const handleSubmit = async (e) => {
// // // // //     e.preventDefault()
// // // // //     await fetch('/api/register/route.js', {
// // // // //       method: 'POST',
// // // // //       headers: { 'Content-Type': 'application/json' },
// // // // //       body: JSON.stringify({ ...form, event_id: parseInt(id) })
// // // // //     })
// // // // //     alert('Registered!')
// // // // //   }

// // // // //   return (
// // // // //     <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto space-y-3">
// // // // //       {['name', 'age', 'phone', 'email', 'district', 'state'].map(field => (
// // // // //         <input key={field} placeholder={field} value={form[field]} onChange={e => setForm({ ...form, [field]: e.target.value })} className="border w-full p-2" required />
// // // // //       ))}
// // // // //       <button type="submit" className="bg-blue-600 text-white px-4 py-2">Submit</button>
// // // // //     </form>
// // // // //   )
// // // // // }


// // // // 'use client'

// // // // import { useState, useEffect } from 'react'
// // // // import { useParams } from 'next/navigation'
// // // // import { useSession } from 'next-auth/react'
// // // // import { motion } from 'framer-motion'

// // // // export default function RegisterPage() {
// // // //   const { id } = useParams()
// // // //   const { data: session } = useSession()
// // // //   const [form, setForm] = useState({
// // // //     name: '',
// // // //     age: '',
// // // //     phone: '',
// // // //     email: '',
// // // //     district: '',
// // // //     state: ''
// // // //   })

// // // //   useEffect(() => {
// // // //     const fetchUserDetails = async () => {
// // // //       try {
// // // //         const res = await fetch('/api/fill-details')
// // // //         const data = await res.json()
// // // //         if (res.ok && data?.details) {
// // // //           setForm(prev => ({ ...prev, ...data.details }))
// // // //         }
// // // //       } catch (err) {
// // // //         console.error('Error fetching user details:', err)
// // // //       }
// // // //     }

// // // //     fetchUserDetails()
// // // //   }, [])

// // // //   const handleChange = (e) => {
// // // //     setForm({ ...form, [e.target.name]: e.target.value })
// // // //   }

// // // //   const handleSubmit = async (e) => {
// // // //     e.preventDefault()

// // // //     const incompleteFields = Object.fromEntries(
// // // //       Object.entries(form).filter(([_, v]) => v === '')
// // // //     )

// // // //     const res = await fetch('/api/register/route.js', {
// // // //       method: 'POST',
// // // //       headers: { 'Content-Type': 'application/json' },
// // // //       body: JSON.stringify({ ...incompleteFields, event_id: parseInt(id) })
// // // //     })

// // // //     if (res.ok) {
// // // //       alert('Registered!')
// // // //     } else {
// // // //       alert('Failed to register')
// // // //     }
// // // //   }

// // // //   return (
// // // //     <div className="min-h-screen bg-gradient-to-br from-purple-800 via-indigo-900 to-black flex items-center justify-center px-4 py-10">
// // // //       <motion.div
// // // //         initial={{ opacity: 0, y: 40 }}
// // // //         animate={{ opacity: 1, y: 0 }}
// // // //         transition={{ duration: 0.8 }}
// // // //         className="w-full max-w-xl bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-white/20"
// // // //       >
// // // //         <h1 className="text-3xl font-bold text-white mb-8 text-center tracking-wide">
// // // //           Register for Event
// // // //         </h1>
// // // //         <form onSubmit={handleSubmit} className="space-y-6">
// // // //           {[ 'name', 'age', 'phone', 'email', 'district', 'state' ].map((field) => (
// // // //             <div key={field} className="relative">
// // // //               <input
// // // //                 type={field === 'email' ? 'email' : field === 'age' || field === 'phone' ? 'number' : 'text'}
// // // //                 name={field}
// // // //                 value={form[field]}
// // // //                 onChange={handleChange}
// // // //                 placeholder=" "
// // // //                 required
// // // //                 className="peer w-full bg-white/20 text-white placeholder-transparent px-4 py-3 rounded-xl outline-none transition focus:ring-2 focus:ring-indigo-300 shadow-md focus:bg-white/30"
// // // //               />
// // // //               <label
// // // //                 htmlFor={field}
// // // //                 className="absolute left-4 top-2 text-gray-300 text-sm transition-all duration-300 
// // // //                 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 
// // // //                 peer-focus:opacity-0 peer-focus:translate-y-1"
// // // //               >
// // // //                 {field.charAt(0).toUpperCase() + field.slice(1)}
// // // //               </label>
// // // //             </div>
// // // //           ))}
// // // //           <button
// // // //             type="submit"
// // // //             className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
// // // //           >
// // // //             Submit
// // // //           </button>
// // // //         </form>
// // // //       </motion.div>
// // // //     </div>
// // // //   )
// // // // }


// // // 'use client'

// // // import { useState, useEffect } from 'react'
// // // import { useParams } from 'next/navigation'
// // // import { useSession } from 'next-auth/react'
// // // import { motion } from 'framer-motion'

// // // export default function RegisterPage() {
// // //   const { id } = useParams()
// // //   const { data: session } = useSession()
// // //   const [form, setForm] = useState({
// // //     name: '',
// // //     age: '',
// // //     phone: '',
// // //     email: '',
// // //     district: '',
// // //     state: ''
// // //   })
// // //   const [event, setEvent] = useState(null)

// // //   useEffect(() => {
// // //     const fetchUserDetails = async () => {
// // //       try {
// // //         const res = await fetch('/api/fill-details')
// // //         const data = await res.json()
// // //         if (res.ok && data?.details) {
// // //           setForm(prev => ({ ...prev, ...data.details }))
// // //         }
// // //       } catch (err) {
// // //         console.error('Error fetching user details:', err)
// // //       }
// // //     }

// // //     const fetchEventDetails = async () => {
// // //       try {
// // //         const res = await fetch(`/api/events/${id}`)
// // //         const data = await res.json()
// // //         if (res.ok) {
// // //           setEvent(data)
// // //         }
// // //       } catch (err) {
// // //         console.error('Error fetching event details:', err)
// // //       }
// // //     }

// // //     fetchUserDetails()
// // //     fetchEventDetails()
// // //   }, [id])

// // //   const handleChange = (e) => {
// // //     setForm({ ...form, [e.target.name]: e.target.value })
// // //   }

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault()

// // //     const incompleteFields = Object.fromEntries(
// // //       Object.entries(form).filter(([_, v]) => v === '')
// // //     )

// // //     const res = await fetch('/api/register', {
// // //       method: 'POST',
// // //       headers: { 'Content-Type': 'application/json' },
// // //       body: JSON.stringify({ ...incompleteFields, event_id: parseInt(id) })
// // //     })

// // //     if (res.ok) {
// // //       alert('Registered!')
// // //     } else {
// // //       alert('Failed to register')
// // //     }
// // //   }

// // //   return (
// // //     <div className="min-h-screen bg-gradient-to-br from-purple-800 via-indigo-900 to-black flex items-center justify-center px-4 py-10">
// // //       <motion.div
// // //         initial={{ opacity: 0, y: 40 }}
// // //         animate={{ opacity: 1, y: 0 }}
// // //         transition={{ duration: 0.8 }}
// // //         className="w-full max-w-xl bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-white/20"
// // //       >
// // //         <h1 className="text-3xl font-bold text-white mb-4 text-center tracking-wide">
// // //           Register for Event
// // //         </h1>

// // //         {event && (
// // //           <div className="mb-6 text-center text-white text-sm">
// // //             <p className="font-semibold text-lg">🗓 {event.title}</p>
// // //             <p className="text-gray-300">{event.date} @ {event.time}</p>
// // //           </div>
// // //         )}

// // //         <form onSubmit={handleSubmit} className="space-y-6">
// // //           {[ 'name', 'age', 'phone', 'email', 'district', 'state' ].map((field) => (
// // //             <div key={field} className="relative">
// // //               <input
// // //                 type={field === 'email' ? 'email' : field === 'age' || field === 'phone' ? 'number' : 'text'}
// // //                 name={field}
// // //                 value={form[field]}
// // //                 onChange={handleChange}
// // //                 placeholder=" "
// // //                 required
// // //                 className="peer w-full bg-white/20 text-white placeholder-transparent px-4 py-3 rounded-xl outline-none transition focus:ring-2 focus:ring-indigo-300 shadow-md focus:bg-white/30"
// // //               />
// // //               <label
// // //                 htmlFor={field}
// // //                 className="absolute left-4 top-2 text-gray-300 text-sm transition-all duration-300 
// // //                 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 
// // //                 peer-focus:opacity-0 peer-focus:translate-y-1"
// // //               >
// // //                 {field.charAt(0).toUpperCase() + field.slice(1)}
// // //               </label>
// // //             </div>
// // //           ))}
// // //           <button
// // //             type="submit"
// // //             className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
// // //           >
// // //             Submit
// // //           </button>
// // //         </form>
// // //       </motion.div>
// // //     </div>
// // //   )
// // // }



// // 'use client'

// // import { useState, useEffect } from 'react'
// // import { useParams } from 'next/navigation'
// // import { useSession } from 'next-auth/react'
// // import { motion } from 'framer-motion'

// // export default function RegisterPage() {
// //   const { id } = useParams()
// //   const { data: session } = useSession()
// //   const [form, setForm] = useState({
// //     name: '',
// //     age: '',
// //     phone: '',
// //     email: '',
// //     district: '',
// //     state: ''
// //   })
// //   const [event, setEvent] = useState(null)

// //   useEffect(() => {
// //     const fetchUserDetails = async () => {
// //       try {
// //         const res = await fetch('/api/fill-details')
// //         const data = await res.json()
// //         if (res.ok && data?.details) {
// //           setForm(prev => ({ ...prev, ...data.details }))
// //         }
// //       } catch (err) {
// //         console.error('Error fetching user details:', err)
// //       }
// //     }

// //     const fetchEventDetails = async () => {
// //       try {
// //         const res = await fetch(`/api/events/${id}`)
// //         const data = await res.json()
// //         if (res.ok) {
// //           setEvent(data)
// //         }
// //       } catch (err) {
// //         console.error('Error fetching event details:', err)
// //       }
// //     }

// //     fetchUserDetails()
// //     fetchEventDetails()
// //   }, [id])

// //   const handleChange = (e) => {
// //     setForm({ ...form, [e.target.name]: e.target.value })
// //   }

// //   const handleSubmit = async (e) => {
// //     e.preventDefault()

// //     const res = await fetch('/api/register', {
// //       method: 'POST',
// //       headers: { 'Content-Type': 'application/json' },
// //       body: JSON.stringify({ ...form, event_id: parseInt(id) })
// //     })

// //     if (res.ok) {
// //       alert('Registered!')
// //     } else {
// //       alert('Failed to register')
// //     }
// //   }

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-purple-800 via-indigo-900 to-black flex items-center justify-center px-4 py-10">
// //       <motion.div
// //         initial={{ opacity: 0, y: 40 }}
// //         animate={{ opacity: 1, y: 0 }}
// //         transition={{ duration: 0.8 }}
// //         className="w-full max-w-xl bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-white/20"
// //       >
// //         <h1 className="text-3xl font-bold text-white mb-4 text-center tracking-wide">
// //           Register for Event
// //         </h1>

// //         {event && (
// //           <div className="mb-6 text-center text-white text-sm">
// //             <p className="font-semibold text-lg">🗓 {event.title}</p>
// //             <p className="text-gray-300">{event.date} @ {event.time}</p>
// //           </div>
// //         )}

// //         <form onSubmit={handleSubmit} className="space-y-6">
// //           {[ 'name', 'age', 'phone', 'email', 'district', 'state' ].map((field) => (
// //             <div key={field} className="relative">
// //               <input
// //                 type={field === 'email' ? 'email' : field === 'age' || field === 'phone' ? 'number' : 'text'}
// //                 name={field}
// //                 value={form[field]}
// //                 onChange={handleChange}
// //                 placeholder=" "
// //                 required
// //                 className="peer w-full bg-white/20 text-white placeholder-transparent px-4 py-3 rounded-xl outline-none transition focus:ring-2 focus:ring-indigo-300 shadow-md focus:bg-white/30"
// //               />
// //               <label
// //                 htmlFor={field}
// //                 className="absolute left-4 top-2 text-gray-300 text-sm transition-all duration-300 
// //                 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 
// //                 peer-focus:opacity-0 peer-focus:translate-y-1"
// //               >
// //                 {field.charAt(0).toUpperCase() + field.slice(1)}
// //               </label>
// //             </div>
// //           ))}
// //           <button
// //             type="submit"
// //             className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
// //           >
// //             Submit
// //           </button>
// //         </form>
// //       </motion.div>
// //     </div>
// //   )
// // }




// 'use client'

// import { useState, useEffect } from 'react'
// import { useParams } from 'next/navigation'
// import { useSession } from 'next-auth/react'
// import { motion } from 'framer-motion'
// import { FaCalendarAlt, FaClock } from 'react-icons/fa'

// export default function RegisterPage() {
//   const { id } = useParams()
//   const { data: session } = useSession()
//   const [form, setForm] = useState({
//     name: '',
//     age: '',
//     phone: '',
//     email: '',
//     district: '',
//     state: ''
//   })
//   const [event, setEvent] = useState(null)

//   useEffect(() => {
//     const fetchUserDetails = async () => {
//       try {
//         const res = await fetch('/api/fill-details')
//         const data = await res.json()
//         if (res.ok && data?.details) {
//           setForm(prev => ({ ...prev, ...data.details }))
//         }
//       } catch (err) {
//         console.error('Error fetching user details:', err)
//       }
//     }

//     const fetchEventDetails = async () => {
//       try {
//         const res = await fetch(`/api/events/${id}`)
//         const data = await res.json()
//         if (res.ok) {
//           setEvent(data)
//         }
//       } catch (err) {
//         console.error('Error fetching event details:', err)
//       }
//     }

//     fetchUserDetails()
//     fetchEventDetails()
//   }, [id])

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value })
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault()

//     const res = await fetch('/api/register', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ ...form, event_id: parseInt(id) })
//     })

//     if (res.ok) {
//       alert('Registered!')
//     } else {
//       alert('Failed to register')
//     }
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-purple-800 via-indigo-900 to-black flex items-center justify-center px-4 py-10">
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="w-full max-w-xl bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-white/20"
//       >
//         <h1 className="text-3xl font-bold text-white mb-4 text-center tracking-wide">
//           Register for Event
//         </h1>

//         {event && (
//           <div className="mb-6 p-5 bg-white/20 rounded-xl text-white shadow-md">
//             <p className="text-xl font-bold mb-1">🎉 {event.title}</p>
//             <div className="flex items-center gap-4 text-sm text-gray-200">
//               <div className="flex items-center gap-1">
//                 <FaCalendarAlt className="text-lg" />
//                 <span>{event.date}</span>
//               </div>
//               <div className="flex items-center gap-1">
//                 <FaClock className="text-lg" />
//                 <span>{event.time}</span>
//               </div>
//             </div>
//           </div>
//         )}

//         <form onSubmit={handleSubmit} className="space-y-6">
//           {[ 'name', 'age', 'phone', 'email', 'district', 'state' ].map((field) => (
//             <div key={field} className="relative">
//               <input
//                 type={field === 'email' ? 'email' : field === 'age' || field === 'phone' ? 'number' : 'text'}
//                 name={field}
//                 value={form[field]}
//                 onChange={handleChange}
//                 placeholder=" "
//                 required
//                 className="peer w-full bg-white/20 text-white placeholder-transparent px-4 py-3 rounded-xl outline-none transition focus:ring-2 focus:ring-indigo-300 shadow-md focus:bg-white/30"
//               />
//               <label
//                 htmlFor={field}
//                 className="absolute left-4 top-2 text-gray-300 text-sm transition-all duration-300 
//                 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 
//                 peer-focus:opacity-0 peer-focus:translate-y-1"
//               >
//                 {field.charAt(0).toUpperCase() + field.slice(1)}
//               </label>
//             </div>
//           ))}
//           <button
//             type="submit"
//             className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
//           >
//             Submit
//           </button>
//         </form>
//       </motion.div>
//     </div>
//   )
// }


'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { motion } from 'framer-motion'
import { FaCalendarAlt, FaClock } from 'react-icons/fa'

export default function RegisterPage() {
  const { id } = useParams()
  const { data: session } = useSession()
  const [form, setForm] = useState({
    name: '',
    age: '',
    phone: '',
    email: '',
    district: '',
    state: ''
  })
  const [event, setEvent] = useState(null)

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const res = await fetch('/api/fill-details')
        const data = await res.json()
        if (res.ok && data?.details) {
          setForm(prev => ({ ...prev, ...data.details }))
        }
      } catch (err) {
        console.error('Error fetching user details:', err)
      }
    }

    const fetchEventDetails = async () => {
      try {
        const res = await fetch(`/api/events/${id}`)
        const data = await res.json()
        if (res.ok) {
          console.log("Fetched event object:", data) // ✅ Correct
          setEvent(data)
        }
      } catch (err) {
        console.error('Error fetching event details:', err)
      }
    }


    fetchUserDetails()
    fetchEventDetails()
  }, [id])

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const res = await fetch('/api/fill-details', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...form, event_id: parseInt(id) })
    })

    if (res.ok) {
      alert('Registered!')
    } else {
      alert('Failed to register')
    }
  }

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }

  const formatTime = (timeString) => {
    if (!timeString) return 'Time not available';

    const [hours, minutes] = timeString.split(':');
    if (hours === undefined || minutes === undefined) return 'Invalid Time';

    const date = new Date();
    date.setHours(Number(hours));
    date.setMinutes(Number(minutes));
    date.setSeconds(0);

    return date.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });
  };



  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-800 via-indigo-900 to-black flex items-center justify-center px-4 py-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-xl bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-white/20"
      >
        <h1 className="text-3xl font-bold text-white mb-4 text-center tracking-wide">
          Register for Event
        </h1>

        {event && (
          <div className="mb-6 p-5 bg-gradient-to-br from-blue-800 via-blue-600 to-blue-500 rounded-2xl text-white shadow-md space-y-4">
            <div>
              <p className="text-2xl font-bold mb-1">🎉 {event.title}</p>
              <p className="text-sm text-white/90">{event.description}</p>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-8 gap-2 text-sm">
              <div className="flex items-center gap-2">
                <FaCalendarAlt className="text-lg" />
                <span>{formatDate(event.date)}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaClock className="text-lg" />
                <span>
                  {event.time
                    ? new Date(event.time).toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit',
                      hour12: true,
                    })
                    : 'Time not available'}
                </span>



              </div>
            </div>
          </div>
        )}


        <form onSubmit={handleSubmit} className="space-y-6">
          {[
            { name: 'name', type: 'text', label: 'Name' },
            { name: 'age', type: 'number', label: 'Age' },
            { name: 'phone', type: 'number', label: 'Phone' },
            { name: 'district', type: 'text', label: 'District' },
            { name: 'state', type: 'text', label: 'State' },
            { name: 'pincode', type: 'number', label: 'Pincode' }
          ].map(({ name, type, label }) => (
            <div key={name} className="relative">
              <input
                id={name}
                type={type}
                name={name}
                value={form[name] || ""}
                onChange={handleChange}
                required
                placeholder=" "
                className="peer w-full bg-white/20 text-white placeholder-transparent px-4 py-3 rounded-xl outline-none transition focus:ring-2 focus:ring-indigo-300 shadow-md focus:bg-white/30"
              />
              <label
                htmlFor={name}
                className="absolute left-4 top-2 text-gray-300 text-sm transition-all duration-300 
    peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 
    peer-focus:opacity-0 peer-focus:translate-y-1"
              >
                {label}
              </label>
            </div>
          ))}

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-green-500 to-lime-500 hover:from-green-600 hover:to-lime-600 text-white font-semibold py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Submit
          </button>
        </form>
      </motion.div>
    </div>
  )
}
