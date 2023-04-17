import React from "react";
import DesignerTeamWorkong from "../images/designer-team-working-on-creative-design.png";

const Branding = () => {
  return (
    <section className="branding">
      <div class="content-wrapper">
        <div class="image-brand">
          <img src={DesignerTeamWorkong} alt="" />
        </div>
        <div class="brand">
          <h4>Branding & Design System</h4>
          <p>
            Commonly Used In The Graphic, Print & Publishing Industies For
            Previewing Visual Layout And Mockups
          </p>
          <p> --> </p>
        </div>
      </div>
    </section>
  );
};

export default Branding;
