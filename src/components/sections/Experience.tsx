'use client';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

// ... (interfaces remain the same) ...
interface Role {
  title: string;
  period: string;
  type: string;
  description: string[];
}

interface CompanyExperience {
  company: string;
  logo: React.ReactNode;
  location: string;
  roles: Role[];
}

const experiences: CompanyExperience[] = [
  {
    company: "Salesforce",
    location: "San Francisco, CA",
    logo: <div className="w-12 h-12 bg-[#00A1E0] rounded-lg flex items-center justify-center text-white font-bold text-xl shrink-0 relative z-10">S</div>, 
    roles: [
      {
        title: "Member of Technical Staff (MTS)",
        period: "Oct 2023 - Present",
        type: "Full-time",
        description: [
          "Architecting the Service Cloud AI platform, enabling 1M+ daily automated responses.",
          "Optimized Cassandra read paths, reducing p99 latency by 40ms during peak load.",
          "Leading a squad of 4 engineers to migrate legacy monoliths to microservices."
        ]
      },
      {
        title: "Associate Member of Technical Staff (AMTS)",
        period: "Jul 2022 - Oct 2023",
        type: "Full-time",
        description: [
          "Developed the initial prototype for the 'Einstein' generative response module.",
          "Implemented CI/CD pipelines using Jenkins, reducing deployment time by 40%."
        ]
      }
    ]
  },
  {
    company: "FinTech Innovations",
    location: "New York, NY",
    logo: <div className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center text-white font-bold text-xl shrink-0 relative z-10">F</div>,
    roles: [
      {
        title: "Software Engineer II",
        period: "2018 - 2021",
        type: "Full-time",
        description: [
          "Built high-frequency trading algorithms in C++ with sub-millisecond latency.",
          "Managed PostgreSQL clusters handling TB-scale financial datasets."
        ]
      }
    ]
  }
];

export const Experience = () => {
  return (
    <section id="work" className="py-24 relative bg-brand-navy/20 border-t border-white/5">
      <div className="container mx-auto px-6">
        {/* FIX: Centered on mobile */}
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-white mb-12 md:mb-16 flex items-center justify-center md:justify-start"
        >
          <Briefcase className="w-8 h-8 mr-4 text-brand-blue" />
          Experience
        </motion.h2>

        <div className="space-y-12">
          {experiences.map((exp, companyIndex) => (
            <motion.div 
              key={companyIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: companyIndex * 0.2 }}
              className="relative"
            >
              {/* Vertical Timeline Line */}
              <div className="absolute left-6 top-0 bottom-0 w-px bg-slate-700 -z-10 hidden md:block transform -translate-x-1/2"></div>

              {/* Company Header */}
              <div className="flex items-center gap-4 mb-6 relative z-10">
                 <div className="flex items-center gap-4">
                    {exp.logo}
                    <div>
                        <h3 className="text-xl md:text-2xl font-bold text-white">{exp.company}</h3>
                        <p className="text-slate-500 text-sm">{exp.location}</p>
                    </div>
                 </div>
              </div>

              {/* Roles Container */}
              <div className="space-y-8 md:space-y-10 pl-2 md:pl-20 relative">
                {exp.roles.map((role, roleIndex) => (
                  <div key={roleIndex} className="relative">
                    
                    {/* Role Node Dot */}
                    <div className="hidden md:block absolute -left-[3.85rem] top-2 w-3 h-3 rounded-full bg-brand-cyan border-2 border-brand-dark shadow-[0_0_10px_rgba(6,182,212,0.5)] z-20"></div>

                    {/* Role Header */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-2">
                      <div>
                        <h4 className="text-lg font-semibold text-slate-200">{role.title}</h4>
                        <span className="text-brand-blue text-sm font-medium inline-block">{role.type}</span>
                      </div>
                      <div className="self-start md:self-auto flex items-center text-slate-500 text-xs md:text-sm bg-white/5 px-3 py-1 rounded-full border border-white/5">
                        <Calendar size={14} className="mr-2" />
                        {role.period}
                      </div>
                    </div>

                    {/* Work Description Card */}
                    <div className="glass-card p-4 md:p-6 rounded-xl hover:bg-white/5 transition-colors group">
                      <ul className="space-y-3">
                        {role.description.map((item, i) => (
                          <li key={i} className="flex items-start text-slate-400 group-hover:text-slate-300 transition-colors text-sm leading-relaxed">
                            <span className="mt-1.5 mr-3 min-w-[6px] h-1.5 rounded-full bg-brand-blue/50 group-hover:bg-brand-blue transition-colors shrink-0"></span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};