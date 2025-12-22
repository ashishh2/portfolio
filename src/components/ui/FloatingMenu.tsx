'use client';
import { motion } from 'framer-motion';
import { Home, Briefcase, Code2, Trophy, Mail } from 'lucide-react';

export const FloatingMenu = () => {
  const menuItems = [
    { icon: <Home size={20} />, label: 'Home', href: '#' },
    { icon: <Briefcase size={20} />, label: 'Experience', href: '#work' },
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
      // FIX: Changed y: 100 (from bottom) to y: -100 (from top)
      initial={{ y: -100, x: "-50%", opacity: 0 }}
      animate={{ y: 0, x: "-50%", opacity: 1 }}
      transition={{ delay: 0.5, type: "spring", stiffness: 260, damping: 20 }}
      // FIX: Changed 'bottom-8' to 'top-6'
      className="fixed top-6 left-1/2 z-50"
    >
      <div className="glass-card flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 shadow-2xl bg-brand-dark/80 backdrop-blur-xl">
        {menuItems.map((item) => (
          <a 
            key={item.label}
            href={item.href}
            onClick={(e) => handleScroll(e, item.href)}
            className="group relative p-3 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
            aria-label={item.label}
          >
            <span className="text-slate-400 group-hover:text-brand-blue transition-colors">
              {item.icon}
            </span>
            
            {/* Tooltip - Now appears BELOW the menu since the menu is at the top */}
            <span className="absolute top-full mt-2 left-1/2 -translate-x-1/2 px-2 py-1 bg-brand-navy border border-white/10 rounded text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
              {item.label}
            </span>
          </a>
        ))}
      </div>
    </motion.nav>
  );
};