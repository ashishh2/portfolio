'use client';
import { motion } from 'framer-motion';
import { Trophy, Calendar, Zap, Award } from 'lucide-react';

const stats = [
  { label: "Years Experience", value: "3+", icon: <Calendar size={24} className="text-brand-blue" /> },
  { label: "Projects Delivered", value: "15+", icon: <Zap size={24} className="text-yellow-500" /> },
  { label: "ICPC Regionalist", value: "5x", icon: <Award size={24} className="text-brand-cyan" /> },
];

const achievementsData = [
  {
    title: "ACM ICPC Asia West Regionals",
    category: "Competitive Programming",
    description: "Secured All India Rank 22 at the ACM ICPC Kanpur Regionals."
  },
  {
    title: "Topcoder Open",
    category: "Competitive Programming",
    description: "Qualified as a Finalist for Southern Asia in Topcoder Open."
  },
  {
    title: "Hacking Vishwa",
    category: "Hackathon",
    description: "Ranked 4th at 'Hacking Vishwa' during OJASS (NIT Jamshedpur's Technical Fest)."
  },
  {
    title: "Salesforce Astro Award",
    category: "Professional Recognition",
    description: "Awarded for delivering high-performance solutions with significant customer impact."
  }
];

export const Achievements = () => {
  const gridMap: Record<number, string> = {
    1: "md:grid-cols-1",
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
    4: "md:grid-cols-4",
  };
  
  const gridClass = gridMap[stats.length] || "md:grid-cols-3";

  return (
    <section 
      id="achievements" 
      className="py-12 md:py-24 relative overflow-hidden"
    >
        {/* Background Blobs */}
        <div className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none">
            <div className="absolute top-[0%] left-[20%] w-[500px] h-[500px] rounded-full bg-blue-100/40 blur-[120px]" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-cyan-100/40 blur-[100px]" />
        </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-slate-900 mb-16 flex items-center justify-center md:justify-start"
        >
          <Trophy className="w-8 h-8 mr-4 text-brand-blue" />
          Achievements
        </motion.h2>

        {/* Key Metrics Grid - AUTO SIZING */}
        <div className={`grid grid-cols-2 ${gridClass} gap-6 mb-16`}>
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl text-center border border-blue-100 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center justify-center h-full"
            >
              <div className="flex justify-center mb-4 bg-blue-50 w-12 h-12 rounded-full items-center border border-blue-100">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</div>
              <div className="text-sm text-slate-500 uppercase tracking-wider font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Detailed Achievements List */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {achievementsData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + (index * 0.1) }}
              className="relative pl-8 border-l-2 border-slate-300 hover:border-brand-blue transition-colors duration-300 group"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-2 border-slate-300 group-hover:border-brand-blue transition-colors duration-300"></div>
              
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">{item.category}</span>
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-blue transition-colors">
                {item.title}
              </h3>
              
              <p className="text-slate-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
