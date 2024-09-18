import React from "react";

function Experience() {
  return (
    <section id="experience">
      <p className="section__text__p1">Explore My</p>
      <h3 className="title">Experience</h3>
      <div className="experience-details-container">
        <div className="about-containers">
          <div className="details-container">
            <h2 className="experience-sub-title">FrontEnd Development</h2>
            <div className="article-container">
              <article>
                <img
                  src="/src/assets/checkmark.png"
                  alt="experience-icon"
                  className="icon"
                />
                <div>
                    <h3>HTML</h3>
                    <p>Experienced</p>
                </div>
              </article>
              <article>
                <img
                  src="/src/assets/checkmark.png"
                  alt="experience-icon"
                  className="icon"
                />
                <div>
                    <h3>CSS</h3>
                    <p>Experienced</p>
                </div>
              </article>
              <article>
                <img
                  src="/src/assets/checkmark.png"
                  alt="experience-icon"
                  className="icon"
                />
                <div>
                    <h3>JAVASCRIPT</h3>
                    <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img
                  src="/src/assets/checkmark.png"
                  alt="experience-icon"
                  className="icon"
                />
                <div>
                    <h3>REACT</h3>
                    <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img
                  src="/src/assets/checkmark.png"
                  alt="experience-icon"
                  className="icon"
                />
                <div>
                    <h3>TAILWIND</h3>
                    <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img
                  src="/src/assets/checkmark.png"
                  alt="experience-icon"
                  className="icon"
                />
                <div>
                    <h3>BOOTSTRAP</h3>
                    <p>Basic</p>
                </div>
              </article>
            </div>
          </div>
          <div className="details-container">
            <h2 className="experience-sub-title">BackEnd Development</h2>
            <div className="article-container">
              <article>
                <img
                  src="/src/assets/checkmark.png"
                  alt="experience-icon"
                  className="icon"
                />
                <div>
                    <h3>PostgreSQL</h3>
                    <p>Basic</p>
                </div>
              </article>
              <article>
                <img
                  src="/src/assets/checkmark.png"
                  alt="experience-icon"
                  className="icon"
                />
                <div>
                    <h3>FLASK</h3>
                    <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img
                  src="/src/assets/checkmark.png"
                  alt="experience-icon"
                  className="icon"
                />
                <div>
                    <h3>PYTHON</h3>
                    <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img
                  src="/src/assets/checkmark.png"
                  alt="experience-icon"
                  className="icon"
                />
                <div>
                    <h3>SQLITE</h3>
                    <p>Intermediate</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
      <img src="/src/assets/arrow.png" alt="arrow" className="icon arrow" onClick={() => (window.location.hash = "#projects")}/>
    </section>
  );
}

export default Experience;
