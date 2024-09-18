import React from "react";

function About() {
  return (
    <section id="about">
      <p className="section__text">Get To Know More</p>
      <h1 className="title">About Me</h1>
      <div className="section-container">
        <div className="section__pic-container">
          <img
            src="/src/assets/Dave.jpg"
            alt="profile pic"
            className="about-pic"
          />
        </div>
        <div className="about-details-container">
          <div className="about-containers">
            <div className="details-container">
              <img src="/src/assets/experience.png" alt="experience icon" className="icon" />
              <h3>Experience</h3>
              <p>
                6 months <br /> Software Developer
              </p>
            </div>
            <div className="details-container">
              <img src="/src/assets/education.png" alt="education icon" className="icon" />
              <h3>Education</h3>
              <p>
                B.Sc Civil Engineering <br /> Certificate in Software
                Engineering
              </p>
            </div>
          </div>
          <div className="text-container">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus velit vitae porro nobis tempora corrupti libero
              asperiores delectus incidunt autem a labore sequi obcaecati
              consequuntur atque perferendis cumque ut distinctio, sint, ipsa,
              debitis animi omnis. Sunt error excepturi tempora perspiciatis
              quos modi assumenda voluptatum asperiores ipsum aspernatur!
              Obcaecati, sed qui?
            </p>
          </div>
        </div>
      </div>
      <img src="/src/assets/arrow.png" alt="arrow" className="icon arrow" onClick="go to experience section"/>
    </section>
  );
}

export default About;
