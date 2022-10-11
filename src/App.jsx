import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Info from "./components/Info"
import About from "./components/About"
import Interest from "./components/Interest"
import Socials from "./components/Socials"
import './App.css'

export default function App() {
  return (
    <main className='info-card'>
      <Info />
      <About />
      <Interest />
      <Socials />
    </main>
  )
}
