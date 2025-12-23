'use client';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Hash, BookOpen, Award, MapPin } from 'lucide-react';

const coursework = [
    'Design and Analysis of Algorithms',
    'Operating Systems',
    'Database Management System',
    'Computer Networks',
    'Object Oriented System Design',
    'Artificial Intelligence',
    'Deep Learning',
    'Computer Organization and Architecture',
    'Software Engineering',
    'Blockchain and its Applications',
    'Cloud Computing',
    'Theory of Computation',
    'Data Mining and Data Warehousing',
    'Compiler Design',
    'High Performance Computing',
    'Image Processing',
    'Computer Graphics',
    'Discrete Structures',
    'Soft Computing'
];

export const Education = () => {
  return (
    <section 
      id="education" 
      className="py-24 relative border-t border-white/5" 
    >
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-white mb-16 flex items-center justify-center md:justify-start"
        >
          <GraduationCap className="w-8 h-8 mr-4 text-brand-blue" />
          Education
        </motion.h2>

        <div className="space-y-16">
          
          {/* 1. COLLEGE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Header */}
            <div className="mb-6">
                <h3 className="text-xl md:text-3xl font-bold text-white mb-2">
                    National Institute of Technology (NIT), Jamshedpur
                </h3>
                <div className="text-sm md:text-xl text-slate-300 mb-4">
                    B.Tech (Hons) in Computer Science and Engineering
                </div>

                {/* Metadata */}
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 text-xs md:text-sm font-medium text-slate-500">
                    <span className="flex items-center text-slate-400">
                        <MapPin size={12} className="mr-1.5" /> Jamshedpur, India
                    </span>
                    
                    <div className="flex items-center gap-2">
                        <span className="flex items-center text-brand-blue bg-brand-blue/10 px-2 py-0.5 rounded-full border border-brand-blue/20 whitespace-nowrap">
                            <Calendar size={12} className="mr-1.5" />
                            2019 - 2023
                        </span>
                        <span className="flex items-center text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-full border border-emerald-400/20 whitespace-nowrap">
                            <Hash size={12} className="mr-1.5" />
                            CGPA: 8.69 / 10.0
                        </span>
                    </div>
                </div>
            </div>

            {/* Content Body */}
            <div className="md:border-l-2 border-white/10 md:pl-8 space-y-6">
                
                {/* Technical Excellence & Leadership */}
                <div>
                    {/* FIX: Changed text-slate-500 to text-slate-200 (Brighter) */}
                    <h4 className="text-xs md:text-sm font-bold text-slate-200 uppercase tracking-wider mb-3 flex items-center">
                        <Award size={16} className="mr-2 text-brand-cyan" />
                        Technical Excellence and Leadership
                    </h4>
                    
                    {/* Bullet Points */}
                    <ul className="space-y-3">
                        <li className="flex items-start text-slate-300 text-sm md:text-base leading-relaxed">
                            {/* FIX: Removed /50 opacity. Now solid bg-brand-cyan. */}
                            <span className="mt-1.5 mr-3 min-w-[6px] h-1.5 rounded-full bg-brand-cyan shrink-0"></span>
                            <span>
                                Demonstrated advanced proficiency in data structures and algorithms by representing institute five-times at <strong>ICPC Regionals</strong>.
                            </span>
                        </li>
                        <li className="flex items-start text-slate-300 text-sm md:text-base leading-relaxed">
                            {/* FIX: Removed /50 opacity. */}
                            <span className="mt-1.5 mr-3 min-w-[6px] h-1.5 rounded-full bg-brand-cyan shrink-0"></span>
                            <span>
                                Served as the <strong className="text-white">Technical Secretary</strong> of the PCON (Programming Club of NIT Jamshedpur), leading a 30+ member team to conceptualize and deliver technical workshops, competitive programming contests, and hackathons.
                            </span>
                        </li>
                    </ul>
                </div>

                {/* Coursework */}
                <div>
                    {/* FIX: Changed text-slate-500 to text-slate-200 (Brighter) */}
                    <h4 className="text-xs md:text-sm font-bold text-slate-200 uppercase tracking-wider mb-3 flex items-center">
                        <BookOpen size={16} className="mr-2 text-brand-blue" />
                        Coursework
                    </h4>
                    <div className="flex flex-wrap gap-2">
                        {coursework.map((course) => (
                            <span key={course} className="px-2 py-1 bg-white/5 text-slate-300 text-[10px] md:text-xs rounded border border-white/10 hover:border-brand-blue/30 transition-colors">
                                {course}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
          </motion.div>

          {/* Divider */}
          <div className="h-px bg-white/10 w-full"></div>

          {/* 2. SCHOOL */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
             {/* Header */}
             <div className="mb-8">
                <h3 className="text-xl md:text-3xl font-bold text-white mb-2">Motilal Nehru Public School</h3>
                <div className="flex items-center gap-2 text-xs md:text-sm font-medium text-slate-500">
                    <span className="flex items-center text-slate-400">
                        <MapPin size={12} className="mr-1.5" /> Jamshedpur, India
                    </span>
                </div>
             </div>

             {/* Content Body */}
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 md:border-l-2 border-white/10 md:pl-8">
                
                {/* Class 12 Details */}
                <div className="relative group">
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-3 mb-3">
                        <h4 className="text-lg md:text-xl font-bold text-white">Class 12th</h4>
                        
                        <div className="flex items-center gap-2">
                            {/* ISC Pill */}
                            <span className="flex items-center text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded-full border border-purple-500/20 text-[10px] md:text-xs font-medium whitespace-nowrap">
                                <BookOpen size={10} className="mr-1" /> ISC
                            </span>

                            {/* Year Pill */}
                            <span className="flex items-center text-brand-blue bg-brand-blue/10 px-2 py-0.5 rounded-full border border-brand-blue/20 text-[10px] md:text-xs font-medium whitespace-nowrap">
                                <Calendar size={10} className="mr-1" /> 2019
                            </span>
                            
                            {/* Percentage Pill */}
                            <span className="flex items-center text-brand-cyan bg-brand-cyan/10 px-2 py-0.5 rounded-full border border-brand-cyan/20 text-[10px] md:text-xs font-medium whitespace-nowrap">
                                <Hash size={10} className="mr-1" /> 97.5%
                            </span>
                        </div>
                    </div>
                    
                    <ul className="space-y-3">
                        <li className="flex items-start text-slate-300 text-sm md:text-base leading-relaxed">
                            {/* FIX: Removed /50 opacity. */}
                            <span className="mt-1.5 mr-3 min-w-[6px] h-1.5 rounded-full bg-brand-cyan shrink-0"></span>
                            <span>Recipient of the <strong className="text-white">Principal’s Award</strong> in recognition of outstanding holistic performance across academic and co-curricular pursuits.</span>
                        </li>
                        <li className="flex items-start text-slate-300 text-sm md:text-base leading-relaxed">
                            {/* FIX: Removed /50 opacity. */}
                            <span className="mt-1.5 mr-3 min-w-[6px] h-1.5 rounded-full bg-brand-cyan shrink-0"></span>
                            Attained a perfect 100/100 score in core technical subjects: Computer Science and Mathematics.
                        </li>
                    </ul>
                </div>

                {/* Class 10 Details */}
                <div className="relative group">
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-3 mb-3">
                        <h4 className="text-lg md:text-xl font-bold text-white">Class 10th</h4>
                        
                        <div className="flex items-center gap-2">
                            {/* ICSE Pill */}
                            <span className="flex items-center text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded-full border border-purple-500/20 text-[10px] md:text-xs font-medium whitespace-nowrap">
                                <BookOpen size={10} className="mr-1" /> ICSE
                            </span>

                            {/* Year Pill */}
                            <span className="flex items-center text-brand-blue bg-brand-blue/10 px-2 py-0.5 rounded-full border border-brand-blue/20 text-[10px] md:text-xs font-medium whitespace-nowrap">
                                <Calendar size={10} className="mr-1" /> 2017
                            </span>
                            
                            {/* Percentage Pill */}
                            <span className="flex items-center text-brand-cyan bg-brand-cyan/10 px-2 py-0.5 rounded-full border border-brand-cyan/20 text-[10px] md:text-xs font-medium whitespace-nowrap">
                                <Hash size={10} className="mr-1" /> 97%
                            </span>
                        </div>
                    </div>

                    <ul className="space-y-3">
                        <li className="flex items-start text-slate-300 text-sm md:text-base leading-relaxed">
                            {/* FIX: Removed /50 opacity. */}
                            <span className="mt-1.5 mr-3 min-w-[6px] h-1.5 rounded-full bg-brand-cyan shrink-0"></span>
                            <span>School Topper and ranked among the <strong className="text-white">Top 1%</strong> of candidates nationwide for academic performance.</span>
                        </li>
                        <li className="flex items-start text-slate-300 text-sm md:text-base leading-relaxed">
                            {/* FIX: Removed /50 opacity. */}
                            <span className="mt-1.5 mr-3 min-w-[6px] h-1.5 rounded-full bg-brand-cyan shrink-0"></span>
                            Secured top honors in multiple inter-school debates and quizzes, demonstrating exceptional public speaking and critical thinking abilities.
                        </li>
                    </ul>
                </div>

             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};