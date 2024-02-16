import React from "react";
import user1 from "../user1.png";
import eclipse from "../Ellipse.png";
import "../MultiplePages/Notifications.scss";

const Notifications = ({ onClose }) => {
  const handleHideNotification = () => {
    onClose(); // Call the onClose prop passed from the parent to hide the notification
  };
  return (
    <div className="Notifications">
      <div className="notification-container">
        <div className="notifications-header">
          <h5>Notification</h5>
          <button onClick={handleHideNotification}>x</button>
        </div>
        <div className="not-buttons">
          <button>All Notifications</button>
          <button>Unread</button>
        </div>
        <div className="today">
          <h4>Today</h4>
          <div className="individual-user">
            <div className="ind-us-img">
              <img src={user1} alt="" />
            </div>
            <div className="ind-user-text">
              <p>Bessie Cooper</p>
              <p>started following you</p>
            </div>
            <div className="time-dot">
              <p>08:15</p>
              <div className="imager">
                <img src={eclipse} alt="" />
              </div>
            </div>
          </div>
          <div className="individual-user">
            <div className="ind-us-img">
              <img src={user1} alt="" />
            </div>
            <div className="ind-user-text">
              <p>Bessie Cooper</p>
              <p>started following you</p>
            </div>
            <div className="time-dot">
              <p>08:15</p>
              <div className="imager">
                <img src={eclipse} alt="" />
              </div>
            </div>
          </div>
          <div className="individual-user">
            <div className="ind-us-img">
              <img src={user1} alt="" />
            </div>
            <div className="ind-user-text">
              <p>Bessie Cooper</p>
              <p>started following you</p>
            </div>
            <div className="time-dot">
              <p>08:15</p>
              <div className="imager">
                <img src={eclipse} alt="" />
              </div>
            </div>
          </div>
          <div className="individual-user">
            <div className="ind-us-img">
              <img src={user1} alt="" />
            </div>
            <div className="ind-user-text">
              <p>Bessie Cooper</p>
              <p>started following you</p>
            </div>
            <div className="time-dot">
              <p>08:15</p>
              <div className="imager">
                <img src={eclipse} alt="" />
              </div>
            </div>
          </div>
          <div className="individual-user">
            <div className="ind-us-img">
              <img src={user1} alt="" />
            </div>
            <div className="ind-user-text">
              <p>Bessie Cooper</p>
              <p>started following you</p>
            </div>
            <div className="time-dot">
              <p>08:15</p>
              <div className="imager">
                <img src={eclipse} alt="" />
              </div>
            </div>
          </div>
          <div className="individual-user">
            <div className="ind-us-img">
              <img src={user1} alt="" />
            </div>
            <div className="ind-user-text">
              <p>Bessie Cooper</p>
              <p>started following you</p>
            </div>
            <div className="time-dot">
              <p>08:15</p>
              <div className="imager">
                <img src={eclipse} alt="" />
              </div>
            </div>
          </div>
          <div className="individual-user">
            <div className="ind-us-img">
              <img src={user1} alt="" />
            </div>
            <div className="ind-user-text">
              <p>Bessie Cooper</p>
              <p>started following you</p>
            </div>
            <div className="time-dot">
              <p>08:15</p>
              <div className="imager">
                <img src={eclipse} alt="" />
              </div>
            </div>
          </div>
          <div className="individual-user">
            <div className="ind-us-img">
              <img src={user1} alt="" />
            </div>
            <div className="ind-user-text">
              <p>Bessie Cooper</p>
              <p>started following you</p>
            </div>
            <div className="time-dot">
              <p>08:15</p>
              <div className="imager">
                <img src={eclipse} alt="" />
              </div>
            </div>
          </div>
          <div className="individual-user">
            <div className="ind-us-img">
              <img src={user1} alt="" />
            </div>
            <div className="ind-user-text">
              <p>Bessie Cooper</p>
              <p>started following you</p>
            </div>
            <div className="time-dot">
              <p>08:15</p>
              <div className="imager">
                <img src={eclipse} alt="" />
              </div>
            </div>
          </div>

          <div className="individual-user">
            <div className="ind-us-img">
              <img src={user1} alt="" />
            </div>
            <div className="ind-user-text">
              <p>Bessie Cooper</p>
              <p>started following you</p>
            </div>
            <div className="time-dot">
              <p>08:15</p>
              <div className="imager">
                <img src={eclipse} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="yesterday">
          <h4>Yesterday</h4>
          <div className="individual-user">
            <div className="ind-us-img">
              <img src={user1} alt="" />
            </div>
            <div className="ind-user-text">
              <p>Bessie Cooper</p>
              <p>started following you</p>
            </div>
            <div className="time-dot">
              <p>08:15</p>
            </div>
          </div>
          <div className="individual-user">
            <div className="ind-us-img">
              <img src={user1} alt="" />
            </div>
            <div className="ind-user-text">
              <p>Bessie Cooper</p>
              <p>started following you</p>
            </div>
            <div className="time-dot">
              <p>08:15</p>
            </div>
          </div>
          <div className="individual-user">
            <div className="ind-us-img">
              <img src={user1} alt="" />
            </div>
            <div className="ind-user-text">
              <p>Bessie Cooper</p>
              <p>started following you</p>
            </div>
            <div className="time-dot">
              <p>08:15</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
