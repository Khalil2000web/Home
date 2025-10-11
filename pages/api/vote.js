import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { nominee } = req.body;
    if (!nominee) {
      return res.status(400).json({ message: 'Missing nominee' });
    }

    const { data, error } = await supabase
      .from('votes')
      .upsert([{ nominee, count: 1 }], { onConflict: ['nominee'] });

    if (error) {
      return res.status(500).json({ message: 'Failed to save vote', error });
    }

    return res.status(200).json({ message: 'Vote saved', data });
  }

  if (req.method === 'GET') {
    const { data, error } = await supabase
      .from('votes')
      .select('*');

    if (error) {
      return res.status(500).json({ message: 'Failed to fetch votes', error });
    }

    const votes = data.reduce((acc, { nominee, count }) => {
      acc[nominee] = count;
      return acc;
    }, {});

    return res.status(200).json(votes);
  }

  return res.status(405).end();
}
