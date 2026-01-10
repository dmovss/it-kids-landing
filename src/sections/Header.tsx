import { motion } from 'framer-motion';
import { TELEGRAM_LINK } from '../data/content';
import { Send, Menu, Globe, Zap } from 'lucide-react';

export const Header = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-[100] px-4 py-4 md:py-6">
      <div className="max-w-7xl mx-auto glass rounded-[2rem] px-6 md:px-10 py-4 flex items-center justify-between border border-white/10 shadow-2xl bg-white/5 backdrop-blur-xl">
        
        {/* Logo / Бренд */}
        <div className="flex items-center gap-3 group cursor-pointer">
          <motion.div 
            whileHover={{ rotate: 180 }}
            className="bg-gradient-to-br from-brand-purple to-brand-pink p-2 rounded-xl shadow-lg shadow-brand-purple/20"
          >
            <Zap size={24} className="text-white fill-white" />
          </motion.div>
          <div className="flex flex-col">
            <span className="font-black text-xl md:text-2xl leading-none tracking-tighter text-white">
              FUTURE<span className="text-brand-purple">CODE</span>
            </span>
            <span className="text-[10px] font-bold text-brand-yellow tracking-[0.2em] uppercase">
              Junior Academy
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-10 font-black text-[11px] uppercase tracking-[0.15em]">
          <a href="#courses" className="text-white hover:text-brand-yellow transition-colors relative group">
            Курси
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-brand-yellow transition-all group-hover:w-full"></span>
          </a>
          <a href="#reviews" className="text-white hover:text-brand-yellow transition-colors relative group">
            Відгуки
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-brand-yellow transition-all group-hover:w-full"></span>
          </a>
          <a href="#about" className="text-white hover:text-brand-yellow transition-colors relative group">
            Про нас
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-brand-yellow transition-all group-hover:w-full"></span>
          </a>
          
          <div className="h-6 w-[1px] bg-white/10 mx-2"></div>
          
          <div className="flex items-center gap-2 text-brand-blue cursor-help">
            <Globe size={16} />
            <span>UA</span>
          </div>
        </div>

        {/* Кнопка дії */}
        <div className="flex items-center gap-3">
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={TELEGRAM_LINK}
            target="_blank"
            rel="noreferrer"
            className="bg-brand-yellow text-black px-5 md:px-8 py-3 rounded-2xl font-black text-xs md:text-sm flex items-center gap-2 shadow-[0_5px_20px_rgba(255,214,0,0.3)] hover:shadow-brand-yellow/50 transition-all uppercase"
          >
            <Send size={18} className="fill-black" /> 
            <span className="hidden sm:inline italic">Спробувати безкоштовно</span>
            <span className="sm:hidden italic font-black">Старт</span>
          </motion.a>
          
          {/* Mobile Menu Button */}
          <button className="lg:hidden p-3 bg-white/5 rounded-2xl text-white hover:bg-white/10 transition-colors">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </nav>
  );
};