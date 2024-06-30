import React, { useState } from 'react';
import "./header.css";


const Header = () => {
    /* ========== Change Bg Header ========== */
    window.addEventListener("scroll", function () { 
        const header = document.querySelector(".header");
        //When the scroll is higher than 200 viewport height, add the   scroll-header class to a tag with the header
        if (this.scrollY >= 80) {
            header.classList.add("scroll-header");
        }else {
            header.classList.remove("scroll-header");
        }
    })
 
    /* ========== Toggle Menu ========== */
     const [Toggle, showMenu] = useState(false);
     const [activeNav, setActiveNav] = useState("#home");


  return (
    <header className='header'>
        <nav className="nav container">
            <a href="index.html" className="nav_logo">Frudo</a>

            <div className={Toggle ? "nav_menu show-menu": "nav_menu" }>
                <ul className="nav_list grid">
                    <li className="nav_item">
                        <a href="#home" onClick={() => setActiveNav("#home") } className={ activeNav === "#home" ? "nav_link active-link": "nav_link" }>
                            <i className="uil uil-estate nav_icon"></i>
                            Acceiul
                        </a>
                    </li>

                    <li className="nav_item">
                        <a href="#about" onClick={ () => setActiveNav("#about") } className={ activeNav === "#about" ? "nav_link active-link": "nav_link" }>
                            <i className="uil uil-user nav_icon"></i>
                             A propos
                        </a>
                    </li>

                    <li className="nav_item">
                        <a href="#skills" onClick={ () => setActiveNav("#skills") } className={ activeNav === "#skills" ? "nav_link active-link":"nav_link" } >
                            <i className="uil uil-file-alt nav_icon"></i>
                             Competences
                        </a>
                    </li>

                    <li className="nav_item">
                        <a href="#services" onClick={ () => setActiveNav("#services") } className={ activeNav === "#services" ? "nav_link active-link":"nav_link" } >
                            <i className="uil uil-briefcase-alt nav_icon"></i>
                            Services
                        </a>
                    </li>

                    <li className="nav_item">
                        <a href="#portfolio" onClick={ () => setActiveNav("#portfolio") } className={ activeNav === "#portfolio" ? "nav_link active-link":"nav_link" } >
                            <i className="uil uil-scenery nav_icon"></i>
                            Portfolio
                        </a>
                    </li>

                    <li className="nav_item">
                        <a href="#contact" onClick={ () => setActiveNav("#contact") } className={ activeNav === "#contact" ? "nav_link active-link":"nav_link" } >
                            <i className="uil uil-message nav_icon"></i>
                            Contact
                        </a>
                    </li>
                </ul>
                
                <svg 
                    onClick={() => showMenu(!Toggle) }
                    className='nav_close'
                    xmlns="http://www.w3.org/2000/svg" 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24">
                        <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"/>
                </svg>

            </div>  
             <div className="nav_toggle" onClick={() => showMenu(!Toggle) }>
                <svg
                    className='nav_icon'
                    xmlns="http://www.w3.org/2000/svg" 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24">
                    <path d="M4 6h2v2H4zm0 5h2v2H4zm0 5h2v2H4zm16-8V6H8.023v2H18.8zM8 11h12v2H8zm0 5h12v2H8z"/>
                </svg>
                
             </div>
        </nav>
    </header>
  );
}

export default Header;
