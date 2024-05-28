import React from "react";
import "./newcategory.css";

import cardImage from "../../Images/sofa.png";

function NewCategory() {
  return (
    <div className="maxwrapper">
      <div className="wrapper">
        <div className="new-categ-hero">
          <div className="new-category-section">
            <div className="subHeader newca-header">New In store Now</div>
            <div className="para newca-para">
              Get the latest items immediately with promo prices
            </div>
            <div className="link-wrapper">
              <div className="button-text">Check All</div>
              <img src="" alt="" />
            </div>
          </div>
          {/* category card  */}
          <div className="new-card-section-wraper">
            <div className="new-category-card">
              <div className="newcatImag">
                <img src={cardImage} alt="" className="newcaImg" />
                <div className="listext newcatext">Chair</div>
              </div>
            </div>
            <div className="new-category-card">
              <div className="newcatImag">
                <img src={cardImage} alt="" className="newcaImg" />
                <div className="listext newcatext">Chair</div>
              </div>
            </div>
            
            <div className="new-category-card">
              <div className="newcatImag">
                <img src={cardImage} alt="" className="newcaImg" />
                <div className="listext newcatext">Chair</div>
              </div>
            </div>
            <div className="new-category-card">
              <div className="newcatImag">
                <img src={cardImage} alt="" className="newcaImg" />
                <div className="listext newcatext">Chair</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewCategory;
