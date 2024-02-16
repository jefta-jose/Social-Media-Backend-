import Navicon from "../Components/Navicon";
import "./Sidenavbar.scss";
import Dots from "../assets/Group (1).png";
import LogoImage from "../assets/logo.png";
import avarta from "../assets/64px.png";
import MenuItems from "../Components/MenuItems";
import Designs from "../Components/Designs";

const Sidenavbar = () => {
  return (
    <div className="leftsidebar">
      <div className="logo">
        <div className="Dots">
            <Navicon url={Dots} />
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
  );
};

export default Sidenavbar;
