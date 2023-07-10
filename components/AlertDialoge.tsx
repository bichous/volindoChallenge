import * as React from 'react'
import {
  Button,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay
} from '@chakra-ui/react'
import { useRouter } from 'next/navigation'

const AlertDialogE = ({ noteInfo, setIsOpen, setNotes }) => {
  const router = useRouter()
  const onDelete = async () => {
    try {
      const noteId = noteInfo.id
      const response = await fetch(`/api/notes/${noteId}`, { method: 'DELETE' })
      const notes = await fetch('/api/notes')
      router.refresh()
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
