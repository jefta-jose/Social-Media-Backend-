import React, { useState } from "react";
import Notifications from "../assets/MultiplePages/Notifications";
import Navicon from "../Components/Navicon";
import Messages from "../assets/message-circle.png";
import Bell from "../assets/notification.png";
import Avatar from "../assets/64px.png";
import Dropdown from "../assets/chevron-down.png";
import Searcher from "../assets/search.png";
import Dots from "../assets/Group (1).png";
import LogoImage from "../assets/logo.png";
import "./Topnavbar.scss"; // Import your SCSS file
import SidenavbarDisplay from "./SidenavbarDisplay";

const Topnavbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const closeNotifications = () => {
    setDropdownOpen(false);
  };

  const [isSidenavOpen, setSidenavOpen] = useState(false);
  const toggleSidenav = () => {
    setSidenavOpen(!isSidenavOpen);
  };

  const closeSidenavMenu = () => {
    setSidenavOpen(false);
  };

  return (
    <div className="top-nav">
      <div className="logo2">
        <div className="Dots">
          <Navicon url={Dots} />
        </div>
        <div className="logoimage">
          <Navicon url={LogoImage} />
        </div>
        <div>
          <h1>Hiphonic</h1>
        </div>
        <div className="display-menu">
          <button onClick={toggleSidenav}>
            <Navicon url={Dots} />
          </button>
          <p>menu</p>
        </div>
      </div>
      <div className="search-bar">
        <Navicon url={Searcher} />
        <input className="input" type="text" placeholder="search" />
      </div>
      <div className="icons-content">
        <div className="msg-msg">
          <Navicon url={Messages} />
        </div>
        <button onClick={toggleDropdown}>
          <Navicon url={Bell} />
        </button>
        <div className="angiee-image-top">
          <Navicon url={Avatar} />
        </div>
        <div className="msg-msg">
          <Navicon url={Dropdown} />
        </div>
      </div>

      {isDropdownOpen && <Notifications onClose={closeNotifications} />}
      {isSidenavOpen && <SidenavbarDisplay onClose={closeSidenavMenu} />}
    </div>
  );
};

export default Topnavbar;
