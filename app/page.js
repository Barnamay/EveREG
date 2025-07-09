// "use client"

// import React from 'react'
// import { useSession, signIn, signOut } from "next-auth/react"
// import Link from 'next/link'

// export default function Home() {
//   return (
//     <>
//       <div className="flex justify-center flex-col items-center text-amber-50 h-[40vh] ">
//         <div className="font-extrabold text-3xl">Check Events</div>
//         <p>check the latest events here.</p>
//         <div>
//           <button type="button" className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
//             <Link href="/events">Start Now</Link>
//           </button>
//         </div>
//       </div>

//       <div className="bg-white opacity-30 h-1 gap-4"></div>

//       <div className="flex justify-center gap-7 items-center text-amber-50 h-[40vh]  ">
//         <span className="flex justify-center items-center">
//           <img className="bg-slate-400 rounded-2xl p-2 text-black" src="/event1.jpg" width={400} alt="" />
//         </span><span className="flex justify-center items-center">
//           <img className="bg-slate-400 rounded-2xl p-2 text-black" src="/event2.jpg" width={400} alt="" />
//         </span>
//         <span className="flex justify-center items-center">
//           <img className="bg-slate-400 rounded-2xl p-2 text-black" src="/event3.jpg" width={400} alt="" />
//         </span>
//       </div>


//       <div className="text-white container mx-auto pb-32 pt-14 px-10">More actions
//         <h2 className="text-3xl font-bold text-center mb-14">From Creation to Celebration</h2>
//         <div className="flex gap-5 justify-around">
//           <div className="item space-y-3 flex flex-col items-center justify-center">
//             <img className="bg-slate-400 rounded-full p-2 text-black" width={88} src="/control.gif" alt="" />
//             <p className="font-bold text-center">Control</p>
//             <p className="text-center">Take full command of your event environment.</p>
//           </div>
//           <div className="item space-y-3 flex flex-col items-center justify-center">
//             <img className="bg-slate-400 rounded-full p-2 text-black" width={88} src="/communication.gif" alt="" />
//             <p className="font-bold text-center">Coordinate</p>
//             <p className="text-center">Streamline teamwork between admins, operators, and participants.</p>
//           </div>
//           <div className="item space-y-3 flex flex-col items-center justify-center">
//             <img className="bg-slate-400 rounded-full p-2 text-black" width={88} src="/celebrate3.gif" alt="" />
//             <p className="font-bold text-center">Celebrate</p>
//             <p className="text-center">Enjoy the outcome of well-executed planning.</p>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }


// "use client"

// import React from 'react'
// import Link from 'next/link'
// import { useSession } from 'next-auth/react'

// export default function Home() {
//   const { data: session } = useSession()

//   return (
//     <>
//       {/* Hero Section */}
//       <section className="flex flex-col items-center justify-center text-white min-h-[60vh] bg-gradient-to-br from-[#1b0033] via-[#0f0f25] to-black px-4 text-center">
//         <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight mb-4">
//           Plan. Execute. <span className="text-purple-500">Celebrate.</span>
//         </h1>
//         <p className="text-lg max-w-xl mb-6">
//           Manage events with full control, effortless coordination, and unmatched celebration—built for creators, teams, and dreamers.
//         </p>
//         <Link href="/events">
//           <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-pink-600 hover:to-purple-600 transition rounded-xl shadow-lg text-white font-semibold">
//             🚀 Start Exploring
//           </button>
//         </Link>
//       </section>

