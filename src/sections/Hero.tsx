import { motion } from 'framer-motion';
import { Rocket, Gamepad2, Code2, Sparkles } from 'lucide-react';
import { TELEGRAM_LINK } from '../data/content';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-start justify-center px-6 mesh-gradient pt-32 md:pt-48 overflow-hidden">
      {/* Floating Elements - приховаємо на зовсім маленьких екранах, щоб не заважали тексту */}
      <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute top-40 left-[5%] opacity-20 text-brand-purple hidden sm:block">
        <Gamepad2 size={60} />
      </motion.div>
      <motion.div animate={{ y: [0, 20, 0] }} transition={{ duration: 5, repeat: Infinity, delay: 1 }} className="absolute bottom-40 right-[5%] opacity-20 text-brand-pink hidden sm:block">
        <Code2 size={60} />
      </motion.div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div 
          initial={{ scale: 0 }} animate={{ scale: 1 }}
          className="bg-brand-yellow text-black font-black px-4 py-2 rounded-xl inline-flex items-center gap-2 mb-6 md:mb-8 rotate-[-2deg] shadow-[4px_4px_0px_#000] text-sm md:text-base"
        >
          <Sparkles size={18} /> НОВИЙ НАБІР 2026
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
          className="text-4xl sm:text-6xl md:text-8xl font-black mb-6 md:mb-8 leading-[1.1] tracking-tight text-white"
        >
          СТАНЬ <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-pink">IT-ГЕНІЄМ</span> <br /> ВЖЕ ЗАРАЗ!
        </motion.h1>

        <p className="text-base md:text-2xl text-slate-300 mb-8 md:mb-12 max-w-2xl mx-auto font-medium px-4">
          Ми не вчимо теорії — ми робимо ігри, сайти та майбутнє. 
          <span className="text-white font-bold block mt-2 underline decoration-brand-purple decoration-2">Отримай перевагу, якої немає у 99% твоїх однолітків.</span>
        </p>

        <div className="flex flex-col gap-4 md:gap-6 justify-center items-center">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={TELEGRAM_LINK}
            target="_blank"
            rel="noreferrer"
            className="w-full max-w-sm bg-brand-purple px-10 py-5 md:py-6 rounded-3xl text-xl md:text-2xl font-black shadow-[0_10px_40px_rgba(123,97,255,0.4)] flex items-center justify-center gap-3 text-white"
          >
            ХОЧУ В IT <Rocket />
          </motion.a>
          
          <div className="glass w-full max-w-sm px-8 py-5 md:py-6 rounded-3xl flex flex-col justify-center border border-white/10">
            <span className="text-brand-yellow font-black text-2xl md:text-3xl">100+</span>
            <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] opacity-60 text-white font-bold">Створених ігор</span>
          </div>
        </div>
      </div>
    </section>
  );
};