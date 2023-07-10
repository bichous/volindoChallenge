import { useState } from 'react'
import { getAllNotes } from '../../dummyData'
import {
  Grid,
  GridItem,
  Center,
  Container,
  Text,
  Modal,
  Button
} from '@chakra-ui/react'
import Head from 'next/head'
import NoteCard from '../../components/NoteCard'
import AlertDialogE from '../../components/AlertDialoge'
import { NoteCardProps } from '../../components/NoteCard'
import { ColorModeSwitcher } from '../../components/ColorModeSwtcher'

const AllNotesPage = ({ jsonData }) => {
  const [message, setMessage] = useState('')
  const [isOpen, setIsOpen] = useState(false)

  const notes = jsonData.data

  const handleModal = (item: NoteCardProps): void => {
    setIsOpen(true)
  }

  return (
    <>
      <Head>
        <title>Volindo Challenge</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <Container
          maxW='8xl'
          display='flex'
          centerContent
          // bgGradient='linear(to-t, orange.300, gray.500)'
        >
          <Center className='jejeje' maxW={'6xl'} display={'grid'}>
            <Button>Añadir nota +</Button>
            <Text fontSize='6xl'>Notes</Text>
            <ColorModeSwitcher />
          </Center>
          <Grid
            templateColumns='repeat(3, 1fr)'
            gap={10}
            alignContent='center'
            justifyContent='center'
          >
            {notes.map((note: NoteCardProps) => (
              <GridItem
                w='100%'
                h='100%'
                justifyContent='center'
                alignContent='center'
                style={{ display: 'flex' }}
                key={note.id}
              >
                <NoteCard
                  key={note.id}
                  id={note.id}
                  title={note.title}
                  description={note.description}
                  onClickDelete={() => handleModal(note)}
                />
              </GridItem>
            ))}
          </Grid>
        </Container>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <AlertDialogE />
        </Modal>
      </main>
    </>
  )
}

export async function getServerSideProps() {
  try {
    const response = await fetch('http:localhost:3000/api/notes', {
      method: 'GET'
    })
    const jsonData = await response.json()
    //setNotes(jsonData)
    return {
      props: {
        jsonData
      }
    }
  } catch (error) {
    console.error(error)
  }
}

export default AllNotesPage
