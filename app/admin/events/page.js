// // // "use client"
// // // import { useEffect, useState } from 'react'
// // // import { useSession } from 'next-auth/react'

// // // export default function AdminEventsPage() {
// // //   const { data: session, status } = useSession()
// // //   const [events, setEvents] = useState([])

// // //  useEffect(() => {
// // //   const fetchEvents = async () => {
// // //     try {
// // //       const res = await fetch('/api/events')
// // //       if (!res.ok) throw new Error('Failed to fetch events')
// // //       const data = await res.json()

// // //       const now = new Date()

// // //     const upcoming = data.filter(event => {
// // //   const eventDateTime = parseEventDateTime(event.date, event.time)
// // //   return (
// // //     event.is_approved &&
// // //     event.is_published &&
// // //     eventDateTime >= new Date()
// // //   )
// // // })


// // //       setEvents(upcoming)
// // //     } catch (err) {
// // //       console.error('Error loading events:', err)
// // //     }
// // //   }

// // //   fetchEvents()
// // // }, [])

// // // const parseEventDateTime = (dateStr, timeStr) => {
// // //   const fullTime = timeStr.length === 5 ? `${timeStr}:00` : timeStr
// // //   return new Date(`${dateStr}T${fullTime}`)
// // // }



// // //   const handleApprove = async (eventId) => {
// // //     const res = await fetch(`/api/events/${eventId}/approve`, { method: 'POST' })
// // //     if (res.ok) {
// // //       alert('Event approved')
// // //       setEvents(events.filter(e => e.event_id !== eventId)) // remove approved event from list
// // //     } else {
// // //       alert('Failed to approve event')
// // //     }
// // //   }

// // //   if (status === 'loading') return <p>Loading...</p>
// // //   if (!session || session.user.role !== 'admin') return <p>You must be admin.</p>

// // //   return (
// // //     <div className="p-6 max-w-4xl mx-auto">
// // //       <h1 className="text-2xl font-bold mb-4">Approved Upcoming Events</h1>

// // //       {events.length === 0 ? (
// // //         <p>No pending events.</p>
// // //       ) : (
// // //         events.map(event => (
// // //           <div key={event.event_id} className="border p-4 mb-4 rounded shadow">
// // //             <h2 className="text-lg font-semibold">{event.title}</h2>
// // //             <p className="text-gray-700 mb-2">{event.description}</p>
// // //             <p className="text-sm text-gray-500">Event Time: {parseEventDateTime(event.date, event.time).toLocaleString()}</p>

// // //             <button
// // //               className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
// // //               onClick={() => handleApprove(event.event_id)}
// // //             >
// // //               Approve
// // //             </button>
// // //           </div>
// // //         ))
// // //       )}
// // //     </div>
// // //   )
// // // }


// // // "use client"
// // // import { useEffect, useState } from 'react'
// // // import { useSession } from 'next-auth/react'

// // // export default function AdminEventsPage() {
// // //   const { data: session, status } = useSession()
// // //   const [events, setEvents] = useState([])

// // //   useEffect(() => {
// // //     const fetchEvents = async () => {
// // //       try {
// // //         const res = await fetch('/api/events')
// // //         if (!res.ok) throw new Error('Failed to fetch events')
// // //         const data = await res.json()

// // //         const now = new Date()

// // //         // Only include approved, published, and future events
// // //         const upcoming = data.filter(event => {
// // //           const eventDateTime = parseEventDateTime(event.date, event.time)
// // //           return (
// // //             event.is_approved &&
// // //             event.is_published &&
// // //             eventDateTime >= now
// // //           )
// // //         })

// // //         setEvents(upcoming)
// // //       } catch (err) {
// // //         console.error('Error loading events:', err)
// // //       }
// // //     }

// // //     fetchEvents()
// // //   }, [])

// // //   const parseEventDateTime = (dateStr, timeStr) => {
// // //     const fullTime = timeStr.length === 5 ? `${timeStr}:00` : timeStr
// // //     return new Date(`${dateStr}T${fullTime}`)
// // //   }

// // //   if (status === 'loading') return <p>Loading...</p>
// // //   if (!session || session.user.role !== 'admin') return <p>You must be admin.</p>

