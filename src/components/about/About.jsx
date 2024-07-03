import React from 'react';
import "./about.css"
import AboutImg from "./../../assets/about.jpg";
import CV from "./../../assets/Mon_CV.pdf";
import Info from './Info';


const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section_title">A propos de moi</h2>
      <span className="section_subtitle" >
        Mon introduction
      </span>

      <div className="about_container container grid">
        <img src={AboutImg} alt="Mon_CV" className="about_img" />

        <div className="about_data">
          <Info/>
          <p className="about_description">
          Dynamique étudiant en deuxième année de licence informatique à l’université   de l’Ecole Management d’Innovation Technologique (EMIT) Fianarantsoa. Passionné par la technologie et la création de solutions innovants. Avec une forte capacité d’adaptation et un esprit d’équipe développé. Je cherche un stage ou je pourrais appliquer mes compétences techniques tout en enrichissant mes connaissances pratiques dans un environnement stimulant.
          </p>

          <a download="" href={CV} className="button button-flex">
              Télécharger mon CV
            <svg  
              className="button_icon"
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24"
              fill="none"
              >
              <path d="M12.186 14.552c-.617 0-.977.587-.977 1.373 0 .791.371 1.35.983 1.35.617 0 .971-.588.971-1.374 0-.726-.348-1.349-.977-1.349z"
              fill="var(--container-color)"/>
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zM9.155 17.454c-.426.354-1.073.521-1.864.521-.475 0-.81-.03-1.038-.06v-3.971a8.16 8.16 0 0 1 1.235-.083c.768 0 1.266.138 1.655.432.42.312.684.81.684 1.522 0 .775-.282 1.309-.672 1.639zm2.99.546c-1.2 0-1.901-.906-1.901-2.058 0-1.211.773-2.116 1.967-2.116 1.241 0 1.919.929 1.919 2.045-.001 1.325-.805 2.129-1.985 2.129zm4.655-.762c.275 0 .581-.061.762-.132l.138.713c-.168.084-.546.174-1.037.174-1.397 0-2.117-.869-2.117-2.021 0-1.379.983-2.146 2.207-2.146.474 0 .833.096.995.18l-.186.726a1.979 1.979 0 0 0-.768-.15c-.726 0-1.29.438-1.29 1.338 0 .809.48 1.318 1.296 1.318zM14 9h-1V4l5 5h-4z"
              fill="var(--container-color)"/>
              <path d="M7.584 14.563c-.203 0-.335.018-.413.036v2.645c.078.018.204.018.317.018.828.006 1.367-.449 1.367-1.415.006-.84-.485-1.284-1.271-1.284z"
              fill="var(--container-color)"/>
            </svg>
            
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