//       {/* Large Interactive Image Cards */}
//       <section className="bg-black py-16 px-6">
//         <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-6xl mx-auto">
//           {["/event1.jpg", "/event2.jpg", "/event3.jpg"].map((src, index) => (
//             <div
//               key={index}
//               className="group relative overflow-hidden rounded-3xl border-2 border-purple-700 hover:border-pink-500 transition-all duration-300 shadow-[0_20px_40px_rgba(0,0,0,0.5)] hover:shadow-[0_30px_50px_rgba(255,0,255,0.2)] transform hover:scale-105"
//             >
//               <img
//                 src={src}
//                 alt={`Event ${index + 1}`}
//                 className="w-full h-[320px] object-cover group-hover:blur-[1px] transition duration-500"
//               />
//               <div className="absolute inset-0 bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center text-white text-lg font-bold">
//                 Explore Event {index + 1}
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Control, Coordinate, Celebrate */}
//       <section className="bg-gradient-to-b from-black via-[#1b0033] to-black py-24 px-6 text-white">
//         <h2 className="text-4xl font-bold text-center mb-16">
//           From <span className="text-pink-500">Control</span> to <span className="text-purple-500">Celebration</span>
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-6xl mx-auto">
//           {[
//             {
//               title: "Control",
//               desc: "Take full command of your event environment.",
//               icon: "/control.gif",
//               color: "from-purple-800 to-purple-500",
//             },
//             {
//               title: "Coordinate",
//               desc: "Streamline teamwork between admins, operators, and participants.",
//               icon: "/communication.gif",
//               color: "from-blue-700 to-indigo-500",
//             },
//             {
//               title: "Celebrate",
//               desc: "Enjoy the outcome of well-executed planning.",
//               icon: "/celebrate3.gif",
//               color: "from-pink-600 to-red-500",
//             },
//           ].map(({ title, desc, icon, color }) => (
//             <div
//               key={title}
//               className={`rounded-3xl p-6 bg-white/5 backdrop-blur-md hover:scale-105 transform transition shadow-2xl border border-white/10 hover:border-white/20`}
//             >
//               <div
//                 className={`w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br ${color} flex items-center justify-center shadow-lg`}
//               >
//                 <img src={icon} alt={title} className="w-14 h-14" />
//               </div>
//               <h3 className="text-2xl font-bold text-center mb-2">{title}</h3>
//               <p className="text-center text-sm text-gray-300">{desc}</p>
//             </div>
//           ))}
//         </div>
//       </section>
//     </>
//   )
// }



// "use client"

// import React from 'react'
// import Link from 'next/link'
// import { useSession } from 'next-auth/react'

// export default function Home() {
//   const { data: session } = useSession()

//   return (
//     <>
//       {/* Hero Section */}
//       <section className="flex flex-col items-center justify-center text-white min-h-[75vh] bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] px-6 text-center">
//         <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-400 to-blue-500 animate-text">
//           Control. Coordinate. Celebrate.
//         </h1>
//         <p className="text-lg max-w-2xl mb-6 text-gray-300">
//           Seamlessly manage your event lifecycle — from creation to coordination to celebration.
//         </p>
//         <Link href="/events">
//           <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-pink-600 hover:to-purple-600 transition rounded-xl shadow-lg text-white font-semibold hover:scale-105">
//             🚀 Start Exploring
//           </button>
//         </Link>
//       </section>

//       {/* Interactive Image Cards */}
//       <section className="bg-black py-20 px-6">
//         <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-7xl mx-auto">
//           {["/event1.jpg", "/event2.jpg", "/event3.jpg"].map((src, index) => (
//             <div
//               key={index}
//               className="group relative overflow-hidden rounded-3xl border border-purple-800 bg-white/5 hover:border-pink-500 transition duration-300 shadow-[0_30px_60px_rgba(0,0,0,0.6)] hover:shadow-[0_40px_70px_rgba(255,0,255,0.2)] transform hover:scale-105"
//             >
//               <img
//                 src={src}
//                 alt={`Event ${index + 1}`}
//                 className="w-full h-[340px] object-cover transition-transform duration-500 group-hover:scale-110 group-hover:blur-[2px]"
//               />
//               <div className="absolute inset-0 bg-black/40 backdrop-blur-md opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
//                 <p className="text-white text-xl font-bold">Explore Event {index + 1}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Control, Coordinate, Celebrate */}
//       <section className="bg-gradient-to-b from-black via-[#1b0033] to-black py-24 px-6 text-white">
//         <h2 className="text-4xl font-bold text-center mb-16">
//           From <span className="text-pink-500">Control</span> to <span className="text-purple-500">Celebration</span>
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 max-w-7xl mx-auto">
//           {[
//             {
//               title: "Control",
//               desc: "Own your event workflow with precision.",
//               icon: "/control.gif",
//               color: "from-fuchsia-800 to-violet-600",
//             },
//             {
//               title: "Coordinate",
//               desc: "Collaborate smoothly with teams and participants.",
//               icon: "/communication.gif",
//               color: "from-sky-700 to-blue-500",
//             },
//             {
//               title: "Celebrate",
//               desc: "Enjoy the success of a flawlessly run event.",
//               icon: "/celebrate3.gif",
//               color: "from-pink-600 to-red-500",
//             },
//           ].map(({ title, desc, icon, color }) => (
//             <div
//               key={title}
//               className="rounded-3xl p-6 bg-white/10 backdrop-blur-lg hover:scale-105 transition-all duration-500 border border-white/10 hover:border-white/20 shadow-xl"
//             >
//               <div className={`w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br ${color} flex items-center justify-center shadow-lg`}>
//                 <img src={icon} alt={title} className="w-14 h-14" />
//               </div>
//               <h3 className="text-2xl font-bold text-center mb-2">{title}</h3>
//               <p className="text-center text-sm text-gray-300">{desc}</p>
//             </div>
//           ))}
//         </div>
//       </section>
//     </>
//   )
// }







