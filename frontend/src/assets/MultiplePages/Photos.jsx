import React from "react";
// import PhotoImages from "./PhotoImages";
import boxes from "../unsplash__C5zsV_p-YI.png";
import persons from "../unsplash__KaMTEmJnxY.png";
import star from "../unsplash_TLD6iCOlyb0.png";
import playbtn from "../unsplash_vbAEHCrvXZ0.png";
import toolbox from "../unsplash_QRKJwE6yfJo.png";
import "../MultiplePages/Photos.scss";
const Photos = () => {
  return (
    <div className="Photos-conTainer">
      <div className="photo-cont-header">
        <h3>Your Photos</h3>
        <p>. . . </p>
      </div>

      <div className="photo-selector">
        <div className="selector-list">
          <ul>
            <li>
              <a href="#">Photos About You</a>
            </li>
            <li>
              <a href="#">Your Photos</a>
            </li>
            <li>
              <a href="#">Album</a>
            </li>
          </ul>
        </div>
        <div className="num-photos">
          <h4>Total Photos</h4>
          <p> photos about you</p>
        </div>
      </div>
      <div className="photo-images12">
        <img src={boxes} alt="" />
        <img src={persons} alt="" />
        <img src={star} alt="" />
        <img src={playbtn} alt="" />
        <img src={toolbox} alt="" />
        <img src={boxes} alt="" />
        <img src={persons} alt="" />
        <img src={star} alt="" />
        <img src={playbtn} alt="" />
        <img src={toolbox} alt="" />
        <img src={boxes} alt="" />
        <img src={persons} alt="" />
        <img src={star} alt="" />
        <img src={playbtn} alt="" />
        <img src={toolbox} alt="" />
        <img src={boxes} alt="" />
        <img src={persons} alt="" />
        <img src={star} alt="" />
        <img src={playbtn} alt="" />
        <img src={toolbox} alt="" />
        <img src={boxes} alt="" />
        <img src={persons} alt="" />
        <img src={star} alt="" />
        <img src={playbtn} alt="" />
        <img src={toolbox} alt="" />
        <img src={boxes} alt="" />
        <img src={persons} alt="" />
        <img src={star} alt="" />
        <img src={playbtn} alt="" />
        <img src={toolbox} alt="" />
      </div>
    </div>
  );
};

export default Photos;
