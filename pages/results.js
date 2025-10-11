import { useState, useEffect } from 'react';

export default function Results() {
  const [votes, setVotes] = useState({});
  const [keyInput, setKeyInput] = useState('');
  const [authorized, setAuthorized] = useState(false);

  const ADMIN_KEY = process.env.NEXT_PUBLIC_ADMIN_KEY || 'mysecret123';

  useEffect(() => {
    if (authorized) {
      fetch('/api/vote')
        .then(res => res.json())
        .then(data => setVotes(data));
    }
  }, [authorized]);

  const handleKey = () => {
    if (keyInput === ADMIN_KEY) setAuthorized(true);
    else alert('Wrong key');
  };

  if (!authorized)
    return (
      <div style={{ padding: '20px' }}>
        <h2>Enter Admin Key</h2>
        <input value={keyInput} onChange={e => setKeyInput(e.target.value)} />
        <button onClick={handleKey}>Submit</button>
      </div>
    );

  return (
    <div style={{ padding: '20px' }}>
      <h1>Voting Results</h1>
      <ul>
        {Object.entries(votes).map(([nominee, count]) => (
          <li key={nominee}>
            {nominee}: {count}
          </li>
        ))}
      </ul>
    </div>
  );
}
