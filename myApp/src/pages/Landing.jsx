import React from 'react'
import "./landing.css"
import {useNavigate} from "react-router-dom"
const Landing = () => {
  const navigate=useNavigate()
  return (
    <div className='landing'>
      <h2>Welcome to PopX</h2>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
       <button className='create-btn' onClick={()=>navigate("/register")}>Create Account</button>
       <button className='login-btn' onClick={()=>navigate("/login")}>Already Registered? Login</button>
    </div>
  )
}

export default Landing
