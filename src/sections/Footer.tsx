import { TELEGRAM_LINK } from '../data/content';
import { Instagram, Youtube, Send, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-[#050810] pt-20 pb-10 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        
        {/* Brand Block */}
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <span className="text-2xl">🚀</span>
            <span className="font-black text-2xl tracking-tighter uppercase">FutureCode</span>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed mb-6">
            Ми готуємо дітей до успішного майбутнього в IT через творчість та гру. Наші учні створюють проекти, якими захоплюється світ.
          </p>
          <div className="flex gap-4">
            <a href="#" className="p-3 bg-white/5 rounded-xl hover:bg-brand-purple transition-colors"><Instagram size={20} /></a>
            <a href="#" className="p-3 bg-white/5 rounded-xl hover:bg-brand-purple transition-colors"><Youtube size={20} /></a>
            <a href={TELEGRAM_LINK} className="p-3 bg-white/5 rounded-xl hover:bg-brand-purple transition-colors"><Send size={20} /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-black text-brand-yellow mb-6 uppercase tracking-widest">Навігація</h4>
          <ul className="space-y-4 text-slate-400 font-bold text-sm">
            <li><a href="#courses" className="hover:text-white transition-colors">Всі курси</a></li>
            <li><a href="#benefits" className="hover:text-white transition-colors">Методика навчання</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Про школу</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Блог для батьків</a></li>
          </ul>
        </div>

        {/* Courses Links */}
        <div>
          <h4 className="font-black text-brand-purple mb-6 uppercase tracking-widest">Напрямки</h4>
          <ul className="space-y-4 text-slate-400 font-bold text-sm">
            <li><a href="#" className="hover:text-white transition-colors italic">Minecraft Modding</a></li>
            <li><a href="#" className="hover:text-white transition-colors italic">Roblox Game Design</a></li>
            <li><a href="#" className="hover:text-white transition-colors italic">Python Development</a></li>
            <li><a href="#" className="hover:text-white transition-colors italic">Web Design (UI/UX)</a></li>
          </ul>
        </div>

        {/* Contacts */}
        <div>
          <h4 className="font-black text-brand-pink mb-6 uppercase tracking-widest">Контакти</h4>
          <ul className="space-y-4 text-slate-400 font-bold text-sm">
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-brand-pink" /> 0 800 333 44 55
            </li>
            <li className="flex items-center gap-3">
              <Send size={18} className="text-brand-blue" /> @future_code_admin
            </li>
            <li className="flex items-center gap-3">
              <MapPin size={18} className="text-brand-yellow" /> Онлайн по всьому світу
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold text-slate-600 uppercase tracking-[0.2em]">
        <p>© 2026 FutureCode Academy. Made for the next generation.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white">Політика конфіденційності</a>
          <a href="#" className="hover:text-white">Публічна оферта</a>
        </div>
      </div>
    </footer>
  );
};