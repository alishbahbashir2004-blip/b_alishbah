import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import International from './components/International';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Research from './components/Research';
import Awards from './components/Awards';
import Extracurricular from './components/Extracurricular';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target;
          if (entry.isIntersecting) {
            el.classList.add('in-view');
          } else {
            el.classList.remove('in-view');
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );

    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach((el) => {
      el.classList.add('in-view');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="app-shell min-h-screen"
      style={{
        backgroundImage: "url('/bg3.jpg')",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: '110% auto',
        backgroundAttachment: 'fixed',
        backgroundColor: '#000000',
      }}
    >
      <Navbar />
      <main>
        <Hero />
        <International />
        <Experience />
        <Skills />
        <Projects />
        <Research />
        <Awards />
        <Extracurricular />
      </main>
      <Footer />
    </div>
  );
}
