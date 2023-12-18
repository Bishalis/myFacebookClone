import WholeBody from "./WholeBody";
import NavigationBar from "../Navigation/NavigationBar";
import { useState, useEffect, createContext,useRef } from "react";
import AddedPostPop from "./addedPostPop";
import { auth } from "../modules/base";
import { onAuthStateChanged,signOut} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export const PostContext = createContext();
function Home() {

  // storing the user info when mounted
    useEffect(()=>{
     onAuthStateChanged(auth,(user)=>{
       if(user){
        const uid = user.id;
       }else{
        console.log("user is logged out")
       }
      })
    },[])

    // handling the user log out
    const navigate = useNavigate();
 
    const handleLogout = () => {               
        signOut(auth).then(() => {
        // Sign-out successful.
            navigate("/");
            console.log("Signed out successfully")
        }).catch((error) => {
        console.log(error);
        });
      }
  const [isHamburgerToggle, setIsHamburgerToggle] = useState(false);
  const [isPostPopAdded, setIsPostPopAdded] = useState(false);
  const toggleHamburgerMenu = () => {
    setIsHamburgerToggle(!isHamburgerToggle);
  };

  const [posts, setPosts] = useState([]);
  const [caption, setCaption] = useState("");
  const [keyId, setKeyId] = useState(0);

  function updatingKeyId() {
    setKeyId(keyId + 1);
  }
   
  // deleting the post 
  const handleDeletePost = (idx) => {
    const deletePost = posts.filter((post) => post.keyId !== idx);
    setPosts(deletePost)
  };

  // adding the post 
  function onSubmitPostHandler(e) {
    e.preventDefault();
    if (caption === "") {
      return;
    } else {
      setPosts((currentPost) => [
        ...currentPost,
        { keyId: keyId, caption: caption },
      ]);
      updatingKeyId();
      console.log(posts);
      setIsPostPopAdded(false)
      setCaption("");
    }
  }


  const [image,setImage] = useState("");
  function fileSelectHandler(e){
    console.log(e.target.files[0]);
    setImage(e.target.files[0]);
  }



  
  return (
      <PostContext.Provider
        value={{
          isPostPopAdded,
          setIsPostPopAdded,
          setCaption,
          caption,
          posts,
          keyId,
          onSubmitPostHandler,
          handleDeletePost,
          fileSelectHandler,
          image,
        }}
      >
        <NavigationBar toggleHamburgerMenu={toggleHamburgerMenu} handleLogout={handleLogout}/>
        <WholeBody isHamburgerToggle={isHamburgerToggle} />
        <AddedPostPop
          isPostPopAdded={isPostPopAdded}
          setIsPostPopAdded={setIsPostPopAdded}
        />
      </PostContext.Provider>
  );
}

export default Home;
