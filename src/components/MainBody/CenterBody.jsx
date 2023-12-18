import React, { useState } from 'react'
import './CenterBody.css'
import StoryReels from './StoryReels'
import AddPost from './AddPost'
import Post from './Post'
function CenterBody({isHamburgerToggle}) {
  const [postId,setPostId] = useState(0);

  return (
    <div className='centerBodyDiv' style={isHamburgerToggle===true?{display:"none"}:{display:"grid"}}>
       <StoryReels/>
       <AddPost onClick={()=>setPostId(postId+1)} />
       <Post postId = {postId}/>
    </div>
  )
}

export default CenterBody
