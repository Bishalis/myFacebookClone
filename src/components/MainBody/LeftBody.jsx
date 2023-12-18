import React, { useState } from "react";
import "./LeftBody.css";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { AiOutlineArrowDown } from "react-icons/ai";
function LeftBody({isHamburgerToggle}) {
    const [hamburgerMenu, setHamburgerMenu] = useState("leftBodyDiv");
  return (
    <div
      className={
        isHamburgerToggle === false
          ? hamburgerMenu
          :()=> setHamburgerMenu("leftBodyDivExpand")
      }
    >
      <div className="profileItem">
        <img className="profileItem-img" src="src\assets\profile.jpg"></img>
        <h2>Bishal Jung Shahi</h2>
      </div>
      <div className="profileItem">
        <img className="profileItem-img" src="src\assets\saved.png"></img>
        <h2>Saved</h2>
      </div>
      <div className="profileItem">
        <img className="profileItem-img" src="src\assets\profile.jpg"></img>
        <h2>Find friends</h2>
      </div>

      <div className="profileItem">
        <img className="profileItem-img" src="src\assets\marketplace.png"></img>
        <h2>Marketplace</h2>
      </div>

      <div className="profileItem">
        <img className="profileItem-img" src="src/assets/events.jpg"></img>
        <h2>Events</h2>
      </div>

      <div className="profileItem">
        <img className="profileItem-img" src="src\assets\memories.png"></img>
        <h2>Memories</h2>
      </div>

      <div className="profileItem">
        <img className="profileItem-img" src="src/assets/groups.png"></img>
        <h2>Groups</h2>
      </div>

      <div className="profileItem">
        <img className="profileItem-img" src="src\assets\video.png"></img>
        <h2>Videos</h2>
      </div>

      <div className="profileItem">
        <img className="profileItem-img" src="src\assets\feeds.png"></img>
        <h2>Feeds</h2>
      </div>

      <div className="profileItem">
        <AiOutlineArrowDown className="profile-icon" />
        <h2>See more</h2>
      </div>

      <div className="profileItem">
        <img className="profileItem-img" src="src\assets\profile.jpg"></img>
        <h2>Ad managers</h2>
      </div>

      <div className="profileItem">
        <img className="profileItem-img" src="src\assets\profile.jpg"></img>
        <h2>Blood donations</h2>
      </div>

      <div className="profileItem">
        <img className="profileItem-img" src="src\assets\profile.jpg"></img>
        <h2>Climate Science center</h2>
      </div>

      <div className="profileItem">
        <img className="profileItem-img" src="src\assets\profile.jpg"></img>
        <h2>Crisis response</h2>
      </div>

      <div className="profileItem">
        <img className="profileItem-img" src="src\assets\profile.jpg"></img>
        <h2>Fundraisers</h2>
      </div>

      <div className="profileItem">
        <img className="profileItem-img" src="src\assets\profile.jpg"></img>
        <h2>Gaming video</h2>
      </div>

      <div className="profileItem">
        <img className="profileItem-img" src="src\assets\profile.jpg"></img>
        <h2>Nepali lai Kaam</h2>
      </div>

      <div className="profileItem">
        <img className="profileItem-img" src="src\assets\profile.jpg"></img>
        <h2>Basketball</h2>
      </div>

      <div className="profileItem">
        <img className="profileItem-img" src="src\assets\profile.jpg"></img>
        <h2>Football</h2>
      </div>
    </div>
  );
}

export default LeftBody;
