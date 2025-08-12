import React from 'react';
import About from './components/About';
import AboutMe from './AboutMe';
import Skills from './components/Skills';
import Education from './components/Education';
import ContactForm from './components/ContactForm';
import Projects from './components/Projects';

const Home = () => {
  return (
    <div>
      {/* dark:bg-[hsl(260,30%,10%)] */}
      <About></About>
      <AboutMe></AboutMe>
      <Skills></Skills>
      <Education></Education>
      <Projects></Projects>
      <ContactForm></ContactForm>
    </div>
  );
};

export default Home;