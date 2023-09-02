import React from "react";
import black from "../../images/download (9).jfif";
import react1 from "../../images/react-logo.png"
import mnist from "../../images/mnist.png";
import MLP from "../../images/nodeNeural.jpg";

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
        "CMSC 426 - Image Processing AI",
        `
        As part of the CMSC 426 class, we were tasked with developing a MLP neural network using only python and Numpy
         in order to classify the "MNIST" image collection. From calculating Jacobians to running the neural network 
        locally on our machines, the entire NN was developed by me and my partner. After calculating the effectiveness 
        of the neural network, we built various visualizations and wrote a short report on how we developed the neural network 
        and how it functioned from top to bottom. 

        In the second part of the project, we made use of PyTorch to create a Convolutional Neural Network and trained it 
        on the same dataset, comparing not only the performances of both networks, but also the training speed.
        `,
        `Technologies used:
        The first part of this project centered around only being able to use Python and Numpy. No machine learning or
        neural network libraries were used in its creation to give us a deeper understanding of how Neural Networks function.
        The second part allowed me to gain experience working with modern machine learning tools in the form of pytorch
        `,
        mnist,
        MLP
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
