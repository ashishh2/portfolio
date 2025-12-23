'use client';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

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
    location: "Bangalore, India",
    logo: (
      <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center overflow-hidden shrink-0 relative z-10">
        <img 
          src="/salesforce.svg" 
          alt="Salesforce Logo" 
          className="w-full h-full object-contain p-1"
        />
      </div>
    ), 
    roles: [
      {
        title: "Software Engineering MTS",
        period: "Feb 2025 - Present",
        type: "Full-time",
        description: [
          "Solved critical scalability bottlenecks, achieving a 2400x gain in notification speed and a 40x drop in API load by redesigning data deployment workflows and implementing aggressive caching.",
          "Developed novel ML features, including a HDBSCAN-based clustering system to semantically group complex contact reasons, directly enhancing product analytics capabilities.",
          "Conducted rigorous model evaluation to replace heavy LLMs with optimized SLMs (Phi-4, Gemma, Qwen-3b), streamlining signal extraction workflows and boosting throughput by 20x.",
          "Managed containerized microservice deployments and cluster orchestration using Docker and Kubernetes to support production workloads."
        ]
      },
      {
        title: "Software Engineering AMTS",
        period: "Nov 2023 - Jan 2025",
        type: "Full-time",
        description: [
          "Played a pivotal role in building the Customer Signals Intelligence (CSI) platform, which unifies customer interaction data from diverse channels like chat and voice, to generate actionable AI-driven insights like sentiment and contact reasons.",
          "Engineered a Kafka-based microservice to support 260M+ monthly events with real-time observability.",
          "Optimized system performance with caching strategies and established real-time monitoring via Grafana dashboards.",
          "Designed and deployed advanced prompt engineering solutions (ReAct, CoT) from proof-of-concept to production, optimizing LLM responses and reducing hallucinations.",
          "Built agent actions for automated case resolution and product intelligence, such as comparing reviews to enhance product descriptions."
        ]
      }
    ]
  },
  {
    company: "Gameskraft",
    location: "Bangalore, India",
    logo: (
      <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center overflow-hidden shrink-0 relative z-10">
        <img 
          src="/gameskraft.png" 
          alt="Gameskraft Logo" 
          className="w-full h-full object-contain p-1"
        />
      </div>
    ),
    roles: [
      {
        title: "Software Engineer",
        period: "Jul 2023 - Oct 2023",
        type: "Full-time",
        description: [
          "Designed and implemented scalable publish-subscribe patterns using WebSockets and Redis.",
          "Engineered a scalable WebSocket Connection Manager to handle concurrent TCP connections, enabling real-time market data broadcast from a single server instance to multiple clients."
        ]
      },
      {
        title: "Software Engineer Intern",
        period: "Jan 2023 - Jun 2023",
        type: "Full-time",
        description: [
          "Benchmarked binary serializers (Protobuf, Avro, Schemapack, MessagePack) to optimize inter-service communication, driving a data strategy that reduced payload size by 60% and significantly cut network bandwidth usage.",
        ]
      }
    ]
  },
  {
    company: "Arcesium",
    location: "Hyderabad, India",
    logo: (
      <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center overflow-hidden shrink-0 relative z-10">
        <img 
          src="/arcesium.png" 
          alt="Arcesium Logo" 
          className="w-full h-full object-contain p-1"
        />
      </div>
    ),
    roles: [
      {
        title: "Software Engineer Intern",
        period: "May 2022 - Jul 2022",
        type: "Full-time",
        description: [
          "Designed a versatile data extraction framework supporting APIs, Databases, and CSV, ensuring forward compatibility for various data manipulation tasks.",
          "Developed a self-servicing, highly configurable UI on top of the data extraction framework."
        ]
      }
    ]
  }
];

export const Experience = () => {
  return (
    <section id="work" className="py-24 relative bg-brand-navy/20 border-t border-white/5">
      <div className="container mx-auto px-6">
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
                      </div>
                      
                      <div className="self-start md:self-auto flex items-center text-slate-300 text-xs md:text-sm bg-white/5 px-3 py-1 rounded-full border border-white/5">
                        <Calendar size={14} className="mr-2" />
                        {role.period}
                      </div>
                    </div>

                    {/* Work Description Card */}
                    <div className="glass-card p-4 md:p-6 rounded-xl hover:bg-white/5 transition-colors group">
                      <ul className="space-y-3">
                        {role.description.map((item, i) => (
                          <li key={i} className="flex items-start text-slate-300 text-sm leading-relaxed">
                            {/* FIX: Removed 'bg-brand-blue/50' and 'group-hover:...'. Now it's solid brand-blue by default. */}
                            <span className="mt-1.5 mr-3 min-w-[6px] h-1.5 rounded-full bg-brand-blue shrink-0"></span>
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