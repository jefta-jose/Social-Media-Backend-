import boxes from "../unsplash_qC2n6RQU4Vw.png";
import persons from "../unsplash_qC2n6RQU4Vw (1).png";
import star from "../unsplash_qC2n6RQU4Vw (2).png";
import playbtn from "../unsplash_qC2n6RQU4Vw (3).png";
import calendar from "../calendar.png";
import viewIcons from "../48px.png";
import maps from "../Avatarmap.png";
import "../MultiplePages/EventDisplay.scss";

const EventDisplay = () => {
  const formatDate = (date) => {
    // Your date formatting logic here
    return date.toDateString();
  };

  const eventdisplayitems = [
    {
      icon: boxes,
      title: "National Seminar",
      by: "Emma Stone",
      dateicon: calendar,
      datetext: formatDate(new Date()),
      viewrs: viewIcons,
      goingtext: "+2k are going",
      mapicon: maps,
      address1: "4517 Washington Ave. Manchester,",
      address2: "Kentucky 39495",
      register: "Register",
      opinion: "Popular",
    },
    {
      icon: persons,
      title: "Potery Workshop",
      by: "Emma Stone",
      dateicon: calendar,
      datetext: formatDate(new Date()),
      viewrs: viewIcons,
      goingtext: "+3k are going",
      mapicon: maps,
      address1: "4517 Washington Ave. Manchester,",
      address2: "Kentucky 39495",
      register: "Register",
      opinion: "foryou",
    },
    {
      icon: star,
      title: "Up Summer Concert",
      by: "Emma Stone",
      dateicon: calendar,
      datetext: formatDate(new Date()),
      viewrs: viewIcons,
      goingtext: "+5k are going",
      mapicon: maps,
      address1: "4517 Washington Ave. Manchester,",
      address2: "Kentucky 39495",
      register: "Register",
      opinion: "Nearest",
    },
    {
      icon: playbtn,
      title: "Painting Workshop",
      by: "Emma Stone",
      dateicon: calendar,
      datetext: formatDate(new Date()),
      viewrs: viewIcons,
      goingtext: "+2k are going",
      mapicon: maps,
      address1: "4517 Washington Ave. Manchester,",
      address2: "Kentucky 39495",
      register: "Register",
      opinion: "favorite",
    },
    {
      icon: boxes,
      title: "Environmental Sustainability Symposium",
      by: "Emma Stone",
      dateicon: calendar,
      datetext: formatDate(new Date()),
      viewrs: viewIcons,
      goingtext: "+1.6k are going",
      mapicon: maps,
      address1: "4517 Washington Ave. Manchester,",
      address2: "Kentucky 39495",
      register: "Register",
      opinion: "Popular",
    },
    {
      icon: persons,
      title: "Science and Technology Expo",
      by: "Emma Stone",
      dateicon: calendar,
      datetext: formatDate(new Date()),
      viewrs: viewIcons,
      goingtext: "+2.1k are going",
      mapicon: maps,
      address1: "4517 Washington Ave. Manchester,",
      address2: "Kentucky 39495",
      register: "Register",
      opinion: "foryou",
    },
    {
      icon: star,
      title: "Wellness and Mindfulness Retreat",
      by: "Emma Stone",
      dateicon: calendar,
      datetext: formatDate(new Date()),
      viewrs: viewIcons,
      goingtext: "+8k are going",
      mapicon: maps,
      address1: "4517 Washington Ave. Manchester,",
      address2: "Kentucky 39495",
      register: "Register",
      opinion: "Popular",
    },
    {
      icon: playbtn,
      title: "Culinary Arts Festival",
      by: "Emma Stone",
      dateicon: calendar,
      datetext: formatDate(new Date()),
      viewrs: viewIcons,
      goingtext: "+1k are going",
      mapicon: maps,
      address1: "4517 Washington Ave. Manchester,",
      address2: "Kentucky 39495",
      register: "Register",
      opinion: "Nearest",
    },
    {
      icon: boxes,
      title: "Literary Carnival",
      by: "Emma Stone",
      dateicon: calendar,
      datetext: formatDate(new Date()),
      viewrs: viewIcons,
      goingtext: "+3.4k are going",
      mapicon: maps,
      address1: "4517 Washington Ave. Manchester,",
      address2: "Kentucky 39495",
      register: "Register",
      opinion: "favorite",
    },
    {
      icon: persons,
      title: "Photography Expedition",
      by: "Emma Stone",
      dateicon: calendar,
      datetext: formatDate(new Date()),
      viewrs: viewIcons,
      goingtext: "+7k are going",
      mapicon: maps,
      address1: "4517 Washington Ave. Manchester,",
      address2: "Kentucky 39495",
      register: "Register",
      opinion: "foryou",
    },
    {
      icon: star,
      title: "Business Innovation Summit",
      by: "Emma Stone",
      dateicon: calendar,
      datetext: formatDate(new Date()),
      viewrs: viewIcons,
      goingtext: "+2k are going",
      mapicon: maps,
      address1: "4517 Washington Ave. Manchester,",
      address2: "Kentucky 39495",
      register: "Register",
      opinion: "Popular",
    },
    {
      icon: playbtn,
      title: "Film and Documentary Festival",
      by: "Emma Stone",
      dateicon: calendar,
      datetext: formatDate(new Date()),
      viewrs: viewIcons,
      goingtext: "+2.2k are going",
      mapicon: maps,
      address1: "4517 Washington Ave. Manchester,",
      address2: "Kentucky 39495",
      register: "Register",
      opinion: "nearest",
    },
    {
      icon: boxes,
      title: "Dance Showcase Extravaganza",
      by: "Emma Stone",
      dateicon: calendar,
      datetext: formatDate(new Date()),
      viewrs: viewIcons,
      goingtext: "+5.5k are going",
      mapicon: maps,
      address1: "4517 Washington Ave. Manchester,",
      address2: "Kentucky 39495",
      register: "Register",
      opinion: "Nearest",
    },
    {
      icon: persons,
      title: "Historical Heritage Tour",
      by: "Emma Stone",
      dateicon: calendar,
      datetext: formatDate(new Date()),
      viewrs: viewIcons,
      goingtext: "+2.3k are going",
      mapicon: maps,
      address1: "4517 Washington Ave. Manchester,",
      address2: "Kentucky 39495",
      register: "Register",
      opinion: "foryou",
    },
    {
      icon: star,
      title: "Music Fusion Jam Session",
      by: "Emma Stone",
      dateicon: calendar,
      datetext: formatDate(new Date()),
      viewrs: viewIcons,
      goingtext: "+2.4k are going",
      mapicon: maps,
      address1: "4517 Washington Ave. Manchester,",
      address2: "Kentucky 39495",
      register: "Register",
      opinion: "Popular",
    },
    {
      icon: playbtn,
      title: "Creative Writing Masterclass",
      by: "Emma Stone",
      dateicon: calendar,
      datetext: formatDate(new Date()),
      viewrs: viewIcons,
      goingtext: "+1.8k are going",
      mapicon: maps,
      address1: "4517 Washington Ave. Manchester,",
      address2: "Kentucky 39495",
      register: "Register",
      opinion: "favorite",
    },
    {
      icon: boxes,
      title: "Fashion Design Showcase",
      by: "Emma Stone",
      dateicon: calendar,
      datetext: formatDate(new Date()),
      viewrs: viewIcons,
      goingtext: "+3k are going",
      mapicon: maps,
      address1: "4517 Washington Ave. Manchester,",
      address2: "Kentucky 39495",
      register: "Register",
      opinion: "Nearest",
    },
    {
      icon: persons,
      title: "DIY Craft Fair",
      by: "Emma Stone",
      dateicon: calendar,
      datetext: formatDate(new Date()),
      viewrs: viewIcons,
      goingtext: "+2k are going",
      mapicon: maps,
      address1: "4517 Washington Ave. Manchester,",
      address2: "Kentucky 39495",
      register: "Register",
      opinion: "favorite",
    },
  ];

  return (
    <div className="Eventcontainer">
      {eventdisplayitems.map((item, index) => (
        <div className="event-card" key={index}>
          <div className="event-image">
            <img src={item.icon} alt={`Event icon ${index}`} />
          </div>
          <div className="by-date">
            <div className="title-by">
              <h3>{item.title}</h3>
              <p>By: {item.by}</p>
            </div>
            <img src={item.dateicon} alt="Calendar icon" />
            <p>Date: {formatDate(new Date())}</p>
          </div>
          <div className="going-ic-txt">
            <img src={item.viewrs} alt="Viewers icon" />
            <img src={item.viewrs} alt="Viewers icon" />
            <img src={item.viewrs} alt="Viewers icon" />
            <p>{item.goingtext}</p>
          </div>
          <div className="event-footer">
            <div className="img-loc">
              <img src={item.mapicon} alt="Map icon" />
              <div>
                <p>{item.address1}</p>
                <p>{item.address2}</p>
              </div>
            </div>
            <button>{item.register}</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventDisplay;
