import React from 'react'
import useToggle from './hooks/useToggle'
import useHide from './hooks/useHide'
import './App.css'

function App() {
  
  const[value,toggle]=useToggle(false)
  const[hide,tog]=useHide(true)
  return (
    <>
     <button onClick={toggle}>TOGGLE</button>
     <button onClick={tog}>HIDE</button>
     {value?<h1>HELLO GUYS PLEASE BE CONSISTENT</h1>:null}
     {hide?<h1>HELLO GUYS PLEASE BE CONSISTENT</h1>:null}
    </>
  )
}

export default App
