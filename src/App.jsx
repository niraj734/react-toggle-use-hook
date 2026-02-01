import React from 'react'
import useToggle from './hooks/useToggle'
import './App.css'

function App() {
  
  const[value,toggle]=useToggle(false)

  return (
    <>
     <button onClick={toggle}>TOGGLE</button>
     <button>HIDE</button>
    {value?<h1>HELLO GUYS PLEASE BE CONSISTENT</h1>:null}
     
    </>
  )
}

export default App
