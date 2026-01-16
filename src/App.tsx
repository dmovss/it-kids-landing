import { useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

import { Header } from './sections/Header';
import { Hero } from './sections/Hero';
import { Method } from './sections/Method'; // Новий імпорт
import { Courses } from './sections/Courses';
import { Reviews } from './sections/Reviews';
import { FAQ } from './sections/FAQ';
import { Footer } from './sections/Footer';

function App() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <div className="bg-[#0f172a] text-white min-h-screen selection:bg-brand-purple selection:text-white overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Method /> {/* Новий блок */}
        <Courses />
        <Reviews />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;