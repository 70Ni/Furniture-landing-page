import React from "react";
import "./navigation.css";
import logo from "../../Images/FurniShop.svg";
function Navigation() {
  return (
    <div className="Navigation-outer">
      <div className="navigation-wrapper">
        <div className="nav-logo">
          <img src={logo} alt="" className="Logo" />
        </div>
        <div className="nav-items">
          <div className="nav-item white">Home</div>
          <div className="nav-item white">About</div>
          <div className="nav-item white">Features</div>
          <div className="nav-item white">Contact</div>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
