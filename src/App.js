import React from 'react'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Jokes from './components/Jokes/Jokes'

import './App.css'

function App () {
  return (
    <div className="App">
      <Header />
      <Jokes />
      <Footer />
    </div>
  )
}

export default App
