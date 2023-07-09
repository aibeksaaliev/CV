import React from 'react';
import ExperienceCard from "../components/Cards/ExperienceCard";
import {projects} from "../constants";

const Experience = () => {
    return (
        <div className="experience-block">
            <div className="experience-block-header">
                <h4>Experience</h4>
            </div>
            <div className="experience-block-info">
                {projects.map((project, index) => {
                    return <ExperienceCard key={index} project={project.project} description={project.description} technologies={project.technologies}/>
                })}
            </div>
        </div>
    );
};

export default Experience;