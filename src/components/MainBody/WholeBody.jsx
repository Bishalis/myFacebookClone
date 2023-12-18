import React from "react";
import LeftBody from "./LeftBody";
import CenterBody from "./CenterBody";
import RightBody from "./RightBody";
import "./WholeBody.css";
function WholeBody({ isHamburgerToggle }) {
  return (
    <div className="wholeBodyDiv">
      <LeftBody className="leftBodyDiv" isHamburgerToggle={isHamburgerToggle} />
      <CenterBody
        className="centerBodyDiv"
        isHamburgerToggle={isHamburgerToggle}
      />
      <RightBody
        className="rightBodyDiv"
        isHamburgerToggle={isHamburgerToggle}
      />
    </div>
  );
}

export default WholeBody;
