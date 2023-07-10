import { useEffect, useState } from 'react'
import { getAllNotes } from '../dummyData'
import {
  Grid,
  GridItem,
  Center,
  Container,
  Text,
  Modal
} from '@chakra-ui/react'
import Head from 'next/head'
import NoteCard from '../components/NoteCard'
import AlertDialogE from '../components/AlertDialoge'

const Home = () => {
  const [message, setMessage] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  // const [detail, setDetail] = useState(null)

  const handleModal = (item: any) => {
    setIsOpen(true)
    // setDetail(item)
  }

  const notes = getAllNotes()

  useEffect(() => {
    fetch('/api/hello')
      .then((res) => res.json())
      .then((data) => {
        setMessage(data.message)
      })
  }, [])

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
          bgGradient='linear(to-t, orange.300, gray.500)'
        >
          <Center>
            <Text fontSize='6xl'>Login</Text>
          </Center>
        </Container>
      </main>
    </>
  )
}

export default Home
