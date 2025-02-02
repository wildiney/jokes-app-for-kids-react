import Header from './components/Header'
import Footer from './components/Footer'
import Jokes from './components/Jokes'

import './App.css'

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Jokes />
      <Footer />
    </div>
  )
}

export default App
