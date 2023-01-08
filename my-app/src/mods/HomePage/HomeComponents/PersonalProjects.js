import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Projects.css";

function PersonalProjects(props) {
  const [menu, setMenu] = useState(true);

  useEffect(() => {
    AOS.init({ once: false, offset: 80 });
    AOS.refresh();
  }, []);

  const onMenuClick = () => {
    setMenu(false);
  };

  const returnMenu = () => {
    setMenu(true);
  };

  return (
    <>
      <div className="headerDiv">
        <h3>Personal Projects</h3>
      </div>
      <button onClick={returnMenu}></button>
      <div
        style={{
          backgroundColor: "#222831",
          height: "60vh",

        }}
      >
        <CSSTransition in={menu} timeout={500} classNames="text" unmountOnExit>
          <div
            style={{
              display: "grid",
              height: "60vh",
              gridTemplateColumns: "auto auto auto auto",
              gap: "40px",
              paddingLeft: "20vw",
              paddingRight: "20vw",
              paddingTop: "65px",
            }}
          >
            <div
              data-aos="slide-up"
              className="menu"
              onClick={onMenuClick}
            ></div>
            <div
              data-aos="slide-up"
              className="menu"
              onClick={onMenuClick}
            ></div>
            <div
              data-aos="slide-up"
              className="menu"
              onClick={onMenuClick}
            ></div>
            <div
              data-aos="slide-up"
              className="menu"
              onClick={onMenuClick}
            ></div>
            <div
              data-aos="slide-up"
              className="menu"
              onClick={onMenuClick}
            ></div>
            <div
              data-aos="slide-up"
              className="menu"
              onClick={onMenuClick}
            ></div>
            <div
              data-aos="slide-up"
              className="menu"
              onClick={onMenuClick}
            ></div>
            <div
              data-aos="slide-up"
              className="menu"
              onClick={onMenuClick}
            ></div>
          </div>
        </CSSTransition>
      </div>
    </>
  );
}

export default PersonalProjects;
