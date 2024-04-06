import { useState } from 'react'
import './App.css'

import Authentification from './Authentification'
import UnAuthentification from './UnAuthentification'

function App() {
  const [token, setToken] = useState(JSON.parse(window.localStorage.getItem("token")) || false)

  if(token) {
    return <Authentification/>
  } else {
    return <UnAuthentification setToken={setToken}/>
  }
}

export default App
