const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
  const notes = [
    { title: 'Note 1', description: 'Description for Note 1' },
    { title: 'Note 2', description: 'Description for Note 2' },
    { title: 'Note 3', description: 'Description for Note 3' },
    { title: 'Note 4', description: 'Description for Note 4' },
    { title: 'Note 5', description: 'Description for Note 5' },
    { title: 'Note 6', description: 'Description for Note 6' },
    { title: 'Note 7', description: 'Description for Note 7' },
    { title: 'Note 8', description: 'Description for Note 8' },
    { title: 'Note 9', description: 'Description for Note 9' },
    { title: 'Note 10', description: 'Description for Note 10' },
    { title: 'Note 11', description: 'Description for Note 11' },
    { title: 'Note 12', description: 'Description for Note 12' }
  ]

  for (const note of notes) {
    await prisma.note.create({
      data: note
    })
  }

  console.log('Notes injected successfully.')
}

main()
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