// "use client"

// import React from 'react'
// import Link from 'next/link'
// import { useSession } from 'next-auth/react'

// export default function Home() {
//   const { data: session } = useSession()

//   return (
//     <>
//       {/* Hero Section with Video Background */}
//       <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center overflow-hidden text-white">
//         {/* Background Video */}
//         <video
//           autoPlay
//           loop
//           muted
//           playsInline
//           className="absolute inset-0 w-full h-full object-cover z-0"
//         >
//           <source src="/vid3.mp4" type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>

//         {/* Overlay */}
//         <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-10" />

//         {/* Hero Content */}
//         <div className="relative z-20 px-6">
//           <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-400 to-blue-500 animate-text drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]">
//             Control. Coordinate. Celebrate.
//           </h1>
//           <p className="text-lg max-w-2xl mx-auto mb-6 text-gray-300 drop-shadow-[0_0_5px_rgba(255,255,255,0.2)]">
//             Seamlessly manage your event lifecycle — from creation to coordination to celebration.
//           </p>
//           <Link href="/events">
//             <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-pink-600 hover:to-purple-600 transition rounded-2xl shadow-xl text-white font-bold hover:scale-110 backdrop-blur-lg border border-white/10">
//               🚀 Start Exploring
//             </button>
//           </Link>
//         </div>
//       </section>

//       {/* Interactive Image Cards */}
//       <section className="bg-black py-24 px-6">
//         <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-7xl mx-auto">
//           {["/event1.jpg", "/event2.jpg", "/event3.jpg"].map((src, index) => (
//             <div
//               key={index}
//               className="group relative overflow-hidden rounded-3xl border border-purple-700 bg-gradient-to-br from-white/5 via-white/10 to-white/5 backdrop-blur-md transition-all duration-500 shadow-[0_30px_60px_rgba(0,0,0,0.6)] hover:shadow-[0_40px_80px_rgba(255,0,255,0.3)] hover:scale-[1.07] hover:border-pink-500"
//             >
//               <img
//                 src={src}
//                 alt={`Event ${index + 1}`}
//                 className="w-full h-[340px] object-cover transition-transform duration-500 group-hover:scale-110 group-hover:blur-[2px] group-hover:brightness-75"
//               />
//               <div className="absolute inset-0 bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
//                 <p className="text-white text-xl font-bold tracking-wide">Explore Event {index + 1}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Control, Coordinate, Celebrate */}
//       <section className="bg-gradient-to-b from-black via-[#1b0033] to-black py-24 px-6 text-white">
//         <h2 className="text-4xl font-bold text-center mb-16">
//           From <span className="text-pink-500">Control</span> to <span className="text-purple-500">Celebration</span>
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 max-w-7xl mx-auto">
//           {[
//             {
//               title: "Control",
//               desc: "Own your event workflow with precision.",
//               icon: "/control.gif",
//               color: "from-fuchsia-800 to-violet-600",
//             },
//             {
//               title: "Coordinate",
//               desc: "Collaborate smoothly with teams and participants.",
//               icon: "/communication.gif",
//               color: "from-sky-700 to-blue-500",
//             },
//             {
//               title: "Celebrate",
//               desc: "Enjoy the success of a flawlessly run event.",
//               icon: "/celebrate3.gif",
//               color: "from-pink-600 to-red-500",
//             },
//           ].map(({ title, desc, icon, color }) => (
//             <div
//               key={title}
//               className="rounded-3xl p-6 bg-white/5 backdrop-blur-lg hover:scale-105 hover:rotate-1 transition-all duration-500 border border-white/10 hover:border-white/20 shadow-[0_8px_30px_rgba(255,255,255,0.1)]"
//             >
//               <div className={`w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br ${color} flex items-center justify-center shadow-xl animate-pulse`}>
//                 <img src={icon} alt={title} className="w-14 h-14" />
//               </div>
//               <h3 className="text-2xl font-bold text-center mb-2">{title}</h3>
//               <p className="text-center text-sm text-gray-300">{desc}</p>
//             </div>
//           ))}
//         </div>
//       </section>
//     </>
//   )
// }


