import React, { useState,useEffect } from 'react'
import axios from 'axios'

import Joke from './Joke/Joke'

const Jokes = (props) => {
  // const url = "https://cors-anywhere.herokuapp.com/https://slicedpixel.com/apps/jokes/jokes.json"
  const url = "https://www.slicedpixel.com/apps/jokes/jokes.json"
  const [number, setNumber] = useState(Math.round(Math.random()*100));
  const [jokes, setJokes] = useState([{perg:"",resp:""}])

  useEffect(()=>{
    async function loadJokes(){
      const AllJokes = await axios.get(url)
      setJokes(AllJokes.data)
      setNumber(Math.round(Math.random() * (AllJokes.data.length-1)))
    }
    loadJokes()
  },[])


  const changeNumberHandler = () => {
    setNumber(Math.round(Math.random() * jokes.length))
  }

  return (
    jokes.map((joke,idx)=>{
      if(idx===number){
        console.log(number)
        return <Joke key={idx} question={joke.perg} answer={joke.resp} changeNumber={changeNumberHandler} />
      } else{
        return false
      }
    })
    
  )
}

export default Jokes
