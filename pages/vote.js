import { useState, useEffect } from 'react'

export default function VotePage() {
  const [selected, setSelected] = useState(null)
  const [canVote, setCanVote] = useState(true)
  const [message, setMessage] = useState('')

  useEffect(() => {
    const lastVote = localStorage.getItem('lastVoteTime')
    if (lastVote && Date.now() - Number(lastVote) < 5 * 60 * 1000) {
      setCanVote(false)
      setMessage('You can vote again in 5 minutes.')
    }
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!selected || !canVote) return

    const res = await fetch('/api/vote', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nominee: selected })
    })

    if (res.ok) {
      localStorage.setItem('lastVoteTime', Date.now().toString())
      setCanVote(false)
      setMessage('Thank you! Your vote has been recorded.')
    } else {
      setMessage('Something went wrong. Please try again.')
    }
  }

  return (
    <div className="vote-container">
      <h1>Vote for Best Artist</h1>
      <form onSubmit={handleSubmit}>
        {['Beyoncé', 'Adele', 'Taylor Swift'].map((name) => (
          <label key={name}>
            <input
              type="radio"
              name="nominee"
              value={name}
              onChange={() => setSelected(name)}
            />
            {name}
          </label>
        ))}
        <button type="submit" disabled={!canVote}>
          {canVote ? 'Submit Vote' : 'Wait 5 min'}
        </button>
      </form>
      <p>{message}</p>
    </div>
  )
}
