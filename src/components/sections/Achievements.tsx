'use client';
import { motion } from 'framer-motion';
import { Trophy, Calendar, Target, Zap, Award } from 'lucide-react';

const stats = [
  { label: "Years Experience", value: "4+", icon: <Calendar size={24} className="text-brand-blue" /> },
  { label: "Patents Filed", value: "2", icon: <Zap size={24} className="text-yellow-400" /> },
  { label: "System Uptime", value: "99.9%", icon: <Target size={24} className="text-green-400" /> },
  { label: "Users Impacted", value: "1M+", icon: <Award size={24} className="text-brand-cyan" /> },
];

const achievementsData = [
  {
    title: "Salesforce Innovation Award",
    category: "Workplace Excellence",
    year: "2024",
    description: "Recognized for architecting the 'Einstein' generative response module, reducing agent response times by 40%."
  },
  {
    title: "Best Research Paper",
    category: "Academic",
    year: "2022",
    description: "Awarded at IEEE International Conference for research on 'Optimizing Distributed Cache Coherence in Microservices'."
  },
  {
    title: "Hackathon Winner",
    category: "Competition",
    year: "2021",
    description: "First place in Global FinTech Hackathon for building a real-time fraud detection system using graph neural networks."
  }
];

export const Achievements = () => {
  return (
    <section 
      id="achievements" 
      className="py-24 border-t border-white/5 relative"
    >
      <div className="container mx-auto px-6">
        
        {/* FIX: Added 'justify-center md:justify-start' */}
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-white mb-16 flex items-center justify-center md:justify-start"
        >
          <Trophy className="w-8 h-8 mr-4 text-brand-blue" />
          Achievements
        </motion.h2>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6 rounded-xl text-center hover:bg-white/5 transition-colors"
            >
              <div className="flex justify-center mb-4 bg-brand-dark/30 w-12 h-12 rounded-full items-center mx-auto border border-white/5">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-slate-400 uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Detailed Achievements List */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievementsData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + (index * 0.1) }}
              className="relative pl-8 border-l-2 border-brand-blue/30 hover:border-brand-blue transition-colors group"
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-brand-dark border-2 border-brand-blue/30 group-hover:border-brand-blue transition-colors"></div>
              
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-bold text-brand-cyan uppercase tracking-wider">{item.category}</span>
                <span className="text-xs text-slate-500 font-mono">{item.year}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-blue transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};