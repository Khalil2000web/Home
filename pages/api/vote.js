import fs from 'fs'
import path from 'path'

const votesFile = path.join(process.cwd(), 'data', 'votes.json')

export default function handler(req, res) {
  try {
    if (req.method === 'POST') {
      const { nominee } = req.body
      if (!nominee) {
        return res.status(400).json({ message: 'Missing nominee' })
      }

      // make sure file exists before reading
      if (!fs.existsSync(votesFile)) {
        fs.mkdirSync(path.dirname(votesFile), { recursive: true })
        fs.writeFileSync(votesFile, '{}')
      }

      const raw = fs.readFileSync(votesFile)
      const data = raw.length ? JSON.parse(raw) : {}

      data[nominee] = (data[nominee] || 0) + 1

      fs.writeFileSync(votesFile, JSON.stringify(data, null, 2))

      return res.status(200).json({ message: 'Vote saved' })
    }

    if (req.method === 'GET') {
      if (!fs.existsSync(votesFile)) {
        return res.status(200).json({})
      }
      const raw = fs.readFileSync(votesFile)
      const data = raw.length ? JSON.parse(raw) : {}
      return res.status(200).json(data)
    }

    res.setHeader('Allow', ['GET', 'POST'])
    return res.status(405).end()
  } catch (error) {
    console.error('API error:', error)
    return res.status(500).json({ message: 'Internal server error' })
  }
}
