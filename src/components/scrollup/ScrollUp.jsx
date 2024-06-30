import React from 'react';
import "./scrollup.css"

const ScrollUp = () => {
    window.addEventListener("scroll", function () {
        const scrollUp = document.querySelector(".scrollup");
        //When the scroll is higher than 560 viewport height, add the show-scroll class to a tag with the scroll-top class
        if (this.scrollY >= 560) {
            scrollUp.classList.add("show-scroll");
        }else {
            scrollUp.classList.remove("show-scroll");
        }
    })

  return (
    <a href="#" className="scrollup">
        <svg 
            className='scrollup_icon'
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24">
            <path fill='#fff' d="M11 8.414V18h2V8.414l4.293 4.293 1.414-1.414L12 4.586l-6.707 6.707 1.414 1.414z"/>
        </svg>
    </a>
  );
}

export default ScrollUp;
