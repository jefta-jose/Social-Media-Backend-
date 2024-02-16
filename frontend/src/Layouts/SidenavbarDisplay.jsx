import Navicon from "../Components/Navicon";
import "../Layouts/SidnavDisp.scss";
import Dots from "../assets/Group (1).png";
import LogoImage from "../assets/logo.png";
import avarta from "../assets/64px.png";
import MenuItems from "../Components/MenuItems";
import Designs from "../Components/Designs";

const SidenavbarDisplay = ({ onClose }) => {
  const handleHideSidenavMenu = () => {
    onClose(); // Call the onClose prop passed from the parent to hide the notification
  };

  return (
    <div className="leftsidebar1">
      <div className="leftsidebar-holder">
        <div className="logo">
          <div className="Dots">
            <button onClick={handleHideSidenavMenu}>
              <Navicon url={Dots} />
            </button>
          </div>
          <div>
            <Navicon url={LogoImage} />
          </div>
          <div>
            <h1>Hiphonic</h1>
          </div>
        </div>
        <div className="UserDetails">
          <div className="user-image-1">
            <Navicon url={avarta} />
          </div>
          <div className="userName-bio">
            <div>
              <p className="Angela">Angela Lee</p>
            </div>
            <div>
              <p>@angiee</p>
            </div>
          </div>
        </div>
        <div className="menu">
          <h2>MENU</h2>
          <MenuItems />
        </div>
        <div className="Shortcuts">
          <h2>SHORTCUTS</h2>
          <Designs />
        </div>
      </div>
    </div>
  );
};

export default SidenavbarDisplay;
