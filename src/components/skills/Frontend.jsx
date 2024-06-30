import React from 'react';
import BadgeIcon from './Badge';

const Frontend = () => {
  return (
    <div className='skills_content'>
      <h3 className="skills_title">Developpeur Frontend</h3>

      <div className="skills_box">
        <div className="skills_group">
            <div className="skills_data">
                <BadgeIcon/>
                <div>
                    <h3 className="skills_name">HTML</h3>
                    <span className="skills_level">Intermediaire</span>
                </div>
            </div>

            <div className="skills_data">
                <BadgeIcon/>
               <div>
                   <h3 className="skills_name">CSS</h3>
                   <span className="skills_level">Advanced</span>
               </div>
            </div>

            <div className="skills_data">
                 <BadgeIcon/>
                <div>
                    <h3 className="skills_name">Javascript</h3>
                    <span className="skills_level">Intermediate</span>
                </div>
             </div>
        </div>

        <div className="skills_group">
            <div className="skills_data">
                <BadgeIcon/>
                <div>
                    <h3 className="skills_name">Boostrap</h3>
                    <span className="skills_level">Basic</span>
                </div>
            </div>

            <div className="skills_data">
                <BadgeIcon/>
               <div>
                   <h3 className="skills_name">Git</h3>
                   <span className="skills_level">Basic</span>
               </div>
            </div>

            <div className="skills_data">
                 <BadgeIcon/>
                <div>
                    <h3 className="skills_name">React</h3>
                    <span className="skills_level">Basic</span>
                </div>
             </div>
        </div>
      </div>
    </div>
  );
}

export default Frontend;