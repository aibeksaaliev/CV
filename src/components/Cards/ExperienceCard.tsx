import React from 'react';

interface Props {
    project: string;
    description: string;
    technologies: string[];
}

const ExperienceCard: React.FC<Props> = ({project, description, technologies}) => {
    return (
        <div className="experience-card">
            <div className="experience-card-header">
                <h6>{project}</h6>
            </div>
            <div className="experience-card-info">
                <div className="experience-description">
                    <p>{description}</p>
                </div>
                <div className="experience-technologies">
                    <h6>Technologies</h6>
                    <ul>
                        {technologies.map((tech, i) => {
                            return <li key={i}>{tech}</li>
                        })}
                    </ul>
                </div>
                <div className="experience-screenshots">

                </div>
                <div className="experience-links">

                </div>
            </div>
        </div>
    );
};

export default ExperienceCard;