import type { FC } from 'react'
import styles from './Joke.module.css'
import Button from '../../../components/shared/Buttons'

interface IJoke {
  question: string
  answer: string
  changeNumber: () => void
}
const Joke: FC<IJoke> = ({ question, answer, changeNumber }) => {
  return (
    <div className={styles.joke}>
      <div className={styles.answerQuestion}>
        <div className={styles.question}>{question}</div>
        <div className={styles.answer}>{answer}</div>
      </div>
      <div className={styles.action}>
        <Button action={changeNumber}>Nova charada</Button>
      </div>
    </div>
  )
}

export default Joke
