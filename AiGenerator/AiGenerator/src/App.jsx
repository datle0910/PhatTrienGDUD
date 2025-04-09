import { useState } from 'react'
import RecipePage from './component/RecipePage'
import './App.css'
import Header from './component/Header'
import Footer from './component/Footer'
import RecipeHighlight from './component/RecipeHighlight '

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header/>
        <RecipeHighlight/>
        <RecipePage/>
        <Footer/>
      </div>
    </>
  )
}

export default App
