import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.https://wpkkoxascxkcgcrexpdn.supabase.co,
  process.env.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indwa2tveGFzY3hrY2djcmV4cGRuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjAxMTY2MTUsImV4cCI6MjA3NTY5MjYxNX0.0-GJK9jorHuSiBxv8Jl2yosVmEMWPabzlfW8LhLJZIY
);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { nominee } = req.body;
    if (!nominee) return res.status(400).json({ message: 'Missing nominee' });

    const { error } = await supabase
      .from('votes')
      .upsert([{ nominee, count: 1 }], { onConflict: ['nominee'] });

    if (error) return res.status(500).json({ message: 'Failed to save vote', error });

    return res.status(200).json({ message: 'Vote saved' });
  }

  if (req.method === 'GET') {
    const { data, error } = await supabase.from('votes').select('*');
    if (error) return res.status(500).json({ message: 'Failed to fetch votes', error });

    const votes = data.reduce((acc, { nominee, count }) => {
      acc[nominee] = count;
      return acc;
    }, {});

    return res.status(200).json(votes);
  }

  return res.status(405).end();
}
