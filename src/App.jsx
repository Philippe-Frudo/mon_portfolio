import React from 'react';
import "./index.css";
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Portfolio from './components/portfolio/Portfolio';
import Qualification from './components/quantification/Qualification';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';

const App = () => {
  return (
    <div>
      <Header/>

      <main className="main">
        <Home/>
        <About/>
        <Skills/>
        <Portfolio/>
        <Qualification/>
        <Contact/>
        <Footer/>
        <ScrollUp/>
      </main>
    </div>
  );
}

export default App;
