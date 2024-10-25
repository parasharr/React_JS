import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Pran from './pran'

function App() {
  const [count, setCount] = useState(0)
  const username = "Pranjeet"
  return (
    <>
      <Pran/>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <h1>Hello {username}</h1>
      <h3>This is your React App</h3>
      <p>There is two way to create folders in react to do projects -</p>
      <ol>
        <li> One is through NPM and the second is through Vite. </li>
        <li> Vite is a light weight package manager compare to the NPM.</li>
        <li> In Vite we have to create the node modules file by typing `npm i / install`, But in NPM we got that file defaultly.</li>  
      </ol>  
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
