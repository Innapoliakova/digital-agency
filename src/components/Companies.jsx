import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadphones } from "@fortawesome/free-solid-svg-icons";
import { faChartSimple } from "@fortawesome/free-solid-svg-icons";
import { faKaaba } from "@fortawesome/free-solid-svg-icons";
// aprppriate icons are not free for React



const Companies = () => {
  return (
    <section class="companies">
      <div class="companies-wrapper">
        <div class="trust">
          <p>Trusted By 4,000+ Companies</p>
        </div>

        <div class="logos">
          <div>
            <FontAwesomeIcon icon={faHeadphones} />
            <p>Spotify</p>
          </div>
        

          <div>
            <FontAwesomeIcon icon={faChartSimple} />
            <p>Slack</p>
          </div>
        
          <div>
              <FontAwesomeIcon icon={faKaaba} />
              <p>Dropbox</p>
          </div>

          <div>
            <div id="zoom">ZOOM</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Companies;
