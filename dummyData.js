const dummyNotes = [
  {
    id: 1,
    title: 'Este titulo es unico',
    description: 'Aqui va la descripcion de la nota'
  },
  {
    id: 2,
    title: 'Este titulo es unico',
    description: 'Aqui va la descripcion de la nota'
  },
  {
    id: 3,
    title: 'Este titulo es unico',
    description: 'Aqui va la descripcion de la nota'
  },
  {
    id: 4,
    title: 'Este titulo es unico',
    description: 'Aqui va la descripcion de la nota'
  },
  {
    id: 5,
    title: 'Este titulo es unico',
    description: 'Aqui va la descripcion de la nota'
  },
  {
    id: 6,
    title: 'Este titulo es unico',
    description: 'Aqui va la descripcion de la nota'
  },
  {
    id: 7,
    title: 'Este titulo es unico',
    description: 'Aqui va la descripcion de la nota'
  },
  {
    id: 8,
    title: 'Este titulo es unico',
    description: 'Aqui va la descripcion de la nota'
  },
  {
    id: 9,
    title: 'Este titulo es unico',
    description: 'Aqui va la descripcion de la nota'
  },
  {
    id: 10,
    title: 'Este titulo es unico',
    description: 'Aqui va la descripcion de la nota'
  },
  {
    id: 11,
    title: 'Este titulo es unico',
    description: 'Aqui va la descripcion de la nota'
  },
  {
    id: 12,
    title: 'Este titulo es unico',
    description: 'Aqui va la descripcion de la nota'
  }
]

export function getAllNotes() {
  return dummyNotes
}

export function getNodeById() {
  return dummyNotes.find((note) => note.id === id)
}
