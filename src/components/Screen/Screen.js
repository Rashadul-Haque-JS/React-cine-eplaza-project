import React, { useState } from 'react'
import './screen.scss'
import jurassic from '../../assets/video/jw_fk.mp4'
import encanto from '../../assets/video/encanto.mp4'

export default function Screen() {
  const[play, setPlay]= useState(false)
  return (
    <div className='screen'>
      <video className='video' width="800" height="auto" controls autoPlay>
        {play && <source src={jurassic} type="video/mp4" />}

        {!play && <source src={encanto} type="video/ogg"/>}


</video>

    </div>
  )
}
