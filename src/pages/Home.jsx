import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Gallery from '../components/Gallery';
import Craftsmanship from '../components/Craftsmanship';
import Heritage from '../components/Heritage';
import CuratedSets from '../components/CuratedSets';
import Consultation from '../components/Consultation';
import Footer from '../components/Footer';
import Lenis from '@studio-freight/lenis';

const Home = () => {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    const handleScroll = () => {
      const reveals = document.querySelectorAll('.scroll-reveal');
      reveals.forEach(reveal => {
        const windowHeight = window.innerHeight;
        const revealTop = reveal.getBoundingClientRect().top;
        const revealPoint = 100;
        if (revealTop < windowHeight - revealPoint) {
          reveal.classList.add('active');
          if (reveal.classList.contains('shimmer-gold')) {
            reveal.classList.add('heading-shimmer-active');
          }
        }
      });

      const parallaxes = document.querySelectorAll('[data-parallax-speed]');
      parallaxes.forEach(el => {
        const speed = el.getAttribute('data-parallax-speed');
        const rect = el.getBoundingClientRect();
        const offset = (window.innerHeight / 2 - rect.top) * speed;
        el.style.transform = `translateY(${offset}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger once on load
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative flex min-h-screen w-full flex-col font-display text-slate-900 dark:text-slate-100 bg-background-light dark:bg-background-dark">
      <Navbar />
      <Hero />
      <Gallery />
      <Craftsmanship />
      <Heritage />
      <CuratedSets />
      <Consultation />
      <Footer />
    </div>
  );
};

export default Home;
