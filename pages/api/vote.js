import fs from 'fs'
import path from 'path'

const votesFile = path.join(process.cwd(), 'data', 'votes.json')

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { nominee } = req.body
    const data = fs.existsSync(votesFile)
      ? JSON.parse(fs.readFileSync(votesFile))
      : {}

    data[nominee] = (data[nominee] || 0) + 1

    fs.writeFileSync(votesFile, JSON.stringify(data, null, 2))

    return res.status(200).json({ message: 'Vote saved' })
  }

  if (req.method === 'GET') {
    const data = fs.existsSync(votesFile)
      ? JSON.parse(fs.readFileSync(votesFile))
      : {}
    return res.status(200).json(data)
  }

  return res.status(405).end()
}
