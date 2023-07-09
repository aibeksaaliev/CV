import React from 'react';
import {educationList} from "../constants";
import EducationCard from "../components/Cards/EducationCard";

const Education = () => {
    return (
        <div className="education-block">
            <div className="education-block-header">
                <h4>Education</h4>
            </div>
            <div className="education-block-info">
                {educationList.map((education) => {
                    return <EducationCard name={education.name} period={education.period} degree={education.degree} title={education.title}/>
                })}
            </div>
        </div>
    );
};

export default Education;