import React, { useState } from 'react';
import CalendarIcon from "./CalendarIcon";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
     setToggleState(index);
  }

  return (
    <section className="qualification section">
        <h2 className="section_title">Qualification</h2>
        <span className="section_subtitle">Mon parcours personnel</span>

        <div className="qualification_container container">
          <div className="qualification_tabs">
            <div className={
              toggleState === 1 ? 
              "qualification_button qualification_active button-flex" : "qualification_button button-flex"
              }
              onClick={ () => toggleTab(1)}
              >
              <svg style={ {marginRight: "0.3rem"} } xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24">
                <path d="M2 7v1l11 4 9-4V7L11 4z"/>
                <path d="M4 11v4.267c0 1.621 4.001 3.893 9 3.734 4-.126 6.586-1.972 7-3.467.024-.089.037-.178.037-.268V11L13 14l-5-1.667v3.213l-1-.364V12l-3-1z"/>
              </svg>
              Education
            </div>

            <div className={
                toggleState === 2 ? 
                "qualification_button qualification_active button-flex" : 
                "qualification_button button-flex"
            }
            onClick={ () => toggleTab(2)}
            >
              <svg 
                style={ {marginRight: "0.3rem"} }
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24"
                >
                 <path d="M20 6h-3V4c0-1.103-.897-2-2-2H9c-1.103 0-2 .897-2 2v2H4c-1.103 0-2 .897-2 2v4h5v-2h2v2h6v-2h2v2h5V8c0-1.103-.897-2-2-2zM9 4h6v2H9V4zm8 11h-2v-2H9v2H7v-2H2v6c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-6h-5v2z"/>
               </svg>
               Expérience
             </div>
          </div>

          <div className="qualification_sections">
              <div className={
                toggleState === 1 ? 
                "qualification_content qualification_content-active" : 
                "qualification_content"
              }>
              <div className="qualification_data">
                <div>
                  <h3 className="qualification_title">Creation de cite vitrine</h3>
                  <span className="qualification_subtitle">EMIT Fianarnatsoa </span>
                  <div className="qualification_calendar">
                    <CalendarIcon/>2023 jusq'à aujourd'huit
                  </div>
                </div>

                <div>
                  <span className="qualification_rounder"></span>
                  <span className="qualification_line"></span>
                </div>
              </div>

              <div className="qualification_data">
                <div></div>

                <div>
                   <span className="qualification_rounder"></span>
                   <span className="qualification_line"></span>
                 </div>
                <div>
                  <h3 className="qualification_title">Système de routage réseau.</h3>
                  <span className="qualification_subtitle">EMIT Fianrantsoa </span>
                  <div className="qualification_calendar">
                    <CalendarIcon/>
                    2024 à present
                  </div>
                </div>
              </div>

              <div className="qualification_data">
                 <div>
                   <h3 className="qualification_title">Développeur web.</h3>
                   <span className="qualification_subtitle">Ecole EMIT Fianarantsoa</span>
                   <div className="qualification_calendar">
                     <CalendarIcon/>début 2024
                   </div>
                 </div>
                 <div>
                   <span className="qualification_rounder"></span>
                   <span className="qualification_line"></span>
                 </div>
               </div>

               <div className="qualification_data">
                 <div></div>

                 <div>
                    <span className="qualification_rounder"></span>
                    <span className="qualification_line"></span>
                  </div> 
                 <div>
                   <h3 className="qualification_title">Maintenaince informatique.</h3>
                   <span className="qualification_subtitle">Fiary'Soft Fianarantsoa</span>
                   <div className="qualification_calendar">
                     <CalendarIcon/>
                     2023 - 2024
                   </div>
                 </div>
               </div>
            </div>


            <div className={
                toggleState === 2 ? 
                "qualification_content qualification_content-active" : 
                "qualification_content"
              }>
              <div className="qualification_data">
                <div>
                  <h3 className="qualification_title">Conception de projet</h3>
                  <span className="qualification_subtitle"></span>
                  <div className="qualification_calendar">
                    <CalendarIcon/>
                    2024 - a present
                  </div>
                </div>
                <div>
                  <span className="qualification_rounder"></span>
                  <span className="qualification_line"></span>
                </div>
              </div>

              <div className="qualification_data">
                <div></div>
                <div>
                   <span className="qualification_rounder"></span>
                   <span className="qualification_line"></span>
                 </div>
                <div>
                  <h3 className="qualification_title">Informatique <br />bureautique</h3>
                  <span className="qualification_subtitle">Madvision <br /> Farafangana </span>
                  <div className="qualification_calendar">
                    <CalendarIcon/>
                    2022
                  </div>
                </div>
              </div>

              <div className="qualification_data">
                 <div>
                   <h3 className="qualification_title">Concepteur Web</h3>
                   <span className="qualification_subtitle">Figma - Madagascar</span>
                   <div className="qualification_calendar">
                     <CalendarIcon/>
                     2024
                   </div>
                 </div>
                 <div>
                   <span className="qualification_rounder"></span>
                   <span className="qualification_line"></span>
                 </div>
               </div>
            </div>
          </div>
        </div>
    </section>
  );
}

export default Qualification;
