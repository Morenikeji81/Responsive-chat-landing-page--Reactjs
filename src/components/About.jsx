import React from "react";
import videoimage from "../assests/videoimage.png";
import time from "../assests/time.png";
import safe from "../assests/safe.png";
import image2 from "../assests/image2.png";
import "./About.css";

export default function About() {
  return (
    <div className="better_experience">
      <div className="Better_Experience_Heading">
        <h1 className="better_experience_heading">
          Features for a better experience
        </h1>
      </div>
      <div className="about_container">
        <div className="video_message_info">
          <div className="video_message_image">
            <img src={videoimage} alt="success" />
          </div>
          <div className="video_message_content">
            <h3>Video messaging</h3>
            <p>
              This software is very easy for you to
              <br />
              manage.You can use it as you wish.
            </p>
          </div>
        </div>

        <div className="time_info">
          <div className="time_image">
            <img src={time} alt="success" />
          </div>
          <div className="time_content">
            <h3>Save your time</h3>
            <p>
              This software is very easy for you to
              <br />
              manage.You can use it as you wish.
            </p>
          </div>
        </div>

        <div className="safe_info">
          <div className="safe_image">
            <img src={safe} alt="success" />
          </div>
          <div className="safe_content">
            <h3>Keep safe & private</h3>
            <p>
              This software is very easy for you to
              <br />
              manage.You can use it as you wish.
            </p>
          </div>
        </div>
      </div>

      <div className="video_chat_container">
        <div className="video_chat_image">
          <img className="Video_Chat_Image" src={image2} alt="success" />
        </div>
        <div className="video_chat_content">
          <h1 className="video_chat_content_heading">
            Meet your customers,
            <br />
            with live video chat
          </h1>
          <p className="video_chat_content_paragraph">
            Proin faucibus nibh et sagittis a. Lacinia purus ac <br />
            amet pellentesque aliquam enim.
          </p>
          <p className="video_chat_content_paragraph">
            Get paychecks up to two days early. Get a $20 bonus
            <br />
            when you receive qualifying direct deposits.
          </p>
        </div>
      </div>
    </div>
  );
}
