import React from "react";
import "../Layouts/MoreInfo.scss";
import { useState } from "react";
import umbrella from "../assets/unsplash_c1rOy44wuts.png";
import rollerCoaster from "../assets/unsplash_XeYx043QD5U.png";
import location from "../assets/map-pin.png";
import tools from "../assets/calendar.png";
import web from "../assets/Group.png";
import caseTools from "../assets/briefcase.png";
import RightMoreInfo from "../Components/RightMoreInfo";

const MoreInfo = () => {
  const [progressPercentage, setprogressPercentage] = useState(80);
  return (
    <div className="bottom-info">
      <div className="left-more-info">
        <div className="complete-profile">
          <p>Complete your profile</p>
          <div className="percent">
            <progress value={progressPercentage} max="100"></progress>
            80%
          </div>
        </div>
        <div className="intro">
          <div className="intro-heading">
            <h3>intro</h3>
            <p>....</p>
          </div>
          <div className="intro-details">
            <p>I am an expereinced Junior with well developed skills</p>
          </div>
          <div className="location-details">
            <div className="image-text">
              <img src={location} alt="" />
              <p>2972 Westheimer Rd.</p>
            </div>
            <div className="image-text">
              <img src={tools} alt="" />
              <p>Beinford ltd.</p>
            </div>
            <div className="image-text">
              <img src={caseTools} alt="" />
              <p>September 24, 2017</p>
            </div>
            <div className="image-text">
              <img src={web} alt="" />
              <p>drible.com/angela</p>
            </div>
          </div>
        </div>
        <div className="photos">
          <div className="photos-info">
            <p>Photos</p>
            <p className="sea-all2">see all</p>
          </div>
          <div className="photo-images">
            <img src={umbrella} alt="" />
            <img src={rollerCoaster} alt="" />
            <img src={umbrella} alt="" />
            <img src={rollerCoaster} alt="" />
            <img src={umbrella} alt="" />
            <img src={rollerCoaster} alt="" />
            <img src={umbrella} alt="" />
            <img src={rollerCoaster} alt="" />
            <img src={umbrella} alt="" />
            <img src={rollerCoaster} alt="" />
            <img src={umbrella} alt="" />
            <img src={rollerCoaster} alt="" />
            
          </div>
        </div>
      </div>
      <div className="right-more-info">
        <RightMoreInfo />
      </div>
    </div>
  );
};

export default MoreInfo;
