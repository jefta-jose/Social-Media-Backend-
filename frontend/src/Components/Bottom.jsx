import "./Designs.scss";
import topimage from "../assets/Avatar.png";
import middleimage from "../assets/Avatar (1).png";
import bottomimage from "../assets/Avatar (2).png";

const Bottoms = () => {
  const designitems = [
    { image: topimage, title: "Design Enthusiast" },
    { image: middleimage, title: "UI Official" },
    { image: bottomimage, title: "Web Designer" },
  ];

  return (
    <div className="Designs">
      {designitems &&
        designitems.map((item, index) => {
          return (
            <div className="design-Items" key={index}>
              <div className="icontitle">
                <img src={item.image} alt="" />
                {item.title}
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Bottoms;
