
import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./homepage.css"
import { Navbar } from '../Navbar/Navbar'

export const Homepage = () => {
  const navigate = useNavigate()
  return (
    <div className='homepage'>
      <Navbar/>
      {/* <h1>Hello,</h1>
      <button className="logoutbtn" onClick={()=>{
        // setLoginuser({})
        navigate("/login")
        }}>Login</button> */}
    </div>
  )
}
