import React from "react";
import "../Layouts/MainContentLeft.scss";
import imgBckPr from "../assets/unsplash__nWaeTF6qo0.png";
import userImage12 from "../assets/64px.png";
import MoreInfo from "./MoreInfo";

const MainContentLeft = () => {
  return (
    <div className="MainContentLeft">
      <div className="about-profile">
        <div className="about-profile-bck-image">
          <img src={imgBckPr} alt="" />
        </div>
        <div className="edit-profile">
          <button> Edit Profile</button>
        </div>

        <div className="user-details-info">
          <img src={userImage12} alt="" />
        </div>

        <div className="profile-text">
          <div className="name-bio">
            <p className="p-p-p" >Angela Lee</p>
            <p>@angiee</p>
          </div>

          <div className="profile-text-container">
            <div className="posts">
              <p className="fnWeight">POSTS</p>
              <p className="numWeight">683</p>
            </div>

            <div className="friends">
              <p className="fnWeight">FRIENDS</p>
              <p className="numWeight">5.7K</p>
            </div>

            <div className="photos">
              <p className="fnWeight">PHOTOS</p>
              <p className="numWeight">296</p>
            </div>

            <div className="likes">
              <p className="fnWeight">LIKES</p>
              <p className="numWeight">10.7K</p>
            </div>

            <div className="posts">
              <p className="fnWeight">POSTS</p>
              <p className="numWeight">683</p>
            </div>
          </div>
        </div>
      </div>
      <div className="more-info">
        <MoreInfo />
      </div>
    </div>
  );
};

export default MainContentLeft;
