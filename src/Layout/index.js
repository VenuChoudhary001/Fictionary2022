import React from 'react'
import BG3 from "../Assets/Images/bg3.jpg";
import Header from './Header';
import Career from '../Assets/Sounds/03Career1.mp3';
import Footer from './Footer';
import Navbar from '../Components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
const LAYOUT = ({children}) => {
    return (
      <>
      <audio autoPlay loop>
         <source  src={Career} type='audio/mpeg'/>
      </audio>
        <div className="bg">
          <img src={BG3}  className="bg-1" alt="" />
        </div>
        <section className="main">
          <div class="lines">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
          </div>
          <Router>

          <Navbar/>
          <div className="container">
          <Header />

          {children}
          <Footer/>
          </div>
          </Router>
        </section>
      </>
    );
}

export default LAYOUT