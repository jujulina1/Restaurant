import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header/Header'
import Footer from './components/Footer/Footer/Footer'
import Home from './components/Home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (

    <div id="wrapper">
      <Header />

      <main>
        <Home />
        {/* <About /> */}
        {/* <Menu /> */}
        {/* <Login /> */}
        {/* <Register /> */}
        {/* <Details /> */}

      </main>

      <Footer />
    </div>

  )
}

export default App
