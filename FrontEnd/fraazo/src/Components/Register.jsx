import {React,useState} from 'react'
import axios from "axios"
import "./Register.css"
import { useNavigate } from 'react-router-dom'

export const Register = () => {
  const navigate =useNavigate()
const [user,setUser]=useState({
  first_name:"",
  last_name:"",
  email:"",
  // password:"",
  // reEnterPassword:""
  mobileno:""
})

const handlechange=(e)=>{
    const {name,value}=e.target
    setUser({...user,[name]:value})
    // console.log(value)
}

const register =()=>{
 
    const {first_name,last_name,email,mobileno}=user
    if(first_name && last_name && email && mobileno){
      axios.post("https://radiant-savannah-89782.herokuapp.com/register",user)
        .then(res=>{
          alert(res.data.message)
          let msg = res.data.message
          if(msg==="User already registered"){
            navigate("/register")
          }
          else{

            navigate("/login")
          }
        })
     
    }

    else{
    alert("Fill form correctly")
    }

}

  return (
    <div>
      <div className='register'>
      <h1>Register</h1>
      <input type="text"  name="first_name" value={user.first_name} onChange={handlechange} placeholder='First Name' />
      <input type="text" name="last_name" value={user.last_name} onChange={handlechange} placeholder='Last Name' />
      <input type="text" name="email" value={user.email} onChange={handlechange} placeholder='Enter Email' />
      <input type="number" name="mobileno" value={user.mobileno} onChange={handlechange} placeholder='+919001234623'/>
      {/* <input type="text" name="reEnterPassword" value={user.reEnterPassword} onChange={handlechange} placeholder='Re-enter Password' /> */}
      <button className='logbutton' onClick={register}>Register</button>
      <div>or</div>
      <button onClick={()=>navigate("/login")} className='regsbutton'>Login</button>
    </div>
    </div>
  )
}