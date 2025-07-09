// "use client"

// import { useEffect, useState } from 'react'
// import { useSession } from 'next-auth/react'
// import { useRouter } from 'next/navigation'
// import { motion } from 'framer-motion'

// export default function ResultsPage() {
//     const { data: session } = useSession()
//     const router = useRouter()
//     const [results, setResults] = useState([])
//     const [eventFilter, setEventFilter] = useState('')
//     const [search, setSearch] = useState('')
//     const [events, setEvents] = useState([])

//     useEffect(() => {
//         const fetchResults = async () => {
//             const res = await fetch('/api/results')
//             if (!res.ok) {
//                 console.error('Failed to fetch results:', res.status)
//                 return
//             }

//             const data = await res.json()
//             setResults(data)
//         }

//         const fetchEvents = async () => {
//             const res = await fetch('/api/events')
//             const data = await res.json()
//             setEvents(data)
//         }
//         fetchResults()
//         fetchEvents()
//     }, [])

//     const filteredResults = results.filter(r => {
//         return (
//             (!eventFilter || r.event.title === eventFilter) &&
//             (!search || r.user.name.toLowerCase().includes(search.toLowerCase()))
//         )
//     })

//     return (
//         <div className="min-h-screen px-6 py-10 bg-gradient-to-br from-[#1e1e2f] via-[#2c2c44] to-[#1a1a2a] text-white">
//             <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-10 bg-gradient-to-r from-yellow-400 via-pink-500 to-indigo-500 bg-clip-text text-transparent animate-pulse">
//                 🏆 Event Results
//             </h1>

//             <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
//                 <select
//                     value={eventFilter}
//                     onChange={e => setEventFilter(e.target.value)}
//                     className="bg-white/10 text-white p-2 rounded-md border border-white/20"
//                 >
//                     <option value=''>All Events</option>
//                     {events.map(e => (
//                         <option key={e.event_id} value={e.title}>{e.title}</option>
//                     ))}
//                 </select>

//                 <input
//                     type="text"
//                     value={search}
//                     onChange={e => setSearch(e.target.value)}
//                     placeholder="Search participant..."
//                     className="p-2 rounded-md bg-white/10 text-white border border-white/20"
//                 />

//                 {session?.user?.role === 'admin' && eventFilter && (
//                     <a
//                         href={`/api/events/${events.find(e => e.title === eventFilter)?.event_id}/results/csv`}
//                         download={`event_${events.find(e => e.title === eventFilter)?.event_id}_results.csv`}
//                         className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
//                     >
//                         ⬇️ Export CSV
//                     </a>
//                 )}
//             </div>

//             <div className="overflow-x-auto rounded-xl border border-white/10 shadow-xl">
//                 <table className="min-w-full text-left">
//                     <thead className="bg-gradient-to-r from-purple-700 to-indigo-700">
//                         <tr>
//                             <th className="py-3 px-4">#</th>
//                             <th className="py-3 px-4">Name</th>
//                             <th className="py-3 px-4">Event</th>
//                             <th className="py-3 px-4">Score</th>
//                             <th className="py-3 px-4">Position</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {filteredResults.map((r, i) => (
//                             <motion.tr
//                                 key={`${r.uid}-${r.event.event_id}`} // ✅ Unique key for each row
//                                 initial={{ opacity: 0, y: 20 }}
//                                 animate={{ opacity: 1, y: 0 }}
//                                 transition={{ delay: i * 0.03 }}
//                                 className="hover:bg-white/5 transition"
//                             >

//                                 <td className="py-3 px-4">{i + 1}</td>
//                                 <td className="py-3 px-4">{r.user.name}</td>
//                                 <td className="py-3 px-4">{r.event.title}</td>
//                                 <td className="py-3 px-4">{r.score}</td>
//                                 <td className="py-3 px-4">
//                                     {r.position === 1 ? '🥇' : r.position === 2 ? '🥈' : r.position === 3 ? '🥉' : r.position}
//                                 </td>
//                             </motion.tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     )
// }



"use client"

import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'

