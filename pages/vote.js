import { useState, useEffect } from 'react';

export default function Vote() {
  const [votes, setVotes] = useState({});
  const [message, setMessage] = useState('');

  const nominees = ['Nominee1', 'Nominee2', 'Nominee3'];

  useEffect(() => {
    fetch('/api/vote')
      .then(res => res.json())
      .then(data => setVotes(data))
      .catch(() => setMessage('Failed to fetch votes'));
  }, []);

  const handleVote = async (nominee) => {
    const lastVote = localStorage.getItem('lastVote');
    const now = Date.now();

    if (lastVote && now - lastVote < 5 * 60 * 1000) {
      setMessage('You can vote once every 5 minutes');
      return;
    }

    try {
      const res = await fetch('/api/vote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nominee }),
      });

      if (!res.ok) throw new Error('Vote failed');

      localStorage.setItem('lastVote', now);
      setMessage('Vote saved!');
      const data = await res.json();
      fetch('/api/vote')
        .then(res => res.json())
        .then(data => setVotes(data));
    } catch {
      setMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Vote for your favorite!</h1>
      {nominees.map(n => (
        <button key={n} onClick={() => handleVote(n)} style={{ margin: '5px' }}>
          {n} ({votes[n] || 0})
        </button>
      ))}
      <p>{message}</p>
    </div>
  );
}
