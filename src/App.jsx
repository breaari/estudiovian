import { useState } from 'react'
import './App.css'
import { Landing } from './Views/Landing/Landing'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Landing></Landing>
  )
}

export default App
