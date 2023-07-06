import { useEffect, useState } from 'react'

const Home = () => {
  const [message, setMessage] = useState('')

  useEffect(() => {
    fetch('/api/hello')
      .then((res) => res.json())
      .then((data) => {
        setMessage(data.message)
      })
  }, [])

  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <p>{message}</p>
    </div>
  )
}

export default Home
