import React from "react";
import BusinessPeopleImage from "../images/business-people-discussing-business-idea.png";
// import Media from "react-media";

const Hero = () => {
  return (
    <section className="heroes">
      <div class="content-wrapper">
        <div class="hero">
          <h4>Building Digital Prodacts, Brands & Experience</h4>
          <p>
            Digital Agancy In Your Online Team Managment Tool That Easy And
            Prompt
          </p>
          <button class="hero-btn">
            <a href="#" id="hero">
              Contact us
            </a>
          </button>
        </div>
        <div class="image">
          <img src={BusinessPeopleImage} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
