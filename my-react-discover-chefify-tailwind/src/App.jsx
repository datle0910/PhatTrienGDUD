import { useState } from 'react'
import './App.css'
import Header from '../src/Header/Header';
import FilterComponent from '../src/Filter/FilterComponent';
import Footer from '../src/Footer/Footer';
function App() {

  return (
    <>
      <Header/>
      <FilterComponent/>
      <Footer/>
    </>
  )
}

export default App
