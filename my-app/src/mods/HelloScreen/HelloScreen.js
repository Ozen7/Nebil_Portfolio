import React from "react";
import "./HelloScreen.css";
import { CSSTransition } from "react-transition-group";
import { useNavigate } from "react-router-dom";

function HelloScreen(props) {
  const [timeCounter, setTimeCounter] = React.useState(0);
  const [buttonIn, setButtonIn] = React.useState(true);
  const [basic, setBasic] = React.useState(false);
  const navigate = useNavigate();

  if (!basic) {
    setTimeout(function () {
      setTimeCounter((prevState) => {
        console.log(timeCounter);
        return prevState + 1;
      });
    }, 500);
  }

  const continueButtonHandler = () => {
    setButtonIn(false);
    setBasic(true);
  };
  return (
    <div
      className="background"
      style={{ height: "100vh", backgroundColor: "#222831" }}
    >
      <CSSTransition
        in={(6 > timeCounter || 10 < timeCounter) && buttonIn}
        timeout={500}
        classNames="text"
        unmountOnExit
      >
        <p className="text">
          {" "}
          {timeCounter < 10
            ? "Hello, My name is Nebil Ozer"
            : "Welcome to my humble abode!"}
        </p>
      </CSSTransition>

      <CSSTransition
        in={timeCounter > 10 && buttonIn}
        timeout={500}
        classNames="button"
        unmountOnExit
      >
        <a href="#aboutme">
          <button className="button" onClick={continueButtonHandler}>
            continue
          </button>
        </a>
      </CSSTransition>
    </div>
  );
}

export default HelloScreen;
