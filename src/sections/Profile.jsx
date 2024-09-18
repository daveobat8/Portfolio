import React from "react";

function Profile() {
  return (
    <section id="profile">
      <div className="section__pic-container">
        <img src="" alt="David Profile Pic" />
      </div>
      <div className="section__text">
        <p className="section__text__p1">Hello I'm</p>
        <h1 className="title">Dave Obat</h1>
        <p className="section__text__p2">Software Developer</p>
        <div className="btn-container">
          <button
            className="btn btn-color-2"
            onClick={() => window.open("/src/assets/resume.pdf", "_blank")}
          >
            Download CV
          </button>
          <button
            className="btn btn-color-1"
            onClick={() => (window.location.hash = "#Contact")}
          >
            Contact Me
          </button>
        </div>
        <div id="socials-container">
          <img
            src="/src/assets/linkedin.png"
            alt="My Linkedin"
            className="icon"
            onClick="go to linkedin"
          />
          <img
            src="/src/assets/github.png"
            alt="My Github"
            className="icon"
            onClick={() => window.open("https://github.com/daveobat8", "_blank")}
          />
        </div>
      </div>
    </section>
  );
}

export default Profile;
