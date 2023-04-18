import React from "react";
import logo from "../assests/logo.png";
import twitter from "../assests/twitter.png";
import facebook from "../assests/facebook.png";
import instagram from "../assests/instagram.png";
import github from "../assests/github.png";
import "./ContactInfo.css";

export default function contact() {
  return (
    <div className="contact_info">
      <h1 className="contact_info_heading">
        Ready to grow your business?
        <br />
        Start with Apex, become faster
        <br />
        every second
      </h1>
      <div className="contact_content">
        <button className="contact_info_button">Start Chatting Now</button>
      </div>

      <div className="info_social_image">
        <div className="Contact_Logo_image">
          <img className="contact_logo" src={logo} alt="success" />
        </div>
        <div className="info_image_text">
          <p className="info_about">About</p>
          <p className="info_features">Features</p>
          <p className="info_works">Works</p>
          <p className="info_support">Support</p>
        </div>

        <div className="social_media_images">
          <img className="twitter_image" src={twitter} alt="success" />
          <img className="facebook_image" src={facebook} alt="success" />
          <img className="instagram_image" src={instagram} alt="success" />
          <img className="github_image" src={github} alt="success" />
        </div>
      </div>
    </div>
  );
}