// // //   return (
// // //     <div className="p-6 max-w-4xl mx-auto">
// // //       <h1 className="text-2xl font-bold mb-4">Upcoming Approved & Published Events</h1>

// // //       {events.length === 0 ? (
// // //         <p>No upcoming events.</p>
// // //       ) : (
// // //         events.map(event => (
// // //           <div key={event.event_id} className="border p-4 mb-4 rounded shadow">
// // //             <h2 className="text-lg font-semibold">{event.title}</h2>
// // //             <p className="text-gray-700 mb-2">{event.description}</p>
// // //             <p className="text-sm text-gray-500">
// // //               {event.time} 
// // //               {/* {parseEventDateTime(event.date, event.time).toLocaleString()} */}
// // //             </p>
// // //           </div>
// // //         ))
// // //       )}
// // //     </div>
// // //   )
// // // }




// // "use client"
// // import { useEffect, useState } from 'react'
// // import { useSession } from 'next-auth/react'
// // import Link from 'next/link'

// // export default function AdminEventsPage() {
// //   const { data: session, status } = useSession()
// //   const [events, setEvents] = useState([])
// //   const [filter, setFilter] = useState('upcoming') // 'upcoming', 'past', 'all'

// //   useEffect(() => {
// //     const fetchEvents = async () => {
// //       try {
// //         const res = await fetch('/api/events')
// //         if (!res.ok) throw new Error('Failed to fetch events')
// //         const data = await res.json()

// //         const now = new Date()

// //         let filtered = data.filter(e => e.is_approved && e.is_published)

// //         if (filter === 'upcoming') {
// //           filtered = filtered.filter(e => parseEventDateTime(e.date, e.time) >= now)
// //         } else if (filter === 'past') {
// //           filtered = filtered.filter(e => parseEventDateTime(e.date, e.time) < now)
// //         }

// //         setEvents(filtered)
// //       } catch (err) {
// //         console.error('Error loading events:', err)
// //       }
// //     }

// //     fetchEvents()
// //   }, [filter])

// //   const parseEventDateTime = (dateStr, timeStr) => {
// //     const fullTime = timeStr.length === 5 ? `${timeStr}:00` : timeStr
// //     return new Date(`${dateStr}T${fullTime}`)
// //   }

// //   const handleTogglePublish = async (id) => {
// //     const res = await fetch(`/api/events/${id}/toggle-publish`, { method: 'PUT' })
// //     if (res.ok) location.reload()
// //     else alert('Failed to toggle publish state')
// //   }

// //   const handleUnapprove = async (id) => {
// //     const res = await fetch(`/api/events/${id}/unapprove`, { method: 'PUT' })
// //     if (res.ok) location.reload()
// //     else alert('Failed to unapprove event')
// //   }

// //   if (status === 'loading') return <p>Loading...</p>
// //   if (!session || session.user.role !== 'admin') return <p>You must be admin.</p>

// //   return (
// //     <div className="p-6 max-w-4xl mx-auto">
// //       <h1 className="text-2xl font-bold mb-4">Approved & Published Events</h1>

// //       {/* Filter Dropdown */}
// //       <div className="mb-4">
// //         <label className="mr-2 font-medium">Filter:</label>
// //         <select
// //           className="border px-2 py-1 rounded"
// //           value={filter}
// //           onChange={e => setFilter(e.target.value)}
// //         >
// //           <option value="upcoming">Upcoming</option>
// //           <option value="past">Past</option>
// //           <option value="all">All</option>
// //         </select>
// //       </div>

// //       {/* Events */}
// //       {events.length === 0 ? (
// //         <p>No events found.</p>
// //       ) : (
// //         events.map(event => (
// //           <div key={event.event_id} className="border p-4 mb-4 rounded shadow">
// //             <h2 className="text-lg font-semibold">{event.title}</h2>
// //             <p className="text-gray-700 mb-2">{event.description}</p>
// //             <p className="text-sm text-gray-500">
// //               {event.date} | {new Date(event.time).toLocaleTimeString()}
// //             </p>

