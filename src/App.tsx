import React from 'react'
import PhoneNumber from './components/PhoneNumber'
import './main.css'

function App() {
  return (
    <div className="App vignette flex h-screen items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url("/elevatr-bg.jpg")' }}>
      <PhoneNumber />
    </div>
  )
}

export default App
