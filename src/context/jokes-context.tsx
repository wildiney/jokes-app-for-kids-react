import type { Dispatch, FC, ReactNode, SetStateAction } from 'react'
import { useState, createContext } from 'react'
import JokesJson from '../data/jokes.json'

interface IJokesContext {
  number: number
  setNumber: Dispatch<SetStateAction<number>>
  jokes: Array<{ question: string, answer: string }>
  changeNumberHandler: () => void
}
interface IJokesProvider {
  children: ReactNode
}

const initialValues: IJokesContext = {
  number: 0,
  jokes: [{ question: '', answer: '' }],
  setNumber: () => {},
  changeNumberHandler: () => {}
}

export const JokesContext = createContext(initialValues)

export const JokesProvider: FC<IJokesProvider> = ({ children }) => {
  const [number, setNumber] = useState(Math.round(Math.random() * 100))
  const [jokes] = useState<Array<{ question: string, answer: string }>>(JokesJson)
  const changeNumberHandler = (): void => {
    setNumber(Math.round(Math.random() * jokes.length))
  }

  return (
    <JokesContext.Provider value={{ jokes, number, setNumber, changeNumberHandler }}>
      {children}
    </JokesContext.Provider>
  )
}

export default JokesProvider
