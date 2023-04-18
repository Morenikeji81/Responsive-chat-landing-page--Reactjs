import React from "react";
// import stars from '../assests/stars.png'
import image1 from "../assests/image1.png";
import image4 from "../assests/image4.png";
import "./Demos.css";

export default function Demos() {
  return (
    <section className="Demos_flex">
      <div className="demos_flex">
        <div className="Demos_part">
          <h1 className="demos_part_heading">
            Start chatting with <br />
            customers, anytime,
            <br />
            anywhere with Apex
          </h1>
          <p className="demos_part_paragraph">
            Great software that allows you to chat from any
            <br />
            place at any time without any interruption.
          </p>
          <button className="demos_button">Start Chatting Now </button>

          <div className="Demos_text_image">
            <img className="Demos_text" src={image4} alt="success" />
          </div>
        </div>

        <div className="Demos_image">
          <img className="image_image" src={image1} alt="Success" />
        </div>
      </div>
    </section>
  );
}
