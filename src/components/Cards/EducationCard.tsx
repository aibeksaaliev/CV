import React from 'react';

interface Props {
    name: string;
    period: string;
    degree: string;
    title: string;
}

const EducationCard: React.FC<Props> = ({name, period, degree, title}) => {
    return (
        <div className="education-card">
            <h5>{name}</h5>
            <b>{degree} - {title}</b>
            <span>{period}</span>
        </div>
    );
};

export default EducationCard;