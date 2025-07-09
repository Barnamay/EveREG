// 'use client'

// import { useState } from 'react'

// export default function FillDetailsPage() {
//   const [form, setForm] = useState({
//     name: '',
//     age: '',
//     phone: '',
//     email: '',
//     district: '',
//     state: ''
//   })

//   const handleChange = e => {
//     setForm({ ...form, [e.target.name]: e.target.value })
//   }

//   const handleSubmit = async e => {
//     e.preventDefault()
//     const res = await fetch('/api/fill-details', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(form)
//     })
//     if (res.ok) alert('Details saved!')
//   }

//   return (
//     <div className="max-w-xl mx-auto p-6">
//       <h1 className="text-2xl font-bold mb-6">Fill Basic Details</h1>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input type="text" name="name" onChange={handleChange} placeholder="Name" className="w-full p-2 border rounded" />
//         <input type="number" name="age" onChange={handleChange} placeholder="Age" className="w-full p-2 border rounded" />
//         <input type="number" name="phone" onChange={handleChange} placeholder="Phone" className="w-full p-2 border rounded" />
//         <input name="email" onChange={handleChange} placeholder="Email" className="w-full p-2 border rounded" />
//         <input type="text" name="district" onChange={handleChange} placeholder="District" className="w-full p-2 border rounded" />
//         <input type="text" name="state" onChange={handleChange} placeholder="State" className="w-full p-2 border rounded" />
//         <input type="number" name="Pincode" onChange={handleChange} placeholder="Pincode" className="w-full p-2 border rounded" />
//         <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Submit</button>
//       </form>
//     </div>
//   )
// }


// 'use client'

// import { useState } from 'react'
// import { motion } from 'framer-motion'

