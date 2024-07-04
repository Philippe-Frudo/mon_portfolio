import React from 'react';
import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer_container footer">
            <h1 className="footer_title">LAINANTENAINA Frudo</h1>

            <ul className="footer_list">
                <li>
                    <a href="#about" className="footer_link">A propos</a>
                </li>

                <li>
                    <a href="#porfolio" className="footer_link">Project</a>
                </li>

                <li>
                    <a href="#services" className="footer_link">Services</a>
                </li>
            </ul>

            <div className="footer_social">
                <a href="https://www.facebook.com/L.P.N.Frudo" className="footer_social-link" target="_blink">
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="24" 
                        height="24" 
                        viewBox="0 0 24 24"
                        >
                        <path fill='#fff' d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h8.615v-6.96h-2.338v-2.725h2.338v-2c0-2.325 1.42-3.592 3.5-3.592.699-.002 1.399.034 2.095.107v2.42h-1.435c-1.128 0-1.348.538-1.348 1.325v1.735h2.697l-.35 2.725h-2.348V21H20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1z"/>
                    </svg>
                </a>

                <a href="www.linkedin.com/in/p-n-frudo-lainatenaina-1a4765312" className="footer_social-link" target="_blink">
                   <svg xmlns="http://www.w3.org/2000/svg"
                   width="24" 
                   height="24" 
                   viewBox="0 0 24 24">
                   <path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.339 18.337H5.667v-8.59h2.672v8.59zM7.003 8.574a1.548 1.548 0 1 1 0-3.096 1.548 1.548 0 0 1 0 3.096zm11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387 2.704 0 3.203 1.778 3.203 4.092v4.71z"
                   fill='#fff'/>
                 </svg>
                 </a>
                 
            </div>

            <span className="footer_copy">&#169; L.P.N.Ffrudo. Tous droit de copie résérvés</span>
        </div>
    </footer>
  );
}

export default Footer;
