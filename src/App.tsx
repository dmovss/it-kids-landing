import { motion } from 'framer-motion';
// Імпортуємо контакти
import { TELEGRAM_LINK } from './data/content'; 

// Імпортуємо секції (Vite автоматично розуміє .tsx, тому розширення писати не обов'язково)
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
      {/* Використовуємо новий інформативний хедер */}
      <Header />

      <main>
        {/* Додаємо id для скролу */}
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

      {/* Використовуємо новий потужний футер */}
      <Footer />
    </motion.div>
  );
}

export default App;