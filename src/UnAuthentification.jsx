import React from 'react'
import Login from './components/Login/login'

function UnAuthentification({setToken}) {
  
  return <Login setToken={setToken}/>
}

export default UnAuthentification