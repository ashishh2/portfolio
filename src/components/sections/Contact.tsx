'use client';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';

export const Contact = () => {
  return (
    <section 
      id="contact" 
      className="py-24 relative overflow-hidden border-t border-white/10 bg-brand-dark"
    >
        {/* Background Mesh for depth */}
        <div className="absolute inset-0 bg-mesh-gradient opacity-20 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
            
            {/* Header */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12"
            >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Let's build something <span className="text-gradient">scalable.</span>
                </h2>
                <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
                    Currently open to new opportunities in backend engineering and system architecture. 
                    Feel free to reach out directly via email or social media.
                </p>
            </motion.div>

            {/* Social Links (Centered) */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex flex-col items-center space-y-8"
            >
                <div className="flex gap-6">
                    <a 
                        href="https://github.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group p-4 glass-card rounded-full text-slate-400 hover:text-white hover:bg-white/10 hover:border-brand-blue/30 transition-all hover:-translate-y-2"
                        aria-label="GitHub"
                    >
                        <Github size={24} className="group-hover:text-brand-blue transition-colors" />
                    </a>
                    
                    <a 
                        href="https://linkedin.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group p-4 glass-card rounded-full text-slate-400 hover:text-white hover:bg-white/10 hover:border-brand-blue/30 transition-all hover:-translate-y-2"
                        aria-label="LinkedIn"
                    >
                        <Linkedin size={24} className="group-hover:text-brand-blue transition-colors" />
                    </a>
                    
                    <a 
                        href="mailto:hello@email.com" 
                        className="group p-4 glass-card rounded-full text-slate-400 hover:text-white hover:bg-white/10 hover:border-brand-blue/30 transition-all hover:-translate-y-2"
                        aria-label="Email"
                    >
                        <Mail size={24} className="group-hover:text-brand-blue transition-colors" />
                    </a>
                </div>

                {/* <div className="pt-12 border-t border-white/5 w-full max-w-xs mx-auto">
                    <p className="text-xs text-slate-600">
                        Last Updated: December 2025. <br/>
                    </p>
                </div> */}
            </motion.div>
        </div>
      </div>
    </section>
  );
};