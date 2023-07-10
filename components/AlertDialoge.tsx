import * as React from 'react'
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay
} from '@chakra-ui/react'

const AlertDialogE = ({ noteInfo, setIsOpen, setNotes }) => {
  console.log('me voy avolver chango', noteInfo)

  const onDelete = async () => {
    try {
      const noteId = noteInfo.id
      const response = await fetch(`/api/notes/${noteId}`, { method: 'DELETE' })
      //const response = await fetch(`/api/notes/${noteId}?noteId=${noteId}`, { method: 'DELETE' })
      const notes = await fetch('/api/notes')
      console.log('el notitas', notes)
    } catch (error) {
      console.log(error)
    } finally {
      setIsOpen(false)
    }
  }
  return (
    <>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>¿Estas seguro de que quieres borrar la nota?</ModalHeader>
        <ModalCloseButton />
        <ModalBody></ModalBody>
        <ModalFooter>
          <Button variant='ghost' colorScheme='red' onClick={onDelete}>
            Borrar
          </Button>
        </ModalFooter>
      </ModalContent>
    </>
  )
}

export default AlertDialogE
