import React from 'react'
import './CSS/LoginSignup.css'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Your Name'/>
          <input type="email" placeholder='Email Address'/>
          <input type="password" placeholder='Password'/>
        </div>
        <button className='Continue'>Continue</button>
        <p className="loginsignup-login">Already have an account? <span>
          <Link to="/login">
          <button className='LoginBtn'>Login</button>
          </Link>
          </span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' />
          <p>By continying, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default Signup