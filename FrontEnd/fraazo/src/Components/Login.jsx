import { React, useState } from 'react'
import axios from "axios"
import "./Login.css"
import { useNavigate } from 'react-router-dom'

export const Login = ({ setLoginuser }) => {
  const navigate = useNavigate()
  const [user, setUser] = useState({
   mobileno:""
  })
  const [getid,setGetid]=useState()

  const handlechange = (e) => {
    const { name, value } = e.target
    setUser({ ...user, [name]: value })
    // console.log(value)
  }

  const login = async () => {
    

    
    axios.post("https://radiant-savannah-89782.herokuapp.com/register", user)
      .then(res => {

        alert(res.data.message)
        
        let msg = res.data.message
        console.log(res.data.user)
        console.log(msg)
        if (msg === "Login Successfull") {

          navigate("/product")
        }
        else {
          navigate("/login")
        }
      }
      )



  }



  return (
    <div className='login'>
      <h1>Login</h1>
      <input type="number" name="mobileno" value={user.mobileno} onChange={handlechange} placeholder='Enter Mobile Number' />
      {/* <input type="text" name="password" value={user.password} onChange={handlechange} placeholder='Enter Password' /> */}
      <button onClick={login} className='logbutton'>Login</button>
      <div>or</div>
      <button onClick={() => navigate("/register")} className='regsbutton'>Register</button>
    </div>
  )
}