// "use client"

// import React, { useEffect, useState } from "react"
// import Link from "next/link"
// import { useSession } from "next-auth/react"

// export default function Home() {
//   const { data: session } = useSession()

//   // List of video sources (put them in your /public folder)
//   const videos = ["/hero1.mp4", "/hero2.mp4", "/hero3.mp4"]
//   const [currentVideo, setCurrentVideo] = useState(0)

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentVideo((prev) => (prev + 1) % videos.length)
//     }, 8000) // change video every 8 seconds

//     return () => clearInterval(interval)
//   }, [videos.length])

//   return (
//     <>
//       {/* Hero Section with Video Slideshow */}
//       <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center overflow-hidden text-white">
//         {/* Background Video */}
//         <video
//           key={videos[currentVideo]} // force re-render on source change
//           autoPlay
//           loop
//           muted
//           playsInline
//           className="absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-1000 ease-in-out"
//         >
//           <source src={videos[currentVideo]} type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>

//         {/* Dark overlay for readability */}
//         <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-10" />

//         {/* Foreground Text Content */}
//         <div className="relative z-20 px-6">
//           <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-400 to-blue-500 animate-text drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]">
//             Control. Coordinate. Celebrate.
//           </h1>
//           <p className="text-lg max-w-2xl mx-auto mb-6 text-gray-300 drop-shadow-[0_0_5px_rgba(255,255,255,0.2)]">
//             Seamlessly manage your event lifecycle — from creation to coordination to celebration.
//           </p>
//           <Link href="/events">
//             <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-pink-600 hover:to-purple-600 transition rounded-2xl shadow-xl text-white font-bold hover:scale-110 backdrop-blur-lg border border-white/10">
//               🚀 Start Exploring
//             </button>
//           </Link>
//         </div>
//       </section>
//     </>
//   )
// }





// "use client"

// import React, { useEffect, useRef, useState } from "react"
// import Link from "next/link"
// import { useSession } from "next-auth/react"

// export default function Home() {
//   const { data: session } = useSession()
//   const videos = ["/vid1.mp4", "/vid2.mp4", "/vid3.mp4"]

//   const [currentIndex, setCurrentIndex] = useState(0)
//   const [nextIndex, setNextIndex] = useState(1)
//   const videoRefs = [useRef(null), useRef(null)]

//   useEffect(() => {
//     const interval = setInterval(() => {
//       const [currentRef, nextRef] = videoRefs

//       currentRef.current.classList.add("opacity-0")
//       nextRef.current.classList.remove("opacity-0")

//       setTimeout(() => {
//         // swap videos in state
//         setCurrentIndex((prev) => (prev + 1) % videos.length)
//         setNextIndex((prev) => (prev + 1) % videos.length)

//         // swap refs
//         videoRefs.reverse()
//       }, 1000) // match transition duration
//     }, 8000)

//     return () => clearInterval(interval)
//   }, [])

//   return (
//     <>
//       {/* Hero Section with seamless video transition */}
//       <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center overflow-hidden text-white">
//         {/* Two preloaded video layers */}
//         <video
//           key={videos[currentIndex]}
//           ref={videoRefs[0]}
//           autoPlay
//           loop
//           muted
//           playsInline
//           className="absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-1000 opacity-100"
//         >
//           <source src={videos[currentIndex]} type="video/mp4" />
//         </video>
//         <video
//           key={videos[nextIndex]}
//           ref={videoRefs[1]}
//           autoPlay
//           loop
//           muted
//           playsInline
//           className="absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-1000 opacity-0"
//         >
//           <source src={videos[nextIndex]} type="video/mp4" />
//         </video>

//         {/* Overlay */}
//         <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-10" />

//         {/* Hero Text */}
//         <div className="relative z-20 px-6">
//           <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-400 to-blue-500 animate-text drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]">
//             Control. Coordinate. Celebrate.
//           </h1>
//           <p className="text-lg max-w-2xl mx-auto mb-6 text-gray-300 drop-shadow-[0_0_5px_rgba(255,255,255,0.2)]">
//             Seamlessly manage your event lifecycle — from creation to coordination to celebration.
//           </p>
//           <Link href="/events">
//             <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-pink-600 hover:to-purple-600 transition rounded-2xl shadow-xl text-white font-bold hover:scale-110 backdrop-blur-lg border border-white/10">
//               🚀 Start Exploring
//             </button>
//           </Link>
//         </div>
//       </section>

