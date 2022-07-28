import React from 'react'
import './screen.scss'
import jurassic from '../../assets/video/jw_fk.mp4'
import encanto from '../../assets/video/encanto.mp4'
import { useSelector } from 'react-redux'
import { getType } from '../../features/movies/movieSlice'

export default function Screen() {
  const videoType = useSelector(getType)
  return (
    <div className='screen'>
      <video className='video' width="800" height="auto" controls autoPlay>
        {videoType === 'movie' && <source src={jurassic} type="video/mp4" />}

        {videoType === 'series' && <source src={encanto} type="video/ogg"/>}


</video>

    </div>
  )
}
