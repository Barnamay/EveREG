'use client'

import { useEffect, useState } from 'react'
import { FaUserShield, FaTrash } from 'react-icons/fa'

export default function OperatorListPage() {
  const [operators, setOperators] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchOperators = async () => {
      try {
        const res = await fetch('/api/admin/operators')
        if (!res.ok) throw new Error('Failed to fetch operators')
        const data = await res.json()
        setOperators(data)
      } catch (err) {
        setError('Could not load operator list.')
      } finally {
        setLoading(false)
      }
    }

    fetchOperators()
  }, [])

  const handleDemote = async (uid) => {
    const confirm = window.confirm('Remove this user as an operator?')
    if (!confirm) return

    const res = await fetch('/api/operator-request/demote', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ uid }),
    })

    if (res.ok) {
      alert('Operator removed!')
      setOperators(prev => prev.filter(op => op.uid !== uid))
    } else {
      alert('Failed to remove operator')
    }
  }

  return (
    <div className="min-h-screen px-6 py-10 bg-gradient-to-br from-[#1e1e2f] via-[#302b63] to-[#0f0c29] text-white">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-8 text-center">
          <FaUserShield className="inline mr-3 text-cyan-400" />
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
            Current Operators
          </span>
        </h1>

        {loading && <p className="text-center text-gray-400">Loading...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {operators.map(op => (
            <div key={op.uid} className="bg-white/10 backdrop-blur border border-white/20 p-6 rounded-2xl shadow-lg">
              <h2 className="text-xl font-bold mb-2">{op.username}</h2>
              <p className="text-sm text-gray-300 mb-1">📧 {op.email}</p>
              <p className="text-sm text-gray-400">📅 Joined: {new Date(op.createdAt).toLocaleDateString()}</p>

              <div className="text-right mt-4">
                <button
                  onClick={() => handleDemote(op.uid)}
                  className="bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-white px-5 py-2 rounded-full text-sm font-semibold transition-transform hover:scale-105"
                >
                  <FaTrash className="inline mr-2" />
                  Remove Operator
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
