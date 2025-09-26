import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import AOS from "aos";
import "aos/dist/aos.css";
import "./ProjectsFolder/Projects.css";
import IndividualProjects from "./ProjectsFolder/IndividualProjects";
import portfolio1 from "../images/portfolio1.png";
import mnist from "../images/mnist.png"
import api from "../images/api.png"
import LaSuperba from "../images/AccessOrchestrateMerge.gif" 



function PersonalProjects(props) {
  const [menu, setMenu] = useState(true);
  const [alternate, setAlternate] = useState(true);
  const [setting, setSetting] = useState("");
  const [buttonText, setButtonText] = useState(false);

  useEffect(() => {
    AOS.init({ once: true, offset: 30 });
    AOS.refresh();
  }, []);

  return (
    <>
      <div className="headerDiv">
        <h3>Research & Personal Projects</h3>
      </div>
      <div
        style={{
          backgroundColor: "#222831",
          paddingBottom:"7.5vh"
        }}
      >
        <CSSTransition
          in={alternate && menu}
          timeout={1000}
          classNames="menu"
          onExited={() => {
            setAlternate(false);
          }}
          unmountOnExit
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "auto auto auto auto",
              gap: "40px",
              paddingLeft: "15vw",
              paddingRight: "15vw",
              paddingTop: "65px",
            }}
          >
            <div
              data-aos="slide-up"
              className="menu"
              onClick={() => {
                setSetting("proj1");
                setMenu(false);
              }}
            >
              <img src={LaSuperba} style={{borderRadius:"10%", width:"12.5vw"}}/>
            </div>
            <div
              data-aos="slide-up"
              className="menu"
              onClick={() => {
                setSetting("proj2");
                setMenu(false);
              }}
            >
              <img src={portfolio1} style={{borderRadius:"10%", width:"12.5vw"}}/>
            </div>
            <div
              data-aos="slide-up"
              className="menu"
              onClick={() => {
                setSetting("proj3");
                setMenu(false);
              }}
            >
              <img src={mnist} style={{borderRadius:"10%", width:"12.5vw"}}/>

            </div>
            <div
              data-aos="slide-up"
              className="menu"
              onClick={() => {
                setSetting("proj4");
                setMenu(false);
              }}
            >  
              <img src={api} style={{borderRadius:"10%", width:"12.5vw"}}/>
            </div>
            <div
              data-aos="slide-up"
              className="menu"
              onClick={() => {
                setSetting("proj5");
                setMenu(false);
              }}
            ></div>
            <div
              data-aos="slide-up"
              className="menu"
              onClick={() => {
                setSetting("proj6");
                setMenu(false);
              }}
            ></div>
            <div
              data-aos="slide-up"
              className="menu"
              onClick={() => {
                setSetting("proj7");
                setMenu(false);
              }}
            ></div>
            <div
              data-aos="slide-up"
              className="menu"
              onClick={() => {
                setSetting("proj8");
                setMenu(false);
              }}
            ></div>
          </div>
        </CSSTransition>

        <CSSTransition
          in={(!alternate && !menu)}
          timeout={1000}
          classNames="menubutton"
          unmountOnExit
          onEntered={() => {
            setButtonText(true);
          }}
          onExited={() => {
            setAlternate(true);
          }}
        >
          <div
            className="menubutton"
            onClick={() => {
              setMenu(true);
              setButtonText(false);
            }}
          >
            <CSSTransition
              in={buttonText}
              timeout={1000}
              classNames="buttontext"
              unmountOnExit
            >
              <p className="buttontext">back to menu</p>
            </CSSTransition>
          </div>
        </CSSTransition>

        <CSSTransition
          in={!alternate && !menu}
          timeout={1000}
          classNames="menu"
          unmountOnExit
          onExited={() => {
            setAlternate(true);
          }}
        >
          <div
            style={{
              color: "white",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <IndividualProjects projnum={setting} />
          </div>
        </CSSTransition>
      </div>
    </>
  );
}

export default PersonalProjects;
