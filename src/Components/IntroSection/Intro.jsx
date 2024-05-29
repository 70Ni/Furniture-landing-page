import React from "react";
import "./intro.css";
import livingroom from "../../Images/living-room.png";
function Intro() {
  return (
    <div className="outer-intro">
      <div className="intro-wrapper">
        {/* <img src={livingroom} alt="intro image" className="living-room" /> */}
        <div className="intro-header">
          <div className="Header1 introHeader">
            Creative Home Simpify your Furniture
          </div>
          <div className="para intro-para">
            Do i have consent to record this meeting gain location,
            root-and-branch, review, nor game plan who’s the goto
          </div>
          <div className="button-text button">Shop Now</div>
        </div>

        {/* features section  */}
        <div className="features-wrapper">
          <div className="feature-sectionA">
            <div className="feature-section" id="border-right">
              <div className="subHeader white">7</div>
              <div className="para white feaure-para">Year Experience</div>
            </div>
            <div className="feature-section" id="border-right">
              <div className="subHeader white">2</div>
              <div className="para white feaure-para">
                Opened in the country
              </div>  
            </div>
          </div>
          <div className="feature-sectionB">
            <div className="feature-section" id="border-right">
              <div className="subHeader white">10k+</div>
              <div className="para white feaure-para">Furniture sold</div>
            </div>
            <div className="feature-section">
              <div className="subHeader white">260+</div>
              <div className="para white feaure-para">Variant Furniture</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
