import Navicon from "../Components/Navicon";
import "../Layouts/RightSidenavbr.scss";
import Dots from "../assets/Group (1).png";
import LogoImage from "../assets/logo.png";
import avarta from "../assets/Avatar.png";
import RightMenuitems from "../Components/RightMenuitems";
import RightDesigns from "../Components/Designs";
import Bottoms from "../Components/Bottom";

const RightSidenavbar = () => {
  return (
    <div className="leftsidebar">
      <div className="Shortcuts">
        <div className="h-see">
          <h2>Your Pages</h2>
          <p>see all</p>
        </div>
        <RightDesigns />
      </div>
      <div className="menu">
        <div className="h-see">
          <h2>Contact</h2>
          <p>see all</p>
        </div>
        <RightMenuitems />
      </div>
      <div className="Shortcuts">
        <div className="h-see">
          <h2>Groups</h2>
          <p>see all</p>
        </div>
        <Bottoms />
      </div>
    </div>
  );
};

export default RightSidenavbar;
