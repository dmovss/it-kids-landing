import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  href?: string;
}

export const Button = ({ children, onClick, className = "", variant = 'primary', href }: ButtonProps) => {
  const baseStyles = "px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl active:scale-95";
  
  const variants = {
    primary: "bg-[#FFD600] text-black hover:bg-[#ffe033]",
    secondary: "bg-[#7B61FF] text-white hover:bg-[#6a4fff]",
    outline: "border-2 border-[#7B61FF] text-[#7B61FF] bg-white hover:bg-[#f3f0ff]"
  };

  const Component = motion.button;
  
  const content = (
    <Component
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </Component>
  );

  return href ? <a href={href} target="_blank" rel="noreferrer">{content}</a> : content;
};