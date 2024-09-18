import { useState } from 'react'
import './App.css'
import './Mediaqueries.css'
import Navbar from './components/Navbar'
import Profile from './sections/Profile'
import About from './sections/About'
import { Route, Routes } from 'react-router-dom'
import Experience from './sections/Experience'

function App() {
  return (
    <>
      <Navbar />
      <Profile />
      <About />
      <Experience />

      {/* <Routes>
        <Route path='/'></Route>
        <Route path='/about' element={<About />} />
      </Routes> */}
    </>
  )
}

export default App
