import { useState } from 'react'
import './App.css'
import Cabezera from './components/cabezera'
import Tarjeta from './components/Uniontarjeta'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Cabezera />
      <Tarjeta />
      
    </>
  )
}

export default App
