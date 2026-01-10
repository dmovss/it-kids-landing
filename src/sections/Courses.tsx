import { COURSES, TELEGRAM_LINK } from '../data/content';
import { motion } from 'framer-motion';
import { Rocket, Star, ChevronRight } from 'lucide-react';

export const Courses = () => {
  return (
    <section id="courses" className="py-32 px-6 relative overflow-hidden">
      {/* Декоративне сяйво на фоні */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-purple/10 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black mb-6 tracking-tighter"
          >
            ОБЕРИ СВІЙ <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow to-brand-pink underline decoration-brand-purple/30">ШЛЯХ</span>
          </motion.h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto font-medium">
            Кожен курс — це захоплююча пригода, де дитина створює власні світи та вчиться логіці майбутнього.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {COURSES.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              {/* Ефект світіння при наведенні */}
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-purple via-brand-pink to-brand-blue rounded-[3rem] blur opacity-20 group-hover:opacity-100 transition duration-500" />
              
              <div className="relative bg-[#0f172a] rounded-[2.8rem] p-10 border border-white/10 h-full flex flex-col">
                <div className="flex justify-between items-start mb-8">
                  <div className="text-6xl group-hover:scale-110 transition-transform duration-300">{course.icon}</div>
                  <div className="bg-brand-purple/20 text-brand-purple text-[10px] font-black px-4 py-2 rounded-full border border-brand-purple/30 uppercase tracking-widest">
                    {course.age}
                  </div>
                </div>

                <h3 className="text-3xl font-black mb-4 leading-tight group-hover:text-brand-yellow transition-colors">
                  {course.title}
                </h3>
                
                <p className="text-slate-400 mb-8 leading-relaxed font-medium flex-grow">
                  {course.desc}
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-widest">
                    <Star size={14} className="text-brand-yellow fill-brand-yellow" />
                    5.0 • Перше заняття безкоштовно
                  </div>
                  
                  <motion.a
                    whileTap={{ scale: 0.95 }}
                    href={TELEGRAM_LINK}
                    className="flex items-center justify-center gap-3 w-full py-5 bg-white/5 hover:bg-brand-purple rounded-2xl font-black text-sm transition-all border border-white/10 hover:border-brand-purple group/btn"
                  >
                    ДІЗНАТИСЯ БІЛЬШЕ 
                    <ChevronRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};