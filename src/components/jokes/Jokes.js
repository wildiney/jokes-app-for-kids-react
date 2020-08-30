import React, { useState, useEffect } from 'react'

import Joke from './Joke/Joke'
import JokesJson from '../../data/jokes.json'

const Jokes = (props) => {
  const [number, setNumber] = useState(Math.round(Math.random() * 100))
  const [jokes] = useState(JokesJson)

  useEffect(() => {
    setNumber(Math.round(Math.random() * (jokes.length - 1)))
  }, [jokes])

  const changeNumberHandler = () => {
    setNumber(Math.round(Math.random() * jokes.length))
  }

  return (
    jokes.map((joke, idx) => {
      if (idx === number) {
        console.log(number)
        return <Joke key={idx} question={joke.perg} answer={joke.resp} changeNumber={changeNumberHandler} />
      } else {
        return false
      }
    })

  )
}

export default Jokes
