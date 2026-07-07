import { useState } from 'react'
import Home from './pages/Home'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home />

      {/* <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button> */}

    </>
  )
}

export default App
