import React from "react";
import "./footer.css";
import logo from "../../Images/FurniShop.svg";
import Medium from "../../Images/Social/Medium.svg";
import facebook from "../../Images/Social/Facebook.svg";
import Instagram from "../../Images/Social/Instagram.svg";
import twitter from "../../Images/Social/Twitter.svg";
import git from "../../Images/Social/Git.svg";

function Footer() {
  return (
    <div className="footer-outer">
      <div className="footer-wrapper">
        <div className="footer-head-section">
          <img src={logo} alt="Brand Icons" />

          <div className="footer-social-wrapper">
            <img
              src={facebook}
              alt="social media icons"
              className="social-icon"
            />
            <img
              src={twitter}
              alt="social media icons"
              className="social-icon"
            />
            <img
              src={Medium}
              alt="social media icons"
              className="social-icon"
            />
            <img
              src={Instagram}
              alt="social media icons"
              className="social-icon"
            />
            <img src={git} alt="social media icons" className="social-icon" />
          </div>
        </div>

        <div className="footer-contnet">
          <div className="footer-items">
            <div className="footer-Header white">Our Products</div>
            <div className="footer-text white pricing">The Support Suite</div>
            <div className="footer-text white pricing">The Sales Suite</div>
            <div className="footer-text white pricing">Support</div>
            <div className="footer-text white pricing">Guide</div>
          </div>
          <div className="footer-items">
            <div className="footer-Header white">Our Products</div>
            <div className="footer-text white pricing">The Support Suite</div>
            <div className="footer-text white pricing">The Sales Suite</div>
            <div className="footer-text white pricing">Support</div>
            <div className="footer-text white pricing">Guide</div>
          </div>
          <div className="footer-items">
            <div className="footer-Header white">Our Products</div>
            <div className="footer-text white pricing">The Support Suite</div>
            <div className="footer-text white pricing">The Sales Suite</div>
            <div className="footer-text white pricing">Support</div>
            <div className="footer-text white pricing">Guide</div>
          </div>
          <div className="footer-items">
            <div className="footer-Header white">Our Products</div>
            <div className="footer-text white pricing">The Support Suite</div>
            <div className="footer-text white pricing">The Sales Suite</div>
            <div className="footer-text white pricing">Support</div>
            <div className="footer-text white pricing">Guide</div>
          </div>
          <div className="footer-items">
            <div className="footer-Header white">Our Products</div>
            <div className="footer-text white pricing">The Support Suite</div>
            <div className="footer-text white pricing">The Sales Suite</div>
            <div className="footer-text white pricing">Support</div>
            <div className="footer-text white pricing">Guide</div>
          </div>
        </div>

        <div className="footer-copyright">
          <div className="pricing white">
            © NameBrand 2022 - All Rights Reserved
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
