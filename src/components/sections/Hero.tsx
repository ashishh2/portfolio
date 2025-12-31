'use client';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';

export const Hero = () => {
  
  const scrollToWork = () => {
    const workSection = document.getElementById('work');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 md:pt-0"
    >
        {/* BACKGROUND BLOBS */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
            <div className="absolute top-[-10%] right-[-5%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full bg-blue-100/60 blur-[80px] md:blur-[100px]" />
            <div className="absolute top-[20%] left-[-10%] w-[300px] h-[300px] md:top-[40%] md:left-[-10%] md:w-[500px] md:h-[500px] rounded-full bg-cyan-100/60 blur-[80px] md:blur-[100px]" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20">

                {/* 1. PROFILE IMAGE & SOCIALS */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative shrink-0"
                >
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-200 to-cyan-200 rounded-full blur-2xl transform scale-105 opacity-60 pointer-events-none" />

                    <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-[6px] border-white shadow-2xl overflow-hidden bg-slate-100">
                         <img
                            src="/profile.jpeg"
                            alt="Profile"
                            className="w-full h-full object-cover"
                         />
                    </div>

                    <div className="flex justify-center gap-4 mt-8 relative z-20">
                         {[
                            { icon: <Github size={20} />, href: "https://github.com/ashishh2" },
                            { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/ashishh2/" },
                            { icon: <Mail size={20} />, href: "mailto:aashishh081@gmail.com" }
                         ].map((social, index) => (
                            <motion.a
                                key={index}
                                href={social.href}
                                target="_blank"
                                rel="noreferrer"
                                whileHover={{ y: -5 }}
                                className="p-3 bg-white rounded-full text-slate-600 shadow-md border border-slate-100 hover:text-blue-600 hover:border-blue-100 transition-colors cursor-pointer"
                            >
                                {social.icon}
                            </motion.a>
                         ))}
                    </div>
                </motion.div>

                {/* 2. TEXT CONTENT */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex-1 max-w-2xl text-center md:text-left"
                >
                    <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight mb-6 tracking-tight">
                        Architecting <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
                            Scalable Intelligence
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8 font-light">
                        Specializing at the intersection of Distributed Systems and Generative AI. I engineer high-throughput, event-driven systems designed to perform reliably at scale.
                    </p>
                </motion.div>
            </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
            onClick={scrollToWork}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
            className="hidden md:block absolute bottom-10 left-1/2 transform -translate-x-1/2 text-slate-400 cursor-pointer hover:text-brand-blue transition-colors"
        >
            <ArrowDown size={24} />
        </motion.div>
    </section>
  );
};