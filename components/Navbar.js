// // "use client"
// // import React, { useState } from 'react'
// // import { useSession, signIn, signOut } from "next-auth/react"
// // import Link from 'next/link'
// // const Navbar = () => {

// //   const { data: session } = useSession()
// //   const [showdropdown, setShowdropdown] = useState(false)
// //   // if(session) {
// //   //   return <>
// //   //     Signed in as {session.user.email} <br/>
// //   //     <button onClick={() => signOut()}>Sign out</button>
// //   //   </>
// //   // }


// //   return (


// //     <nav className='bg-black text-white flex justify-between p-1.5'>


// //         <Link className='logo flex items-center justify-between' href={'/'}>
// //         <h2 className='lg:text-3xl text-2xl font-bold'> Eve</h2><h2 className='lg:text-3xl text-2xl font-bold text-[#0378C5]'>REG</h2>
// //         </Link>

// //       <ul className='flex items-center justify-around gap-4 h-16'>
// //         <div><Link href='/'>
// //           <button type="button" className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
// //             Home </button></Link></div>
// //         <li>About</li>
// //         <li>Events</li>
// //         <div className='relative flex justify-center items-center  md:block gap-4'>

// //           {session && <>
// //             <button onClick={()=> setShowdropdown(!showdropdown)} onBlur={() => {
// //             setTimeout(() => {
// //               setShowdropdown(false)
// //             }, 200);
// //           }}

// //             id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-white mx-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Welcome {session.user.email}<svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
// //               <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
// //             </svg>
// //             </button>

// //             {/* <!-- Dropdown menu --> */}
// //             <div id="dropdown" className={`z-10 ${showdropdown?"":"hidden"} absolute left-[125px] bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700`}>
// //               <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
// //                 <li>
// //                   <Link href="/dashboard" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
// //                 </li>
// //                 <li>
// //                   <Link href="/Username" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Creator's Profile</Link>
// //                 </li>
// //                 <li>
// //                   <Link href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</Link>
// //                 </li>
// //                 <li>
// //                   <Link onClick={()=>signOut()} href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</Link>
// //                 </li>
// //               </ul>
// //             </div>
// //           </>}





// //           {/* {session && <Link href='/dashboard'>
// //             <button type="button" className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
// //               Dashboard</button></Link>} */}

// //           {session &&
// //             <button type="button" className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
// //               onClick={() => signOut()}>
// //               LogOut</button>}


// //           {!session && <Link href='/login'>
// //             <button type="button" className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
// //             > Log-In </button></Link>}





// //         </div>
// //       </ul>

// //     </nav>
// //   )
// // }

// // export default Navbar







// "use client"
// import React, { useState } from 'react'
// import { useSession, signIn, signOut } from "next-auth/react"
// import Link from 'next/link'

// const Navbar = () => {
//   const { data: session } = useSession()
//   const [showdropdown, setShowdropdown] = useState(false)

//   return (
//     <nav className='bg-black text-white flex justify-between p-1.5'>
//       <Link className='logo flex items-center justify-between' href={'/'}>
//         <h2 className='lg:text-3xl text-2xl font-bold'> Eve</h2>
//         <h2 className='lg:text-3xl text-2xl font-bold text-[#0378C5]'>REG</h2>
//       </Link>

//       <ul className='flex items-center justify-around gap-4 h-16'>
//         <div>
//           <Link href='/'>
//             <button type="button" className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
//               Home
//             </button>
//           </Link>
//         </div>
//         <li>About</li>
//         <li>Events</li>

//         <div className='relative flex justify-center items-center md:block gap-4'>
//           {session && (
//             <>
//               <button
//                 onClick={() => setShowdropdown(!showdropdown)}
//                 onBlur={() => setTimeout(() => setShowdropdown(false), 200)}
//                 id="dropdownDefaultButton"
//                 data-dropdown-toggle="dropdown"
//                 className="text-white mx-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//                 type="button"
//               >
//                 Welcome {session.user.email}
//                 <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
//                   <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
//                 </svg>
//               </button>

