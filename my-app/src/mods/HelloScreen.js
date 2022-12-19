import React from "react";
import "./HelloScreen.css";
import { CSSTransition } from "react-transition-group";
import { useNavigate } from "react-router-dom";


function HelloScreen(props) {
  const [timeCounter, setTimeCounter] = React.useState(0);
  const [buttonIn, setButtonIn] = React.useState(true);
  const navigate = useNavigate();
  

  setTimeout(function () {
    setTimeCounter((prevState) => {
      console.log("hi");
      return prevState + 1;
    });
  }, 500);

  const continueButtonHandler = () => {
    setButtonIn(false);
    navigate('/homepage');
  };

  return (
    <div className="background">
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
