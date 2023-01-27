import React, { useEffect } from "react";
import "../HomePage.css";
import AOS from "aos";
import "aos/dist/aos.css";
import wrkexp from "../images/download (9).jfif";
import sandclogo from "../images/logo2.jpg";
import bluetooth from "../images/Bluetooth.png";
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
          paddingLeft: "10vw",
          paddingRight: "10vw",
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
            justifyContent: "space-between",
            padding: "10px",
          }}
          data-aos="slide-up"
        >
          <div style={{ paddingRight: "3vw" }}>
            <img
              src={bluetooth}
              alt={"Bluetooth Logo"}
              style={{ width: "10vw", height: "15vw" }}
            />
          </div>
          <p>
            &emsp; During my software engineering internship at S&C Electric
            Company in the summer of 2022, I had the opportunity to work on a
            team of interns to create a basic app using React Native. The app
            would be able to detect and populate information from a bluetooth
            beacon broadcasting BLE Extended Advertisement signals. My primary
            responsibility was to handle the backend Bluetooth technologies for
            the app, which involved researching and understanding the ins and
            outs of Bluetooth connectivity to work through any issues I came
            across. I also worked on developing transfer protocols and
            reprogramming the BLE simulator we were using to test the app. This
            was a challenging task, as it required me to troubleshoot and solve
            various technical issues along the way.
            <br></br>
            <br></br>
            &emsp; Near the end of the internship, I was also tasked with
            writing comprehensive tests for a REST API. This was a valuable
            learning experience as it allowed me to explore different
            authentication protocols and sequences. It was also a great
            opportunity to apply my knowledge of backend development in a
            real-world setting. The internship culminated with a comprehensive
            presentation where all the interns came together to show off their
            work to the senior management of the company. We presented important
            research and findings about the technologies we implemented and
            discussed the challenges we faced during the development process.
            Overall, this internship was an incredibly valuable learning
            experience that allowed me to apply my knowledge, develop new skills
            and gain practical experience in the field of software engineering.
          </p>
          <div style={{ }}>
            <img
              src={sandclogo}
              alt={"S&C Logo"}
              style={{ width: "15vw", height: "15vw", marginTop: "35vh", marginLeft:"5vh"}}
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
            gap: 40,
          }}
          data-aos="slide-up"
        >
          <p data-aos="slide-up">
            Nunc sagittis nulla nisi, vitae fringilla nibh rhoncus quis. Aliquam
            purus risus, feugiat vel bibendum vestibulum, faucibus in dolor.
            Vestibulum vitae metus nec magna suscipit fringilla. Integer
            tristique tristique neque vitae dignissim. Curabitur convallis
            laoreet ipsum sit amet consequat. Pellentesque et convallis ante.
            Cras ut sem consectetur nisi ullamcorper pulvinar. Pellentesque
            accumsan, dui vitae convallis malesuada, nulla magna condimentum
            massa, vitae viverra nibh massa quis turpis. Aenean id eros odio.
            Duis blandit scelerisque interdum. Vivamus enim augue, sollicitudin
            vitae cursus sed, gravida nec ante. Nunc dictum leo dui, in varius
            elit tempor id. Mauris facilisis nibh non vehicula porta. Fusce
            volutpat scelerisque tempor. Ut aliquet turpis vitae maximus rutrum.
          </p>
          <img src={wrkexp} />
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
            gap: 40,
          }}
          data-aos="slide-up"
        >
          <img src={wrkexp} />
          <p>
            {" "}
            Phasellus ut dignissim dolor. Quisque eros lorem, lobortis ac
            facilisis vitae, efficitur non sapien. Quisque vestibulum
            sollicitudin consequat. Quisque eleifend sed magna ut condimentum.
            Donec tincidunt quam vitae augue volutpat, nec tempor leo posuere.
            Sed leo ante, scelerisque sit amet aliquam quis, aliquam et justo.
            Etiam id tortor mauris. Quisque sodales est erat, ultricies varius
            felis iaculis sed. Nunc in malesuada erat, at cursus sapien. Donec
            semper quis mi vitae finibus. Proin eget consectetur purus. Mauris
            eget semper ex, quis fringilla augue.
            <br />
            <br />
            Mauris mattis sem sed mauris varius sodales. Maecenas ultrices ut mi
            et luctus. Suspendisse at efficitur tellus, nec consectetur magna.
            Praesent faucibus nunc urna, sed condimentum ipsum vestibulum sed.
            Suspendisse vestibulum semper feugiat. Nulla porttitor fringilla
            lorem, eget faucibus ante ullamcorper id. In efficitur vel neque ut
            iaculis. Orci varius natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus. Pellentesque ultricies porta felis
            luctus pellentesque. Sed dapibus ac diam ut vehicula. Nullam id
            condimentum risus, ac cursus ipsum. Aliquam tempus varius eleifend.
            Vestibulum volutpat, massa et dictum ultricies, mauris urna varius
            velit, ut euismod magna ipsum in dolor.{" "}
          </p>
        </div>
      </div>
    </>
  );
}

export default WorkExperience;
