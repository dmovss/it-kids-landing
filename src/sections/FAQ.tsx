import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQS } from '../data/content';
import { ChevronDown } from 'lucide-react';

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-32 px-6 max-w-3xl mx-auto w-full overflow-hidden">
      <h2 className="text-4xl md:text-5xl font-black mb-16 text-center uppercase italic tracking-tighter text-white">
        Питання та <span className="text-brand-purple">відповіді</span>
      </h2>
      <div className="space-y-4">
        {FAQS.map((faq, i) => (
          <div key={i} className="glass rounded-[2rem] border border-white/5 overflow-hidden">
            <button 
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full p-6 md:p-8 flex justify-between items-center text-left font-black uppercase text-xs md:text-sm tracking-widest text-white"
            >
              <span className="pr-4">{faq.q}</span>
              <ChevronDown className={`shrink-0 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
              {openIndex === i && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }} 
                  animate={{ height: 'auto', opacity: 1 }} 
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="px-8 pb-8 text-slate-400 font-medium leading-relaxed text-sm md:text-base">
                    {faq.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};