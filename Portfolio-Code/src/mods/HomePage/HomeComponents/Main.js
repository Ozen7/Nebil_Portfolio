import React from "react";
import "../HomePage.css";
import { CSSTransition } from "react-transition-group";
import { TypeAnimation } from "react-type-animation";

function Main(props) {
  const [showPleased,setShowPleased] = React.useState(false);
  return (
    <a href="#workexperience" style={{ textDecoration: "none" }}>
      <div
        className="contentsDiv"
        style={{
          height: "101vh",
          flex: 1,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          borderBottom: "1px solid #EEEEEE",
        }}
      >
        <div
          style={{
            position: "relative",
            justifyContent: "center",
            alignItems: "center",
            flex: 0.9,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            className="contentsDiv"
            style={{
              flexDirection: "row",
              position: "relative",
            }}
          >
            <p style={{ fontSize: "50px", fontFamily:'Roboto Slab'}}>Hello, my name is&nbsp;</p>
              <TypeAnimation
                sequence={[
                  1000,
                  "Nebil",
                  200,
                  "Nebil ",
                  800,
                  "Nebil Ozer",
                  () => {
                    setShowPleased(true)
                  },
                ]}
                wrapper="div"
                cursor={true}
                repeat={0}
                style={{ fontSize: "50px",color: "#00ADB5" }}
              />
          </div>

          {!showPleased && <p style={{fontSize:"25px"}}>&nbsp;</p>}

          <CSSTransition
            in={showPleased}
            timeout={500}
            classNames="text"
            unmountOnExit
          >
            <p className="text" style={{ fontSize: "25px" , fontFamily:'Roboto Slab'}}>
              Pleased to meet you!
            </p>
          </CSSTransition>

        </div>
        <div
          className="contentsDiv"
          style={{
            position: "relative",
            alignItems: "center",
            justifyContent: "center",
            flex: 0.1,
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="currentColor"
            class="bi bi-chevron-double-down"
            viewBox="0 0 16 16"
            style={{ color: "#00ADB5" }}
          >
            <path
              fill-rule="evenodd"
              d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
            />
            <path
              fill-rule="evenodd"
              d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
            />
          </svg>
        </div>
      </div>
    </a>
  );
}

export default Main;
