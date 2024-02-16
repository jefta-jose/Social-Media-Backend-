import "./Navicon.scss";

const Navicon = ({ url }) => {
  return (
    <div className="nav-icons">
      <img className="naviconStyle" src={url} alt="nopic" />
    </div>
  );
};

export default Navicon;
