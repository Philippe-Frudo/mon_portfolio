import React from 'react';
import "./skills.css";
import Frontend from './Frontend';
import Backend from './Backend';
import Outils from './Outils';

const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="section_title">Expérience</h2>
        <span className="section_subtitle">Mon niveau téchnique</span>

        <div className="skills_container container grid">
            <Frontend/>
            <Backend/>
            <Outils/>
        </div>
    </section>
  );
}

export default Skills;