//               {/* Dropdown */}
//               <div className={`z-10 ${showdropdown ? "" : "hidden"} absolute left-[125px] bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700`}>
//                 <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
//                   <li>
//                     <Link href="/dashboard" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
//                       Dashboard
//                     </Link>
//                   </li>

//                   {/* ✅ Show Manage Events only to admin or operator */}
//                   {['admin', 'operator'].includes(session?.user?.role) && (
//                     <li>
//                       <Link href="/admin/events/unapproved" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
//                         Manage Events
//                       </Link>
//                     </li>
//                   )}

//                   <li>
//                     <Link href="/Username" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
//                       Creator's Profile
//                     </Link>
//                   </li>
//                   <li>
//                     <Link href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
//                       Earnings
//                     </Link>
//                   </li>
//                   <li>
//                     <Link onClick={() => signOut()} href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
//                       Sign out
//                     </Link>
//                   </li>
//                 </ul>
//               </div>
//             </>
//           )}

//           {/* Auth buttons */}
//           {!session && (
//             <Link href='/login'>
//               <button type="button" className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
//                 Log-In
//               </button>
//             </Link>
//           )}

//           {session && (
//             <button
//               type="button"
//               className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
//               onClick={() => signOut()}
//             >
//               LogOut
//             </button>
//           )}
//         </div>
//       </ul>
//     </nav>
//   )
// }

// export default Navbar

// "use client"
// import React, { useState } from 'react'
// import { useSession, signOut } from "next-auth/react"
// import Link from 'next/link'
// import { FaRegCalendarAlt } from "react-icons/fa"

// const Navbar = () => {
//   const { data: session } = useSession()
//   const [showdropdown, setShowdropdown] = useState(false)

//   return (
//     <nav className='bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] text-white flex flex-col md:flex-row justify-between items-center px-6 py-3 shadow-md border-b border-gray-800'>

//       {/* Logo */}
//       <Link className='flex items-center gap-3 mb-3 md:mb-0' href={'/'}>
//         <FaRegCalendarAlt className="text-3xl text-[#00D4FF]" />
//         <h2 className='text-2xl lg:text-3xl font-extrabold tracking-wide'>
//           <span className="text-white">Eve</span>
//           <span className="text-[#00D4FF]">REG</span>
//         </h2>
//       </Link>

//       {/* Navigation Links */}
//       <div className='flex items-center gap-6 text-lg'>

//         <Link href="/">
//           <button className="hover:text-[#00D4FF] transition-all duration-300">Home</button>
//         </Link>

//         <Link href="/about">
//           <button className="hover:text-[#00D4FF] transition-all duration-300">About</button>
//         </Link>

//         <Link href="/events">
//           <button className="hover:text-[#00D4FF] transition-all duration-300">Events</button>
//         </Link>

//         {/* Auth Section */}
//         {session ? (
//           <div className="relative">
//             <button
//               onClick={() => setShowdropdown(!showdropdown)}
//               onBlur={() => setTimeout(() => setShowdropdown(false), 200)}
//               className="ml-3 text-white bg-[#00D4FF] hover:bg-[#007acc] focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-lg text-sm px-4 py-2.5 flex items-center"
//             >
//               Welcome, {session.user.email.split('@')[0]}
//               <svg className="w-3 h-3 ml-2" viewBox="0 0 10 6" fill="none">
//                 <path d="M1 1L5 5L9 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//               </svg>
//             </button>

