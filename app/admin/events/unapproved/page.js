// "use client"
// import { useEffect, useState } from 'react'

// export default function UnapprovedEventsPage() {
//   const [events, setEvents] = useState([])
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     const fetchUnapprovedEvents = async () => {
//       try {
//         const res = await fetch('/api/events/unapproved')
//         const data = await res.json()

//         if (!res.ok) throw new Error(data.error || 'Failed to fetch events')
//         setEvents(data)
//       } catch (error) {
//         console.error('Error fetching unapproved events:', error)
//         alert('Error loading events')
//       } finally {
//         setLoading(false)
//       }
//     }

//     fetchUnapprovedEvents()
//   }, [])

//  const handleApprove = async (id) => {
//   const approveRes = await fetch(`/api/events/${id}/approve`, { method: 'PUT' })
//   const publishRes = await fetch(`/api/events/${id}/publish`, { method: 'PUT' })

//   if (approveRes.ok && publishRes.ok) {
//     setEvents(events.filter(e => e.event_id !== id))
//     alert('✅ Event approved & published!')
//   } else {
//     alert('❌ Failed to approve or publish event.')
//   }
// }



// //  const handlePublish = async (id) => {
// //   const res = await fetch(`/api/events/${id}/publish`, { method: 'POST' }) // ✅ POST
// //   const data = await res.json()

// //   if (res.ok) {
// //     alert('✅ Event published!')
// //   } else {
// //     alert(`❌ Failed to publish.\nServer says: ${data.error || 'Unknown error'}`)
// //   }
// // }


//   if (loading) return <p className="text-center mt-10">Loading...</p>

//   return (
//     <div className="p-6 max-w-3xl mx-auto">
//       <h1 className="text-2xl font-bold mb-6">Unapproved Events</h1>

//       {events.length === 0 ? (
//         <p>No pending events to approve.</p>
//       ) : (
//         events.map(event => (
//           <div key={event.event_id} className="border p-4 rounded mb-4 shadow-sm">
//             <h2 className="font-semibold text-lg">{event.title}</h2>
//             <p>{event.description}</p>
//             <p className="text-sm text-gray-600">Date: {new Date(event.date).toLocaleDateString()}</p>
//             <p className="text-sm text-gray-600">Time: {new Date(event.time).toLocaleTimeString()}</p>
//             <div className="mt-2 flex gap-4">
//               <button onClick={() => handleApprove(event.event_id)} className="bg-green-600 text-white px-3 py-1 rounded">Approve & Publish</button>
              
//             </div>
//           </div>
//         ))
//       )}
//     </div>
//   )
// }


// "use client"
// import { useEffect, useState } from 'react'

// export default function UnapprovedEventsPage() {
//   const [events, setEvents] = useState([])
//   const [loading, setLoading] = useState(true)
//   const [processingId, setProcessingId] = useState(null)

//   useEffect(() => {
//     const fetchUnapprovedEvents = async () => {
//       try {
//         const res = await fetch('/api/events/unapproved')
//         const data = await res.json()
//         if (!res.ok) throw new Error(data.error || 'Failed to fetch events')
//         setEvents(data)
//       } catch (error) {
//         console.error('Error fetching unapproved events:', error)
//         alert('Error loading events')
//       } finally {
//         setLoading(false)
//       }
//     }

//     fetchUnapprovedEvents()
//   }, [])

//   const handleApprove = async (id) => {
//     setProcessingId(id)
//     try {
//       const approveRes = await fetch(`/api/events/${id}/approve`, { method: 'PUT' })
//       const publishRes = await fetch(`/api/events/${id}/publish`, { method: 'PUT' })

//       if (approveRes.ok && publishRes.ok) {
//         setEvents(prev => prev.filter(e => e.event_id !== id))
//         alert('✅ Event approved & published!')
//       } else {
//         alert('❌ Failed to approve or publish event.')
//       }
//     } catch (error) {
//       console.error('Approval error:', error)
//       alert('Something went wrong.')
//     } finally {
//       setProcessingId(null)
//     }
//   }

//   if (loading) return <p className="text-center mt-10">Loading...</p>

//   return (
//     <div className="p-6 max-w-3xl mx-auto">
//       <h1 className="text-2xl font-bold mb-6">Unapproved Events</h1>

//       {events.length === 0 ? (
//         <p className="text-gray-600">No pending events to approve.</p>
//       ) : (
//         events.map(event => (
//           <div key={event.event_id} className="border p-4 rounded mb-4 shadow-sm bg-white/10 backdrop-blur-md text-white">
//             <h2 className="font-semibold text-lg">{event.title}</h2>
//             <p className="mb-1">{event.description}</p>
//             <p className="text-sm text-gray-300">Date: {new Date(event.date).toLocaleDateString()}</p>
//             <p className="text-sm text-gray-300">Time: {new Date(event.time).toLocaleTimeString()}</p>

//             <div className="mt-3">
//               <button
//                 onClick={() => handleApprove(event.event_id)}
//                 disabled={processingId === event.event_id}
//                 className={`px-4 py-2 rounded font-semibold transition 
//                   ${processingId === event.event_id
//                     ? 'bg-green-400 cursor-not-allowed'
//                     : 'bg-green-600 hover:bg-green-700'}
//                   text-white`}
//               >
//                 {processingId === event.event_id ? 'Processing...' : 'Approve & Publish'}
//               </button>
//             </div>
//           </div>
//         ))
//       )}
//     </div>
//   )
// }



"use client"
import { useEffect, useState } from 'react'

export default function UnapprovedEventsPage() {
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true)
  const [processingId, setProcessingId] = useState(null)

  useEffect(() => {
    const fetchUnapprovedEvents = async () => {
      try {
        const res = await fetch('/api/events/unapproved')
        const data = await res.json()
        if (!res.ok) throw new Error(data.error || 'Failed to fetch events')
        setEvents(data)
      } catch (error) {
        console.error('Error fetching unapproved events:', error)
        alert('Error loading events')
      } finally {
        setLoading(false)
      }
    }

    fetchUnapprovedEvents()
  }, [])

  const handleApprove = async (id) => {
    setProcessingId(id)
    try {
      const approveRes = await fetch(`/api/events/${id}/approve`, { method: 'PUT' })
      const publishRes = await fetch(`/api/events/${id}/publish`, { method: 'PUT' })

      if (approveRes.ok && publishRes.ok) {
        setEvents(prev => prev.filter(e => e.event_id !== id))
        alert('✅ Event approved & published!')
      } else {
        alert('❌ Failed to approve or publish event.')
      }
    } catch (error) {
      console.error('Approval error:', error)
      alert('Something went wrong.')
    } finally {
      setProcessingId(null)
    }
  }

  if (loading) {
    return <p className="text-center text-white text-lg mt-12 animate-pulse">⏳ Loading unapproved events...</p>
  }

  return (
    <div className="min-h-screen px-6 py-12 bg-gradient-to-br from-[#1f1c2c] via-[#928dab] to-[#1f1c2c] text-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10 tracking-tight">📝 Pending Event Approvals</h1>

        {events.length === 0 ? (
          <p className="text-center text-gray-300 text-lg">🎉 All events are approved.</p>
        ) : (
          <div className="grid gap-6">
            {events.map(event => (
              <div
                key={event.event_id}
                className="bg-white/10 border border-white/20 rounded-2xl p-6 shadow-xl backdrop-blur-md hover:shadow-2xl transition"
              >
                <h2 className="text-2xl font-semibold mb-2">{event.title}</h2>
                <p className="text-gray-200 mb-3">{event.description}</p>

                <div className="text-sm text-gray-300 mb-4">
                  <p>📅 Date: <span className="text-white">{new Date(event.date).toLocaleDateString()}</span></p>
                  <p>⏰ Time: <span className="text-white">{new Date(event.time).toLocaleTimeString()}</span></p>
                </div>

                <button
                  onClick={() => handleApprove(event.event_id)}
                  disabled={processingId === event.event_id}
                  className={`px-5 py-2.5 rounded-xl text-white font-medium transition shadow ${
                    processingId === event.event_id
                      ? 'bg-green-400 cursor-not-allowed'
                      : 'bg-green-600 hover:bg-green-700'
                  }`}
                >
                  {processingId === event.event_id ? 'Processing...' : '✅ Approve & Publish'}
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
