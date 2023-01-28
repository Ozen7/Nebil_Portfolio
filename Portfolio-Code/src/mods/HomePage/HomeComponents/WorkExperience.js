import React, { useEffect } from "react";
import "../HomePage.css";
import AOS from "aos";
import "aos/dist/aos.css";
import wrkexp from "../images/download (9).jfif";
import sandclogo from "../images/logo2.jpg";
import bluetooth from "../images/Bluetooth.png";
import mlogo from "../images/M_logo.png";
import clogo from "../images/C_Logo.png";
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
        <p style={{ fontSize: "30px", color: "#00ADB5" }} data-aos="slide-up">
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
          <div style={{ flex: "2", display: "flex", justifyContent: "center" }}>
            <img
              src={bluetooth}
              alt={"Bluetooth Logo"}
              style={{ width: "150px", height: "225px" }}
            />
          </div>
          <div style={{ flex: "5" }}>
            <p style={{ textAlign: "center" }}>
              &emsp; During my software engineering internship at S&C Electric
              Company in the summer of 2022, I had the opportunity to work on a
              team of interns to create a basic app using React Native. The app
              would be able to detect and populate information from a bluetooth
              beacon broadcasting BLE Extended Advertisement signals. My primary
              responsibility was to handle the backend Bluetooth technologies
              for the app, which involved researching and understanding the ins
              and outs of Bluetooth connectivity to work through any issues I
              came across. I also worked on developing transfer protocols and
              reprogramming the BLE simulator we were using to test the app.
              This was a challenging task, as it required me to troubleshoot and
              solve various technical issues along the way.
              <br></br>
              <br></br>
              &emsp; Near the end of the internship, I was also tasked with
              writing comprehensive tests for a REST API. This was a valuable
              learning experience as it allowed me to explore different
              authentication protocols and sequences. It was also a great
              opportunity to apply my knowledge of backend development in a
              real-world setting. The internship culminated with a comprehensive
              presentation where all the interns came together to show off their
              work to the senior management of the company. We presented
              important research and findings about the technologies we
              implemented and discussed the challenges we faced during the
              development process. Overall, this internship was an incredibly
              valuable learning experience that allowed me to apply my
              knowledge, develop new skills and gain practical experience in the
              field of software engineering.
            </p>
          </div>
          <div
            style={{
              flex: "2",
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
                marginTop: "150px",
              }}
            />
          </div>
        </div>

        <div
          id="univexp"
          style={{ position: "relative", height: "65px" }}
        ></div>

        <p
          style={{ fontSize: "30px", color: "#00ADB5", paddingTop: "20px" }}
          data-aos="slide-up"
        >
          Experience Gained from University Schoolwork
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
              flex: 2,
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
          <div style={{ flex: 5 }}>
            <p data-aos="slide-up" style={{ textAlign: "center" }}>
              As a computer science student at the University of Maryland, I
              have had the opportunity to take a diverse range of classes that
              have greatly expanded my skillset and tools that I can leverage in
              both research and professional settings. My coursework has
              included hands-on projects that have allowed me to put my
              knowledge into practice. Some notable projects include:
              <br />
              <br />
              <ul style={{ textAlign: "left" }}>
                <li>
                  A rudimentary file system developed using the C programming
                  language
                </li>
                <li> A compiler developed using Ocaml</li>
                <li> Various Organizational Systems developed using Java</li>
              </ul>
              I am proud of my academic performance in computer science,
              consistently excelling in every class I have taken and quickly
              picking up new topics and concepts. My passion for the subject has
              only grown as I have deepened my understanding of the various
              topics surrounding computer science. I am committed to furthering
              my education in this field and am actively seeking research
              opportunities to further my knowledge and skills. I am excited
              about the opportunity to pursue a doctoral degree in computer
              science in the future.
            </p>
          </div>
          <div style={{ flex: 2, display: "flex", justifyContent: "center" }}>
            <img
              src={clogo}
              alt={"C logo"}
              style={{ width: "175px", height: "200px" }}
            />
          </div>
        </div>

        <div
          id="personaljourney"
          style={{ position: "relative", height: "65px" }}
        ></div>

        <p style={{ fontSize: "30px", color: "#00ADB5" }} data-aos="slide-up">
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
          <div style={{ flex: 2 }} />
          <div style={{ flex: 5 }}>
            <p>
              My love for computer science began at a young age, as I explored
              and experimented with programming languages through online
              tutorials and scratch projects. Throughout my middle and high
              school years, I took advantage of every opportunity to learn more
              about computer science, whether it was through classroom
              instruction or self-directed projects. I was constantly pushing my
              own boundaries and experimenting with new technologies, developing
              games and other projects that I shared with my friends.
              <br />
              <br />
              Even now, as I continue my studies in computer science, I am
              always looking for ways to improve my skills and expand my
              understanding of the field. I am particularly interested in data
              science, including working with databases, artificial
              intelligence, and neural networks. Additionally, I am excited
              about the opportunities to continue learning about full-stack web
              development. My passion for computer science has not changed, but
              rather has grown along with my expanding knowledge and experience
              in the field.
            </p>
          </div>
          <div style={{ flex: 2, display: "flex", justifyContent: "center" }}>
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
