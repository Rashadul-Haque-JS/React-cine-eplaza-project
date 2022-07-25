import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './login.scss'

export default function Login() {
  const [user, setUser] = useState('')
  const [password, setPassword]= useState('')
  return (
    <div className='login'>

      <div className='form-wrapper'>
    <form className='login-container'>
      <h2>Login</h2>
      <input type="text" placeholder='user name' value={user} onChange={(e)=> setUser(e.target.value) } required />
      <input type="text" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button>GO</button>
        </form>
        <div className='manageLogin'>
          <Link to='/resetPassword'>
          <p className='reset'>Forgot password?</p>
          </Link>
          <Link to='/register'>
          <p className='register'>Signup</p>
          </Link>
        </div>

      </div>





    </div>
  )
}