// export default function FillDetailsPage() {
//   const [form, setForm] = useState({
//     name: '',
//     age: '',
//     phone: '',
//     email: '',
//     district: '',
//     state: '',
//     Pincode: ''
//   })

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value })
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     const res = await fetch('/api/fill-details', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(form),
//     })
//     if (res.ok) alert('Details saved!')
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-black flex items-center justify-center px-4 py-10">
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="w-full max-w-xl bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-white/20"
//       >
//         <h1 className="text-3xl font-bold text-white mb-8 text-center tracking-wide">
//           Fill Basic Details
//         </h1>
//         <form onSubmit={handleSubmit} className="space-y-6">
//           {[
//             { name: 'name', type: 'text', label: 'Name' },
//             { name: 'age', type: 'number', label: 'Age' },
//             { name: 'phone', type: 'number', label: 'Phone' },
//             { name: 'email', type: 'email', label: 'Email' },
//             { name: 'district', type: 'text', label: 'District' },
//             { name: 'state', type: 'text', label: 'State' },
//             { name: 'Pincode', type: 'number', label: 'Pincode' }
//           ].map(({ name, type, label }) => (
//             <div key={name} className="relative">
//               <input
//                 type={type}
//                 name={name}
//                 value={form[name]}
//                 onChange={handleChange}
//                 required
//                 placeholder=" "
//                 className="peer w-full bg-white/20 text-white placeholder-transparent px-4 py-3 rounded-xl outline-none transition focus:ring-2 focus:ring-indigo-300 shadow-md focus:bg-white/30"
//               />
//               <label
//                 htmlFor={name}
//                 className="absolute left-4 top-3 text-gray-300 text-sm peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all duration-300"
//               >
//                 {label}
//               </label>
//             </div>
//           ))}

//           <button
//             type="submit"
//             className="w-full bg-gradient-to-r from-green-500 to-lime-500 hover:from-green-600 hover:to-lime-600 text-white font-semibold py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
//           >
//             Submit
//           </button>
//         </form>
//       </motion.div>
//     </div>
//   )
// }


// 'use client'

// import { useState, useEffect } from 'react'
// import { useSession , signOut } from 'next-auth/react'
// import { useRouter } from 'next/navigation'
// import { motion } from 'framer-motion'

// export default function FillDetailsPage() {
//   const { data: session, status } = useSession()
//   const router = useRouter()
//   const [form, setForm] = useState({
//     name: '',
//     age: '',
//     phone: '',
//     district: '',
//     state: '',
//     pincode: ''
//   })

//   useEffect(() => {
//     const checkIfFilled = async () => {
//       try {
//         const res = await fetch('/api/fill-details')
//         if (!res.ok) {
//           console.error('Server responded with status', res.status)
//           return
//         }

//         const text = await res.text()
//         if (!text) {
//           console.warn('Empty response from /api/fill-details')
//           return
//         }

//         const data = JSON.parse(text)
//         if (data.alreadyFilled) {
//           router.push('/events')
//         }
//       } catch (err) {
//         console.error('Error checking fill status:', err)
//       }
//     }

//     checkIfFilled()
//   }, [])

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value })
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     const res = await fetch('/api/fill-details', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(form),
//     })
//     if (res.ok) {
//       alert('Details saved!')
//       router.push('/events')
//     }
//   }

//   if (status === 'loading') return <div>Loading...</div>

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-black flex items-center justify-center px-4 py-10">
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="w-full max-w-xl bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-white/20"
//       >
//         <h1 className="text-3xl font-bold text-white mb-8 text-center tracking-wide">
//           Fill Basic Details
//         </h1>
//         <form onSubmit={handleSubmit} className="space-y-6">
//           {[
//             { name: 'name', type: 'text', label: 'Name' },
//             { name: 'age', type: 'number', label: 'Age' },
//             { name: 'phone', type: 'number', label: 'Phone' },
//             { name: 'district', type: 'text', label: 'District' },
//             { name: 'state', type: 'text', label: 'State' },
//             { name: 'pincode', type: 'number', label: 'Pincode' }
//           ].map(({ name, type, label }) => (
//             <div key={name} className="relative">
//               <input
//                 id={name}
//                 type={type}
//                 name={name}
//                 value={form[name]}
//                 onChange={handleChange}
//                 required
//                 placeholder=" "
//                 className="peer w-full bg-white/20 text-white placeholder-transparent px-4 py-3 rounded-xl outline-none transition focus:ring-2 focus:ring-indigo-300 shadow-md focus:bg-white/30"
//               />
//               <label
//                 htmlFor={name}
//                 className="absolute left-4 top-2 text-gray-300 text-sm transition-all duration-300 
//     peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 
//     peer-focus:opacity-0 peer-focus:translate-y-1"
//               >
//                 {label}
//               </label>
//             </div>
//           ))}

//           <button
//             type="submit"
//             className="w-full bg-gradient-to-r from-green-500 to-lime-500 hover:from-green-600 hover:to-lime-600 text-white font-semibold py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
//           >
//             Submit
//           </button>
//         </form>
//       </motion.div>
//     </div>
//   )
// }



// 'use client'

// import { useState, useEffect } from 'react'
// import { useSession, signIn } from 'next-auth/react'
// import { useRouter } from 'next/navigation'
// import { motion } from 'framer-motion'

// export default function FillDetailsPage() {
//   const { data: session, status } = useSession()
//   const router = useRouter()

//   const [form, setForm] = useState({
//     name: '',
//     age: '',
//     phone: '',
//     district: '',
//     state: '',
//     pincode: ''
//   })

//   const [alreadyFilled, setAlreadyFilled] = useState(false)

//   useEffect(() => {
//     const checkIfFilled = async () => {
//       try {
//         const res = await fetch('/api/fill-details')
//         const data = await res.json()
//         if (data.alreadyFilled) {
//           setAlreadyFilled(true)
//         }
//       } catch (err) {
//         console.error('Error checking fill status:', err)
//       }
//     }

//     checkIfFilled()
//   }, [])

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value })
//   }

//   const handleSubmit = async (e) => {
//   e.preventDefault()
//   const res = await fetch('/api/fill-details', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(form),
//   })

//   if (res.ok) {
//     // 🔁 Refresh session so role updates
//     await signIn(undefined, { redirect: false })
//     alert('Details saved!')
//     router.push('/events')
//   }
// }


