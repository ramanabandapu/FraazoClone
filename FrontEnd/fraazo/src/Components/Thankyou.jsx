import React from 'react'
import "./Thankyou.css"
import { Link,Navigate } from 'react-router-dom'

export const Thankyou = () => {

  //  const handle=()=>{
  //    Navigate("/")
  //  }

  return (
    <div className="card">
      <div className="checkmarkdiv" >
        <i className="checkmark">✓</i>
      </div>
        <h1>Success</h1> 
        <p>We received your purchase request;<br/> we'll be in touch shortly!</p>
        {/* <Link to={"/home"}> */}
      
      <button className="homepage" onClick={handle}>Back to Home</button>
      

        {/* <div id="homepage">Back to Home</div> */}
        {/* </Link> */}
         {/* Navigate(/home); */}
      </div>
  )
}