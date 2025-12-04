import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Header from '../../Components/Header/Header';
import About from '../AboutPage/AboutPage';
import Workprocess from '../../Components/WorkProcess/Workprocess';
import Portfolio from '../../Components/Portfolio/Portfolio';
import ProjectIdea from '../../Components/PorjectIdea/projectidea';
import Blog from '../../Components/Blog/Blog';
import WhatIDo from '../../Components/WhatIDo/Whatido';
import HappyClients from '../../Components/HappyClients/happyclients';
import Testimonial from '../../Components/Testimonial/Testimonial';
import Contact from '../../Components/Contact/Contact';
import Footer from '../../Components/Footer/Footer';

export default function HomePage(){
  return (
    <div className="home-page">
      <Navbar />
      <Header />
      <main>
        <About />
        <Workprocess />
        <Portfolio />
        <ProjectIdea />
        <Blog />
        <WhatIDo />
        <HappyClients />
        <Testimonial />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
