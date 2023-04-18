import React from "react";
import image5 from "../assests/image5.png";
import image6 from "../assests/image6.png";
import wadeimg from "../assests/wadeimg.png";
import estherimg from "../assests/estherimg.png";
import "./Pages.css";

export default function Pages() {
  return (
    <div className="pages_container">
      <div className="page1">
        <div className="page1_image_container">
          <img className="page_1_image" src={image5} alt="success" />
        </div>
        <div className="page1_content">
          <h1 className="page1_content_heading">
            Get direct orders <br />
            from your customers
          </h1>
          <p className="page1_content_paragraph">
            Create custom landing pages with Rare blocks that converts more{" "}
            <br />
            visitors than any website. With lots of unique blocks easily build{" "}
            <br />
            page. There are many variations of passages available.
          </p>

          <div className="fact_text_image">
            <img className="fact_image" src={image6} alt="success" />
          </div>
        </div>
      </div>

      <div className="page2">
        <h1 className="page2_heading">
          Our blessed client <br /> said about us
        </h1>

        <div className="card_container">
          <div className="first_card">
            <h3 className="first_card_heading">"Incredible Experience"</h3>
            <p className="first_card_paragraph">
              We had an Incredible experience working with Mixland and were
              impressed they made such a big difference in only three weeks. Our
              team is so grateful for the wonderful improvements they made and
              their ability to get familiar with the concept so quickly.
            </p>
          </div>

          <div className="second_card">
            <h3 className="second_card_heading">
              "Dependable, Responsive, Professional"{" "}
            </h3>
            <p className="second_card_paragraph">
              Fermin Apps has collaborated with Mixland team for several
              projects such as Photo Sharing Apps and Custom Social Networking
              Apps. The experience has been pleasant, professional and exceeding
              our expectations. The team is always thinking beyond.
            </p>
          </div>
        </div>

        <div className="card_info_details">
          <div className="first_card_info">
            <div className="info_img1">
              <img src={wadeimg} alt="success" />
            </div>
            <div className="info_details1">
              <h3>Wade Warren</h3>
              <p>CEO, ABC Corporation</p>
            </div>
          </div>

          <div className="second_card_info">
            <div className="info_img2">
              <img src={estherimg} alt="success" />
            </div>
            <div className="info_details2">
              <h3>Esther Howard</h3>
              <p>CEO, ABC Corporation</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
