import React, { useEffect } from "react";
import "../HomePage.css";
import AOS from "aos";
import "aos/dist/aos.css";
import wrkexp from "../images/download (9).jfif";
function WorkExperience(props) {
  useEffect(() => {
    AOS.init({ once: true, offset: 30});
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
          paddingLeft: "15vw",
          paddingRight: "15vw",
          paddingTop: "10vh",
          justifyContent: "center",
          alignItems: "center",
          
        }}
      >
        <p style={{fontSize: "30px", color:"#00ADB5"}} data-aos="slide-up" >Prior Work Experience</p>
        <div
          id="prior-work-exp"
          style={{
            display: "flex",
            marginTop: "30px",
            gap: 40,
          }}
          data-aos="slide-up"
        >
          <img src={wrkexp} />
          <div></div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mauris
            ex, cursus vel ornare ut, commodo sed velit. Fusce varius
            sollicitudin pretium. Sed dapibus neque molestie, cursus lectus ut,
            faucibus turpis. Curabitur quis massa ullamcorper, fringilla ex
            eget, malesuada eros. Donec ac consequat purus, id aliquam turpis.
            Suspendisse vulputate sem non ultrices fermentum. Nulla ac massa non
            nisi pulvinar tincidunt vel eget lectus. Sed at ligula felis.
            Curabitur sit amet ante facilisis massa finibus interdum. Duis erat
            nulla, ultricies semper ex quis, aliquet rutrum orci. Proin eleifend
            massa ut metus vulputate condimentum non semper odio. Vivamus
            iaculis vel quam in ultrices. Duis ullamcorper ultricies orci vitae
            vehicula. Aliquam id libero ex. Phasellus ultricies purus mi, quis
            ultrices velit fermentum vitae.{" "}
          </p>
        </div>

        <div id="univexp" style={{position:"relative", height:"65px"}}></div>

        <p style={{fontSize: "30px",color:"#00ADB5",paddingTop:"20px"}} data-aos="slide-up">Experience Gained from University Schoolwork</p>
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
        
        <div id="personaljourney" style={{position:"relative", height:"65px"}}></div>

        <p style={{fontSize: "30px", color:"#00ADB5"}} data-aos="slide-up">Personal Journey Through Compsci</p>
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
