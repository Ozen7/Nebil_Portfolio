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
      <div id="workexperience"/>
      <NavBar />
      
      <WorkExperience />

      <div
        id="personalprojects"
        style={{ backgroundColor: "#222831", height: "65px" }}
      />
      <PersonalProjects />

      <div
        id="aboutme"
        style={{ backgroundColor: "#222831", height: "65px" }}
      />
      <AboutMe />
    </>
  );
}

export default HomePage;
