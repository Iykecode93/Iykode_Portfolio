import React, { useState } from "react";
import { motion } from "framer-motion";
import { HiMenuAlt4, HiX } from "react-icons/hi";

import { AppWrap } from "../../wrapper";
import { images } from "../../constants";
import "./Header.scss";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <nav className="app__navbar">
        {/* <div className="app__navbar-logo">
          <h1>oparah</h1>
        </div> */}
        <ul className="app__navbar-links">
          {["home", "work", "skills", "contact"].map((item) => (
            <li className="app__flex p-text" key={`link-${item}`}>
              <a href={`#${item}`}>{item}</a>
            </li>
          ))}
        </ul>

        <div className="app__navbar-menu">
          <HiMenuAlt4 onClick={() => setToggle(true)} />

          {toggle && (
            <motion.div
              whileInView={{ x: [300, 0] }}
              transition={{ duration: 0.85, ease: "easeOut" }}
            >
              <HiX onClick={() => setToggle(false)} />
              <ul>
                {["home", "work", "skills", "contact"].map((item) => (
                  <li key={item}>
                    <a href={`#${item}`} onClick={() => setToggle(false)}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      </nav>

      <div className="app__header app__flex">
        <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 1 }}
          className="app__header-info"
        >
          <div>
            <div style={{ marginTop: 70 }}>
              <span
                style={{ color: "orange", fontSize: 20, fontFamily: "serif" }}
              >
                Hello!
              </span>
            </div>

            <div style={{ marginTop: 20 }}>
              <h1
                style={{
                  color: "white",
                  fontSize: 50,
                  fontFamily: "serif",
                  fontWeight: "bolder",
                  marginRight: 50,
                }}
              >
                I'm{" "}
                <span
                  style={{
                    color: "orange",
                    fontSize: 50,
                    fontWeight: "bolder",
                    marginRight: 50,
                  }}
                >
                  JohnBosco I. Oparah
                </span>
              </h1>
            </div>

            <div style={{ marginTop: 20 }}>
              <h2 style={{ color: "white", fontFamily: "unset" }}>
                Frontend Engineer
              </h2>

              <p style={{ color: "white" }}>
                <br></br>
                Frontend Engineer with 2+ years of experience designing,
                developing managing complex e-commerce site and internal
                frameworks. Highly skilled in working with web technologies and
                working knowledge of code versioning. Well-versed in working in
                Scrum and Agile environments. An enthusiastic team player and
                deep creative thinker.
              </p>
            </div>

            <div style={{ marginTop: 20 }}>
              <a
                href="johnbosco-oparah-Resume.pdf"
                download={true}
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <span
                  style={{
                    background: "orange",
                    padding: 4,
                    border: "1px solid orange ",
                    borderRadius: 40,
                    fontFamily: "initial",
                    color: "black",
                  }}
                >
                  Download Cv
                </span>
              </a>

              <a href="#contact" style={{ textDecoration: "none" }}>
                <span
                  style={{
                    background: "gray",
                    padding: 6,
                    border: "1px solid gray",
                    borderRadius: 40,
                    fontFamily: "initial",
                    color: "white",
                    marginLeft: 10,
                  }}
                >
                  Hire Me
                </span>
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 1, delayChildren: 0.5 }}
          className="app__header-img"
          style={{ marginLeft: 200 }}
        >
          <img src={images.profile} alt="profile_bg" />
          <motion.img
          //  whileInView={{ scale: [0, 1] }}
          //  transition={{ duration: 1, ease: 'easeInOut' }}
          //  src={images.circle}
          //  alt="profile_circle"
          //  className="overlay_circle"
          />
        </motion.div>

        {/* <motion.div
        variant={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
        style={{marginLeft: 100, marginTop: 20}}
      >
        {[images.html, images.css, images.javascript, images.react].map(
          (circle, index) => (
            <div className="circle-cmp app__flex" key={`circle-${index}`}>
              <img src={circle} alt="circle" />
            </div>
          )
        )}
      </motion.div> */}
      </div>
    </>
  );
};

export default AppWrap(Header, "home");
