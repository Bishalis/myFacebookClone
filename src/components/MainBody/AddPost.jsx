import React from 'react'
import './AddPost.css'
import { RiLiveFill } from "react-icons/ri"
import { GrGallery } from "react-icons/gr";
import { FaRegFaceSmile } from "react-icons/fa6";
import { useContext } from 'react';
import { PostContext } from './Home';
function AddPost() {
  const {isPostPopAdded, setIsPostPopAdded} = useContext(PostContext);
  return (
    <div className='addPostContainer'>
      <div className='topPostSection'>
          <div className='profileDiv'>
            <img src="src/assets/profile.jpg" alt="profile" className='postProfileImg'/>
          </div>
          <div className='profileInput' onClick={()=> setIsPostPopAdded(!isPostPopAdded)}>
             <button type='text' className='profileInputBtn'>What's on your mind</button>
          </div>
      </div>
      <div className="bottomPostSection">
          <div className='bottomPostDiv'>
            <RiLiveFill className='bottomPostLive bottomPostIcon'/>
            <h3 className=' bottomPostText'>Live video</h3>
          </div>
          <div className='bottomPostDiv'>
            <GrGallery className='bottomPostGallery bottomPostIcon'/>
            <h3 className='bottomPostText'>Photo/video</h3>
          </div>
          <div className='bottomPostDiv'>
            <FaRegFaceSmile className='bottomPostSmile bottomPostIcon'/>
            <h3 className='bottomPostText'>Feeling/activity</h3>
          </div>
      </div>
    </div>
  )
}

export default AddPost
