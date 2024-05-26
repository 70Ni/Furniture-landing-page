import React from "react";
import "./base.css";

import sofa from "../../Images/sofa.png";
import check from "../../Images/check.svg";

function Base({ pos }) {
  return (
    <div className="maxcontainer">
      <div
        className="wrapper"
        style={{ flexDirection: pos ? "row" : "row-reverse" }}
      >
        <img
          src={sofa}
          alt=""
          className="decImg"
          style={pos ? { marginRight: "100px" } : { marginLeft: "100px" }}
        />
        <div className="text-section">
          <div className="subHeader baseHeader">
            We Create your home more aestetic
          </div>
          <div className="para">
            Furnitre power is a software as services for multiperpose business
            management system,
          </div>
          {/* point warpper section */}
          <div className="point-wrapper">
            <div className="point-headers">
              <img src={check} alt="" className="check-icon" />
              <div className="button-text point-text-header">
                Valuation Services
              </div>
            </div>
            <div className="Navigation point-para">
              Sometimes features require a short description. This can be
              detailed description
            </div>
          </div>
          <div className="point-wrapper">
            <div className="point-headers">
              <img src={check} alt="" className="check-icon" />
              <div className="button-text point-text-header">
                Development of Furniture Models
              </div>
            </div>
            <div className="Navigation point-para">
              Sometimes features require a short description. This can be
              detailed description
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Base;
