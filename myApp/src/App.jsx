import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Landing from './pages/Landing'
import Register from './pages/Register'
import Login from './pages/Login'
import Account from './pages/Account'
function App() {
  return (
    <BrowserRouter>
    <div className='app-container'>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/account' element={<Account/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
