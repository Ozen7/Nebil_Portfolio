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
        style={{ height: "60vh", flexDirection: "row" }}
      >
        <div
          style={{
            width: "40vw",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            padding: "10vh",
          }}
        >
          <h1>short about me:</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            rhoncus et enim ac tincidunt. Integer dictum augue eu luctus
            blandit. Quisque eros enim, venenatis sit amet lacus cursus,
            vehicula dignissim quam. Praesent lacinia sed ante vitae fringilla.
            Nunc quis quam dolor. Nulla non felis sodales, faucibus massa vitae,
            malesuada ligula. Sed aliquet porta massa, nec euismod neque viverra
            a. Cras et euismod mi. Integer id justo vitae ligula feugiat
            euismod. Nullam vehicula diam arcu, tincidunt tristique nibh mattis
            non. Vivamus in magna non ex placerat semper. Sed elementum
            condimentum laoreet. Nullam euismod ante leo, ac mollis ligula
            congue eget. Integer id nulla eu mauris varius convallis.
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
            width: "20vw",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={selfie}
            alt={"picture of me"}
            style={{
              width: "300",
              height: "400",
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
          }}
        >
          <div
            style={{
              width: "40vw",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              padding: "10vh",
              height: "30vh",
            }}
          >
            <h1>Socials</h1>
          </div>
          <div
          style={{
            width: "40vw",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            padding: "10vh",
            height:"30vh"
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