//       {/* Interactive Image Cards */}
//       <section className="bg-black py-24 px-6">
//         <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-7xl mx-auto">
//           {["/event1.jpg", "/event2.jpg", "/event3.jpg"].map((src, index) => (
//             <div
//               key={index}
//               className="group relative overflow-hidden rounded-3xl border border-purple-700 bg-gradient-to-br from-white/5 via-white/10 to-white/5 backdrop-blur-md transition-all duration-500 shadow-[0_30px_60px_rgba(0,0,0,0.6)] hover:shadow-[0_40px_80px_rgba(255,0,255,0.3)] hover:scale-[1.07] hover:border-pink-500"
//             >
//               <img
//                 src={src}
//                 alt={`Event ${index + 1}`}
//                 className="w-full h-[340px] object-cover transition-transform duration-500 group-hover:scale-110 group-hover:blur-[2px] group-hover:brightness-75"
//               />
//               <div className="absolute inset-0 bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
//                 <p className="text-white text-xl font-bold tracking-wide">Explore Event {index + 1}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Control, Coordinate, Celebrate */}
//       <section className="bg-gradient-to-b from-black via-[#1b0033] to-black py-24 px-6 text-white">
//         <h2 className="text-4xl font-bold text-center mb-16">
//           From <span className="text-pink-500">Control</span> to <span className="text-purple-500">Celebration</span>
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 max-w-7xl mx-auto">
//           {[
//             {
//               title: "Control",
//               desc: "Own your event workflow with precision.",
//               icon: "/control.gif",
//               color: "from-fuchsia-800 to-violet-600",
//             },
//             {
//               title: "Coordinate",
//               desc: "Collaborate smoothly with teams and participants.",
//               icon: "/communication.gif",
//               color: "from-sky-700 to-blue-500",
//             },
//             {
//               title: "Celebrate",
//               desc: "Enjoy the success of a flawlessly run event.",
//               icon: "/celebrate3.gif",
//               color: "from-pink-600 to-red-500",
//             },
//           ].map(({ title, desc, icon, color }) => (
//             <div
//               key={title}
//               className="rounded-3xl p-6 bg-white/5 backdrop-blur-lg hover:scale-105 hover:rotate-1 transition-all duration-500 border border-white/10 hover:border-white/20 shadow-[0_8px_30px_rgba(255,255,255,0.1)]"
//             >
//               <div className={`w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br ${color} flex items-center justify-center shadow-xl animate-pulse`}>
//                 <img src={icon} alt={title} className="w-14 h-14" />
//               </div>
//               <h3 className="text-2xl font-bold text-center mb-2">{title}</h3>
//               <p className="text-center text-sm text-gray-300">{desc}</p>
//             </div>
//           ))}
//         </div>
//       </section>
//     </>
//   )
// }


// "use client"

// import React, { useEffect, useRef, useState } from "react"
// import Link from "next/link"
// import { useSession } from "next-auth/react"

// export default function Home() {
//   const { data: session } = useSession()
//   const videos = ["/vid1.mp4", "/vid2.mp4", "/vid3.mp4"]

//   const [currentIndex, setCurrentIndex] = useState(0)
//   const [nextIndex, setNextIndex] = useState(1)
//   const videoRefs = [useRef(null), useRef(null)]

//   useEffect(() => {
//     const interval = setInterval(() => {
//       const [currentRef, nextRef] = videoRefs
//       currentRef.current.classList.add("opacity-0")
//       nextRef.current.classList.remove("opacity-0")
//       setTimeout(() => {
//         setCurrentIndex((prev) => (prev + 1) % videos.length)
//         setNextIndex((prev) => (prev + 1) % videos.length)
//         videoRefs.reverse()
//       }, 1000)
//     }, 8000)
//     return () => clearInterval(interval)
//   }, [])

