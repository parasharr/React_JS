import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Hooks can handle buttons in Javascript 
function App() {

  let [counter, setCounter] = useState(0)

  //let counter = 5;

  const addValue = function(){
    counter + 1;
    // setCounter(counter + 1)
    console.log("clicked", counter);

    if(counter < 20){
      setCounter(counter + 1)
    }
  }

  const removeValue = function(){
    // setCounter(counter - 1);
    if(counter > 0){
      setCounter(counter - 1)
    }
  }


  return (
    <>
      <h1>Beginning of React</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add value: {counter}</button>
      <br />
      <br />
      <button onClick={removeValue}>remove value: {counter}</button>
    </>
  )
}

export default App
