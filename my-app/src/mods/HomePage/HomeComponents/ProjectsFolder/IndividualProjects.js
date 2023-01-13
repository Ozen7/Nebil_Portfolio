import React from "react";
import black from "../../images/download (9).jfif";

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
            <img src={img1} style={{}} />
          </div>
          <div
            style={{
              width: "40vw",
              textAlign: "center",
            }}
          >
            <p style={{ fontSize: "30px" }}>{title}</p>
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
            <img src={img2} />
          </div>
        </div>
      </>
    );
  };

  switch (props.projnum) {
    case "proj1":
      return formattedProject(
        "Project1",
        `Fusce ut lacus gravida, mattis metus a, finibus erat. Vivamus purus est, 
        cursus sed ultrices in, maximus eu purus. Lorem ipsum dolor sit amet, consectetur 
        adipiscing elit. Duis in metus nec mi consectetur faucibus eget id purus. 
        Suspendisse tincidunt quam eu erat faucibus, ac vestibulum felis dignissim. 
        Ut in elit dapibus, cursus justo porta, sollicitudin ligula. Ut pulvinar suscipit iaculis. 
        Etiam lacinia dapibus condimentum. Duis quis risus velit. Proin vel porta tortor. 
        Vivamus quis mauris ante. Sed augue tellus, ultricies non mollis ut, molestie vitae ex. 
        Phasellus cursus vel nulla eu porta. Mauris nulla libero, posuere sit amet augue consectetur, 
        sagittis cursus ante. Donec eu sem lectus.
        `,
        `
        Pellentesque sed erat volutpat, malesuada purus quis, egestas nisi. Quisque 
        lorem erat, semper id enim ac, dapibus blandit orci. Mauris dictum ultricies
        mauris sed auctor. Nulla felis felis, iaculis vel semper eu, sollicitudin quis 
        nulla. Donec purus purus, pretium in nunc nec, lacinia volutpat nibh. Suspendisse et arcu 
        interdum ex faucibus tincidunt at et justo. Praesent tempus iaculis nisi, ac fermentum 
        massa pulvinar eget. Quisque et ex orci. Sed ac varius mauris. Proin accumsan risus sit 
        amet hendrerit vehicula. Proin sed fermentum nunc. Mauris in nibh urna. Ut elementum consectetur
        ligula sed facilisis.`,
        black,
        black
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
