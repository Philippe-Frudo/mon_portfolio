import React from 'react';
import "./home.css";
import Data from './Data';
import ScrollDown from './ScrollDown';

const Home = () => {
  return (
    <section className='home section' id='home'>
      <div className="home_container container grid">
        <div className="home_content grid">

            <div className="home_img"></div>

            <Data/>
        </div>

        <ScrollDown/>
      </div>
    </section>
  );
}

export default Home;
