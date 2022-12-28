import React from "react";
import "../HomePage.css";

function NavBar(props) {
  return (
    <>
      <nav
        class="navbar fixed-top navbar-expand-lg navbar-dark"
        style={{ backgroundColor: "#393E46" }}
      >
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Nebil Ozer
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-link" aria-current="page" href="#">
                Home
              </a>
              <a class="nav-link" href="#">
                About Me
              </a>
              <a class="nav-link" href="#test">
                Experience
              </a>
              <a class="nav-link" href="#personalprojects">
                Personal Projects
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
