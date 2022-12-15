import type { FC } from 'react'
import { useEffect, useContext } from 'react'
import { JokesContext } from '../../context/jokes-context'
import Joke from './Joke'

import styles from './Jokes.module.css'

const Jokes: FC = () => {
  const { number, setNumber } = useContext(JokesContext)
  const { jokes } = useContext(JokesContext)
  const { changeNumberHandler } = useContext(JokesContext)

  useEffect(() => {
    const newNumber = Math.round(Math.random() * (jokes.length - 1))
    setNumber(newNumber)
  }, [jokes])

  return (
  <div className={styles.jokes}>
 {jokes.map((joke, idx) => {
   if (idx === number) {
     return <Joke key={idx} question={joke.question} answer={joke.answer} changeNumber={changeNumberHandler} />
   }
   return null
 })}
  </div>
  )
}

export default Jokes
