import React, { useState } from "react";
import calendar from "../calendar.png";
import EventDisplay from "./EventDisplay";
import "../MultiplePages/Event.scss";

const Event = () => {
  const [selectedCategory, setSelectedCategory] = useState("Popular");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="event-container">
      <div className="event">
        <div className="event-header">
          <h3>Find Event</h3>
          <p>. . . </p>
        </div>
        <div className="event-selection">
          <div className="selection-list">
            <div className="list-ul-ul">
              <ul>
                <li>
                  <a href="#" onClick={() => handleCategoryClick("Popular")}>
                    Popular
                  </a>
                </li>
                <li>
                  <a href="#" onClick={() => handleCategoryClick("For You")}>
                    For You
                  </a>
                </li>
                <li>
                  <a href="#" onClick={() => handleCategoryClick("Nearest")}>
                    Nearest
                  </a>
                </li>
                <li>
                  <a href="#" onClick={() => handleCategoryClick("favorite")}>
                    Favorite
                  </a>
                </li>
                <li>
                  <a href="#">Registered</a>
                </li>
              </ul>
            </div>
            <div className="event-date">
              <img src={calendar} alt="" />
              <p>November</p>
            </div>
          </div>
        </div>

        <div className="event-grid">
          <EventDisplay opinion={selectedCategory} />
        </div>
      </div>
    </div>
  );
};

export default Event;
