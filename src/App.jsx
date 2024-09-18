import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './Mediaqueries.css'
import Navbar from './components/Navbar'
import Profile from './sections/Profile'

function App() {
  

  return (
    <>
      <Navbar />
      <Profile />
    </>
  )
}

export default App
