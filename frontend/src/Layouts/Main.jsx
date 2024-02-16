import "./Main.scss";
import Topnavbar from "./Topnavbar";
import Sidenavbar from "./Sidenavbar";
import Maincontent from "./Maincontent";

const Main = () => {
  return (
    <div className="main">
      <Sidenavbar />
      <div className="updown">
        <Topnavbar />
        <Maincontent />
      </div>
    </div>
  );
};

export default Main;
