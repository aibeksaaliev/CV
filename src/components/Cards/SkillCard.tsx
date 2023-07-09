import React from 'react';

interface Props {
    name: string;
    progress: number;
}

const SkillCard: React.FC<Props> = ({name, progress}) => {
    return (
        <div className="skill-card">
            <span>{name}</span>
            <div className="progress-bar">
                <progress value={progress} max={100}>{progress}</progress>
            </div>
        </div>
    );
};

export default SkillCard;