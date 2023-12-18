import React from 'react'
import Story from './Story'
import './StoryReels.css'
function StoryReels() {
  return (
    <div className='storyReels'>
    <Story      
        profile="src/assets/profile.jpg"
        title="Bishal"
        background="src/assets/night-1859616_640.jpg"
        />
          <Story      
        profile="src/assets/profile.jpg"
        title="Bishal"
        background="src/assets/night-1859616_640.jpg"
        />
          <Story      
        profile="src/assets/profile.jpg"
        title="Bishal"
        background="src/assets/night-1859616_640.jpg"
        />
          <Story      
        profile="src/assets/profile.jpg"
        title="Bishal"
        background="src/assets/night-1859616_640.jpg"
        />
    </div>
  )
}

export default StoryReels
