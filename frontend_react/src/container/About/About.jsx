import React from "react";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import "./About.scss";
import { images } from "../../constants";

const About = () => {
  return (
    <div className="container">
      <img
        src={images.about01}
        alt={""}
        className="image"
        style={{ width: 450, height: 400 }}
      />
      <div>
        <h1
          style={{
            marginLeft: 0,
            fontFamily: "serif",
            fontSize: 50,
            color: "orange",
          }}
        >
          About Me
        </h1>

        <p style={{ marginTop: 20, color: 'GrayText' }}>
          Passionate Front-End Web Developer, skilled in React, JavaScript,
          HTML, CSS. Creates seamless UX and UI with creative but functional
          designs. Designed 10+ websites, including an Ecommerce booking
          platforms.
        </p>
      </div>
    </div>
  );
};

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  "app__darkbg"
);
