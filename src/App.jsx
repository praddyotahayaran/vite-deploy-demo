import React from 'react'
import './App.css'
import About from './Component/About/About'
import Contact from './Component/Contact/Contact'
import Home from './Component/Home/Home'
import Services from './Component/Services/Services'
import { createBrowserRouter, createRoutesFromElements, Link, Outlet, Route, RouterProvider } from 'react-router-dom'
import Footer from './Component/Footer/Footer'

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root />}>
        <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact />} />
      </Route>
    )
  )

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

const Root = () => {
  return <>
    <div className='root'>

      <div className="brand">
        PROJECT DEPLOY
      </div>

      <div className="navLinks">
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/services'>Services</Link>
        <Link to='/contact'>Contact</Link>
      </div>

    </div>
    <div>
      <Outlet />
    </div>
  </>
}

export default App