import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter,setCounter]=useState(10) //useState is a hooks which is responsible for multi value changes in ui
  //let counter = 5;
  const addValue = () => {
  setCounter(counter+1)
  }

  const removeValue = () => {
    setCounter(counter-1)

  }


  return (
    <>
     <h1>React with kavita</h1>
     <h2>Counter value: {counter}</h2>
     <button onClick={addValue}>Add Value</button>
     <br/>
     <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
