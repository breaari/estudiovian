import { useState } from 'react'
// import './app.css'
import { Landing } from './Views/Landing/Landing'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Landing></Landing>
  )
}

export default App
