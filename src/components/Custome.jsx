import React from "react";
import AnalyzingData from "../images/businessman-analyzing-data.png";

const Custome = () => {
  return (
    <section className="customes">
      <div class="content-wrapper">
        <div class="custome">
          <h4>Custome & Plugin Development</h4>
          <p>
            Commonly Used In The Graphic, Print & Publishing Industies For
            Previewing Visual Layout And Mockups
          </p>
          <p> &rarr; </p>
        </div>
        <div class="image-img">
          <img src={AnalyzingData} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Custome;
