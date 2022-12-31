import React from "react";
import "./HomePage.css";
import NavBar from "./HomeComponents/NavBar";
import PersonalProjects from "./HomeComponents/PersonalProjects";
import Main from "./HomeComponents/Main";
import AboutMe from "./HomeComponents/AboutMe";
import HelloScreen from "../HelloScreen/HelloScreen";

function HomePage(props) {
  return (
    <>

      <HelloScreen/>
      <NavBar />
      <div id="aboutme"  style={{ backgroundColor: "#222831", height: "65px" }}/>
      <AboutMe />
      <div
        id="personalprojects"
        style={{ backgroundColor: "#222831", height: "65px" }}
      />
      <PersonalProjects />
    </>
  );
}

export default HomePage;
