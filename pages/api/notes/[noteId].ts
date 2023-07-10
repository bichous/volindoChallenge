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
      if (noteId === 'undefined') {
        try {
          const createdNote = await db.note.create({
            data: {
              title,
              description
            }
          })
          res.redirect('/notes')
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
    case 'DELETE':
      //Eliminar la nota en base a si id
      try {
        const deleteNote = await db.note.delete({
          where: {
            id: parsedId
          }
        })
        res.redirect('/notes')
      } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Ocurrió un error al borrar la nota.' })
      }
      break

    default:
      break
  }
}
