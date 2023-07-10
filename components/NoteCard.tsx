import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Text
} from '@chakra-ui/react'
import Link from 'next/link'

export interface NoteCardProps {
  id?: number | undefined
  title: string
  description: string
  onClickDelete?: () => void
}

const NoteCard = ({ title, description, onClickDelete, id }: NoteCardProps) => {
  const parsedId = (id ?? '').toString()

  return (
    <>
      <Card
        w='400px'
        display='flex'
        direction='column'
        align='center'
        justify='center'
        padding='2'
      >
        <Heading size='md'>{title ? title : 'Title of the note'}</Heading>
        <CardBody>
          <Text>
            {description ? description : 'This is the description of the note'}
          </Text>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing='2'>
            <Button variant='solid' colorScheme='red' onClick={onClickDelete}>
              Delete
            </Button>
            <Button variant='ghost' colorScheme='blue'>
              <Link href={`/notes/${parsedId}`}>Edit</Link>
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </>
  )
}

export default NoteCard
