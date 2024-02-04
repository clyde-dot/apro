import React from "react"
import styles from "./ProjectItem.module.css"
import Feedback from "../feedback/Feedback"

function ProjectItem({ data }) {
    return (
        <div className={styles.item}>
            <img
                src={require(`${data.src}`)}
                width={447}
                height={263}
                alt="House"
                className={styles.image}
            />
            <div className={styles.info}>
                <h3 className={styles.title}>{data.title}</h3>
                <p className="projects-item-subtitle">{data.subtitle}</p>
                <div className="projects-item-feedback">
                    <Feedback star={Math.floor(data.rate)} rate={data.rate} />
                </div>
            </div>
        </div>
    )
}

export default ProjectItem
