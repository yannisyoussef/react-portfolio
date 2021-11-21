import React from "react";
import Header from "../components/Header";
import projectsdata from "./projectsdata";
function Courses() {
  return (
    <div>
      <Header />
      <div
        className="courses-intro"
        style={{ backgroundImage: `url('./courses.svg')` }}
      >
        <div className="courses-intro-content">
          <h1>Yannis PROJECTS</h1>

          <div>
            <p>
              “Good ideas are not adopted automatically. They must be driven
               into practice with courageous patience.”
            </p>

            <button className="primary-button"><a href="#projects-list">GET STARTED</a></button>
          </div>
        </div>
      </div>

      <div className="why-shey-parent">
        <div className="why-shey n-box1 flex-with-center">
          <h1>Why Yannis?</h1>
          <div className="why-shey-content">
            <p>Simple..</p>

            <p>I know how to kiss..</p>

            <p>No No No....Not that kiss</p>

            <p>I know how to</p>

            <p>Keep It Straight , Simple</p>
          </div>
        </div>
      </div>

      <div className="container projects-list" id='projects-list'>

          <h3 className="font-bold">Have a look on my projects</h3>
          <hr />

          <div className="row">

              {projectsdata.map(project=>{
                  return <div className="col-md-4">
                      <div className="position-relative project">
                          <img src={project.image} alt="" />
                          <div className="project-content">
                              <h3>{project.title}</h3>
                              <hr />
                              <p>{project.description}</p>
                              <button className='primary-button'>DEMO</button>
                          </div>
                      </div>
                  </div>
              })}

          </div>

      </div>
    </div>
  );
}

export default Courses;
