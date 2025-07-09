"use client"
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useSession } from "next-auth/react"

export default function ApproveEventPage() {
  const { id } = useParams()
  const { data: session, status } = useSession()
  const [message, setMessage] = useState("Approving...")

  useEffect(() => {
    if (status !== "authenticated") return

    const approveEvent = async () => {
      try {
        const res = await fetch(`/api/events/${id}/approve`, {
          method: 'POST',
          credentials: 'include'
        })

        const data = await res.json()
        if (res.ok) {
          setMessage(`✅ Event ID ${id} Approved Successfully`)
        } else {
          setMessage(`❌ Approval Failed: ${data.error || 'Unknown error'}`)
          console.error("Server error response:", data)
        }
      } catch (err) {
        setMessage('❌ Network or server error')
        console.error('Approval request failed:', err)
      }
    }

    approveEvent()
  }, [id, status])

  if (status === "loading") return <p className="text-center mt-10">Loading session...</p>
  if (!session) return <p className="text-center mt-10">You must be logged in to approve events.</p>

  return (
    <div className="p-4 text-center font-semibold text-lg text-blue-700">
      {message}
    </div>
  )
}
