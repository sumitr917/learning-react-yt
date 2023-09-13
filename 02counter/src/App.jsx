import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15)
  //let counter = 5

  const addValue = () => {
    console.log("clicked", Math.random());
    setCounter(counter+1)
  }

  const decreaseValue = () => {
    setCounter(counter-1)
  }
  return (
    <>
      <h1>Hooks Practice</h1>
      <h3>Counter value: {counter}</h3>

      <button
      onClick={addValue}
      >Add Value</button>
      <br></br>
      <button
      onClick={decreaseValue}
      >Decrease Value</button>
    </>
  )
}

export default App
