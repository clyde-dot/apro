import React from "react";
import "./ProjectList.css";

import arrowLeft from "./assets/arrow-left.svg";
import arrowRight from "./assets/arrow-right.svg";

function ProjectList() {
  return (
    <div className="main-container">
      <div className="projects">
        <div className="text-pre-title">Best Project of the Years</div>
        <div className="projects-block-controller">
          <div className="text-title">Our recent projects</div>
          <div className="projects-block-controller">
            <buttton className="projects-controller prev">
              <img src={arrowLeft} width="24" height="24" alt="Left" />
            </buttton>
            <buttton className="projects-controller next">
              <img src={arrowRight} width="24" height="24" alt="Right" />
            </buttton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectList;
