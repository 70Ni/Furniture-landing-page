import React from "react";
import "./reviews.css";
import profile from "../../Images/Banner.png";
import arrow from "../../Images/arrow.svg";
import arrowR from "../../Images/arrow-right.svg";

function Review() {
  return (
    <div className="maxwrapper">
      <div className="wrapper">
        <div className="Review-wrapper">
          <div className="rev-profile-section">
            <div className="rev-header-section">
              <img src={profile} alt="" className="rev-profile" />
              <div className="rev-pro-details">
                <div className="button-text rev-header">Josh smith</div>
                <div className="pricing rev-user-des">
                  Manager of The New York Times
                </div>
              </div>
            </div>

            <div className="review-para para">
              “They are have a perfect touch for make something so professional
              ,interest and useful for a lot of people .”
            </div>
            <div className="review-controller-wrapper">
              <div className="arrow-wrapper">
                <img
                  src={arrow}
                  alt="next review"
                  className="arrow"
                  fill="#fff"
                />
              </div>
              <div className="arrow-wrapperR">
                <img
                  src={arrowR}
                  alt="next review"
                  className="arrow"
                  fill="#fff"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Review;
