import React from 'react';

const Info = () => {
  return (
    <div className='about_info grid'>

      <div className="about_box">
        <svg 
          className="about_icon"
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24">
            <path d="M20 6h-3V4c0-1.103-.897-2-2-2H9c-1.103 0-2 .897-2 2v2H4c-1.103 0-2 .897-2 2v11c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V8c0-1.103-.897-2-2-2zm-4 2v11H8V8h8zm-1-4v2H9V4h6zM4 8h2v11H4V8zm14 11V8h2l.001 11H18z"/>
        </svg>

        <h3 className="about_title">Complet</h3>
        <span className="about_subtitle">1 projet</span>
      </div>

      <div className="about_box">
        <svg 
          className="about_icon"
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24">
            <path d="M12 2C6.486 2 2 6.486 2 12v4.143C2 17.167 2.897 18 4 18h1a1 1 0 0 0 1-1v-5.143a1 1 0 0 0-1-1h-.908C4.648 6.987 7.978 4 12 4s7.352 2.987 7.908 6.857H19a1 1 0 0 0-1 1V18c0 1.103-.897 2-2 2h-2v-1h-4v3h6c2.206 0 4-1.794 4-4 1.103 0 2-.833 2-1.857V12c0-5.514-4.486-10-10-10z"/>
        </svg>

        <h3 className="about_title">Support</h3>
        <span className="about_subtitle">En ligne 1</span>
      </div>
      
    </div>
  );
}

export default Info;
