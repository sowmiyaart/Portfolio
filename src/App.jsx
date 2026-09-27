import { useState, lazy } from 'react'
import './App.css'

const Website= lazy(()=> import('./components/Website'))


function App() {

  return (
    <>
    
    <Website/>

    </>
  )
}

export default App
