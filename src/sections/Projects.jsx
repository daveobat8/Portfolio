import React from "react";

function Projects() {
  return (
    <section id="projects">
      <p className="section__text__p1">Browse My Recent</p>
      <h1 className="title">Projects</h1>
      <div className="experience-details-container">
        <div className="about-containers">
        <div className="details-container color-container">
          <div className="article-container">
            <img src="" alt="project 1" className="project-img" />
          </div>
          <h2 className="experience-sub-title project-title">Project One</h2>
          <div className="btn-container">
            <button
              className="btn btn-color-2 project-btn"
              onClick={() =>
                window.open("https://github.com/daveobat8", "_blank")
              }
            >
              Github
            </button>
            <button
              className="btn btn-color-2 project-btn"
              onClick={() =>
                window.open("https://github.com/daveobat8", "_blank")
              }
            >
              Live Demo
            </button>
          </div>
        </div>
        <div className="details-container color-container">
          <div className="article-container">
            <img src="" alt="project 2" className="project-img" />
          </div>
          <h2 className="experience-sub-title project-title">Project Two</h2>
          <div className="btn-container">
            <button
              className="btn btn-color-2 project-btn"
              onClick={() =>
                window.open("https://github.com/daveobat8", "_blank")
              }
            >
              Github
            </button>
            <button
              className="btn btn-color-2 project-btn"
              onClick={() =>
                window.open("https://github.com/daveobat8", "_blank")
              }
            >
              Live Demo
            </button>
          </div>
        </div>
        <div className="details-container color-container">
          <div className="article-container">
            <img src="" alt="project 3" className="project-img" />
          </div>
          <h2 className="experience-sub-title project-title">Project Three</h2>
          <div className="btn-container">
            <button
              className="btn btn-color-2 project-btn"
              onClick={() =>
                window.open("https://github.com/daveobat8", "_blank")
              }
            >
              Github
            </button>
            <button
              className="btn btn-color-2 project-btn"
              onClick={() =>
                window.open("https://github.com/daveobat8", "_blank")
              }
            >
              Live Demo
            </button>
          </div>
        </div>
        </div>
      </div>
      <img src="/src/assets/arrow.png" alt="arrow" className="icon arrow" onClick={() => (window.location.hash = "#contact")}/> 
    </section>
  );
}

export default Projects;
