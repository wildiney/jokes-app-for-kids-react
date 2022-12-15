import Header from './components/Header'
import Footer from './components/Footer'
import Jokes from './components/Jokes'

import './App.css'

function App (): JSX.Element {
  return (
    <div className="App">
      <Header />
      <Jokes />
      <Footer />
    </div>
  )
}

export default App
