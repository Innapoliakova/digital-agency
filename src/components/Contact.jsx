import React from "react";
import CustomerSupport from "../images/customer-support.png";

const Contact = () => {
    return (
      <section class="contact-sec">
        <div class="content-wrapper">
          <div class="image-contact">
            <img src={CustomerSupport} alt="" />
          </div>
          <div class="contact">
            <h4>Be a part of the next big thing</h4>
            <p>
              We work with Brands, Startups, to SMEs. Colaborate for more impact
              and growth.
            </p>
            <button class="hero-btn">
              <a href="#" id="contact">
                CONTACT US
              </a>
            </button>
          </div>
        </div>
      </section>
    );
}

export default Contact;