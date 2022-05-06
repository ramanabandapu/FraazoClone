import React from 'react'
import "./Thankyou.css"

export const Thankyou = () => {
  return (
    <div className="card">
      <div className="checkmarkdiv" >
        <i className="checkmark">✓</i>
      </div>
        <h1>Success</h1> 
        <p>We received your purchase request;<br/> we'll be in touch shortly!</p>
        <div id="homepage"><a href="#" >Back to Home</a></div>
      </div>
  )
}
