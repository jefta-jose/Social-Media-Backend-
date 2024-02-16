import "./Designs.scss";
import topimage from "../assets/Rectangle 556.png";
import middleimage from "../assets/Rectangle 556 (1).png";
import bottomimage from "../assets/Rectangle 556 (2).png";

const Designs = () => {
  const designitems = [
    { image: topimage, title: "Web Design" },
    { image: middleimage, title: "Mobile Design" },
    { image: bottomimage, title: "Product Design" },
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

export default Designs;
