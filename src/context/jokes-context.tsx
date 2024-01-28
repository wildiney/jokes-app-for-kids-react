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
  setNumber: () => { },
  changeNumberHandler: () => { }
}

export const JokesContext = createContext(initialValues)

function shuffle (sourceArray: Array<{ question: string, answer: string }>) {
  for (let i = 0; i < sourceArray.length - 1; i++) {
    const j = i + Math.floor(Math.random() * (sourceArray.length - i));

    const temp = sourceArray[j];
    sourceArray[j] = sourceArray[i];
    sourceArray[i] = temp;
  }
  return sourceArray;
}

export const JokesProvider: FC<IJokesProvider> = ({ children }) => {
  const [number, setNumber] = useState(0)
  const [jokes] = useState<Array<{ question: string, answer: string }>>(shuffle(JokesJson))
  const changeNumberHandler = (): void => {
    setNumber(prevState => (prevState + 1 > jokes.length - 1 ? 0 : prevState + 1))
  }

  return (
    <JokesContext.Provider value={{ jokes, number, setNumber, changeNumberHandler }}>
      {children}
    </JokesContext.Provider>
  )
}

export default JokesProvider
