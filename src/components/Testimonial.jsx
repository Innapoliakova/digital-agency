import React from "react";
import Andrew from "../images/western-man-4975942-4159828 1.png";
import Vera from "../images/asian-woman-4975939-4159825 1.png";
import Mark from "../images/black-woman-4975941-4159827 1.png";

const Testimonial = () => {
  return (
    <section className="testimonial" id="testimonials">
      <div class="testimonial-wrapper">
        <div>
          <p>TESTIMONIALS</p>
        </div>

        <div>
          <h4>Read What Other Have To Say</h4>
        </div>

        <div class="frofile-wrapper">
          <div class="testimon-item">
            <div>
              <img src={Andrew} alt="" />
            </div>
            <h6>Andrew Rathore</h6>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex,
              fuga. Fuga quis, voluptate eius dolore delectus ullam.
            </p>
          </div>
          <div class="testimon-item">
            <div>
              <img src={Vera} alt="" />
            </div>
            <h6>Vera Duncan</h6>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex,
              fuga. Fuga quis, voluptate eius dolore delectus ullam.
            </p>
          </div>
          <div class="testimon-item">
            <div>
              <img src={Mark} alt="" />
            </div>
            <h6>Mark Smith</h6>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex,
              fuga. Fuga quis, voluptate eius dolore delectus ullam.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
