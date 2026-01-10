import { motion } from 'framer-motion';
import { Header } from './sections/Header';
import { Hero } from './sections/Hero';
import { Courses } from './sections/Courses';
import { Reviews } from './sections/Reviews';
import { Footer } from './sections/Footer';

function App() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-[#0f172a] text-white"
    >
      <Header />

      <main>
        <section id="hero">
          <Hero />
        </section>
        
        <section id="courses">
          <Courses />
        </section>
        
        <section id="reviews">
          <Reviews />
        </section>
      </main>

      <Footer />
    </motion.div>
  );
}

export default App;