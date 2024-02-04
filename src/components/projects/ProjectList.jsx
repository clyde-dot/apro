import React from "react"
import "./ProjectList.css"

import arrowLeft from "./assets/arrow-left.svg"
import arrowRight from "./assets/arrow-right.svg"

import ProjectItem from "../generic/project-item/ProjectItem"

const data = [
    {
        src: "./house/house-1.jpg",
        title: "Sobha Hearland II Villas",
        subtitle:
            "Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum.",
        rate: 4.83,
    },
    {
        src: "./house/house-2.jpg",
        title: "Sobha Hearland II Villas",
        subtitle:
            "Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum.",
        rate: 4.95,
    },
    {
        src: "./house/house-3.jpg",
        title: "Sobha Hearland II Villas",
        subtitle:
            "Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum.",
        rate: 4.53,
    },
]

export function ProjectList() {
    return (
        <div className="main-container">
            <div className="projects">
                <div className="single-text">Best Project of the Years</div>
                <div className="projects-block-controller">
                    <div className="text-title">Our recent projects</div>
                    <div className="projects-block-controller">
                        <buttton className="projects-controller prev">
                            <img
                                src={arrowLeft}
                                width="24"
                                height="24"
                                alt="Left"
                            />
                        </buttton>
                        <buttton className="projects-controller next">
                            <img
                                src={arrowRight}
                                width="24"
                                height="24"
                                alt="Right"
                            />
                        </buttton>
                    </div>
                </div>
                <div className="projects-list">
                    {data.map((item, index) => (
                        <ProjectItem key={index} data={item} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProjectList
