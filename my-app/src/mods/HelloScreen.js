import React from "react";
import "./HelloScreen.css";
import { CSSTransition } from "react-transition-group";

function HelloScreen(props) {
  const [timeCounter, setTimeCounter] = React.useState(0);
  const [buttonIn, setButtonIn] = React.useState(true);

  setTimeout(function () {
    setTimeCounter((prevState) => {
      return prevState + 1;
    });
  }, 500);

  const continueButtonHandler = () => {
    setButtonIn(false);
  };

  return (
    <div className="text_div">
      <CSSTransition
        in={
          ((3 < timeCounter && 18 > timeCounter) || 21 < timeCounter) &&
          buttonIn
        }
        timeout={500}
        classNames="text"
        unmountOnExit
      >
        <p className="text">
          {" "}
          {timeCounter < 21
            ? "Hello, My name is Nebil Ozer"
            : "Welcome to my humble abode!"}
        </p>
      </CSSTransition>

      <CSSTransition
        in={timeCounter > 22 && buttonIn}
        timeout={500}
        classNames="button"
        unmountOnExit
      >
        <button className="button" onClick={continueButtonHandler}>
          continue
        </button>
      </CSSTransition>
    </div>
  );
}

export default HelloScreen;
