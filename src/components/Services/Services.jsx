import React from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";

const Services = () => {
  return (
    <div className="services">
      {/* left side */}
      <div className="awesome">
        <span>My Awesome</span>
        <span>services</span>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          hic itaque 
          <br />A adipisci fugiat aliquid nam magnam eos soluta nemo cupiditate?
        </span>
        <a download>
        <button className="button s-button">Download CV</button>
        </a>
        <div
          className="blur s-blur1"
          style={{ background: "#ABF1FF94 " }}
        ></div>
      </div>
      {/* right side */}
      <div className="cards">
        <div style={{left: '25rem'}}>
            <Card
                emoji={HeartEmoji}
                heading={'Design'}
                detail={"Figma, Sketch, Photoshop, Adobe, Adobe xd"}
            />
        </div>
        {/* Second Card */}
        <div style={{left: '2rem', top:'10rem'}}>
            <Card
                emoji={Glasses}
                heading={'Developer'}
                detail={"HTML, CSS, JavaScript, ReactJS, NodeJS"}
            />
        </div>
        {/* Third Card */}
        <div style={{left: '20rem', top:'25rem'}}>
            <Card
                emoji={Humble}
                heading={'UI/UX'}
                detail={"Lorem ipsum dolor sit amet consectetur adipisicing elit"}
            />
        </div>
        <div className="blur s-blur2" style={{background: "var(--purple)" }}></div>
      </div>
    </div>
  );
};

export default Services;
