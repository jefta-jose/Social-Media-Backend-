import "./MenuItems.scss";
import boxes from "../assets/layout-grid.png";
import persons from "../assets/users.png";
import star from "../assets/star.png";
import playbtn from "../assets/Vector.png";
import gallary from "../assets/photo.png";
import toolbox from "../assets/Group.png";
import { NavLink } from "react-router-dom";

const MenuItems = () => {
  const menuitems = [
    { icon: boxes, title: "Timeline", path: "/timeline" },
    { icon: persons, title: "Friends", path: "/friends" },
    { icon: star, title: "Groups", path: "/groups" },
    { icon: playbtn, title: "Videos", path: "/video" },
    { icon: gallary, title: "Photos", path: "/photos" },
    { icon: toolbox, title: "Events", value: 20, path: "/event" },
  ];

  return (
    <div className="menuitems2">
      {menuitems &&
        menuitems.map((item, index) => {
          return (
            <div className="MENuitem">
              <NavLink key={index} to={item.path} className="menuIcons">
                <img src={item.icon} alt={item.title} />
                {item.title}
              </NavLink>
              <div className="valueofMenu">
                {item.value ? (
                  <>
                    {item.value && (
                      <span
                        style={{
                          color: "#f8f8f8",
                          backgroundColor: "#ED4F9D",
                          borderRadius: "15px",
                          padding: "3px 5px",
                        }}
                      >
                        {item.value}
                      </span>
                    )}
                  </>
                ) : (
                  <>
                    {item.value && <span className="value">{item.value}</span>}
                  </>
                )}
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default MenuItems;