//             {/* Dropdown */}
//             <div className={`absolute right-0 top-12 mt-1 w-52 rounded-xl backdrop-blur-xl bg-white/10 shadow-lg text-white transition-all duration-200 ease-in-out z-50 ${showdropdown ? 'block' : 'hidden'}`}>
//               <ul className="text-sm py-2">
//                 <li>
//                   <Link href="/dashboard" className="block px-4 py-2 hover:bg-white/20 rounded">Dashboard</Link>
//                 </li>
//                 {session?.user?.role === 'admin' && (
//                   <li>
//                     <Link href="/admin/events" className="block px-4 py-2 hover:bg-white/20 rounded">
//                       Admin Dashboard
//                     </Link>
//                   </li>
//                 )}
//                 {['admin', 'operator'].includes(session?.user?.role) && (
//                   <li>
//                     <Link href="/admin/events/unapproved" className="block px-4 py-2 hover:bg-white/20 rounded">Manage Events</Link>
//                   </li>
//                 )}
//                 <li>
//                   <Link href="/Username" className="block px-4 py-2 hover:bg-white/20 rounded">Creator's Profile</Link>
//                 </li>
//                 <li>
//                   <Link href="#" className="block px-4 py-2 hover:bg-white/20 rounded">Earnings</Link>
//                 </li>
//                 <li>
//                   <button onClick={() => signOut()} className="w-full text-left px-4 py-2 hover:bg-red-500 rounded">
//                     Sign Out
//                   </button>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         ) : (
//           <Link href="/login">
//             <button className="ml-3 bg-[#00D4FF] hover:bg-[#007acc] text-white px-5 py-2 rounded-lg font-semibold transition-all duration-300">
//               Log In
//             </button>
//           </Link>
//         )}
//       </div>
//     </nav>
//   )
// }

// export default Navbar



// 'use client'

// import React, { useState } from 'react'
// import { useSession, signOut } from "next-auth/react"
// import Link from 'next/link'
// import { FaRegCalendarAlt } from "react-icons/fa"

// const Navbar = () => {
//   const { data: session } = useSession()
//   const [showdropdown, setShowdropdown] = useState(false)

//   return (
//     <nav className="bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white px-6 py-3 shadow-xl border-b border-white/10 sticky top-0 z-50 backdrop-blur-md">
//       <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">

//         {/* Logo */}
//         <Link href="/" className="relative flex items-center gap-3 group">
//           {/* Glow Aura */}
//           <div className="absolute -inset-3 bg-gradient-to-r from-[#00d4ff88] to-[#007bff88] rounded-full blur-xl opacity-50 animate-pulse group-hover:opacity-80 transition-all duration-500" />
//           <FaRegCalendarAlt className="text-3xl text-[#00D4FF] relative z-10" />
//           <h2 className="text-3xl font-extrabold tracking-wider relative z-10 bg-gradient-to-r from-white via-cyan-300 to-cyan-500 text-transparent bg-clip-text animate-glowText drop-shadow-lg">
//             Eve<span className="text-[#00D4FF]">REG</span>
//           </h2>
//         </Link>

//         {/* Nav Links */}
//         <div className="flex items-center gap-6 text-lg font-medium relative z-10">
//           {['Home', 'About', 'Events'].map((label, i) => (
//             <Link key={i} href={`/${label === 'Home' ? '' : label.toLowerCase()}`}>
//               <span className="relative group">
//                 <span className="transition-colors duration-200 group-hover:text-[#00D4FF]">{label}</span>
//                 <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#00D4FF] group-hover:w-full transition-all duration-300"></span>
//               </span>
//             </Link>
//           ))}

//           {/* Auth */}
//           {session ? (
//             <div className="relative">
//               <button
//                 onClick={() => setShowdropdown(!showdropdown)}
//                 onBlur={() => setTimeout(() => setShowdropdown(false), 200)}
//                 className="ml-2 bg-[#00D4FF] text-black hover:bg-[#00bcd4] font-semibold rounded-xl px-4 py-2 shadow-md shadow-cyan-400/20 transition-all flex items-center"
//               >
//                 {session.user.email.split('@')[0]}
//                 <svg className="w-3 h-3 ml-2" viewBox="0 0 10 6" fill="none">
//                   <path d="M1 1L5 5L9 1" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//                 </svg>
//               </button>

