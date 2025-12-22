'use client';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Code Decoration - Hidden on mobile */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 0.1, x: 0 }}
        transition={{ duration: 1 }}
        className="absolute top-1/4 right-0 pointer-events-none select-none font-mono text-xs md:text-sm text-brand-cyan whitespace-pre hidden md:block"
      >
      </motion.div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* LEFT SIDE: Photo & Socials */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col items-center order-1"
          >
            {/* Profile Image Container */}
            <div className="relative w-64 h-64 md:w-72 md:h-72 mb-8 group">
                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-br from-brand-blue to-brand-cyan rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                
                {/* Image */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/10 bg-brand-navy shadow-2xl">
                    <img 
                        src="/profile.jpg" 
                        alt="Profile" 
                        className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
                    />
                    {/* Fallback Placeholder */}
                    <div className="absolute inset-0 flex items-center justify-center bg-slate-800 text-slate-600 font-mono text-sm">
                        [profile.jpg]
                    </div>
                </div>
            </div>

            {/* Social Connection Links */}
            <div className="flex gap-6">
                <a href="#" className="p-3 glass-card rounded-full text-slate-400 hover:text-white hover:bg-brand-blue/20 hover:border-brand-blue/50 transition-all hover:-translate-y-1 shadow-lg shadow-black/20">
                    <Github size={22} />
                </a>
                <a href="#" className="p-3 glass-card rounded-full text-slate-400 hover:text-white hover:bg-brand-blue/20 hover:border-brand-blue/50 transition-all hover:-translate-y-1 shadow-lg shadow-black/20">
                    <Linkedin size={22} />
                </a>
                <a href="mailto:hello@email.com" className="p-3 glass-card rounded-full text-slate-400 hover:text-white hover:bg-brand-blue/20 hover:border-brand-blue/50 transition-all hover:-translate-y-1 shadow-lg shadow-black/20">
                    <Mail size={22} />
                </a>
            </div>
          </motion.div>

          {/* RIGHT SIDE: Text Content */}
          <div className="lg:col-span-7 space-y-6 z-10 text-center lg:text-left order-2">
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1]"
            >
              Architecting <br />
              <span className="text-gradient">Scalable Intelligence.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-base md:text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              Specializing in distributed systems, high-throughput microservices, and robust cloud infrastructure. 
              Currently focused on building resilient AI platforms that scale to millions of users.
            </motion.p>
          </div>

        </div>
      </div>
    </section>
  );
};