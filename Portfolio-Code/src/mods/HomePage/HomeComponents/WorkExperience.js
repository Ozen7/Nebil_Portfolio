import React, { useEffect } from "react";
import "../HomePage.css";
import AOS from "aos";
import "aos/dist/aos.css";
import sandclogo from "../images/logo2.jpg";
import bluetooth from "../images/Bluetooth.png";
import mlogo from "../images/M_logo.png";
import compArch from "../images/CompArch.jpg";
import selfie from "../images/personalSelfie.jpg";
function WorkExperience(props) {
  useEffect(() => {
    AOS.init({ once: true, offset: 30 });
    AOS.refresh();
  }, []);
  return (
    <>
      <div className="headerDiv">
        <h3>Experience</h3>
      </div>
      <div
        className="contentsDiv"
        id="priorworkexperience"
        style={{
          flexDirection: "column",
          paddingTop: "10vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p style={{ fontSize: "30px", color: "#00ADB5" , fontFamily:'Roboto Slab'}} data-aos="slide-up">
          Prior Work Experience
        </p>
        <div
          id="prior-work-exp"
          style={{
            display: "flex",
            marginTop: "30px",
          }}
          data-aos="slide-up"
        >
          <div style={{ flex: "1", display: "flex", justifyContent: "center" }}>
            <img
              src={bluetooth}
              alt={"Bluetooth Logo"}
              style={{ width: "150px", height: "225px" }}
            />
          </div>
          <div style={{ flex: "1" }}>
            <p style={{ textAlign: "center" }}>
              During my software engineering internship at S&C Electric Company
              in the summer of 2022, I worked on a team to create a React Native
              app that detects and populates information from a Bluetooth
              beacon. My primary responsibility was to handle the backend
              Bluetooth technologies, troubleshoot technical issues, and develop
              transfer protocols. Near the end of the internship, I wrote tests
              for a REST API and presented all my work throughout the summer to
              senior management.
              <br />
              <br />
              The internship was a valuable learning experience where I was able
              to apply my knowledge, develop new skills and gain practical
              experience in software engineering. Overall, it was an incredibly
              valuable learning experience.
            </p>
          </div>
          <div
            style={{
              flex: "1",
              display: "flex",
              alignItems: "bottom",
              justifyContent: "center",
            }}
          >
            <img
              src={sandclogo}
              alt={"S&C Logo"}
              style={{
                width: "200px",
                height: "200px",
                marginTop: "50px",
              }}
            />
          </div>
        </div>

        <div
          id="univexp"
          style={{ position: "relative", height: "65px" }}
        ></div>

        <p
          style={{ fontSize: "30px", color: "#00ADB5", paddingTop: "20px", fontFamily:'Roboto Slab' }}
          data-aos="slide-up"
        >
          Research Interest
        </p>
        <div
          id="univ-exp"
          style={{
            display: "flex",
            marginTop: "30px",
          }}
          data-aos="slide-up"
        >
          <div
            style={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "bottom",
            }}
          >
            <img
              src={mlogo}
              alt={"UMD M"}
              style={{ width: "200px", height: "200px", marginTop: "100px" }}
            />
          </div>
          <div style={{ flex: 1 }}>
            <p data-aos="slide-up" style={{ textAlign: "center" }}>
              As a computer science student at the University of Maryland, I
              have had the opportunity to take a diverse range of classes that
              have greatly expanded my skillset and tools that I can leverage in
              both research and professional settings. I am proud of my academic performance in computer science,
              consistently excelling in every class I have taken and quickly
              picking up new topics and concepts.
              <br/>
              <br/>
              Eventually, I realized that I am
              a student at heart, and that my passion for learning was one of the driving forces in my life.
              I intend to continue my journey of learning in graduate school, and eventually 
              break into becoming my own teacher, researching new technologies and answering 
              not just my own questions, but those of the scientific community and the greater world.

            <br/><br/>
              My passion for Computer Science has
              only grown as I have deepened my understanding, and my current focus centers around Domain Specific Accelerators
              and their usage in Machine Learning Applications
            </p>
          </div>
          <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
            <img
              src={compArch}
              alt={"Computer Architecture"}
              style={{ width: "175px", height: "200px" }}
            />
          </div>
        </div>

        <div
          id="personaljourney"
          style={{ position: "relative", height: "65px" }}
        ></div>

        <p style={{ fontSize: "30px", color: "#00ADB5" , fontFamily:'Roboto Slab'}} data-aos="slide-up">
          Personal Journey Through Compsci
        </p>
        <div
          id="personal-journey"
          style={{
            display: "flex",
            marginTop: "30px",
          }}
          data-aos="slide-up"
        >
          <div style={{ flex: 1 }} />
          <div style={{ flex: 1 }}>
            <p style={{ textAlign: "center" }}>
              My love for computer science began at a young age through online
              tutorials and scratch projects. Throughout my middle and high
              school years, I took advantage of every opportunity to learn more
              about computer science. I was constantly pushing my own boundaries
              and experimenting with new technologies, developing games and
              other projects that I shared with my friends. Even now, as I
              continue my studies in computer science, I am always looking for
              ways to improve my skills and expand my understanding of the
              field.
              <br />
              <br />I am particularly interested in Domain Specific Architectures,
              artificial intelligence, and neural networks. 
              Additionally, I am excited about the opportunities to
              continue learning about full-stack web development.
            </p>
          </div>
          <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
            <img
              src={selfie}
              width={"200px"}
              height={"200px"}
              style={{ borderRadius: "20%" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default WorkExperience;
