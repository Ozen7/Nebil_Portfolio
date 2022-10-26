import React from "react";
import "./HelloScreen.css"

function HelloScreen(props) {

  const [button,setButton] = React.useState(true);

  setTimeout(function () {
    setButton(false);
  }, 5000);

  return (
      <div>
      <p>
        Hello, My name is Nebil
      </p>
      {button ? null: <button className="button">continue</button>}
      </div>
  );
}

export default HelloScreen