import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="hero">
      <img src="/home1.png" alt="restaurant" />
      <div className="item">
        <h3>Dream Maker</h3>
        <div>
          <h1>Your Personal Dream Maker</h1>
          <p>
            We believe that it is all about the BIG DREAMS and the samll
            details!
          </p>
          <Link to="/customer-login" className="login-button">
            LOGIN TO BOOK
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
