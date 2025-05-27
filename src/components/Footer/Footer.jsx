import React from "react";
import facebookIcon from "../../assets/images/facebook_icon.png";
import instagramIcon from "../../assets/images/instagram_icon.png";
import twitterIcon from "../../assets/images/twitter_icon.png";
import youtubeIcon from "../../assets/images/youtube_icon.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-icons">
        <img src={facebookIcon} alt="" />
        <img src={instagramIcon} alt="" />
        <img src={twitterIcon} alt="" />
        <img src={youtubeIcon} alt="" />
      </div>
      <ul className="footer-links">
        <li>Audio Description</li>
        <li>Help Center</li>
        <li>Gift Cards</li>
        <li>Media Center</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookies Preferences</li>
        <li>Corporate Information</li>
        <li>Conact Us</li>
      </ul>

      <p className="copyright-text">&copy; 1997 - 2024 Netflix, Inc.</p>
    </div>
  );
};

export default Footer;
