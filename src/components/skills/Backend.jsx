import React from 'react';
import BadgeIcon from './Badge';

const Backend = () => {
  return (
    <div className='skills_content'>
      <h3 className="skills_title">Developpeur Backend</h3>

      <div className="skills_box">
        <div className="skills_group">
            <div className="skills_data">
                <BadgeIcon/>
                <div>
                    <h3 className="skills_name">PHP (POO)</h3>
                    <span className="skills_level">Intermedaire</span>
                </div>
            </div>

            <div className="skills_data">
                <BadgeIcon/>
               <div>
                   <h3 className="skills_name">Java (POO)</h3>
                   <span className="skills_level">Intermediare</span>
               </div>
            </div>

            <div className="skills_data">
                 <BadgeIcon/>
                <div>
                    <h3 className="skills_name">Python</h3>
                    <span className="skills_level">Basic</span>
                </div>
             </div>
        </div>

        <div className="skills_group">
            <div className="skills_data">
                <BadgeIcon/>
                <div>
                    <h3 className="skills_name">MySQL</h3>
                    <span className="skills_level">Intermédiaire </span>
                </div>
            </div>

            <div className="skills_data">
                 <BadgeIcon/>
                <div>
                    <h3 className="skills_name">SQL</h3>
                    <span className="skills_level">Intermédiaire</span>
                </div>
             </div>

            <div className="skills_data">
                <BadgeIcon/>
               <div>
                   <h3 className="skills_name">Language C</h3>
                   <span className="skills_level">Basic</span>
               </div>
            </div>
            <div className="skills_data">
                <BadgeIcon/>
               <div>
                   <h3 className="skills_name">FireBase</h3>
                   <span className="skills_level">Basic</span>
               </div>
            </div>

            {/*<div className="skills_data">
                 <BadgeIcon/>
                <div>
                    <h3 className="skills_name">Java</h3>
                    <span className="skills_level">Intermediate</span>
                </div>
             </div>*/}
        </div>
      </div>
    </div>
  );
}

export default Backend;
