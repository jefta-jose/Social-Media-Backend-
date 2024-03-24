import React, { useState } from "react";
import { Link } from "react-router-dom";
import Notifications from "../assets/MultiplePages/Notifications";
import Navicon from "../Components/Navicon";
import Messages from "../assets/message-circle.png";
import Bell from "../assets/notification.png";
import Avatar from "../assets/64px.png";
import DropdownIcon from "../assets/chevron-down.png";
import Searcher from "../assets/search.png";
import Dots from "../assets/Group (1).png";
import LogoImage from "../assets/logo.png";
import "./Topnavbar.scss"; // Import your SCSS file
import SidenavbarDisplay from "./SidenavbarDisplay";

const Topnavbar = () => {
  const [isNotificationsOpen, setNotificationsOpen] = useState(false);
  const [isLogoutOpen, setLogoutOpen] = useState(false);
  const [isSidenavOpen, setSidenavOpen] = useState(false);

  const toggleNotifications = () => {
    setNotificationsOpen(!isNotificationsOpen);
    setLogoutOpen(false); // Close logout dropdown when notifications are opened
  };

  const toggleLogout = () => {
    setLogoutOpen(!isLogoutOpen);
    setNotificationsOpen(false); // Close notifications dropdown when logout is opened
  };

  const closeDropdowns = () => {
    setNotificationsOpen(false);
    setLogoutOpen(false);
  };

  const toggleSidenav = () => {
    setSidenavOpen(!isSidenavOpen);
    closeDropdowns(); // Close any open dropdowns when sidenav is opened
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
        <button onClick={toggleNotifications}>
          <Navicon url={Bell} />
        </button>
        <div className="angiee-image-top">
          <Navicon url={Avatar} />
        </div>
        <div className="msg-msg">
          <button onClick={toggleLogout}>
            <Navicon url={DropdownIcon} />
          </button>
          {isLogoutOpen && (
            <div className="dropdown-content">
              <Link to="/login">Logout</Link>
            </div>
          )}
        </div>
      </div>

      {isNotificationsOpen && <Notifications onClose={closeDropdowns} />}
      {isSidenavOpen && <SidenavbarDisplay onClose={closeSidenavMenu} />}
    </div>
  );
};

export default Topnavbar;
