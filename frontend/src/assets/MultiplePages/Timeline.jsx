import "./Timeline.scss";
import you from "../64px.png";
import angie from "../48px.png";
import wade from "../Avatar (1).png";
import jane from "../Avatar (2).png";
import esther from "../Avatar (3).png";
import brooklyn from "../Avatar (4).png";
import leslie from "../user1.png";
import jenny from "../user2.png";
import robert from "../user3.png";
import cody from "../user4.png";
import kristin from "../48px.png";
import web from "../refresh.png";
import dropdown from "../chevron-down.png";
import smile from "../mood-smile.png";
import share from "../Group.png";
import video from "../Vector.png";
import photo from "../photo.png";
import stars from "../star.png";
import image1 from "../unsplash_c1rOy44wuts.png";
import image2 from "../unsplash_XeYx043QD5U.png";
import image3 from "../unsplash_BV8Ka-JE0Cs.png";
import comments from "../message-circle.png";
import likes from "../map-pin.png";
const Timeline = () => {
  return (
    <div className="timeline-container">
      <div className="timeline-heading">
        <h2>Your Timeline</h2>
      </div>
      <div className="timeline-images">
        <div className="angie">
          <img src={you} alt="" />
          <p>you</p>
        </div>
        <div className="angie">
          <img src={angie} alt="" />
          <p>Jefta</p>
        </div>
        <div className="angie">
          <img src={wade} alt="" />
          <p>Chomba</p>
        </div>
        <div className="angie">
          <img src={jane} alt="" />
          <p>Frankie</p>
        </div>
        <div className="angie">
          <img src={esther} alt="" />
          <p>Collins</p>
        </div>
        <div className="angie">
          <img src={brooklyn} alt="" />
          <p>Mary</p>
        </div>
        <div className="angie">
          <img src={leslie} alt="" />
          <p>Leah</p>
        </div>
        <div className="angie">
          <img src={jenny} alt="" />
          <p>Caleb</p>
        </div>
        <div className="angie">
          <img src={robert} alt="" />
          <p>Raphael</p>
        </div>
        <div className="angie">
          <img src={cody} alt="" />
          <p>Isaac</p>
        </div>
        <div className="angie">
          <img src={kristin} alt="" />
          <p>Angiee</p>
        </div>
      </div>
      <div className="whats-on-your-mind">
        <div className="whats-upper">
          <div className="image-on-mind">
            <img src={angie} alt="" />
            <div className="text">
              <h3>Angela Lee</h3>
              <p>@angiee</p>
            </div>
          </div>
          <div className="icon-on-mind">
            <img src={web} alt="" />
            <p>public</p>
            <img src={dropdown} alt="" />
          </div>
        </div>
        <div className="whats-middle">
          <div>
            <input type="text" placeholder="What's on your mind ?" />
          </div>
          <div className="middle-icon-holder" >
            <img src={smile} alt="" />
            <img src={share} alt="" />
          </div>
        </div>
        <div className="whats-below">
          <div className="first">
            <div className="icons-container-whats">
              <div className="container1">
                <img src={video} alt="" />
                <p>Live Video</p>
              </div>
              <div className="container1">
                <img src={photo} alt="" />
                <p>Image / Video</p>
              </div>
              <div className="container1">
                <img src={stars} alt="" />
                <p>Activity</p>
              </div>
            </div>
          </div>
          <div className="end">. . .</div>
        </div>
      </div>
      <div className="minutes-ago">
        <div className="image-on-mind">
          <img src={angie} alt="" />
          <div className="text">
            <h3>Angela Lee</h3>
            <p>58 mins ago</p>
          </div>
        </div>
        <div className="minutes-ago-text">
          <p>
            Here are some photography works that I made on the weekend with some
            of my friends, I really love those colorful tone. happy for that!
          </p>
        </div>
        <div className="minutes-ago-images">
          <img src={image1} alt="" />
          <img src={image2} alt="" />
          <img src={image3} alt="" />
        </div>
        <div className="minutes-ago-icons">
          <div className="icons-ago">
            <img src={likes} alt="" />
            <p>2.1 Likes</p>
          </div>
          <div className="icons-ago">
            <img src={comments} alt="" />
            <p>2.5 Likes</p>
          </div>
          <div className="icons-ago">
            <img src={share} alt="" />
            <p>1.8 Likes</p>
          </div>

          
        </div>
        <div className="whats-middle">
          <div>
            <input type="text" placeholder="What's on your mind ?" />
          </div>
          <div className="middle-icon-holder" >
            <img src={smile} alt="" />
            <img src={share} alt="" />
          </div>
        </div>

        <div className="image-on-mind">
          <img src={angie} alt="" />
          <div className="text">
            <h3>Angela Lee</h3>
            <p>1 hour ago</p>
          </div>
        </div>
        <div className="minutes-ago-text">
          <p>
            Here are some photography works that I made on the weekend with some
            of my friends, I really love those colorful tone. happy for that!
          </p>
        </div>
        <div className="minutes-ago-images">
          <img src={image1} alt="" />
          <img src={image2} alt="" />
          <img src={image3} alt="" />
        </div>
        <div className="minutes-ago-icons">
          <div className="icons-ago">
            <img src={likes} alt="" />
            <p>1k Likes</p>
          </div>
          <div className="icons-ago">
            <img src={comments} alt="" />
            <p>2k Likes</p>
          </div>
          <div className="icons-ago">
            <img src={share} alt="" />
            <p>1.5k Likes</p>
          </div>

          
        </div>
        <div className="whats-middle">
          <div>
            <input type="text" placeholder="What's on your mind ?" />
          </div>
          <div className="middle-icon-holder" >
            <img src={smile} alt="" />
            <img src={share} alt="" />
          </div>
        </div>

        <div className="image-on-mind">
          <img src={angie} alt="" />
          <div className="text">
            <h3>Angela Lee</h3>
            <p>3 hours ago</p>
          </div>
        </div>
        <div className="minutes-ago-text">
          <p>
            Here are some photography works that I made on the weekend with some
            of my friends, I really love those colorful tone. happy for that!
          </p>
        </div>
        <div className="minutes-ago-images">
          <img src={image1} alt="" />
          <img src={image2} alt="" />
          <img src={image3} alt="" />
        </div>
        <div className="minutes-ago-icons">
          <div className="icons-ago">
            <img src={likes} alt="" />
            <p>2.4 Likes</p>
          </div>
          <div className="icons-ago">
            <img src={comments} alt="" />
            <p>6k Likes</p>
          </div>
          <div className="icons-ago">
            <img src={share} alt="" />
            <p>5k Likes</p>
          </div>

          
        </div>
        <div className="whats-middle">
          <div>
            <input type="text" placeholder="What's on your mind ?" />
          </div>
          <div className="middle-icon-holder" >
            <img src={smile} alt="" />
            <img src={share} alt="" />
          </div>
        </div>

        <div className="image-on-mind">
          <img src={angie} alt="" />
          <div className="text">
            <h3>Angela Lee</h3>
            <p>12 hours ago</p>
          </div>
        </div>
        <div className="minutes-ago-text">
          <p>
            Here are some photography works that I made on the weekend with some
            of my friends, I really love those colorful tone. happy for that!
          </p>
        </div>
        <div className="minutes-ago-images">
          <img src={image1} alt="" />
          <img src={image2} alt="" />
          <img src={image3} alt="" />
        </div>
        <div className="minutes-ago-icons">
          <div className="icons-ago">
            <img src={likes} alt="" />
            <p>2.4 Likes</p>
          </div>
          <div className="icons-ago">
            <img src={comments} alt="" />
            <p>6k Likes</p>
          </div>
          <div className="icons-ago">
            <img src={share} alt="" />
            <p>1.1k Likes</p>
          </div>

          
        </div>
        <div className="whats-middle">
          <div>
            <input type="text" placeholder="What's on your mind ?" />
          </div>
          <div className="middle-icon-holder" >
            <img src={smile} alt="" />
            <img src={share} alt="" />
          </div>
        </div>

        <div className="image-on-mind">
          <img src={angie} alt="" />
          <div className="text">
            <h3>Angela Lee</h3>
            <p>1 day ago</p>
          </div>
        </div>
        <div className="minutes-ago-text">
          <p>
            Here are some photography works that I made on the weekend with some
            of my friends, I really love those colorful tone. happy for that!
          </p>
        </div>
        <div className="minutes-ago-images">
          <img src={image1} alt="" />
          <img src={image2} alt="" />
          <img src={image3} alt="" />
        </div>
        <div className="minutes-ago-icons">
          <div className="icons-ago">
            <img src={likes} alt="" />
            <p>2k Likes</p>
          </div>
          <div className="icons-ago">
            <img src={comments} alt="" />
            <p>4.6 Likes</p>
          </div>
          <div className="icons-ago">
            <img src={share} alt="" />
            <p>5k Likes</p>
          </div>

          
        </div>
        <div className="whats-middle">
          <div>
            <input type="text" placeholder="What's on your mind ?" />
          </div>
          <div className="middle-icon-holder" >
            <img src={smile} alt="" />
            <img src={share} alt="" />
          </div>
        </div>

        <div className="image-on-mind">
          <img src={angie} alt="" />
          <div className="text">
            <h3>Angela Lee</h3>
            <p>3 days ago</p>
          </div>
        </div>
        <div className="minutes-ago-text">
          <p>
            Here are some photography works that I made on the weekend with some
            of my friends, I really love those colorful tone. happy for that!
          </p>
        </div>
        <div className="minutes-ago-images">
          <img src={image1} alt="" />
          <img src={image2} alt="" />
          <img src={image3} alt="" />
        </div>
        <div className="minutes-ago-icons">
          <div className="icons-ago">
            <img src={likes} alt="" />
            <p>12.6 Likes</p>
          </div>
          <div className="icons-ago">
            <img src={comments} alt="" />
            <p>22.6 Likes</p>
          </div>
          <div className="icons-ago">
            <img src={share} alt="" />
            <p>42.6 Likes</p>
          </div>

          
        </div>
        <div className="whats-middle">
          <div>
            <input type="text" placeholder="What's on your mind ?" />
          </div>
          <div className="middle-icon-holder" >
            <img src={smile} alt="" />
            <img src={share} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
