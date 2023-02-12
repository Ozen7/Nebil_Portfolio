import React from "react";
import black from "../../images/download (9).jfif";
import react1 from "../../images/react-logo.png"

function IndividualProjects(props) {
  const formattedProject = (title, paragraph1, paragraph2, img1, img2) => {
    return (
      <>
        <div style={{ height: "7.5vh" }}></div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "30vw",
              height: "60vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {img1? <img src={img1} height={200}/>:null}
          </div>
          <div
            style={{
              width: "40vw",
              textAlign: "center",
            }}
          >
            <p style={{ fontSize: "30px" , fontFamily:'Roboto Slab'}}>{title}</p>
            <br />
            <p>{paragraph1}</p>
            <br />
            <p>{paragraph2}</p>
          </div>
          <div
            style={{
              width: "30vw",
              height: "60vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {img2?<img src={img2} />:null}
          </div>
        </div>
      </>
    );
  };

  switch (props.projnum) {
    case "proj1":
      return formattedProject(
        "This Portfolio",
        `Technologies Used: 
        This portfolio was primarily made using react.js. There is a bit of CSS in the animations and transitions, 
        but it is primarily dominated by Javascript. I used the Bootstrap library for the Navbar, as well as the 
        TypeAnimation library for the intro and AOS librariy for the "slide in" animations. Beyond that, 
        the entire website is made from scratch in react JS, with all the formatting, design, and layout made by yours truly.
        `,
        `
        This website is hosted on github-pages, and took me a few weeks to complete during the Winter of 2022-2023. 
        I hope you enjoy looking through it as much as I enjoyed creating it!
        `,
        react1,
        null
      );
    case "proj2":
      return formattedProject(
        "Project2",
        `Fusce ut lacus gravida, mattis metus a, finibus erat. Vivamus purus est, 
        cursus sed ultrices in, maximus eu purus. Lorem ipsum dolor sit amet, consectetur 
        adipiscing elit. Duis in metus nec mi consectetur faucibus eget id purus. 
        Suspendisse tincidunt quam eu erat faucibus, ac vestibulum felis dignissim. 
        Ut in elit dapibus, cursus justo porta, sollicitudin ligula. Ut pulvinar suscipit iaculis. 
        Etiam lacinia dapibus condimentum.
        `,
        "",
        black,
        black
      );
    case "proj3":
      return <p>proj3</p>;
    case "proj4":
      return <p>proj4</p>;
    case "proj5":
      return <p>proj5</p>;
    case "proj6":
      return <p>proj6</p>;
    case "proj7":
      return <p>proj7</p>;
    case "proj8":
      return <p>proj8</p>;
    default:
      return <p>how did we get here?</p>;
  }
}

export default IndividualProjects;
