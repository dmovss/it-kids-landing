import { FAKE_REVIEWS } from '../data/content';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

export const Reviews = () => {
  return (
    <section id="reviews" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between mb-20 gap-8">
          <div className="max-w-xl text-center md:text-left">
            <h2 className="text-5xl font-black mb-6 italic tracking-tighter">
              ЩО КАЖУТЬ <span className="text-brand-pink">FUTURE LEADERS</span>?
            </h2>
            <p className="text-slate-400 font-medium">
              Наші учні вже сьогодні будують майбутнє, поки їхні однолітки просто споживають контент.
            </p>
          </div>
          <div className="hidden md:block h-[2px] flex-grow bg-gradient-to-r from-brand-pink/50 to-transparent mx-10" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {FAKE_REVIEWS.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative p-1 bg-white/5 rounded-[3rem] border border-white/10 group hover:border-brand-blue/50 transition-colors"
            >
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-brand-blue rounded-full flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform">
                <Quote size={20} className="text-black fill-black" />
              </div>
              
              <div className="p-10">
                <p className="text-xl md:text-2xl font-medium text-slate-200 mb-8 leading-relaxed italic">
                  "{review.text}"
                </p>
                
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-tr from-brand-blue to-brand-purple rounded-2xl flex items-center justify-center text-3xl shadow-inner">
                    {review.avatar}
                  </div>
                  <div>
                    <h4 className="font-black text-lg text-white uppercase tracking-tighter">{review.name}</h4>
                    <p className="text-brand-blue font-bold text-xs tracking-widest">{review.age}</p>
                  </div>
                </div>
              </div>

              {/* Декоративний елемент "Перевага" */}
              <div className="absolute bottom-6 right-10 opacity-10 group-hover:opacity-30 transition-opacity">
                <span className="text-4xl font-black italic">TOP SKILL</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};