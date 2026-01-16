import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TELEGRAM_LINK } from '../data/content';
import { Menu, X, Zap, Send, Phone } from 'lucide-react';
export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Програма', href: '#courses' },
    { name: 'Метод', href: '#method' },
    { name: 'Відгуки', href: '#reviews' },
    { name: 'FAQ', href: '#faq' }
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 px-4 ${scrolled ? 'py-3' : 'py-6'}`}>
        <div className={`max-w-7xl mx-auto transition-all duration-500 rounded-[2.5rem] flex items-center justify-between px-6 md:px-10 ${scrolled ? 'glass py-3 border-white/20' : 'bg-transparent py-0 border-transparent'}`}>
          
          <div className="flex items-center gap-3">
            <div className="bg-brand-purple p-2 rounded-2xl shadow-lg shadow-brand-purple/20">
              <Zap size={24} className="text-white fill-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-black text-xl md:text-2xl tracking-tighter uppercase leading-none text-white">FUTURE<span className="text-brand-purple">CODE</span></span>
              <span className="text-[9px] font-bold tracking-[0.3em] uppercase opacity-50 text-white">Academy 2026</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            <div className="flex items-center gap-8 font-extrabold text-[11px] uppercase tracking-widest text-slate-300">
              {links.map(link => (
                <a key={link.name} href={link.href} className="hover:text-brand-purple transition-all relative group">
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-brand-purple transition-all group-hover:w-full" />
                </a>
              ))}
            </div>
            <div className="h-8 w-[1px] bg-white/10" />
            <div className="flex items-center gap-4">
               <a href="tel:+38000000000" className="text-white hover:text-brand-yellow transition-colors"><Phone size={18} /></a>
               <a href={TELEGRAM_LINK} className="bg-brand-yellow text-black px-8 py-3 rounded-2xl font-black text-xs uppercase tracking-wider hover:scale-105 active:scale-95 transition-all flex items-center gap-2">
                 <Send size={14} className="fill-black" /> ПРИЄДНАТИСЬ
               </a>
            </div>
          </div>

          {/* Mobile Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden w-12 h-12 flex items-center justify-center bg-white/5 rounded-2xl border border-white/10 text-white">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Fullscreen Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, clipPath: 'circle(0% at 90% 5%)' }}
            animate={{ opacity: 1, clipPath: 'circle(150% at 90% 5%)' }}
            exit={{ opacity: 0, clipPath: 'circle(0% at 90% 5%)' }}
            className="fixed inset-0 z-[95] bg-[#0f172a] flex flex-col items-center justify-center p-10 lg:hidden"
          >
            <div className="flex flex-col gap-8 text-center">
              {links.map((link, i) => (
                <motion.a 
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
                  key={link.name} href={link.href} onClick={() => setIsOpen(false)}
                  className="text-5xl font-black uppercase tracking-tighter hover:text-brand-purple transition-colors text-white"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a 
                initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4 }}
                href={TELEGRAM_LINK} className="mt-10 bg-brand-purple text-white px-10 py-6 rounded-[2rem] text-2xl font-black uppercase shadow-2xl shadow-brand-purple/40"
              >
                ЗАПИСАТИСЬ
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};