//   return (
//     <>
//       {/* Hero Video Banner */}
//       <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center overflow-hidden text-white">
//         <video key={videos[currentIndex]} ref={videoRefs[0]} autoPlay loop muted playsInline
//           className="absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-1000 opacity-100">
//           <source src={videos[currentIndex]} type="video/mp4" />
//         </video>
//         <video key={videos[nextIndex]} ref={videoRefs[1]} autoPlay loop muted playsInline
//           className="absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-1000 opacity-0">
//           <source src={videos[nextIndex]} type="video/mp4" />
//         </video>
//         <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-10" />
//         <div className="relative z-20 px-6">
//           <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-400 to-blue-500 animate-text drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]">
//             Control. Coordinate. Celebrate.
//           </h1>
//           <p className="text-lg max-w-2xl mx-auto mb-6 text-gray-300">
//             Seamlessly manage your event lifecycle — from creation to coordination to celebration.
//           </p>
//           <Link href="/events">
//             <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-pink-600 hover:to-purple-600 transition rounded-2xl shadow-xl text-white font-bold hover:scale-110 backdrop-blur-lg border border-white/10">
//               🚀 Start Exploring
//             </button>
//           </Link>
//         </div>
//       </section>

//       {/* Image Gallery with Background Bubbles */}
//       <section className="relative py-24 bg-gradient-to-b from-black via-[#1b0033] to-black px-6 overflow-hidden">
//         {/* GLOW BACKGROUND LAYERS */}
//         <div className="absolute inset-0 -z-10">
//           <div className="overflow-hidden absolute top-1/4 left-1/3 w-96 h-96 bg-purple-600 opacity-30 blur-3xl rounded-full animate-pulse" />
//           <div className="overflow-hidden absolute bottom-0 right-1/4 w-72 h-72 bg-pink-500 opacity-20 blur-2xl rounded-full animate-pulse" />
//           <div className="overflow-hidden absolute top-0 right-0 w-64 h-64 bg-blue-400 opacity-10 blur-[150px] rounded-full" />
//         </div>

//         {/* IMAGE GRID */}
//         <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-7xl mx-auto relative z-10">
//           {["/event1.jpg", "/event2.jpg", "/event3.jpg"].map((src, index) => (
//             <div
//               key={index}
//               className="group relative overflow-hidden rounded-3xl border border-purple-700 bg-white/5 backdrop-blur-md transition-all duration-500 shadow-[0_30px_60px_rgba(0,0,0,0.6)] hover:shadow-[0_40px_80px_rgba(255,0,255,0.3)] hover:scale-[1.07] hover:border-pink-500"
//             >
//               <img
//                 src={src}
//                 alt={`Event ${index + 1}`}
//                 className="w-full h-[340px] object-cover transition-transform duration-500 group-hover:scale-110 group-hover:blur-[2px] group-hover:brightness-75"
//               />
//               <div className="absolute inset-0 bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
//                 <p className="text-white text-xl font-bold">Explore Event {index + 1}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>



//       {/* Feature Section */}
//       <section className="bg-gradient-to-b from-black via-[#1b0033] to-black py-24 px-6 text-white overflow-hidden">
//         <h2 className="text-4xl font-bold text-center mb-16">
//           From <span className="text-pink-500">Control</span> to <span className="text-purple-500">Celebration</span>
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 max-w-7xl mx-auto">
//           {[
//             { title: "Control", desc: "Own your event workflow with precision.", icon: "/control.gif", color: "from-fuchsia-800 to-violet-600" },
//             { title: "Coordinate", desc: "Collaborate smoothly with teams and participants.", icon: "/communication.gif", color: "from-sky-700 to-blue-500" },
//             { title: "Celebrate", desc: "Enjoy the success of a flawlessly run event.", icon: "/celebrate3.gif", color: "from-pink-600 to-red-500" },
//           ].map(({ title, desc, icon, color }) => (
//             <div key={title}
//               className="rounded-3xl p-6 bg-white/5 backdrop-blur-lg hover:scale-105 hover:rotate-1 transition-all duration-500 border border-white/10 hover:border-white/20 shadow-[0_8px_30px_rgba(255,255,255,0.1)]">
//               <div className={`w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br ${color} flex items-center justify-center shadow-xl animate-pulse`}>
//                 <img src={icon} alt={title} className="w-14 h-14" />
//               </div>
//               <h3 className="text-2xl font-bold text-center mb-2">{title}</h3>
//               <p className="text-center text-sm text-gray-300">{desc}</p>
//             </div>
//           ))}
//         </div>
//       </section>
//     </>
//   )
// }



"use client"

import React, { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { useSession } from "next-auth/react"

export default function Home() {
  const { data: session } = useSession()
  const videos = ["/vid1.mp4", "/vid2.mp4", "/vid3.mp4"]

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
