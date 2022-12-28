import React from "react";
import "./HomePage.css";
import NavBar from "./HomeComponents/NavBar";
import PersonalProjects from "./HomeComponents/PersonalProjects";
import Main from "./HomeComponents/Main";

function HomePage (props) {
    return (
        <>
            <NavBar/>
            <div id = "main">
                <Main/>
            </div>
            
            <div id = "personalprojects">
                <PersonalProjects/>
            </div>

            <div className="background">
                <p id = "test">hello</p>
            </div>
        </>
    )
}

export default HomePage;