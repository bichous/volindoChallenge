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

const AlertDialogE = () => {
  return (
    <>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>¿Estas seguro de que quieres borrar la nota?</ModalHeader>
        <ModalCloseButton />
        <ModalBody></ModalBody>
        <ModalFooter>
          <Button variant='ghost' colorScheme='red'>
            Borrar
          </Button>
        </ModalFooter>
      </ModalContent>
    </>
  )
}

export default AlertDialogE