// //             {/* Action Buttons */}
// //             <div className="mt-3 flex flex-wrap gap-2">
// //               <Link href={`/admin/events/${event.event_id}/participants`}>
// //                 <button className="bg-blue-600 text-white px-3 py-1 rounded">View Participants</button>
// //               </Link>

// //               <a
// //                 href={`/api/events/${event.event_id}/participants/csv`}
// //                 className="bg-indigo-500 text-white px-3 py-1 rounded"
// //               >
// //                 ⬇ Export CSV
// //               </a>

// //               <Link href={`/admin/events/${event.event_id}/edit`}>
// //                 <button className="bg-yellow-500 text-white px-3 py-1 rounded">Edit</button>
// //               </Link>

// //               <button
// //                 onClick={() => handleTogglePublish(event.event_id)}
// //                 className={`px-3 py-1 rounded text-white ${event.is_published ? 'bg-red-600' : 'bg-green-600'}`}
// //               >
// //                 {event.is_published ? 'Unpublish' : 'Publish'}
// //               </button>

// //               <button
// //                 onClick={() => handleUnapprove(event.event_id)}
// //                 className="bg-yellow-700 text-white px-3 py-1 rounded"
// //               >
// //                 Unapprove
// //               </button>
// //             </div>

// //             {/* Registration Count */}
// //             <p className="text-sm text-gray-400 mt-2">
// //               Total Registrations: {event._count?.registrations || 0}
// //             </p>
// //           </div>
// //         ))
// //       )}
// //     </div>
// //   )
// // }


// 'use client'

// import { useEffect, useState } from 'react'
// import { useSession } from 'next-auth/react'
// import Link from 'next/link'
// import { motion } from 'framer-motion'
// import {
//   FaEdit,
//   FaEye,
//   FaDownload,
//   FaToggleOn,
//   FaToggleOff,
//   FaBan
// } from 'react-icons/fa'

// export default function AdminEventsPage() {
//   const { data: session, status } = useSession()
//   const [events, setEvents] = useState([])
//   const [filter, setFilter] = useState('upcoming')

//   useEffect(() => {
//     const fetchEvents = async () => {
//       try {
//         const res = await fetch('/api/events')
//         if (!res.ok) throw new Error('Failed to fetch events')
//         const data = await res.json()

//         const now = new Date()

//         let filtered = data.filter(e => e.is_approved && e.is_published)

//         if (filter === 'upcoming') {
//           filtered = filtered.filter(e => parseEventDateTime(e.date, e.time) >= now)
//         } else if (filter === 'past') {
//           filtered = filtered.filter(e => parseEventDateTime(e.date, e.time) < now)
//         }

//         setEvents(filtered)
//       } catch (err) {
//         console.error('Error loading events:', err)
//       }
//     }

//     fetchEvents()
//   }, [filter])

//   const parseEventDateTime = (dateStr, timeStr) => {
//     const fullTime = timeStr.length === 5 ? `${timeStr}:00` : timeStr
//     return new Date(`${dateStr}T${fullTime}`)
//   }

//   const handleTogglePublish = async (id) => {
//     const res = await fetch(`/api/events/${id}/toggle-publish`, { method: 'PUT' })
//     if (res.ok) location.reload()
//     else alert('Failed to toggle publish state')
//   }

//   const handleUnapprove = async (id) => {
//     const res = await fetch(`/api/events/${id}/unapprove`, { method: 'PUT' })
//     if (res.ok) location.reload()
//     else alert('Failed to unapprove event')
//   }

//   if (status === 'loading') return <p className="text-white text-center mt-10">Loading...</p>
//   if (!session || session.user.role !== 'admin') return <p className="text-white text-center mt-10">You must be admin.</p>

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white p-8">
//       <div className="max-w-6xl mx-auto">
//         <h1 className="text-4xl font-bold mb-10 text-center tracking-tight">
//           🚀 Manage Your Events
//         </h1>

//         {/* Filter Control */}
//         <div className="flex justify-end mb-8">
//           <select
//             value={filter}
//             onChange={e => setFilter(e.target.value)}
//             className="bg-white/10 text-white px-5 py-2 rounded-lg border border-white/30 shadow-lg backdrop-blur-md focus:outline-none hover:bg-white/20 transition"
//           >
//             <option value="upcoming">Upcoming</option>
//             <option value="past">Past</option>
//             <option value="all">All</option>
//           </select>
//         </div>

