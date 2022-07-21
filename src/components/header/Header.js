import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../../assets/images/logocinep.png'
import user from '../../assets/images/user-avatar.png'
import './Header.scss'

export default function Header() {
  return (
      <div className='header'>
          <Link to='/'>
            <div className='logo'>
            <img src={logo} alt='logo'/>
          </div>
          </Link>
          <Link to='/login'>
          <div className='user-logo'>
            <img src={ user} alt='user logo' />
          </div>
          </Link>



      </div>
  )
}

