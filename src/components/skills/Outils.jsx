import React from 'react'
import BadgeIcon from './Badge'

const Outils = () => {
  return (
<div className='skills_content'>
      <h3 className="skills_title">Outils de développement</h3>

      <div className="skills_box">

        <div className="skills_group">
            <div className="skills_data">
                <BadgeIcon/>
                <div>
                    <h3 className="skills_name">Visual Studio Code</h3>
                    <span className="skills_level">Intermédiaire</span>
                </div>
            </div>

            <div className="skills_data">
                <BadgeIcon/>
                <div>
                    <h3 className="skills_name">IntelliJ</h3>
                    <span className="skills_level">Intermédiaire</span>
                </div>
            </div>

            <div className="skills_data">
                <BadgeIcon/>
               <div>
                   <h3 className="skills_name">Postman</h3>
                   <span className="skills_level">Intermédiaire</span>
               </div>
            </div>
        </div>

        <div className="skills_group">
            <div className="skills_data">
                <BadgeIcon/>
                <div>
                    <h3 className="skills_name">GitHub</h3>
                    <span className="skills_level">Intermédiaire</span>
                </div>
            </div>

            <div className="skills_data">
                <BadgeIcon/>
               <div>
                   <h3 className="skills_name"> XAMPP</h3>
                   <span className="skills_level">Intermédiaire</span>
               </div>
            </div>

            <div className="skills_data">
                <BadgeIcon/>
               <div>
                   <h3 className="skills_name">Versel</h3>
                   <span className="skills_level">Basic</span>
               </div>
            </div>

        </div>

      </div>
    </div>
  )
}

export default Outils;
