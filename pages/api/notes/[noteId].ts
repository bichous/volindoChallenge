// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { NoteCardProps } from '../../../components/NoteCard'
import { db } from '../../../utils/db.server'

type Data = {
  data: NoteCardProps | null
}
interface ErrorResponse {
  error: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | ErrorResponse>
) {
  const { query, method, body } = req
  const { noteId } = query
  const parsedId = parseInt(noteId as string)

  switch (method) {
    case 'GET':
      try {
        const data = await db.note.findUnique({
          where: {
            id: parsedId
          },
          select: {
            id: true,
            title: true,
            description: true
          }
        })
        res.status(200).json({ data })
      } catch (error) {
        console.error(error)
        res
          .status(500)
          .json({ error: 'Ocurrió un error al obtener los datos.' })
      }
      break
    case 'POST':
      //Crear la nota junto con la relacion del usuario que la creo
      const { noteId } = query
      const { title, description } = body
      if (!noteId) {
        try {
          const createdNote = await db.note.create({
            data: {
              title,
              description
            }
          })
        } catch (error) {
          console.error(error)
          res.status(500).json({ error: 'Ocurrió un error al crear la nota.' })
        }
      } else {
        try {
          const updateNote = await db.note.update({
            where: {
              id: parsedId
            },
            data: {
              title,
              description
            }
          })
          res.redirect('/notes')
        } catch (error) {
          console.error(error)
          res
            .status(500)
            .json({ error: 'Ocurrió un error al actualizar la nota.' })
        }
      }
      break
    case 'PUT':
      console.log('en el put')
      //Modificar la nota en base a su id
      break
    case 'DELETE':
      //Eliminar la nota en base a si id
      break

    default:
      break
  }
  // res.status(200).json({ name: 'John Doe' })
  // res.redirect('/notes')
}
