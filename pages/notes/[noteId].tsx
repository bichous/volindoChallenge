import { Box, Container, Heading } from '@chakra-ui/react'
import NoteForm from '../../components/NoteForm'

const SingleNotePage = ({ jsonData: { data } }) => {
  const edit = true
  const { title, description, id } = data

  return (
    <Container gap={10} maxW={'3xl'} marginTop={'10%'}>
      <Box>
        <Heading>{edit ? `Upadte Note` : `Add Note`}</Heading>
      </Box>
      <NoteForm title={title} description={description} id={id} />
    </Container>
  )
}

export async function getServerSideProps({ query: { noteId } }) {
  try {
    const response = await fetch(`http:localhost:3000/api/notes/${noteId}`, {
      method: 'GET'
    })
    const jsonData = await response.json()
    return {
      props: {
        jsonData
      }
    }
  } catch (error) {
    console.error(error)
  }
  return {
    props: {}
  }
}

export default SingleNotePage
