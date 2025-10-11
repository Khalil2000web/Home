import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { nominee } = req.body;
    if (!nominee) return res.status(400).json({ message: 'Missing nominee' });

    const { data, error } = await supabase
      .from('votes')
      .select('*')
      .eq('nominee', nominee);

    if (error) return res.status(500).json({ message: 'Supabase query error', error });

    if (data.length) {
      const { error: updateError } = await supabase
        .from('votes')
        .update({ count: data[0].count + 1 })
        .eq('nominee', nominee);

      if (updateError) return res.status(500).json({ message: 'Update failed', error: updateError });
    } else {
      const { error: insertError } = await supabase
        .from('votes')
        .insert([{ nominee, count: 1 }]);

      if (insertError) return res.status(500).json({ message: 'Insert failed', error: insertError });
    }

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
