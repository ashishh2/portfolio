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
      // FIX: Changed to 'py-12 md:py-24' to reduce gap on mobile
      className="py-12 md:py-24 relative overflow-hidden" 
    >
        {/* Background Blobs */}
        <div className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none">
            <div className="absolute top-[10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-blue-100/50 blur-[100px]" />
            <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-cyan-100/50 blur-[100px]" />
        </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-slate-900 mb-12 md:mb-16 flex items-center justify-center md:justify-start"
        >
          <GraduationCap className="w-8 h-8 mr-4 text-brand-blue" />
          Education
        </motion.h2>

        <div className="space-y-12 md:space-y-16">
          
          {/* 1. COLLEGE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Header */}
            <div className="mb-6">
                <h3 className="text-xl md:text-3xl font-bold text-slate-900 mb-2">
                    National Institute of Technology (NIT), Jamshedpur
                </h3>
                <div className="text-sm md:text-xl text-slate-600 mb-4">
                    B.Tech (Hons) in Computer Science and Engineering
                </div>

                {/* Metadata */}
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 text-xs md:text-sm font-medium text-slate-500">
                    <span className="flex items-center text-slate-500">
                        <MapPin size={12} className="mr-1.5" /> Jamshedpur, India
                    </span>
                    
                    <div className="flex items-center gap-2">
                        {/* STEP 1: Deep Blue (Start) */}
                        <span className="flex items-center text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200 whitespace-nowrap">
                            <Calendar size={12} className="mr-1.5" />
                            2019 - 2023
                        </span>
                        {/* STEP 3: Cyan (End) */}
                        <span className="flex items-center text-cyan-700 bg-cyan-50 px-2 py-0.5 rounded-full border border-cyan-200 whitespace-nowrap">
                            <Hash size={12} className="mr-1.5" />
                            CGPA: 8.69 / 10.0
                        </span>
                    </div>
                </div>
            </div>

            {/* Content Body */}
            <div className="md:border-l-2 border-slate-200 md:pl-8 space-y-6">
                
                {/* Technical Excellence */}
                <div>
                    <h4 className="text-xs md:text-sm font-bold text-slate-900 uppercase tracking-wider mb-3 flex items-center">
                        <Award size={16} className="mr-2 text-slate-900" />
                        Technical Excellence and Leadership
                    </h4>
                    
                    <ul className="space-y-3">
                        <li className="flex items-start text-slate-600 text-sm md:text-base leading-relaxed">
                            <span className="mt-2 mr-3 min-w-[6px] h-1.5 rounded-full bg-slate-400 shrink-0"></span>
                            <span>
                                Demonstrated advanced proficiency in data structures and algorithms by representing institute five-times at 
                                <strong className="text-slate-900 ml-1">ICPC Regionals</strong>.
                            </span>
                        </li>
                        <li className="flex items-start text-slate-600 text-sm md:text-base leading-relaxed">
                            <span className="mt-2 mr-3 min-w-[6px] h-1.5 rounded-full bg-slate-400 shrink-0"></span>
                            <span>
                                Served as the <strong className="text-slate-900">Technical Secretary</strong> of the PCON (Programming Club of NIT Jamshedpur), leading a 30+ member team to conceptualize and deliver technical workshops, competitive programming contests, and hackathons.
                            </span>
                        </li>
                    </ul>
                </div>

                {/* Coursework */}
                <div>
                    <h4 className="text-xs md:text-sm font-bold text-slate-900 uppercase tracking-wider mb-3 flex items-center">
                        <BookOpen size={16} className="mr-2 text-brand-blue" />
                        Coursework
                    </h4>
                    <div className="flex flex-wrap gap-2">
                        {coursework.map((course) => (
                            <span key={course} className="px-2 py-1 bg-white text-slate-600 text-[10px] md:text-xs rounded border border-slate-200 hover:border-brand-blue hover:text-brand-blue transition-colors">
                                {course}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
          </motion.div>

          {/* Divider */}
          <div className="h-px bg-slate-200 w-full"></div>

          {/* 2. SCHOOL */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
             {/* Header */}
             <div className="mb-8">
                <h3 className="text-xl md:text-3xl font-bold text-slate-900 mb-2">Motilal Nehru Public School</h3>
                <div className="flex items-center gap-2 text-xs md:text-sm font-medium text-slate-500">
                    <span className="flex items-center">
                        <MapPin size={12} className="mr-1.5" /> Jamshedpur, India
                    </span>
                </div>
             </div>

             {/* Content Body */}
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 md:border-l-2 border-slate-200 md:pl-8">
                
                {/* Class 12 Details */}
                <div className="relative group">
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-3 mb-3">
                        <h4 className="text-lg md:text-xl font-bold text-slate-900">Class 12th</h4>
                        
                        <div className="flex items-center gap-2">
                            {/* STEP 1: Board -> Blue-700 */}
                            <span className="flex items-center text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200 text-[10px] md:text-xs font-medium whitespace-nowrap">
                                <BookOpen size={10} className="mr-1" /> ISC
                            </span>

                            {/* STEP 2: Year -> Sky-600 (Middle Transition) */}
                            <span className="flex items-center text-sky-600 bg-sky-50 px-2 py-0.5 rounded-full border border-sky-200 text-[10px] md:text-xs font-medium whitespace-nowrap">
                                <Calendar size={10} className="mr-1" /> 2019
                            </span>
                            
                            {/* STEP 3: Score -> Cyan-600 (End) */}
                            <span className="flex items-center text-cyan-600 bg-cyan-50 px-2 py-0.5 rounded-full border border-cyan-200 text-[10px] md:text-xs font-medium whitespace-nowrap">
                                <Hash size={10} className="mr-1" /> 97.5%
                            </span>
                        </div>
                    </div>
                    
                    <ul className="space-y-3">
                        <li className="flex items-start text-slate-600 text-sm md:text-base leading-relaxed">
                            <span className="mt-2 mr-3 min-w-[6px] h-1.5 rounded-full bg-slate-400 shrink-0"></span>
                            <span>Recipient of the <strong className="text-slate-900">Principal’s Award</strong> in recognition of outstanding holistic performance across academic and co-curricular pursuits.</span>
                        </li>
                        <li className="flex items-start text-slate-600 text-sm md:text-base leading-relaxed">
                            <span className="mt-2 mr-3 min-w-[6px] h-1.5 rounded-full bg-slate-400 shrink-0"></span>
                            <span>Attained a perfect 100/100 score in core technical subjects: Computer Science and Mathematics.</span>
                        </li>
                    </ul>
                </div>

                {/* Class 10 Details */}
                <div className="relative group">
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-3 mb-3">
                        <h4 className="text-lg md:text-xl font-bold text-slate-900">Class 10th</h4>
                        
                        <div className="flex items-center gap-2">
                            {/* STEP 1: Blue */}
                            <span className="flex items-center text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200 text-[10px] md:text-xs font-medium whitespace-nowrap">
                                <BookOpen size={10} className="mr-1" /> ICSE
                            </span>

                            {/* STEP 2: Sky */}
                            <span className="flex items-center text-sky-600 bg-sky-50 px-2 py-0.5 rounded-full border border-sky-200 text-[10px] md:text-xs font-medium whitespace-nowrap">
                                <Calendar size={10} className="mr-1" /> 2017
                            </span>
                            
                            {/* STEP 3: Cyan */}
                            <span className="flex items-center text-cyan-600 bg-cyan-50 px-2 py-0.5 rounded-full border border-cyan-200 text-[10px] md:text-xs font-medium whitespace-nowrap">
                                <Hash size={10} className="mr-1" /> 97%
                            </span>
                        </div>
                    </div>

                    <ul className="space-y-3">
                        <li className="flex items-start text-slate-600 text-sm md:text-base leading-relaxed">
                            <span className="mt-2 mr-3 min-w-[6px] h-1.5 rounded-full bg-slate-400 shrink-0"></span>
                            <span>School Topper and ranked among the <strong className="text-slate-900">Top 1%</strong> of candidates nationwide for academic performance.</span>
                        </li>
                        <li className="flex items-start text-slate-600 text-sm md:text-base leading-relaxed">
                            <span className="mt-2 mr-3 min-w-[6px] h-1.5 rounded-full bg-slate-400 shrink-0"></span>
                            <span>Secured top honors in multiple inter-school debates and quizzes, demonstrating exceptional public speaking and critical thinking abilities.</span>
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