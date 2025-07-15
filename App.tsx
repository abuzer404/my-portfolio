import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';
import FloatingParticles from './components/FloatingParticles';
import EducationExperience from './components/EducationExperience';

const App: React.FC = () => {
  return (
    <div className="relative antialiased">
      <AnimatedBackground />
      <FloatingParticles />
      
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Home />
          <About />
          <EducationExperience />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
