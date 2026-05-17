import { useEffect } from 'react';
import Header from './components/Header/Header.jsx';
import Hero from './components/Hero/Hero.jsx';
import About from './components/About/About.jsx';
import Journey from './components/Journey/Journey.jsx';
import Projects from './components/Projects/Projects.jsx';
import Skills from './components/Skills/Skills.jsx';
import Contact from './components/Contact/Contact.jsx';
import Footer from './components/Footer/Footer.jsx';
import Background from './components/Background/Background.jsx';

const App = () => {
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = Number(entry.target.getAttribute('data-delay') || 0) * 0.1;
            entry.target.style.transitionDelay = `${delay}s`;
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Background />
      <Header />
      <main>
        <Hero />
        <About />
        <Journey />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
