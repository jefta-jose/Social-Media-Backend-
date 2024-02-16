import React from "react";
import search from "../search.png";
import video1 from "../Mask Group.png";
import video2 from "../unsplash_8e0EHPUx3Mo.png";
import video3 from "../unsplash (1).png";
import playbtn from "../chevron-down.png";
import image1 from "../user1.png";
import image2 from "../user2.png";
import image3 from "../user3.png";
import angiee from "../64px.png";
import bigvideo from "../unsplash_7MAjXGUmaPw.png";
import "../MultiplePages/Video.scss";
const Video = () => {
  return (
    <div className="Video-container">
      <div className="see-more-videos">
        <div className="video1">
          <div className="video-header">
            <div className="vid-h-h">
              <h2>Video</h2>
            </div>
            <div className="search-icon-holding">
              <img src={search} alt="" />
            </div>
          </div>
          <div className="text-in-categories">
            <h3>Categories To Explore</h3>
            <p>see all</p>
          </div>
          <div className="explore-container">
            <div className="explore-categories">
              <div className="video-container">
                <div className="video12">
                  <div className="image">
                    <img src={video1} alt="" />
                  </div>
                  <div className="music-text">
                    <p>Music</p>
                    <div>
                      <img src={image1} alt="" />
                      <img src={image2} alt="" />
                      <img src={image3} alt="" />
                    </div>
                  </div>
                  <button> See All</button>
                </div>
              </div>

              <div className="video-container">
                <div className="video12">
                  <div className="image">
                    <img src={video2} alt="" />
                  </div>
                  <div className="music-text">
                    <p>Music</p>
                    <div>
                      <img src={image1} alt="" />
                      <img src={image2} alt="" />
                      <img src={image3} alt="" />
                    </div>
                  </div>
                  <button> See All</button>
                </div>
              </div>

              <div className="video-container">
                <div className="video12">
                  <div className="image">
                    <img src={video1} alt="" />
                  </div>
                  <div className="music-text">
                    <p>Music</p>
                    <div>
                      <img src={image1} alt="" />
                      <img src={image2} alt="" />
                      <img src={image3} alt="" />
                    </div>
                  </div>
                  <button> See All</button>
                </div>
              </div>

              <div className="video-container">
                <div className="video12">
                  <div className="image">
                    <img src={video2} alt="" />
                  </div>
                  <div className="music-text">
                    <p>Music</p>
                    <div>
                      <img src={image1} alt="" />
                      <img src={image2} alt="" />
                      <img src={image3} alt="" />
                    </div>
                  </div>
                  <button> See All</button>
                </div>
              </div>

              <div className="video-container">
                <div className="video12">
                  <div className="image">
                    <img src={video1} alt="" />
                  </div>
                  <div className="music-text">
                    <p>Music</p>
                    <div>
                      <img src={image1} alt="" />
                      <img src={image2} alt="" />
                      <img src={image3} alt="" />
                    </div>
                  </div>
                  <button> See All</button>
                </div>
              </div>

              <div className="video-container">
                <div className="video12">
                  <div className="image">
                    <img src={video2} alt="" />
                  </div>
                  <div className="music-text">
                    <p>Music</p>
                    <div>
                      <img src={image1} alt="" />
                      <img src={image2} alt="" />
                      <img src={image3} alt="" />
                    </div>
                  </div>
                  <button> See All</button>
                </div>
              </div>
              <div className="video-container">
                <div className="video12">
                  <div className="image">
                    <img src={video1} alt="" />
                  </div>
                  <div className="music-text">
                    <p>Music</p>
                    <div>
                      <img src={image1} alt="" />
                      <img src={image2} alt="" />
                      <img src={image3} alt="" />
                    </div>
                  </div>
                  <button> See All</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="minutes-ago-video">
        <div className="video-user-details">
          <div className="innter-txt">
            <img src={angiee} alt="" />
            <div className="video-user-text">
              <p className="ang-tt-xt">Angela lee</p>
              <p>58 mins ago</p>
            </div>
          </div>
          <p>. . .</p>
        </div>
        <div className="video-ago-text">
          <p>
            The HAPPINESS you get when you serve your food to family members and
            their smile and your satisfaction is beyond. Do some experiment,
            feel the energy, share the happiness, fulfill your urge and finally
            relieve your stress.
          </p>
        </div>
        <div className="big-video-conatiner">
          <img src={bigvideo} alt="" />
          <img className="dropdown-vid" src={playbtn} alt="" />
        </div>

        <div className="video-user-details">
          <div className="innter-txt">
            <img src={angiee} alt="" />
            <div className="video-user-text">
              <p>Jefta Ndegwa</p>
              <p>3 hours ago</p>
            </div>
          </div>
          <p>. . .</p>
        </div>
        <div className="video-ago-text">
          <p>
            The HAPPINESS you get when you serve your food to family members and
            their smile and your satisfaction is beyond. Do some experiment,
            feel the energy, share the happiness, fulfill your urge and finally
            relieve your stress.
          </p>
        </div>
        <div className="big-video-conatiner">
          <img src={bigvideo} alt="" />
          <img className="dropdown-vid" src={playbtn} alt="" />
        </div>
        <div className="video-user-details">
          <div className="innter-txt">
            <img src={angiee} alt="" />
            <div className="video-user-text">
              <p>Angela lee</p>
              <p>5 hours ago</p>
            </div>
          </div>
          <p>. . .</p>
        </div>
        <div className="video-ago-text">
          <p>
            The HAPPINESS you get when you serve your food to family members and
            their smile and your satisfaction is beyond. Do some experiment,
            feel the energy, share the happiness, fulfill your urge and finally
            relieve your stress.
          </p>
        </div>
        <div className="big-video-conatiner">
          <img src={bigvideo} alt="" />
          <img className="dropdown-vid" src={playbtn} alt="" />
        </div>
        <div className="video-user-details">
          <div className="innter-txt">
            <img src={angiee} alt="" />
            <div className="video-user-text">
              <p>Mark Adams</p>
              <p>8 hours ago</p>
            </div>
          </div>
          <p>. . .</p>
        </div>
        <div className="video-ago-text">
          <p>
            The HAPPINESS you get when you serve your food to family members and
            their smile and your satisfaction is beyond. Do some experiment,
            feel the energy, share the happiness, fulfill your urge and finally
            relieve your stress.
          </p>
        </div>
        <div className="big-video-conatiner">
          <img src={bigvideo} alt="" />
          <img className="dropdown-vid" src={playbtn} alt="" />
        </div>
        <div className="video-user-details">
          <div className="innter-txt">
            <img src={angiee} alt="" />
            <div className="video-user-text">
              <p>Jeniffer Lopez</p>
              <p>10 hours ago</p>
            </div>
          </div>
          <p>. . .</p>
        </div>
        <div className="video-ago-text">
          <p>
            The HAPPINESS you get when you serve your food to family members and
            their smile and your satisfaction is beyond. Do some experiment,
            feel the energy, share the happiness, fulfill your urge and finally
            relieve your stress.
          </p>
        </div>
        <div className="big-video-conatiner">
          <img src={bigvideo} alt="" />
          <img className="dropdown-vid" src={playbtn} alt="" />
        </div>
        <div className="video-user-details">
          <div className="innter-txt">
            <img src={angiee} alt="" />
            <div className="video-user-text">
              <p>Scot Atkins</p>
              <p>15 hours ago</p>
            </div>
          </div>
          <p>. . .</p>
        </div>
        <div className="video-ago-text">
          <p>
            The HAPPINESS you get when you serve your food to family members and
            their smile and your satisfaction is beyond. Do some experiment,
            feel the energy, share the happiness, fulfill your urge and finally
            relieve your stress.
          </p>
        </div>
        <div className="big-video-conatiner">
          <img src={bigvideo} alt="" />
          <img className="dropdown-vid" src={playbtn} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Video;
