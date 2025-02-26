import { useState } from 'react'
import './App.css'
import Header from '../src/Header/Header';
import Footer from '../src/Footer/Footer';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Footer/>
    </>
  )
}

export default App
