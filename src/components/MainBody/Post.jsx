import React, { useState, useContext } from "react";
import { BsThreeDots } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { PostContext } from "./Home";
import "./post.css"
function Post() {
  const { posts ,handleDeletePost,image} = useContext(PostContext);
  return (
    <>
        {posts.map((post, idx ) => {
          return <div key={post.keyId} className="mainPostContainer">
              <div className="topMainpost">
                <div className="mainPostLeft">
                  <img
                    src="src\assets\profile.jpg"
                    alt="profilePicture"
                    className="postProfile"
                  />
                  <div className="mainPostProfileinfo">
                    <h3 className="mainPostProfileName">Bishal Jung Shahi</h3>
                    <h4 className="mainPostProfileTime">1 hour ago</h4>
                    <h4 className="postCaption">{post.caption}</h4>
                  </div>
                </div>
                <div className="mainPostRight">
                  <BsThreeDots className="mainPostRightIcon"/>
                  <RxCross2 className="mainPostRightIcon"  onClick={() =>handleDeletePost(post.keyId)}/>
                </div>
              </div>
                {post.image?<img src={URL.createObjectURL(post.image)} alt="Image for post "  className="postImage"/>:<></>}
            </div>
        })}
        
      </>
  
  );
}

export default Post;
