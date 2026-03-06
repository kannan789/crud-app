import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ListRendering from './components/ListRendering'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <ListRendering />
    </>
  )
}

export default App
