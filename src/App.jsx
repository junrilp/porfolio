import React from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import { profile } from './data/profile.js';

function App() {
  const scrollToSection = (sectionId) => {
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen overflow-hidden bg-surface text-textBase">
      <div className="site-background" aria-hidden="true" />
      <Header brand={profile.name} onScrollTo={scrollToSection} />
      <main>
        <Hero data={profile} onScrollTo={scrollToSection} />
        <About data={profile} />
        <Projects data={profile} />
        <Contact data={profile.contact} />
      </main>
      <footer className="relative z-10 border-t border-white/10 bg-surface/85 py-6 text-center text-sm text-textMuted backdrop-blur-xl">
        <div className="container">{profile.footer}</div>
      </footer>
    </div>
  );
}

export default App;
