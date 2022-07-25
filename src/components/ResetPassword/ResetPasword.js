import React, { useState } from 'react'
import './resetPassword.scss'

export default function ResetPasword() {
    const[userID, setUserID] = useState('')
    return (
    <div className='resetPassword'>
      <div className='reset-wrapper'>

          <form className='reset-container'>
             <input type="text" placeholder='email' value={userID} onChange={(e) => setUserID(e.target.value)} required />
            <button>Send</button>
          </form>
        </div>
    </div>
  )
}

