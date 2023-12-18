import React from 'react'
import './Story.css'
function Story({title,profile,background}) {
  return (
    <div className='Story' style={{background:`url(${background})`}}>
      <div className='Avatar' src={background}>
        <img src={profile} alt="" className='profile-img-story'/>
        <h4 className='story-title'>{title}</h4>
      </div>
    </div>
  )
}

export default Story
