'use client';
import { motion } from 'framer-motion';
import { Brain, BrickWallShield, Code2, Plane } from 'lucide-react';
import { FeatureCard, Feature } from '../ui/FeatureCard';

const projects: Feature[] = [
  {
    title: "Quantifying and Contextualizing Cultural Bias in LLM",
    category: "NLP Research",
    description: "Executed a full-stack study quantifying LLM cultural bias across 12 Hofstede-based personas. Engineered an 'LLM-as-a-Research-Analyst' pipeline using Python to automate qualitative scoring by transforming unstructured outputs into structured JSON. Visualized significant behavioral variance via a deployed dashboard, streamlining analysis across 18 workplace scenarios.",
    tags: ["Python", "Gemini API", "Pandas", "Javascript", "Prompt Engineering"],
    link: "https://github.com/ashishh2/llm-cultural-bias",
    icon: <Brain size={20} />
  },
  {
    title: "ML-Powered Network NIDS",
    category: "Security / ML",
    description: "Engineered a Network Intrusion Detection System utilizing the CIC-IDS2017 dataset (2.8M+ records). Leveraged Python’s ecosystem (Pandas, NumPy, Scikit-learn) to train and fine-tune a Random Forest classifier. The optimized model achieved over 95% accuracy in distinguishing malicious traffic, demonstrating robust threat classification capabilities.",
    tags: ["Python", "Pandas", "NumPy", "Scikit-learn", "Jupyter"],
    link: "https://github.com/ashishh2/ML-Powered-Network-Intrusion-Detection-System", 
    icon: <BrickWallShield size={20} />
  },
  {
    title: "Flight Ticket Booking System",
    category: "Systems",
    description: "Executed as an internship onboarding project, I engineered a full-stack flight reservation platform featuring dynamic pricing, search, and user management. Deployed on AWS S3 and EC2, I integrated Kafka pipelines for scalability and established real-time observability using Telegraf and Grafana to ensure robust performance.",
    tags: ["AWS EC2", "AWS S3", "Java", "Spring Boot", "Kafka", "React", "PostgreSQL"],
    icon: <Plane size={20} />
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-12 md:py-24 relative overflow-hidden">
        {/* Background */}
        <div className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none">
            <div className="absolute top-[25%] left-[-5%] w-[600px] h-[600px] rounded-full bg-blue-100/40 blur-[120px]" />
            <div className="absolute top-[35%] right-[-5%] w-[500px] h-[500px] rounded-full bg-cyan-100/40 blur-[100px]" />
        </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-slate-900 mb-12 flex items-center justify-center md:justify-start"
        >
          <Code2 className="w-8 h-8 mr-4 text-brand-blue" />
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="h-full"
            >
               <FeatureCard 
                  {...project}
                  linkType="github" // Overrides default to show GitHub icon
               />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};