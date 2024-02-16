import React from "react";
import { Router, Routes, Route } from "react-router-dom";
import "./Maincontent.scss";
import MainContentRight from "./MainContentRight";
import MainContentLeft from "./MainContentLeft";
import Friends from "../assets/MultiplePages/Friends";
import Timeline from "../assets/MultiplePages/Timeline";
import Video from "../assets/MultiplePages/Video";
import Groups from "../assets/MultiplePages/Groups";
import Photos from "../assets/MultiplePages/Photos";
import Event from "../assets/MultiplePages/Event";

const Maincontent = () => {
  return (
    <div className="maincontent">
      <Routes>
        <Route path="/main" element={<MainContentLeft />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/video" element={<Video />} />
        <Route path="/groups" element={<Groups />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/event" element={<Event />} />
      </Routes>
      <MainContentRight />
    </div>
  );
};

export default Maincontent;
