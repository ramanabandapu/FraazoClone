import { React, useState } from 'react'
import axios from "axios"
import "./Login.css"
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

export const Login = ({ setLoginuser }) => {
  const navigate = useNavigate()
  const [data, setdata] = useState([]);
  const [user, setUser] = useState({
   mobile_no:""
  })
  const [getid,setGetid]=useState()

  const handlechange = (e) => {
    const { name, value } = e.target
    setUser({ ...user, [name]: value })
    // console.log(value)

  }


const login = ()=>{
  

}


useEffect(()=>{
  GetData();
},[]);

  const GetData = async () => {
    axios.get(`https://fraazodev.herokuapp.com/login/${user}`)
      .then(res => {
      //  console.log(res.data);
       console.log(res);
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