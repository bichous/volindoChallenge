import NextLink from 'next/link'
import { Container, Box, Heading, Button, Link } from '@chakra-ui/react'
import Head from 'next/head'

const Home = () => {
  return (
    <>
      <Head>
        <title>Volindo Challenge</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <Container gap={10} maxW={'3xl'} marginTop={'10%'}>
          <Box>
            <Heading>See my notes</Heading>
            <Link as={NextLink} href='/notes'>
              <Button>Go</Button>
            </Link>
          </Box>
        </Container>
      </main>
    </>
  )
}

export default Home
