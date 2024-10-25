import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(5)

  //let counter = 5;

  const addValue = function(){
    counter + 1;
    setCounter(counter + 1)
    console.log("clicked", counter);
  }

  return (
    <>
      <h1>Beginning of React</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add value</button>
      <br />
      <button>remove value</button>
    </>
  )
}

export default App
