import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header/Header'
import Footer from './components/Footer/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (

    <div id="wrapper">
      <Header />

      <main>
        {/* <Home /> */}
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
