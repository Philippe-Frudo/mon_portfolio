import React from 'react';

const ScrollDown = () => {
  return (
    <div className='home_scroll'>
      <a href="#about" className="home_scroll-botton"> 
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="32" 
            height="32" 
            viewBox="0 0 24 24"
            fill="none"
            style={ {
                fillRule: "evenodd",
                clipRule: "evenodd",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeMiterlimit: "1.5",
            }}>
            <path 
              id='mouse' 
              fill='var(--title-color)'
              d="M11.975 22H12c3.859 0 7-3.14 7-7V9c0-3.841-3.127-6.974-6.981-7h-.06C8.119 2.022 5 5.157 5 9v6c0 3.86 3.129 7 6.975 7zM7 9a5.007 5.007 0 0 1 4.985-5C14.75 4.006 17 6.249 17 9v6c0 2.757-2.243 5-5 5h-.025C9.186 20 7 17.804 7 15V9z"
              />
            <path className='wheel'
              fill='var(--title-color)'
             d="M11 6h2v6h-2z"
              />
        </svg>
        <span className='home_croll-name'>defile vers le bas</span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24"
            className="home_croll-arrow"
            >
            <path d="m18.707 12.707-1.414-1.414L13 15.586V6h-2v9.586l-4.293-4.293-1.414 1.414L12 19.414z"/>
          </svg>
      </a>
      
    </div>
  );
}

export default ScrollDown;
