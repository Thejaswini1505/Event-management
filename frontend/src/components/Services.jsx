import React from "react";

const Services = () => {
  const services = [
    {
      id: 1,
      url: "/birthday1.png",
      title: "Birthday Planning",
      des: "Cheers to cake, confetti, and crazy fun! Your big day, your style, our planning."
    },
    {
      id: 2,
      url: "/anniversary1.png",
      title: "Anniversary Planning",
      des: "Another chapter in your love story. Let’s celebrate the pages you’ve written together"
    },
    {
      id: 3,
      url: "/camp1.png",
      title: "Camping Trip Planning",
      des: "Camp vibes and cozy nights await! Experience the outdoors with all the right comforts."
    },
    {
      id: 4,
      url: "/gamenight1.png",
      title: "Game Night Planning",
      des: "Stack the snacks, shuffle the decks. We create the perfect vibe for your gaming tribe."
    },
    {
      id: 5,
      url: "/party2.png",
      title: "Party Planning",
      des: "From chill get-togethers to wild nights out. We plan it all, you just enjoy."
    },
    {
      id: 6,
      url: "/wedding1.png",
      title: "Wedding Planning",
      des: "Every love story deserves a magical setting. Let us turn your ‘I do’ into a beautiful memory."

    },
  ];
  return (
  <div className="services container">
    <h2>OUR SERVICES</h2>
    <div className="banner">
      {services.map((element) => (
        <div className="item" key={element.id}>
          <img src={element.url} alt={element.title} />
          <div className="overlay">
            <h3>{element.title}</h3>
            <h4>{element.des}</h4>
          </div>
        </div>
      ))}
    </div>
  </div>
);

};

export default Services;
