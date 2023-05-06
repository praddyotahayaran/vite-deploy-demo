import React from 'react'
import NavBar from './Components/NavBar/NavBar.jsx'
import './App.css'
import Home from './Components/Home/Home.jsx'

const App = () => {
  return (
    <div className='app'>
      <NavBar />
      <Home />
    </div>
  )
}

export default App