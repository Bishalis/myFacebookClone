import React, { useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import { BsFacebook, BsController, BsMessenger } from "react-icons/bs";
import { AiOutlineHome, AiOutlinePlus } from "react-icons/ai";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { MdOndemandVideo } from "react-icons/md";
import { PiGarageBold } from "react-icons/pi";
import { IoMdNotifications } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import CenterDivIcons from "./CenterDivIcons";
import { DarkMode, Translate } from "@mui/icons-material";
import { Logout } from "@mui/icons-material";
import { Login } from "@mui/icons-material";
import "./NavigationBar.css";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import RightDivIcons from "./RightDivIcons";
import { NavLink } from "react-router-dom";
function NavigationBar({ toggleHamburgerMenu, handleLogout }) {
  const [searchClass, setSearchClass] = useState(false);
  const [history, setHistory] = useState("");
  const [dropDown, setDropDown] = useState("mainSearchBox");
  const [setting, setSetting] = useState(false);
  function searchHandleClick() {
    setSearchClass(true);
  }
  function removeSearchHandleClick() {
    setSearchClass(false);
    // console.log(searchClass);
  }

  // setting hamburger menu for small screen

  useEffect(() => {
    recover();
  }, [history]);

  function recover() {
    let data = localStorage.getItem("userHistory");
    let parsedData = JSON.parse(data);
    setHistory(() => parsedData);
    // console.log(parsedData);
  }

  function saveToStorage(history) {
    localStorage.setItem("userHistory", JSON.stringify(history));
  }

  return (
    <>
      <div className="wholeNavBar" style={{backgroundColor:""}}>
        <div className="leftNav">
          <BsFacebook className="facebookIcon " />
          <div className={!searchClass ? { dropDown } : "dropDownSearch"}>
            <FaArrowRight
              className="exitArrowNav"
              style={
                searchClass
                  ? { display: "block", transition: " 2ms ease-in-out" }
                  : { display: "none" }
              }
              onClick={() => removeSearchHandleClick()}
            />
            <div className="searchBox">
              <input
              name="search"
                autoComplete="on"
                placeholder="Search"
                onChange={(e) => saveToStorage(e.target.value)}
                className="navSearchField "
                style={
                  searchClass
                    ? { display: "block", transition: " 2ms ease-in-out" }
                    : { display: "none" }
                }
                onClick={() => searchHandleClick()}
              />
              <FiSearch
                className="searchIcon"
                type="Submit"
                onClick={
                  !searchClass
                    ? () => searchHandleClick()
                    : () => removeSearchHandleClick()
                }
              />
              <GiHamburgerMenu
                className="hamburgerBtn"
                onClick={() => toggleHamburgerMenu()}
              />
            </div>
          </div>
        </div>
        <div className="centerNav">
          <CenterDivIcons Icon={AiOutlineHome} />
          <CenterDivIcons Icon={LiaUserFriendsSolid} />
          <CenterDivIcons Icon={MdOndemandVideo} />
          <CenterDivIcons Icon={PiGarageBold} />
          <CenterDivIcons Icon={BsController} />
          <CenterDivIcons Icon={GiHamburgerMenu} />
        </div>

        <div className="rightNav">
          <RightDivIcons Icon={AiOutlinePlus} />
          <RightDivIcons Icon={BsMessenger} />
          <RightDivIcons Icon={IoMdNotifications} />
          <img
            className="profile-img"
            src="src\assets\profile.jpg"
            onClick={() => setSetting(true)}
          ></img>
          <div
            className="profileSetting"
            style={
              setting
                ? { transform: `translateX(0px)` }
                : {
                    transform: `translateX(200%)`,
                    transition: `0.2 ease in out`,
                  }
            }
          >
            <img
              className="profile-img profile-Img-setting"
              onClick={() => setSetting(false)}
              src="src\assets\profile.jpg"
            ></img>
            <div className="profileItemSetting">
              <DarkMode />
              <h2>DarkMode</h2>
            </div>

            <div className="profileItemSetting">
              <NavLink to="/login">
                <Login />
                <h2>Login</h2>
              </NavLink>
            </div>

            <div className="profileItemSetting" onClick={() => handleLogout()}>
              <Logout />
              <h2>LogOut</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavigationBar;