//               {/* Dropdown */}
//               <div className={`absolute right-0 top-12 mt-1 w-60 rounded-2xl backdrop-blur-md bg-gradient-to-br from-[#0f0c29cc] to-[#302b6399] text-white shadow-xl transition-all duration-300 z-50 border border-cyan-400/10 ${showdropdown ? 'block' : 'hidden'}`}>
//                 <ul className="text-sm py-2 space-y-1">
//                   {session?.user?.role === 'admin' && (
//                     <li>
//                       <Link href="/admin/operator-requests" className="block px-4 py-2 hover:bg-white/10 rounded-xl transition">Operator Requests</Link>
//                     </li>
//                   )}
//                   {session?.user?.role === 'admin' && (
//                     <li>
//                       <Link href="/admin/events" className="block px-4 py-2 hover:bg-white/10 rounded-xl transition">Admin Dashboard</Link>
//                     </li>
//                   )}
//                   {session?.user?.role === 'admin' && (
//                     <li>
//                       <Link href="/admin/operator-list" className="block px-4 py-2 hover:bg-white/10 rounded-xl transition">Operator List</Link>
//                     </li>
//                   )}
//                   {['admin'].includes(session?.user?.role) && (
//                     <li>
//                       <Link href="/admin/events/unapproved" className="block px-4 py-2 hover:bg-white/10 rounded-xl transition">Manage Events</Link>
//                     </li>
//                   )}
//                   <li>
//                     <Link href="/Username" className="block px-4 py-2 hover:bg-white/10 rounded-xl transition">Creator's Profile</Link>
//                   </li>
//                   <li>
//                     <Link href="/user-profile" className="block px-4 py-2 hover:bg-white/10 rounded-xl transition">User Profile</Link>
//                   </li>
//                   <li>
//                     <Link href="/result" className="block px-4 py-2 hover:bg-white/10 rounded-xl transition">Check Result</Link>
//                   </li>
//                   <li>
//                     <button onClick={() => signOut()} className="w-full text-left px-4 py-2 text-red-400 hover:bg-red-500/20 rounded-xl transition">Sign Out</button>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           ) : (
//             <Link href="/login">
//               <button className="bg-[#00D4FF] hover:bg-[#00bcd4] text-black font-semibold px-6 py-2 rounded-xl shadow-md transition">
//                 Log In
//               </button>
//             </Link>
//           )}
//         </div>
//       </div>
//     </nav>
//   )
// }

// export default Navbar



// 'use client'

// import React, { useState } from 'react'
// import { useSession, signOut } from 'next-auth/react'
// import Link from 'next/link'
// import { FaUserAstronaut } from 'react-icons/fa'

// const Navbar = () => {
//   const { data: session } = useSession()
//   const [showdropdown, setShowdropdown] = useState(false)

//   const username = session?.user?.email?.split('@')[0]

//   return (
//     <nav className="bg-gradient-to-br from-[#0f0c29] via-[#1f1c47] to-[#2c2c54] text-white px-6 py-3 shadow-xl sticky top-0 z-50 backdrop-blur-lg border-b border-white/10">
//       <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">

//         {/* Logo */}
//         <Link href="/" className="relative flex items-center gap-3 group">
//           {/* Glowing Aura */}
//           <div className="absolute -inset-4 bg-gradient-to-r from-[#00ffd0aa] to-[#0084ff88] rounded-full blur-xl opacity-60 animate-pulse group-hover:opacity-80 transition-all duration-500" />

//           {/* Animated Calendar Icon */}
//           <div className="w-10 h-10 relative z-10">
//             <lord-icon
//               src="https://cdn.lordicon.com/qvyppzqz.json"
//               trigger="loop"
//               delay="1500"
//               colors="primary:#00f6ff,secondary:#ffffff"
//               style={{ width: '100%', height: '100%' }}
//             />
//           </div>

