'use client';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';

export const Contact = () => {
  return (
    <section 
      id="contact" 
      className="pt-12 pb-32 md:py-24 relative overflow-hidden"
    >
        {/* Background Blobs */}
        <div className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none">
            <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-blue-100/40 blur-[100px]" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[300px] h-[300px] rounded-full bg-cyan-100/40 blur-[80px]" />
        </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
            
            {/* Header */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12"
            >
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                    Let's build something<br className="md:hidden" />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 ml-2">
                        scalable.
                    </span>
                </h2>
                
                <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
                    Always happy to chat about Backend Engineering, System Architecture, and Applied Generative AI. 
                    Feel free to reach out directly via email or linkedin.
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
                    {/* Github */}
                    <a 
                        href="https://github.com/ashishh2" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-4 bg-white rounded-full text-slate-600 shadow-md border border-slate-100 hover:text-blue-600 hover:border-blue-100 hover:-translate-y-1 transition-all duration-300"
                        aria-label="GitHub"
                    >
                        <Github size={24} />
                    </a>
                    
                    {/* LinkedIn */}
                    <a 
                        href="https://www.linkedin.com/in/ashishh2/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-4 bg-white rounded-full text-slate-600 shadow-md border border-slate-100 hover:text-blue-600 hover:border-blue-100 hover:-translate-y-1 transition-all duration-300"
                        aria-label="LinkedIn"
                    >
                        <Linkedin size={24} />
                    </a>
                    
                    {/* Email */}
                    <a 
                        href="mailto:aashishh081@gmail.com" 
                        className="p-4 bg-white rounded-full text-slate-600 shadow-md border border-slate-100 hover:text-blue-600 hover:border-blue-100 hover:-translate-y-1 transition-all duration-300"
                        aria-label="Email"
                    >
                        <Mail size={24} />
                    </a>
                </div>
            </motion.div>
        </div>
      </div>
    </section>
  );
};