//         {/* Event List */}
//         {events.length === 0 ? (
//           <p className="text-center text-gray-300 text-lg">No events found.</p>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
//             {events.map(event => (
//               <motion.div
//                 key={event.event_id}
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.4 }}
//                 className="bg-white/10 border border-white/20 p-6 rounded-3xl shadow-xl backdrop-blur-lg hover:shadow-2xl transition"
//               >
//                 <div className="flex justify-between items-center mb-4">
//                   <h2 className="text-2xl font-semibold">{event.title}</h2>
//                   <span className="text-sm text-gray-300 whitespace-nowrap">
//                     📅 {event.date} @ {event.time}
//                   </span>
//                 </div>

//                 <p className="text-gray-200 mb-6">{event.description}</p>

//                 {/* Action Buttons */}
//                 <div className="flex flex-wrap gap-3">
//                   <Link href={`/admin/events/${event.event_id}/participants`}>
//                     <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-xl shadow text-sm">
//                       <FaEye /> Participants
//                     </button>
//                   </Link>

//                   <a
//                     href={`/api/events/${event.event_id}/participants/csv`}
//                     className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-xl shadow text-sm"
//                   >
//                     <FaDownload /> Export CSV
//                   </a>

//                   <Link href={`/admin/events/${event.event_id}/edit`}>
//                     <button className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 px-4 py-2 rounded-xl shadow text-sm text-black">
//                       <FaEdit /> Edit
//                     </button>
//                   </Link>

//                   <button
//                     onClick={() => handleTogglePublish(event.event_id)}
//                     className={`flex items-center gap-2 px-4 py-2 rounded-xl shadow text-sm transition ${
//                       event.is_published
//                         ? 'bg-red-600 hover:bg-red-700'
//                         : 'bg-green-600 hover:bg-green-700'
//                     }`}
//                   >
//                     {event.is_published ? <FaToggleOff /> : <FaToggleOn />}
//                     {event.is_published ? 'Unpublish' : 'Publish'}
//                   </button>

//                   <button
//                     onClick={() => handleUnapprove(event.event_id)}
//                     className="flex items-center gap-2 bg-orange-700 hover:bg-orange-800 px-4 py-2 rounded-xl shadow text-sm"
//                   >
//                     <FaBan /> Unapprove
//                   </button>
//                 </div>

//                 <p className="text-xs text-gray-400 mt-4">
//                   👥 Registrations: <strong>{event._count?.registrations || 0}</strong>
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   )
// }




'use client'

import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  FaEdit,
  FaEye,
  FaDownload,
  FaToggleOn,
  FaToggleOff,
  FaBan,
  FaTrashRestoreAlt
} from 'react-icons/fa'

