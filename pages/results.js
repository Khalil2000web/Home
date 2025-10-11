import { useState } from 'react'

export default function Results() {
  const [key, setKey] = useState('')
  const [data, setData] = useState(null)
  const [error, setError] = useState('')

  const handleFetch = async () => {
    if (key !== process.env.NEXT_PUBLIC_ADMIN_KEY) {
      setError('Access denied')
      return
    }

    const res = await fetch('/api/vote')
    const results = await res.json()
    setData(results)
  }

  return (
    <div className="results-container">
      {!data ? (
        <>
          <h1>Admin Access</h1>
          <input
            type="password"
            placeholder="Enter admin key"
            value={key}
            onChange={(e) => setKey(e.target.value)}
          />
          <button onClick={handleFetch}>View Results</button>
          {error && <p>{error}</p>}
        </>
      ) : (
        <div>
          <h2>Voting Results</h2>
          {Object.entries(data).map(([name, votes]) => (
            <p key={name}>
              {name}: {votes} votes
            </p>
          ))}
        </div>
      )}
    </div>
  )
}
