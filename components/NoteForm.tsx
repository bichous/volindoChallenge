import * as React from 'react'
import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Textarea,
  Button,
  Switch
} from '@chakra-ui/react'
import { useState } from 'react'

import { NoteCardProps } from './NoteCard'

interface formProps {
  [key: string]: string
}

const NoteForm = ({ id, title, description }: NoteCardProps) => {
  const [formState, setFormState] = useState<formProps>({})
  const [edit, setEdit] = useState(id ? false : true)
  const [isloading, setIsLoding] = useState(false)

  const toggle = (isEdit: boolean) => setEdit(!isEdit)

  const handleLogin = () => {
    setIsLoding(!isloading)
  }

  return (
    <form
      action={edit ? `/api/notes/${id}` : `/api/notes`}
      method='POST'
      onSubmit={handleLogin}
    >
      <FormControl gap={'200px'}>
        <FormLabel htmlFor='isChecked' hidden={!id ? true : false}>
          Editar:
        </FormLabel>
        <Switch
          id='isChecked'
          isChecked={edit}
          onChange={() => toggle(edit)}
          hidden={!id ? true : false}
        />
        <FormLabel>Title Note</FormLabel>
        <Input
          type='text'
          value={!edit ? title : formState.title}
          name='title'
          isDisabled={!edit}
        />
        <FormLabel>Description</FormLabel>
        <Textarea
          value={!edit ? description : formState.description}
          name='description'
          isDisabled={!edit}
        ></Textarea>
        <FormHelperText>We'll never share your email.</FormHelperText>
      </FormControl>
      <Button type='submit' isLoading={isloading}>
        Enviar
      </Button>
    </form>
  )
}

export default NoteForm
