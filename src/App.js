import React, { useState, useEffect, useRef } from 'react';
import { ReactDOM } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import './index.css'

import Nav from './Nav';

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null); 

  const [isActive, setIsActive] = useState(true);
  const [isPhone, setIsPhone] = useState(false);
  const [activeSection, setActiveSection] = useState('home')
  const [screenMode, setScreenMode] = useState('dark'); 

  useEffect(() => {
    const handleScroll = () =>{
      const positions = {
        home: homeRef.current?.offsetTop,
        about: aboutRef.current?.offsetTop,
        projects: projectsRef.current?.offsetTop
      }; 

      const currentScrollPosition = window.scrollY + window.innerHeight/2

      if (currentScrollPosition >= positions.projects) {
        setActiveSection('projects')
      } else if (currentScrollPosition >= positions.about) {
        setActiveSection('about')
      } else {
        setActiveSection('home')
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 750) {
        setIsPhone(true)
      } else {
        setIsPhone(false)
      }
    }

    window.addEventListener('resize', handleResize)
    // return () => window.removeEventListener('resize', handleResize)
  }, [])

  const scrollToSection = (ref) => {
    console.log(ref.current)
    ref.current?.scrollIntoView({behavior: 'smooth'})
  }

  return (
    <div className='parentContainer'>
      <Nav 
        isActive={isActive} 
        isPhone={isPhone}
        screenMode={screenMode}
        activeSection={activeSection}
        onHomeClick={() => scrollToSection(homeRef)}
        onAboutClick={() => scrollToSection(aboutRef)}
        onProjectsClick={() => scrollToSection(projectsRef)}
      /> 
      <div className='subContainer' ref={homeRef}>
      </div>
      <div className='subContainer' ref={aboutRef}>
      </div>
      <div className='subContainer' ref={projectsRef}>
      </div>
      <div className='subContainer' id="experience">
      </div>
    </div>
  );
}

export default App;
library.add(fab, fas, far)