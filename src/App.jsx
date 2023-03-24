import { useState } from 'react'

import './App.css'
import Main from './Pages/MainPage/Main'

function App() {

  return (
    <div className="outerwrap">
      <div className="App">
        <div className="nav">
          <div className="lgspotify">
            T
          </div>
          <ul>
            <li>Inicio</li>
            <li>Buscar</li>
            <li>Sua Biblioteca</li>
          </ul>
        </div>
      <Main/>
      </div>
        <div className="footer">
          footer
        </div>
    </div>
  )
}

export default App
