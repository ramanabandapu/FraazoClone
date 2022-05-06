import {React,useState} from 'react'
import axios from "axios"
import "./checkout.css"
import { useNavigate } from 'react-router-dom'

export const Checkout = () => {
  const navigate =useNavigate()
const [user,setUser]=useState({
 address:"",
 Building:"",
 Pincode:"",
 City:"",
 Card_Number:"",
 Cvv:""     
})

const handlechange=(e)=>{
    const {name,value}=e.target
    setUser({...user,[name]:value})
    // console.log(value)
}

const register= async(e)=>{
    e.preventDefault()

    
    if(e.addres!="" && e.Building!=""&& e.Pincode !="" && ( e.Card_Number!="" && e.Cvv!="" && e.City !="")){
        navigate("/thankyou")
    }
    else{
             alert("Fill Up Correctly")
                navigate("/checkout")
            }
    
}

  return (
    <div>
      <div className='addstudent'>
      <h1>Address</h1>
      <input type="text"  name="address" value={user.addres} onChange={handlechange} placeholder='Address' />
      <input type="text" name="Building" value={user.Building} onChange={handlechange} placeholder='Building' />
      <input type="text" name="Pincode" value={user.Pincode} onChange={handlechange} placeholder='Pincode' />
      <input type="text" name="City" value={user.City} onChange={handlechange} placeholder='City'/>
      <input type="number" name="Card_Number" value={user.Card_Number} onChange={handlechange} placeholder='Card Number'/>
      <input type="number" name="Cvv" value={user.Cvv} onChange={handlechange} placeholder='CVV'/>
      {/* <input type="text" name="reEnterPassword" value={user.reEnterPassword} onChange={handlechange} placeholder='Re-enter Password' /> */}
      <button className='checkoutbutton' onClick={register}>Submit</button>
      
    </div>
    </div>
  )
}