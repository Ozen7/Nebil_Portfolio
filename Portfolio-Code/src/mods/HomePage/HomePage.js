import React from "react";
import "./HomePage.css";
import NavBar from "./HomeComponents/NavBar";
import PersonalProjects from "./HomeComponents/PersonalProjects";
import Main from "./HomeComponents/Main";
import AboutMe from "./HomeComponents/AboutMe";
import WorkExperience from "./HomeComponents/WorkExperience";
import Survey from "./HomeComponents/Survey";

function HomePage(props) {
  return (
    <>
      <Main />


      <div
        id="aboutme"
        style={{ backgroundColor: "#222831", height: "65px" }}
      />
      <NavBar />
      
      <AboutMe />


      <div
        id="personalprojects"
        style={{ backgroundColor: "#222831", height: "65px" }}
      />
      <PersonalProjects />
      
      <div id="workexperience"/>

      <WorkExperience />





      <div style={{backgroundColor: "#222831", height: "60px"}}>

      </div>


    </>
  );
}

export default HomePage;
