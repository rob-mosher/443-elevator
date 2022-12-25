import React from 'react'
import PhoneNumber from './components/PhoneNumber'
import './App.css'

function App () {
  return (
    <div className='App flex h-screen items-center justify-center bg-cover bg-center vignette' style={{ backgroundImage: 'url("/elevatr-bg.jpg")' }}>
      <PhoneNumber />
    </div>
  )
}

export default App
