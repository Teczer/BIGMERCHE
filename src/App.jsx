import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Api from './components/productsHome/Product'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Api/>
    </>
  )
}

export default App
