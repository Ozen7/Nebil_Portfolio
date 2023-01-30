import React from "react";
import "../HomePage.css";
import selfie from "../images/image.png";

function AboutMe(props) {
  return (
    <>
      <div className="headerDiv">
        <h2>About Me</h2>
      </div>
      <div
        className="contentsDiv"
        style={{ display:"flex", height: "60vh", flexDirection: "row"}}
      >
        <div
          style={{
            flex: 3,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            textAlign:"center",
          }}
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            rhoncus et enim ac tincidunt. Integer dictum augue eu luctus
            blandit. Quisque eros enim, venenatis sit amet lacus cursus,
            vehicula dignissim quam. Praesent lacinia sed ante vitae fringilla.
            Nunc quis quam dolor. Nulla non felis sodales, faucibus massa vitae,
            malesuada ligula. Sed aliquet porta massa, nec euismod neque viverra
            a. Cras et euismod mi. 
          </p>
          <p>
            Quisque nec lacinia neque, eu ornare libero. Maecenas mollis
            scelerisque auctor. Sed aliquet maximus tincidunt. Proin eu tempor
            magna, non molestie odio. Quisque fringilla tempus nibh in pharetra.
            Nam id massa diam. Phasellus leo velit, rutrum in dui in, varius
            auctor velit.
          </p>
        </div>

        <div
          style={{
            flex: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={selfie}
            alt={"Nebil Ozer"}
            style={{
              borderRadius: "50%",
              display: "block",
            }}
            width={"300"}
            height={"400"}
          />
        </div>
        <div
          style={{
            flexDirection: "column",
            flex:"3"
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "30vh",
            }}
          >
            <h1>Socials</h1>
          </div>
          <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
            <h1>References/Resume</h1>
        </div>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
