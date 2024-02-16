import search from "../search.png";
import UD from "../Avatar uyff(1).png";
import phone from "../unsplash.png";
import UI from "../Avauguigutar.png";
import DE from "../AvatarDE.png";
import leftImage from "../unsplash_T6fDN60bMWY.png";
import rightImage from "../unsplash_ZSPBhokqDMc.png";
import user1 from "../user1.png";
import user2 from "../user2.png";
import user3 from "../user3.png";
import "../MultiplePages/Groups.scss";

const Groups = () => {
  return (
    <div className="group-container">
      <div className="group-header">
        <div className="group-header-text">
          <h3>Groups</h3>
        </div>
        <div className="group-header-buttons">
          <div className="search-container">
            <img src={search} alt="" />
          </div>
          <button>+Create New Group</button>
        </div>
      </div>
      <div className="group-suggestions">
        <div className="left-text-suggestions">
          <h4>Suggested for you</h4>
          <p>Groups you might be interested in</p>
        </div>
        <div className="right-text-suggestions">
          <p>see all</p>
        </div>
      </div>
      <div className="suggestion-image-holder">
        <div className="left-suggestion-image">
          <div className="upper-suggest-cont">
            <div className="suggest-icons-text">
              <img src={UD} alt="" />
              <div className="s-i-t-t">
                <p>UI / UX Designer</p>
                <p>Bandung . 7 posts a day</p>
              </div>
            </div>
            <div className="sug-dots">
              . <br /> . <br /> . <br />
            </div>
          </div>
          <div className="middle-suggest-cont">
            <img src={phone} alt="" />
          </div>
          <div className="lower-suggest-cont">
            <button>Join Group</button>
            <div className="lower-sug-imgs">
              <img src={user1} alt="" />
              <img src={user2} alt="" />
              <img src={user3} alt="" />
              <p>2k</p>
            </div>
          </div>
        </div>
        <div className="right-suggestion-image">
          <div className="upper-suggest-cont">
            <div className="suggest-icons-text">
              <img src={UI} alt="" />
              <div className="s-i-t-t">
                <p>Frontend Mentor</p>
                <p>17 posts a day</p>
              </div>
            </div>
            <div className="sug-dots">
              . <br /> . <br /> . <br />
            </div>
          </div>
          <div className="middle-suggest-cont">
            <img src={phone} alt="" />
          </div>
          <div className="lower-suggest-cont">
            <button>Join Group</button>
            <div className="lower-sug-imgs">
              <img src={user1} alt="" />
              <img src={user2} alt="" />
              <img src={user3} alt="" />
              <p>2.8k</p>
            </div>
          </div>
        </div>

        <div className="left-suggestion-image">
          <div className="upper-suggest-cont">
            <div className="suggest-icons-text">
              <img src={UD} alt="" />
              <div className="s-i-t-t">
                <p>Teach2Give</p>
                <p>20 posts a day</p>
              </div>
            </div>
            <div className="sug-dots">
              . <br /> . <br /> . <br />
            </div>
          </div>
          <div className="middle-suggest-cont">
            <img src={phone} alt="" />
          </div>
          <div className="lower-suggest-cont">
            <button>Join Group</button>
            <div className="lower-sug-imgs">
              <img src={user1} alt="" />
              <img src={user2} alt="" />
              <img src={user3} alt="" />
              <p>12k</p>
            </div>
          </div>
        </div>
        <div className="hide">
          <div className="right-suggestion-image">
            <div className="upper-suggest-cont">
              <div className="suggest-icons-text">
                <img src={UI} alt="" />
                <div className="s-i-t-t">
                  <p>Github Kenya</p>
                  <p>5 posts a day</p>
                </div>
              </div>
              <div className="sug-dots">
                . <br /> . <br /> . <br />
              </div>
            </div>
            <div className="middle-suggest-cont">
              <img src={phone} alt="" />
            </div>
            <div className="lower-suggest-cont">
              <button>Join Group</button>
              <div className="lower-sug-imgs">
                <img src={user1} alt="" />
                <img src={user2} alt="" />
                <img src={user3} alt="" />
                <p>10k</p>
              </div>
            </div>
          </div>
        </div>
        <div className="hide">
          <div className="left-suggestion-image">
            <div className="upper-suggest-cont">
              <div className="suggest-icons-text">
                <img src={UD} alt="" />
                <div className="s-i-t-t">
                  <p>QA/QE</p>
                  <p>6 posts a day</p>
                </div>
              </div>
              <div className="sug-dots">
                . <br /> . <br /> . <br />
              </div>
            </div>
            <div className="middle-suggest-cont">
              <img src={phone} alt="" />
            </div>
            <div className="lower-suggest-cont">
              <button>Join Group</button>
              <div className="lower-sug-imgs">
                <img src={user1} alt="" />
                <img src={user2} alt="" />
                <img src={user3} alt="" />
                <p>12k</p>
              </div>
            </div>
          </div>
        </div>
        <div className="hide">
          <div className="right-suggestion-image">
            <div className="upper-suggest-cont">
              <div className="suggest-icons-text">
                <img src={UI} alt="" />
                <div className="s-i-t-t">
                  <p>Kelcho Tech</p>
                  <p>20 posts a day</p>
                </div>
              </div>
              <div className="sug-dots">
                . <br /> . <br /> . <br />
              </div>
            </div>
            <div className="middle-suggest-cont">
              <img src={phone} alt="" />
            </div>
            <div className="lower-suggest-cont">
              <button>Join Group</button>
              <div className="lower-sug-imgs">
                <img src={user1} alt="" />
                <img src={user2} alt="" />
                <img src={user3} alt="" />
                <p>32k</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="recent-activity-holder">
        <h4>Recent Activity</h4>
        <div className="activity-card">
          <div className="DE">
            <img src={DE} alt="" />
            <div className="DE-text">
              <h5>Design Enthusiast</h5>
              <p>Angela lee . 56 min ago</p>
            </div>
          </div>
          <div className="DE-details-text">
            <p>
              Conduct design process best practices across projects such as
              gathering insights, validating problems & solutions, delivering
              multiple fidelity levels of design, and ensure the final design is
              implemented properly on.
            </p>
          </div>
          <div className="DE-images">
            <img src={rightImage} alt="" />
            <img src={leftImage} alt="" />
            <img className="bot-im" src={rightImage} alt="" />
          </div>
        </div>

        <h4>Earlier Activity</h4>
        <div className="activity-card">
          <div className="DE">
            <img src={DE} alt="" />
            <div className="DE-text">
              <h5>Design Enthusiast</h5>
              <p>Jeff Ndegwa . 2 hours ago</p>
            </div>
          </div>
          <div className="DE-details-text">
            <p>
              Conduct design process best practices across projects such as
              gathering insights, validating problems & solutions, delivering
              multiple fidelity levels of design, and ensure the final design is
              implemented properly on.
            </p>
          </div>
          <div className="DE-images">
            <img src={rightImage} alt="" />
            <img src={leftImage} alt="" />
            <img src={rightImage} alt="" />
          </div>
        </div>

        <h4>Earlier Activity</h4>
        <div className="activity-card">
          <div className="DE">
            <img src={DE} alt="" />
            <div className="DE-text">
              <h5>Design Enthusiast</h5>
              <p>Branham Karanja . 3 hours ago</p>
            </div>
          </div>
          <div className="DE-details-text">
            <p>
              Conduct design process best practices across projects such as
              gathering insights, validating problems & solutions, delivering
              multiple fidelity levels of design, and ensure the final design is
              implemented properly on.
            </p>
          </div>
          <div className="DE-images">
            <img src={rightImage} alt="" />
            <img src={leftImage} alt="" />
            <img src={rightImage} alt="" />
          </div>
        </div>

        <h4>Earlier Activity</h4>
        <div className="activity-card">
          <div className="DE">
            <img src={DE} alt="" />
            <div className="DE-text">
              <h5>Design Enthusiast</h5>
              <p>Leah Gathii . 6 hours ago</p>
            </div>
          </div>
          <div className="DE-details-text">
            <p>
              Conduct design process best practices across projects such as
              gathering insights, validating problems & solutions, delivering
              multiple fidelity levels of design, and ensure the final design is
              implemented properly on.
            </p>
          </div>
          <div className="DE-images">
            <img src={rightImage} alt="" />
            <img src={leftImage} alt="" />
            <img src={rightImage} alt="" />
          </div>
        </div>

        <h4>Earlier Activity</h4>
        <div className="activity-card">
          <div className="DE">
            <img src={DE} alt="" />
            <div className="DE-text">
              <h5>Design Enthusiast</h5>
              <p>Kevin Comba . 10 hours ago</p>
            </div>
          </div>
          <div className="DE-details-text">
            <p>
              Conduct design process best practices across projects such as
              gathering insights, validating problems & solutions, delivering
              multiple fidelity levels of design, and ensure the final design is
              implemented properly on.
            </p>
          </div>
          <div className="DE-images">
            <img src={rightImage} alt="" />
            <img src={leftImage} alt="" />
            <img src={rightImage} alt="" />
          </div>
        </div>

        <h4>Earlier Activity</h4>
        <div className="activity-card">
          <div className="DE">
            <img src={DE} alt="" />
            <div className="DE-text">
              <h5>Design Enthusiast</h5>
              <p>Kelvin Kimani . 14 hours ago</p>
            </div>
          </div>
          <div className="DE-details-text">
            <p>
              Conduct design process best practices across projects such as
              gathering insights, validating problems & solutions, delivering
              multiple fidelity levels of design, and ensure the final design is
              implemented properly on.
            </p>
          </div>
          <div className="DE-images">
            <img src={rightImage} alt="" />
            <img src={leftImage} alt="" />
            <img src={rightImage} alt="" />
          </div>
        </div>

        <h4>Earlier Activity</h4>
        <div className="activity-card">
          <div className="DE">
            <img src={DE} alt="" />
            <div className="DE-text">
              <h5>Design Enthusiast</h5>
              <p>Robin Ngechu . 1 day ago</p>
            </div>
          </div>
          <div className="DE-details-text">
            <p>
              Conduct design process best practices across projects such as
              gathering insights, validating problems & solutions, delivering
              multiple fidelity levels of design, and ensure the final design is
              implemented properly on.
            </p>
          </div>
          <div className="DE-images">
            <img src={rightImage} alt="" />
            <img src={leftImage} alt="" />
            <img src={rightImage} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Groups;
