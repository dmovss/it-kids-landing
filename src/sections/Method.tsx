import { motion } from 'framer-motion';
import { Layout, Cpu, Users, Award } from 'lucide-react';

const steps = [
  { icon: <Layout className="text-brand-blue" />, title: "Практика 100%", desc: "Жодної нудної теорії. Пишемо код з першої хвилини уроку." },
  { icon: <Cpu className="text-brand-pink" />, title: "Власні проекти", desc: "Кожен учень виходить з готовим портфоліо ігор та сайтів." },
  { icon: <Users className="text-brand-purple" />, title: "Малі групи", desc: "До 6 людей. Максимум уваги ментора кожному генію." },
  { icon: <Award className="text-brand-yellow" />, title: "Сертифікація", desc: "Офіційний документ, що підтверджує скіли дитини." },
];

export const Method = () => {
  return (
    <section className="py-32 px-6 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 hover:border-brand-purple/50 transition-all"
            >
              <div className="mb-6 p-4 bg-white/5 w-fit rounded-2xl">
                {step.icon}
              </div>
              <h3 className="text-xl font-black mb-4 uppercase text-white tracking-tighter">{step.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed font-medium">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};