//           {/* Logo Text */}
//           <h2 className="text-3xl font-extrabold tracking-wider relative z-10 bg-gradient-to-r from-white via-cyan-300 to-cyan-500 text-transparent bg-clip-text drop-shadow-xl">
//             Eve<span className="text-[#00E0FF]">REG</span>
//           </h2>
//         </Link>


//         {/* Nav Links and Auth */}
//         <div className="flex items-center gap-6 text-lg font-medium relative z-10">
//           {['Home', 'About', 'Events'].map((label, index) => (
//             <Link key={index} href={`/${label === 'Home' ? '' : label.toLowerCase()}`}>
//               <span className="relative group cursor-pointer">
//                 <span className="transition-all duration-300 group-hover:text-[#00FFD0] group-hover:drop-shadow-md">{label}</span>
//                 <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#00FFD0] group-hover:w-full transition-all duration-300"></span>
//               </span>
//             </Link>
//           ))}

//           {session ? (
//             <div className="relative flex items-center gap-4">
//               <span className="text-sm font-semibold text-cyan-300 animate-fadeIn">
//                 Welcome, {username} 🎉
//               </span>
//               <button
//                 onClick={() => setShowdropdown(!showdropdown)}
//                 onBlur={() => setTimeout(() => setShowdropdown(false), 200)}
//                 className="bg-gradient-to-r from-[#00FFC6] to-[#00A8FF] text-black font-bold rounded-full px-5 py-2 shadow-md hover:scale-105 hover:shadow-cyan-300/30 transition-all flex items-center"
//               >
//                 {username}
//                 <svg className="w-3 h-3 ml-2" viewBox="0 0 10 6" fill="none">
//                   <path d="M1 1L5 5L9 1" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//                 </svg>
//               </button>

//               {/* Dropdown */}
//               <div className={`absolute right-0 top-16 w-60 rounded-2xl backdrop-blur-md bg-gradient-to-br from-[#1a1a3ccc] to-[#1f1c47cc] text-white shadow-xl transition-all duration-300 z-50 border border-cyan-400/10 ${showdropdown ? 'block' : 'hidden'}`}>
//                 <ul className="text-sm py-2 space-y-1">
//                   {session?.user?.role === 'admin' && (
//                     <>
//                       <li><Link href="/admin/operator-requests" className="block px-4 py-2 hover:bg-white/10 rounded-xl transition">Operator Requests</Link></li>
//                       <li><Link href="/admin/events" className="block px-4 py-2 hover:bg-white/10 rounded-xl transition">Admin Dashboard</Link></li>
//                       <li><Link href="/admin/operator-list" className="block px-4 py-2 hover:bg-white/10 rounded-xl transition">Operator List</Link></li>
//                       <li><Link href="/admin/events/unapproved" className="block px-4 py-2 hover:bg-white/10 rounded-xl transition">Manage Events</Link></li>
//                     </>
//                   )}
//                   <li><Link href="/user-profile" className="block px-4 py-2 hover:bg-white/10 rounded-xl transition">User Profile</Link></li>
//                   <li><Link href="/result" className="block px-4 py-2 hover:bg-white/10 rounded-xl transition">Check Result</Link></li>
//                   <li><button onClick={() => signOut()} className="w-full text-left px-4 py-2 text-red-400 hover:bg-red-500/20 rounded-xl transition">Sign Out</button></li>
//                 </ul>
//               </div>
//             </div>
//           ) : (
//             <Link href="/login">
//               <button className="bg-gradient-to-r from-[#00FFB3] to-[#00D4FF] text-black font-semibold px-6 py-2 rounded-xl shadow-lg hover:scale-105 transition">
//                 Log In
//               </button>
//             </Link>
//           )}
//         </div>
//       </div>
//     </nav>
//   )
// }

// export default Navbar


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
