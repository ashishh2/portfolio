'use client';
import { motion } from 'framer-motion';
import { Code2, ExternalLink, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: "Distributed Cache Layer",
    category: "Infrastructure",
    description: "A custom caching solution built to handle burst traffic during peak retail hours. Implemented consistent hashing and LRU eviction policies.",
    tags: ["Java", "Redis", "AWS"],
    link: "#"
  },
  {
    title: "Predictive Logistics Engine",
    category: "AI / ML",
    description: "Machine learning pipeline to predict shipping delays. Integrated with existing ERPs to provide real-time dashboard analytics.",
    tags: ["Python", "TensorFlow", "Docker"],
    link: "#"
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 border-t border-white/5">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-white mb-12 flex items-center"
        >
          <Code2 className="w-8 h-8 mr-4 text-brand-cyan" />
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group glass-card rounded-2xl p-8 relative overflow-hidden hover:-translate-y-2 transition-all duration-300"
            >
              {/* Hover Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-blue to-brand-cyan opacity-0 group-hover:opacity-20 blur transition-opacity duration-500" />
              
              {/* Content */}
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-cyan mb-2 block">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-bold text-white group-hover:text-brand-blue transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <a href={project.link} className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors">
                    <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-white" />
                  </a>
                </div>

                <p className="text-slate-400 mb-6 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 text-xs rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};