export default function AdminEventsPage() {
  const { data: session, status } = useSession()
  const [events, setEvents] = useState([])
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch('/api/events')
        if (!res.ok) throw new Error('Failed to fetch events')
        const data = await res.json()
        const now = new Date()

        let filtered = data

        if (filter === 'upcoming') {
          filtered = filtered.filter(e => !e.is_deleted && new Date(`${e.date}T${e.time}`) >= now)
        } else if (filter === 'past') {
          filtered = filtered.filter(e => !e.is_deleted && new Date(`${e.date}T${e.time}`) < now)
        } else if (filter === 'deleted') {
          filtered = filtered.filter(e => e.is_deleted)
        }

        setEvents(filtered)
      } catch (err) {
        console.error('Error loading events:', err)
      }
    }

    fetchEvents()
  }, [filter])

  const handleTogglePublish = async (id) => {
    const res = await fetch(`/api/events/${id}/toggle-publish`, { method: 'PUT' })
    if (res.ok) location.reload()
    else alert('Failed to toggle publish state')
  }

  const handleUnapprove = async (id) => {
    const res = await fetch(`/api/events/${id}/unapprove`, { method: 'PUT' })
    if (res.ok) location.reload()
    else alert('Failed to unapprove event')
  }

  const handleRestore = async (id) => {
    const res = await fetch(`/api/events/${id}/restore`, { method: 'PUT' })
    if (res.ok) location.reload()
    else alert('Failed to restore event')
  }

  const handleDelete = async (id) => {
    const res = await fetch(`/api/events/${id}/delete`, { method: 'DELETE' })
    if (res.ok) location.reload()
    else alert('Failed to delete event')
  }

  if (status === 'loading') return <p className="text-white text-center mt-10">Loading...</p>
  if (!session || session.user.role !== 'admin') return <p className="text-white text-center mt-10">You must be admin.</p>

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-10 text-center tracking-tight">
          🛠️ Admin Dashboard - All Events
        </h1>

        {/* Filter Control */}
        <div className="flex justify-end mb-8">
          <select
            value={filter}
            onChange={e => setFilter(e.target.value)}
            className="bg-white/10 text-white px-5 py-2 rounded-lg border border-white/30 shadow-lg backdrop-blur-md focus:outline-none hover:bg-white/20 transition"
          >
            <option value="all">All</option>
            <option value="upcoming">Upcoming</option>
            <option value="past">Past</option>
            <option value="deleted">Deleted</option>
          </select>
        </div>

        {/* Event List */}
        {events.length === 0 ? (
          <p className="text-center text-gray-300 text-lg">No events found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {events.map(event => (
              <motion.div
                key={event.event_id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className={`border p-6 rounded-3xl shadow-xl backdrop-blur-lg transition ${event.is_deleted ? 'bg-red-900/20 border-red-400' : 'bg-white/10 border-white/20'}`}
              >
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-semibold">{event.title}</h2>
                  <span className="text-sm text-gray-300 whitespace-nowrap">
                    📅 {event.date} @ {event.time}
                  </span>
                </div>

                <p className="text-gray-200 mb-6">{event.description}</p>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3">
                  {!event.is_deleted && (
                    <>
                      <Link href={`/admin/events/${event.event_id}/participants`}>
                        <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-xl shadow text-sm">
                          <FaEye /> Participants
                        </button>
                      </Link>

                      <a
                        href={`/api/events/${event.event_id}/participants/csv`}
                        download={`event_${event.event_id}_participants.csv`}
                        className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-xl shadow text-sm"
                      >
                        <FaDownload /> Export CSV
                      </a>

                      <Link href={`/admin/events/${event.event_id}/edit`}>
                        <button className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 px-4 py-2 rounded-xl shadow text-sm text-black">
                          <FaEdit /> Edit
                        </button>
                      </Link>

                      <button
                        onClick={() => handleTogglePublish(event.event_id)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-xl shadow text-sm transition ${event.is_published ? 'bg-red-600 hover:bg-red-700' : 'bg-green-600 hover:bg-green-700'}`}
                      >
                        {event.is_published ? <FaToggleOff /> : <FaToggleOn />}
                        {event.is_published ? 'Unpublish' : 'Publish'}
                      </button>

                      {/* <button
                        onClick={() => handleUnapprove(event.event_id)}
                        className="flex items-center gap-2 bg-orange-700 hover:bg-orange-800 px-4 py-2 rounded-xl shadow text-sm"
                      >
                        <FaBan /> Unapprove
                      </button> */}

                      <button
                        onClick={() => handleDelete(event.event_id)}
                        className="flex items-center gap-2 bg-red-800 hover:bg-red-900 px-4 py-2 rounded-xl shadow text-sm"
                      >
                        Delete
                      </button>
                    </>
                  )}

                  {event.is_deleted && (
                    <button
                      onClick={() => handleRestore(event.event_id)}
                      className="flex items-center gap-2 bg-green-600 hover:bg-green-700 px-4 py-2 rounded-xl shadow text-sm"
                    >
                      <FaTrashRestoreAlt /> Restore
                    </button>
                  )}
                </div>

                <p className="text-xs text-gray-400 mt-4">
                  👥 Registrations: <strong>{event._count?.registrations || 0}</strong>
                </p>
                <p className="text-xs text-gray-400">
                  Status: {event.is_deleted ? '🗑 Deleted' : event.is_published ? '🟢 Published' : '🔴 Unpublished'}
                </p>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