//   if (status === 'loading') return <div>Loading...</div>

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-black flex items-center justify-center px-4 py-10">
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="w-full max-w-xl bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-white/20"
//       >
//         <h1 className="text-3xl font-bold text-white mb-8 text-center tracking-wide">
//           Fill Basic Details
//         </h1>

//         {alreadyFilled ? (
//           <>
//             <p className="text-green-300 font-medium text-center mb-4">✅ Basic Details Already Filled</p>
//             <button
//               className="w-full bg-gradient-to-r from-orange-400 to-red-500 hover:from-orange-500 hover:to-red-600 text-white font-semibold py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl mt-4"
//               onClick={() => setAlreadyFilled(false)}
//             >
//               ✏️ Edit Details
//             </button>
//           </>
//         ) : (
//           <form onSubmit={handleSubmit} className="space-y-6">
//             {[
//               { name: 'name', type: 'text', label: 'Name' },
//               { name: 'age', type: 'number', label: 'Age' },
//               { name: 'phone', type: 'number', label: 'Phone' },
//               { name: 'district', type: 'text', label: 'District' },
//               { name: 'state', type: 'text', label: 'State' },
//               { name: 'pincode', type: 'number', label: 'Pincode' }
//             ].map(({ name, type, label }) => (
//               <div key={name} className="relative">
//                 <input
//                   id={name}
//                   type={type}
//                   name={name}
//                   value={form[name]}
//                   onChange={handleChange}
//                   required
//                   placeholder=" "
//                   className="peer w-full bg-white/20 text-white placeholder-transparent px-4 py-3 rounded-xl outline-none transition focus:ring-2 focus:ring-indigo-300 shadow-md focus:bg-white/30"
//                 />
//                 <label
//                   htmlFor={name}
//                   className="absolute left-4 top-2 text-gray-300 text-sm transition-all duration-300 
//           peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 
//           peer-focus:opacity-0 peer-focus:translate-y-1"
//                 >
//                   {label}
//                 </label>
//               </div>
//             ))}

//             <button
//               type="submit"
//               className="w-full bg-gradient-to-r from-green-500 to-lime-500 hover:from-green-600 hover:to-lime-600 text-white font-semibold py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
//             >
//               Submit
//             </button>
//           </form>
//         )}
//       </motion.div>
//     </div>
//   )
// }



'use client'

import { useState, useEffect } from 'react'
import { useSession, getSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'

export default function FillDetailsPage() {
  const { data: session, status, update } = useSession()
  const router = useRouter()

  const [form, setForm] = useState({
    name: '',
    age: '',
    phone: '',
    district: '',
    state: '',
    pincode: ''
  })

  const [alreadyFilled, setAlreadyFilled] = useState(false)

  useEffect(() => {
    const checkIfFilled = async () => {
      try {
        const res = await fetch('/api/fill-details')
        const data = await res.json()
        if (data.alreadyFilled) {
          setAlreadyFilled(true)
        }
      } catch (err) {
        console.error('Error checking fill status:', err)
      }
    }

    checkIfFilled()
  }, [])

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const res = await fetch('/api/fill-details', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })

    if (res.ok) {
      await getSession() // 🔄 Refresh session manually without redirect or re-signIn
      alert('Details saved!')
      router.push('/events')
    } else {
      alert('Something went wrong.')
    }
  }

  if (status === 'loading') return <div>Loading...</div>

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-black flex items-center justify-center px-4 py-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-xl bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-white/20"
      >
        <h1 className="text-3xl font-bold text-white mb-8 text-center tracking-wide">
          Fill Basic Details
        </h1>

        {alreadyFilled ? (
          <>
            <p className="text-green-300 font-medium text-center mb-4">✅ Basic Details Already Filled</p>
            <button
              className="w-full bg-gradient-to-r from-orange-400 to-red-500 hover:from-orange-500 hover:to-red-600 text-white font-semibold py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl mt-4"
              onClick={() => setAlreadyFilled(false)}
            >
              ✏️ Edit Details
            </button>
          </>
        ) : (
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
                  value={form[name]}
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
        )}
      </motion.div>
    </div>
  )
}
