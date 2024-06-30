import React from 'react';
import "./skills.css";
import Frontend from './Frontend';
import Backend from './Backend';

const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="section_title">Experience</h2>
        <span className="section_subtitle">Mon niveau technique</span>

        <div className="skills_container container grid">
            <Frontend/>
            <Backend/>
        </div>
    </section>
  );
}

export default Skills;
