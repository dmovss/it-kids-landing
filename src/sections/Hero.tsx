import { motion } from 'framer-motion';
import { Rocket, Sparkles, Target, Zap, MousePointer2 } from 'lucide-react';
import { TELEGRAM_LINK } from '../data/content';
import confetti from 'canvas-confetti';

export const Hero = () => {
  const triggerConfetti = () => {
    confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 }, colors: ['#7B61FF', '#FFD600', '#00A3FF'] });
  };

  return (
    <section className="relative min-h-[110vh] flex flex-col items-center justify-center pt-20 overflow-hidden w-full">
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] pointer-events-none" />
      <motion.div animate={{ rotate: 360 }} transition={{ duration: 50, repeat: Infinity, ease: "linear" }} className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-brand-purple/10 blur-[150px] rounded-full" />
      <motion.div animate={{ rotate: -360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-brand-blue/10 blur-[150px] rounded-full" />

      <div className="max-w-7xl mx-auto text-center z-10 px-6 mt-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-2 rounded-2xl mb-10 shadow-2xl backdrop-blur-md"
        >
          <div className="w-2 h-2 rounded-full bg-brand-yellow animate-ping" />
          <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-brand-yellow">Доступно лише 4 місця на лютий</span>
        </motion.div>

        <h1 className="text-[clamp(2.8rem,11vw,9rem)] leading-[0.82] font-black uppercase mb-10 tracking-tighter text-white">
          МАЙБУТНЄ <br /> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple via-brand-blue to-brand-pink italic">ПИШЕТЬСЯ КОДОМ</span>
        </h1>

        <div className="max-w-3xl mx-auto relative mb-16">
            <p className="text-lg md:text-2xl text-slate-400 font-medium leading-relaxed">
              Твоя дитина перестане просто споживати контент і почне його створювати. Від ігор у Roblox до серйозного софту на Python.
            </p>
            <motion.div className="absolute -top-10 -right-10 opacity-20 rotate-12 hidden lg:block" animate={{ y: [0, 20, 0] }} transition={{ duration: 4, repeat: Infinity }}>
                <MousePointer2 size={60} className="text-brand-purple" />
            </motion.div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          <motion.a
            whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }}
            onClick={triggerConfetti} href={TELEGRAM_LINK} target="_blank"
            className="group relative bg-brand-purple px-16 py-8 rounded-[2.5rem] text-2xl font-black flex items-center justify-center gap-4 text-white overflow-hidden shadow-[0_20px_50px_rgba(123,97,255,0.3)] transition-all"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            ЗАБРОНЮВАТИ УРОК <Rocket size={28} className="group-hover:translate-x-2 transition-transform" />
          </motion.a>
          
          <div className="flex flex-col items-start gap-1">
            <div className="flex -space-x-3">
              {[1,2,3,4,5].map(i => (
                <img key={i} src={`https://i.pravatar.cc/100?img=${i+10}`} className="w-12 h-12 rounded-full border-4 border-[#0f172a] object-cover" />
              ))}
            </div>
            <p className="text-[10px] uppercase font-black tracking-widest text-slate-500 mt-2">Уже приєдналися цього тижня</p>
          </div>
        </div>
      </div>

      <div className="mt-auto w-full border-t border-white/5 bg-white/[0.02] backdrop-blur-sm py-10 overflow-hidden whitespace-nowrap flex">
        <div className="flex gap-20 animate-marquee uppercase font-black text-2xl md:text-4xl italic text-white/10">
          {[...Array(6)].map((_, i) => (
            <span key={i} className="flex items-center gap-8">
              <Zap /> GAME DESIGN <Target /> LOGIC <Sparkles /> MINECRAFT <Rocket /> CREATIVITY
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};