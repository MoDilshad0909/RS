import React from 'react';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Founder from '../components/sections/Founder';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import Academics from '../components/sections/Academics';
import Facilities from '../components/sections/Facilities';
import Gallery from '../components/sections/Gallery';
import Events from '../components/sections/Events';
import FeeStructure from '../components/sections/FeeStructure';
import Admission from '../components/sections/Admission';
import AdmissionBanner from '../components/sections/AdmissionBanner';
import FAQ from '../components/sections/FAQ';
import Contact from '../components/sections/Contact';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Founder />
      <WhyChooseUs />
      <Academics />
      <Facilities />
      <Gallery />
      <Events />
      <FeeStructure />
      <Admission />
      <AdmissionBanner />
      <FAQ />
      <Contact />
    </>
  );
};

export default Home;
