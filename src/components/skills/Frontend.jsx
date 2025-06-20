import React from 'react';
import BadgeIcon from './Badge';

const Frontend = () => {
  return (
    <div className='skills_content'>
      <h3 className="skills_title">Développeur front-end</h3>

      <div className="skills_box">
        <div className="skills_group">
            <div className="skills_data">
                <BadgeIcon/>
                <div>
                    <h3 className="skills_name">HTML</h3>
                    <span className="skills_level">Intermédiaire</span>
                </div>
            </div>

            <div className="skills_data">
                <BadgeIcon/>
               <div>
                   <h3 className="skills_name">CSS</h3>
                   <span className="skills_level">Intermédiaire</span>
               </div>
            </div>

            <div className="skills_data">
                 <BadgeIcon/>
                <div>
                    <h3 className="skills_name">Javascript</h3>
                    <span className="skills_level">Intermédiaire</span>
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
                   <h3 className="skills_name">SASS</h3>
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
