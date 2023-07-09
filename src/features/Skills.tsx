import React from 'react';
import SkillCard from "../components/Cards/SkillCard";
import {languages, frameworksAndLibraries} from "../constants";

const Skills = () => {
    return (
        <div className="skills-block">
            <div className="skills-block-header">
                <h4>Skills</h4>
            </div>
            <div className="skills-block-info">
                <div className="languages-block">
                    <h6>Languages</h6>
                    <div className="skills-sub-block">
                        {languages.map((language, index) => {
                            return <SkillCard key={index} name={language.name} progress={language.progress}/>
                        })}
                    </div>
                </div>
                <div className="frameworks-block">
                    <h6>Libraries/Frameworks</h6>
                    <div className="skills-sub-block">
                        {frameworksAndLibraries.map((framework, index) => {
                            return <SkillCard key={index} name={framework.name} progress={framework.progress}/>
                        })}
                    </div>
                </div>
                <div className="databases-block">
                    <h6>Databases</h6>
                    <div>
                        <h6>NoSQL</h6>
                        <div className="skills-sub-block">
                            <SkillCard name={"MongoDB"} progress={85}/>
                            <SkillCard name={"Firebase"} progress={95}/>
                        </div>
                        <h6>SQL</h6>
                        <div className="skills-sub-block">
                            <SkillCard name={"PostgreSQL"} progress={70}/>
                        </div>
                    </div>
                </div>
                <div className="testing-block">
                    <h6>Testing</h6>
                    <div className="skills-sub-block">
                        <SkillCard name={"Codecept JS"} progress={70}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;