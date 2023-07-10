// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { NoteCardProps } from '../../../components/NoteCard'
import { db } from '../../../utils/db.server'

interface Data {
  data: Array<NoteCardProps>
}

interface ErrorResponse {
  error: string
}

export default async function getNotes(
  req: NextApiRequest,
  res: NextApiResponse<Data | ErrorResponse>
) {
  if (req.method === 'GET') {
    try {
      const data = await db.note.findMany({
        select: {
          id: true,
          title: true,
          description: true
        }
      })
      res.status(200).json({ data })
    } catch (error) {
      console.error(error)
      res.status(500).json({ error: 'Ocurrió un error al obtener los datos.' })
    }
  } else {
    res.status(405).json({ error: 'Método no permitido.' })
  }
}
