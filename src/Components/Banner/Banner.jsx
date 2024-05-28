import React from "react";
import "./Banner.css";
import bannerImg from "../../Images/Banner.png";

function Banner() {
  return (
    <div className="banner-wrapper">
      <div className="banner-content">
        <div className="subHeader white banner-header">
          Get more discount Off your order
        </div>
        <div className="para white">Join our mailing list</div>
        <div className="subscription-section">
          <input
            type="text"
            className="input-style"
            placeholder="Your email address"
          />
          <div className="button-text button">Subscribe</div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
