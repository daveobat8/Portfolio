import React from "react";

function Profile() {
  return (
    <section id="profile">
      <div className="section__pic-container">
        <img src="/public/assets/dave1.jpg" alt="David Profile Pic" className="profile-pic"/>
      </div>
      <div className="section__text">
        <p className="section__text__p1">Hello I'm</p>
        <h1 className="title">Dave Obat</h1>
        <p className="section__text__p2">Software Developer <br />Student Engineer <br />Musician</p>
        <div className="btn-container">
          <button
            className="btn btn-color-2"
            onClick={() => window.open("/public/assets/resume.pdf", "_blank")}
          >
            Download CV
          </button>
          <button
            className="btn btn-color-1"
            onClick={() => (window.location.hash = "#contact")}
          >
            Contact Me
          </button>
        </div>
        <div id="socials-container">
          <img
            src="/public/assets/linkedin.png"
            alt="My Linkedin"
            className="icon"
            onClick="go to linkedin"
          />
          <img
            src="/public/assets/github.png"
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
