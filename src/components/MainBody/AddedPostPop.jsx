import React, { useContext, useRef, useState } from "react";
import "./AddedPostPop.css";
import { Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { GrGallery } from "react-icons/gr";
import { PostContext } from "./Home";
function AddedPostPop({ isPostPopAdded, setIsPostPopAdded}) {
  const {
    caption,
    setCaption,
    onSubmitPostHandler,
    fileSelectHandler,
    image,
    setImage
    // fileUploadHandler,
  } = useContext(PostContext);
  const inputRef = useRef(null);
  const handleUploadClick = () => {
    inputRef.current.click();
  };

  
  return (
    <div
      className="addedPostPopContainer"
      style={isPostPopAdded ? { display: "block" } : { display: "none" }}
    >
      <header className="addPostHeader">
        <h1>Create post</h1>
        <CloseIcon
          fontSize="large"
          className="addPostClose"
          onClick={() => setIsPostPopAdded(!isPostPopAdded)}
        />
      </header>

      <form onSubmit={(e) => onSubmitPostHandler(e)}>
        <input
          type="text"
          value={caption}
          placeholder="What is in your mind ?"
          className="addPostInput"
          onChange={(e) => setCaption(e.target.value)}
        />
        <Button
          variant="contained"
          size="large"
          aria-label="medium secondary button group"
          className="addPostSubmitButton"
          type="submit"
          // onClick={()=>fileUploadHandler()}
        >
          Submit
        </Button>
        <div className="bottomPostDiv" onClick={handleUploadClick}>
          <GrGallery className="bottomPostGallery bottomPostIcon" />
          <h3 className="bottomPostText">Photo/video</h3>
        </div>
        <input
          type="file"
          ref={inputRef}
          onChange={(e)=>{
            fileSelectHandler(e)
          }}
        />
      </form>
    </div>
  );
}

export default AddedPostPop;
