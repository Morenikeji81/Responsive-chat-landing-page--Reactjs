import React from "react";
import image3 from "../assests/image3.png";
import "./Blog.css";

export default function Blog() {
  return (
    <div className="Blog_Container">
      <div className="blog_content">
        <h1 className="blog_content_heading">
          Start selling directly <br />
          inside conversations
        </h1>

        <p className="blog_content_paragraph">
          There are many variations of passages of Lorem Ipsum available,
          <br />
          but the majority have suffered all injected humour or randomised{" "}
          <br />
          words which don't look even alightly believable.
        </p>

        <button className="blog_button">Start Chatting Now</button>
      </div>

      <div className="blog_image">
        <img className="Blog_Image" src={image3} alt="alternate" />
      </div>
    </div>
  );
}
