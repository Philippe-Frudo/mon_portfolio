import React from 'react';
import "./portfolio.css";
import Data from "./Data.ts";
import ArrowRightIcon from "./ArrowRightIcon.jsx";

const Portfolio = () => {
  return (
    <section className="portfolio container section" id='portfolio'>
         <h2 className="section_title">Portfolio</h2>
         <span className="section_subtitle">Mon portfolio</span>
         
         <div className="portfolio_container">
            {Data.map( ({id, image, title, description, linkGit, linkProject }) => {
                return (
                    <div 
                    className="portfolio_card" 
                    key={id}>
                        <img src={image} alt={title} className='portfolio_img'/>

                        <h3 className="portfolio_name">{title}</h3>
                        <p className="portfolio_description">{description}</p>

                     { linkProject.trim() && 
                        <a href={linkProject} target="_blink" className="portfolio_button"> Teste
                        <ArrowRightIcon/>
                        </a>
                      }
                      
                      { linkGit.trim() && 
                         <a href={linkGit} target="_blink" className="portfolio_button"> Source sur GitHub
                         <ArrowRightIcon/>
                         </a>
                      }
                    </div>
                )
            })}
         </div>
    </section>
  );
}

export default Portfolio;
