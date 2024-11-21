import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Whetherapp from './Whetherapp.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Whetherapp/> 
    </>
  )
}

export default App
