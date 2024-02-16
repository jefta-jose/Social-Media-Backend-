import "./RightMenuItems.scss";
import boxes from "../assets/Avatar (3).png";
import persons from "../assets/Avatar (4).png";
import star from "../assets/Avatar (3).png";
import playbtn from "../assets/Avatar (4).png";
import gallary from "../assets/Avatar (3).png";

const RightMenuitems = () => {
  const menuitems = [
    { icon: boxes, title: "Wade Warren" },
    { icon: persons, title: "Jane Cooper" },
    { icon: star, title: "Esther Howard" },
    { icon: playbtn, title: "Cameron Williamson" },
    { icon: gallary, title: "Broklyn Simmons" },
  ];

  return (
    <div className="menuitems2">
      {menuitems &&
        menuitems.map((item, index) => {
          return (
            <div className="MENuitem122" key={index}>
              <div className="menuIcons">
                <img src={item.icon} alt={item.title} />
                {item.title}
              </div>

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

export default RightMenuitems;
