import React from 'react';
import About from './components/About';
import AboutMe from './AboutMe';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import ContactForm from './components/ContactForm';

const Home = () => {
  return (
    <section>
      {/* dark:bg-[hsl(260,30%,10%)] */}
      <About></About>
      <AboutMe></AboutMe>
      <Skills></Skills>
      <Education></Education>
      <Projects></Projects>
      <Certificates></Certificates>
      <ContactForm></ContactForm>
    </section>
  );
};

export default Home;