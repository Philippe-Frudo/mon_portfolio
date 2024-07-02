import React from 'react';
import Social from "./Social";

const Data = () => {
  return (
    <div className='home_data'>
      <h1 className="home_title">Philippe Frudo
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="36" 
          height="36" 
          viewBox="0 0 24 24"
          fill= "none"
          className="home_hand"
          >
          <path d="M20.5 5A1.5 1.5 0 0 0 19 6.5V11h-1V4.5a1.5 1.5 0 0 0-3 0V11h-1V3.5a1.5 1.5 0 0 0-3 0V11h-1V5.5a1.5 1.5 0 0 0-3 0v10.81l-2.22-3.6a1.5 1.5 0 0 0-2.56 1.58l3.31 5.34A5 5 0 0 0 9.78 22H17a5 5 0 0 0 5-5V6.5A1.5 1.5 0 0 0 20.5 5z"
          fill="#FFDD67"
          />
        </svg>

      </h1>
      <h3 className="home_subtitle">Développeur React/PHP</h3>
      <p className='home_description'> 
      Passionné par le développement d’application et gestion de données.
      </p>
        <Social />
      <a href="#contact" className="button button-flex">
        Contactez-moi
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24"
          fill="none"
          className="button_icon"
          >
          <path d="m21.426 11.095-17-8A.999.999 0 0 0 3.03 4.242L4.969 12 3.03 19.758a.998.998 0 0 0 1.396 1.147l17-8a1 1 0 0 0 0-1.81zM5.481 18.197l.839-3.357L12 12 6.32 9.16l-.839-3.357L18.651 12l-13.17 6.197z"
          fill="#fff"
          />
        </svg>
      </a>
    </div>
  );
}

export default Data;
