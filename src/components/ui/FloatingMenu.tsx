'use client';
import { motion } from 'framer-motion';
import { Home, Briefcase, Code2, GraduationCap, Trophy, Mail } from 'lucide-react';

export const FloatingMenu = () => {
  const menuItems = [
    { icon: <Home size={20} />, label: 'Home', href: '#' },
    { icon: <Briefcase size={20} />, label: 'Experience', href: '#work' },
    { icon: <GraduationCap size={20} />, label: 'Education', href: '#education' },
    { icon: <Code2 size={20} />, label: 'Projects', href: '#projects' },
    { icon: <Trophy size={20} />, label: 'Awards', href: '#achievements' },
    { icon: <Mail size={20} />, label: 'Contact', href: '#contact' },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault();
    if (href === '#') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
    }
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <motion.nav 
      initial={{ y: -100, x: "-50%", opacity: 0 }}
      animate={{ y: 0, x: "-50%", opacity: 1 }}
      transition={{ delay: 0.5, type: "spring", stiffness: 260, damping: 20 }}
      className="fixed left-1/2 z-50 bottom-6 md:top-6 md:bottom-auto"
    >
      {/* GLASSMORPHISM UPDATE:
          1. bg-white/10: Very transparent to let background blobs show through.
          2. backdrop-blur-md: Frosted glass effect.
          3. border-white/20: Subtle glass edge.
      */}
      <div className="flex items-center gap-1 md:gap-2 px-3 py-2 md:px-4 rounded-full 
                      bg-white/10 backdrop-blur-md 
                      border border-white/20 ring-1 ring-black/5
                      shadow-[0_8px_32px_rgba(0,0,0,0.1)]">
        
        {menuItems.map((item) => (
          <a 
            key={item.label}
            href={item.href}
            onClick={(e) => handleScroll(e, item.href)}
            className="group relative p-2 md:p-3 rounded-full hover:bg-white/20 transition-all duration-300 cursor-pointer"
            aria-label={item.label}
          >
            {/* Icon */}
            <span className="text-slate-600 group-hover:text-blue-600 group-hover:scale-110 transition-all duration-300 block">
              {item.icon}
            </span>
            
            {/* Tooltip */}
            <span className="absolute left-1/2 -translate-x-1/2 px-2 py-1 bg-slate-800 text-white text-[10px] md:text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap
                             bottom-[120%] mb-2 md:bottom-auto md:mb-0 md:top-[120%] md:mt-2 shadow-lg">
              {item.label}
              {/* Tooltip Arrow */}
              <span className="absolute left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-800 rotate-45
                               -bottom-1 md:-top-1 md:bottom-auto"></span>
            </span>
          </a>
        ))}
      </div>
    </motion.nav>
  );
};