import React from 'react'
import "./Thankyou.css"
import {useNavigate } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'



export const Thankyou = () => {

 const dispatch=useDispatch();
 const cart=useSelector((store)=> store.cart)
 console.log(cart)

   
  const navigate=useNavigate();

  const handler=()=>{
    navigate("/");
    cart.length=0;
    
  }

  return (
    <div className="card">
      <div className="checkmarkdiv" >
        <i className="checkmark">✓</i>
      </div>
        <h1>Success</h1> 
        <p>We received your purchase request;<br/> we'll be in touch shortly!</p>
        {/* <Link to={"/home"}> */}
      
      <button className="homepage" onClick={()=>{handler(navigate('/'))}}>Back to Home</button>
      

        {/* <div id="homepage">Back to Home</div> */}
        {/* </Link> */}
         {/* Navigate(/home); */}
      </div>
  )
}