export default function ResultsPage() {
    const { data: session } = useSession()
    const router = useRouter()
    const [results, setResults] = useState([])
    const [eventFilter, setEventFilter] = useState('')
    const [search, setSearch] = useState('')
    const [events, setEvents] = useState([])

    useEffect(() => {
        const fetchResults = async () => {
            const res = await fetch('/api/results')
            if (!res.ok) {
                console.error('Failed to fetch results:', res.status)
                return
            }

            const data = await res.json()
            setResults(data)
        }

        const fetchEvents = async () => {
            const res = await fetch('/api/events')
            const data = await res.json()
            setEvents(data)
        }

        fetchResults()
        fetchEvents()
    }, [])

    const filteredResults = results.filter(r => {
        return (
            (!eventFilter || r.event.title === eventFilter) &&
            (!search || r.user.name.toLowerCase().includes(search.toLowerCase()))
        )
    })

    return (
        <div className="min-h-screen px-6 py-10 bg-gradient-to-br from-[#0f0f1a] via-[#1a1a2f] to-[#0a0a14] text-white">
            {/* PAGE TITLE */}
            <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-10 drop-shadow-xl flex items-center justify-center gap-3">
               🏆 <span className="bg-gradient-to-r from-yellow-300 via-pink-500 to-indigo-500 bg-clip-text text-transparent animate-text">
                     Event Results
                </span>
            </h1>

            {/* FILTERS */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
                <div className="flex items-center gap-2">
                    <span className="text-sm">🎯</span>
                    <select
                        value={eventFilter}
                        onChange={e => setEventFilter(e.target.value)}
                        className="bg-white/10 text-white p-2 rounded-lg border border-white/20 focus:outline-none focus:ring-2 focus:ring-pink-500"
                    >
                        <option value=''>All Events</option>
                        {events.map(e => (
                            <option key={e.event_id} value={e.title}>{e.title}</option>
                        ))}
                    </select>
                </div>

                <div className="flex items-center gap-2">
                    <span className="text-sm">🔍</span>
                    <input
                        type="text"
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        placeholder="Search participant..."
                        className="p-2 rounded-lg bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                </div>

                {session?.user?.role === 'admin' && eventFilter && (
                    <a
                        href={`/api/events/${events.find(e => e.title === eventFilter)?.event_id}/results/csv`}
                        download={`event_${events.find(e => e.title === eventFilter)?.event_id}_results.csv`}
                        className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 font-semibold shadow-md"
                    >
                        ⬇️ Export CSV
                    </a>
                )}
            </div>

            {/* TABLE */}
            <div className="overflow-x-auto rounded-xl border border-white/10 shadow-2xl">
                <table className="min-w-full text-left text-white">
                    <thead>
                        <tr className="bg-gradient-to-r from-purple-700 to-indigo-700 text-white">
                            <th className="py-3 px-4 rounded-tl-xl">#</th>
                            <th className="py-3 px-4">Name</th>
                            <th className="py-3 px-4">Event</th>
                            <th className="py-3 px-4">Score</th>
                            <th className="py-3 px-4 rounded-tr-xl">Position</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredResults.map((r, i) => (
                            <motion.tr
                                key={`${r.uid}-${r.event.event_id}`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.02 }}
                                className="hover:bg-white/5 transition border-b border-white/10"
                            >
                                <td className="py-3 px-4 font-mono text-gray-300">{i + 1}</td>
                                <td className="py-3 px-4 font-semibold">{r.user.name}</td>
                                <td className="py-3 px-4">{r.event.title}</td>
                                <td className="py-3 px-4">{r.score}</td>
                                <td className="py-3 px-4">
                                    {r.position === 1 ? (
                                        <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold">🥇 1st</span>
                                    ) : r.position === 2 ? (
                                        <span className="bg-gray-300 text-black px-3 py-1 rounded-full text-sm font-bold">🥈 2nd</span>
                                    ) : r.position === 3 ? (
                                        <span className="bg-orange-400 text-black px-3 py-1 rounded-full text-sm font-bold">🥉 3rd</span>
                                    ) : (
                                        <span className="bg-white/10 px-3 py-1 rounded-full text-sm">{r.position}</span>
                                    )}
                                </td>
                            </motion.tr>
                        ))}
                        {filteredResults.length === 0 && (
                            <tr>
                                <td colSpan={5} className="py-6 px-4 text-center text-gray-400">
                                    No results found 😕
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
