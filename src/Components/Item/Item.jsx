import React from "react";
import "./item.css";

import item from "../../Images/sofa.png";
import Add from "../../Images/Add.svg";

function Item() {
  return (
    <div className="item-container">
      <div className="imgwrapper">
        <img src={item} alt="" className="itemimage" />
        <img src={Add} alt="" className="addIcon" />
      </div>
      <div className="listext">Ceiling Light</div>
      <div className="pricing-section">
        <div className="Navigation">$75.00</div>
        <div className="pricing acutal-price">$75.00</div>
      </div>
    </div>
  );
}

export default Item;
