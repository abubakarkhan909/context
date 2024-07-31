import { useState } from 'react'
import './App.css'
import Login from "./comp/login"
import Profile from "./comp/profile"
import UserContextProvider from "./context/userContextProvider"
function App() {
  return (
    <UserContextProvider>
     <h1>hi Abubakar</h1>
     <Login/>
     <Profile/>

    </UserContextProvider>
  )
}

export default App
