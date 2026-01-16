import { COURSES, TELEGRAM_LINK } from '../data/content';
import { motion } from 'framer-motion';
import { Star, ChevronRight } from 'lucide-react';

export const Courses = () => {
  return (
    <section id="courses" className="py-32 px-6 relative w-full overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <h2 className="text-5xl md:text-8xl font-black uppercase leading-[0.9] tracking-tighter text-white">
            ТВІЙ <span className="text-brand-blue">LEVEL UP</span>
          </h2>
          <p className="text-slate-400 max-w-sm font-medium">Обери напрямок, який драйвить тебе найбільше. Ми навчимо всьому з нуля.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {COURSES.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative h-full"
            >
              <div className={`absolute -inset-1 bg-gradient-to-r ${course.color} rounded-[3rem] blur opacity-10 group-hover:opacity-100 transition duration-500`} />
              
              <div className="relative bg-[#161e31] h-full rounded-[2.8rem] p-10 flex flex-col items-start border border-white/5 group-hover:border-white/20 transition-all">
                <span className="bg-white/5 border border-white/10 px-4 py-2 rounded-full text-[10px] font-black uppercase mb-8 tracking-widest text-brand-yellow">
                  {course.badge}
                </span>

                <div className="text-7xl mb-6 group-hover:scale-110 transition-transform duration-300">{course.icon}</div>
                <h3 className="text-3xl font-black mb-2 uppercase tracking-tight text-white">{course.title}</h3>
                <p className="text-brand-purple font-black text-sm mb-6">{course.age}</p>
                <p className="text-slate-400 mb-10 leading-relaxed font-medium flex-grow">{course.desc}</p>

                <div className="w-full pt-6 border-t border-white/5 space-y-6">
                  <div className="flex items-center gap-2 text-[10px] font-black uppercase text-slate-500">
                    <Star size={14} className="fill-brand-yellow text-brand-yellow" /> ПЕРШИЙ УРОК БЕЗКОШТОВНО
                  </div>
                  <a href={TELEGRAM_LINK} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 w-full py-5 rounded-2xl bg-white text-black font-black text-sm hover:bg-brand-yellow transition-colors">
                    ЗАБРОНЮВАТИ <ChevronRight size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};