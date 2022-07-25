import React, { useState } from 'react'
import './register.scss'

export default function Register() {
    const [name, setName] = useState('')
    const [street, setStreet] = useState('')
    const [city, setCity] = useState('')
    const[postCode, setPostCode]= useState('')
    const [country, setCountry] = useState('')
    const[email, setEmail]= useState('')
    const [password, setPassword] = useState('')
    const [repeatPassword, setrepeatPassword] = useState('')

  return (
    <div className='register'>
    <div className='form-wrapper'>
    <form className='regi-container'>
      <h2>Signup</h2>
      <input type="text" placeholder='name' value={name} onChange={(e)=> setName(e.target.value) } required />
    <input type="text" placeholder='street number' value={street} onChange={(e) => setStreet(e.target.value)} required />
    <input type="text" placeholder='post code' value={postCode} onChange={(e) => setPostCode(e.target.value)} required />
    <input type="text" placeholder='city' value={city} onChange={(e) => setCity(e.target.value)} required />
    <input type="text" placeholder='country of residence' value={country} onChange={(e) => setCountry(e.target.value)} required />
    <input type="text" placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
    <input type="text" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} required />
    <input type="text" placeholder='confirm password' value={repeatPassword} onChange={(e) => setrepeatPassword(e.target.value)} required />
        <button>SUBMIT</button>
        </form>
        </div>
    </div>
  )
}
