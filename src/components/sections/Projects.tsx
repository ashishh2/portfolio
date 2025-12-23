'use client';
import { motion } from 'framer-motion';
import { Github, Code2 } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
}

const projects: Project[] = [
  {
    title: "Cultural Bias Analyzer for LLMs",
    description: "An analytical tool leveraging the Gemini API to quantify and visualize cultural biases in Large Language Models. Features a Python-based pipeline for prompt generation, response analysis, and bias scoring across varying demographic contexts.",
    tech: ["Python", "Gemini API", "Pandas", "Data Visualization", "NLP"],
    github: "https://github.com/yourusername/bias-analyzer",
  },
  {
    title: "ML-Powered Network Intrusion Detection",
    description: "A robust NIDS capable of detecting malicious network traffic in real-time. Utilizes ensemble learning techniques and Scikit-learn to classify packet signatures with 98% accuracy, reducing false positives significantly.",
    tech: ["Python", "Scikit-learn", "Jupyter", "Network Security", "ML"],
    github: "https://github.com/yourusername/nids-project", 
  },
  {
    title: "Customer Signals Intelligence (CSI)",
    description: "The architectural backbone for Salesforce's signal extraction platform. Unifies diverse interaction data streams to generate actionable insights using distributed microservices and real-time Kafka pipelines.",
    tech: ["Java", "Spring Boot", "Kafka", "Docker", "Kubernetes"],
  }
];

export const Projects = () => {
  return (
    <section 
      id="projects" 
      className="py-12 md:py-24 relative overflow-hidden"
    >
        {/* FIX: Centered Hue Positions
            - Top buffer (~25%) is white -> Smooth transition from Education
            - Bottom buffer (~30%) is white -> Smooth transition to Achievements
            - Blobs float safely in the middle vertical band
        */}
        <div className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none">
            {/* Blob 1: Center-Left (Blue) */}
            <div className="absolute top-[25%] left-[-5%] w-[600px] h-[600px] rounded-full bg-blue-100/40 blur-[120px]" />
            
            {/* Blob 2: Center-Right (Cyan) */}
            <div className="absolute top-[35%] right-[-5%] w-[500px] h-[500px] rounded-full bg-cyan-100/40 blur-[100px]" />
        </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-slate-900 mb-12 flex items-center justify-center md:justify-start"
        >
          <Code2 className="w-8 h-8 mr-4 text-brand-blue" />
          Featured Projects
        </motion.h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative h-full flex flex-col bg-white/70 backdrop-blur-xl rounded-2xl p-8 border border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-transform duration-300 hover:-translate-y-2"
            >
              
              {/* Card Header: Title & Github Link */}
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-brand-blue transition-colors pr-4">
                    {project.title}
                </h3>

                {project.github && (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-slate-400 hover:text-slate-900 transition-colors shrink-0"
                  >
                    <Github size={22} />
                  </a>
                )}
              </div>

              {/* Description */}
              <p className="text-slate-600 text-sm leading-relaxed flex-grow">
                {project.description}
              </p>

              {/* Divider Line */}
              <div className="h-px bg-slate-200 my-6 w-full border-0"></div>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((tech) => (
                  <span 
                    key={tech} 
                    className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};