'use client';
import { Github, ArrowUpRight } from 'lucide-react';

// --- CENTRALIZED ICON CONFIGURATION ---
// Add new mappings here. Ensure the SVG file exists in /public/technologies/
const techIcons: Record<string, string> = {
  "Python": "python.svg",
  "Gemini API": "gemini-ai.svg",
  "Pandas": "pandas.svg",
  "Jupyter": "jupyter.svg",
  "Java": "java.svg",
  "Spring Boot": "spring-boot.svg",
  "Kafka": "kafka.svg",
  "Docker": "docker.svg",
  "Kubernetes": "kubernetes.svg",
  "Redis": "redis.svg",
  "React": "react.svg",
  "Service Cloud": "service-cloud.svg",
  "PostgreSQL": "postgresql.svg",
  "Grafana": "grafana.svg",
  "Data Cloud": "data-cloud.png",
  "Spark": "spark.svg",
  "vLLM": "vllm.svg",
  "GPT 4": "openai.svg",
  "Gemma": "gemma.svg",
  "AWS EC2": "aws-ec2.svg",
  "Phi-4": "microsoft.svg",
  "Qwen-3b": "qwen.svg",
  "Bazel": "bazel.svg",
  "Jenkins": "jenkins.svg",
  "AWS S3": "aws-s3.svg",
  "Javascript": "javascript.svg",
  "Protobuf": "protobuf.svg",
  "AgentForce": "agentforce.png",
  "NumPy": "numpy.svg",
  "Scikit-learn": "scikit-learn.svg"
};

// --- SHARED INTERFACE ---
export interface Feature {
  title: string;
  category: string;
  description: string; // Supports whitespace-pre-line
  tags: string[];
  link?: string;
  icon?: React.ReactNode;
}

// Props extend the data interface + component-specific config
interface FeatureCardProps extends Feature {
  linkType?: 'github' | 'external'; 
  className?: string;
}

export const FeatureCard = ({
  title,
  category,
  description,
  tags,
  link,
  icon,
  linkType = 'external',
  className = '',
}: FeatureCardProps) => {
  
  return (
    <div className={`group relative bg-white rounded-2xl p-6 md:p-8 border border-blue-100 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col h-full ${className}`}>
      
      {/* Hover Gradient Strip */}
      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      <div className="relative z-10 flex flex-col h-full">
        
        {/* Header */}
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-3">
            {icon && (
              <div className="p-2 rounded-lg bg-blue-50 text-blue-600 shrink-0">
                {icon}
              </div>
            )}
            
            <div>
              {category && (
                <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 block mb-1">
                  {category}
                </span>
              )}
              <h3 className="text-lg md:text-xl font-bold text-slate-900 group-hover:text-brand-blue transition-colors leading-tight">
                {title}
              </h3>
            </div>
          </div>

          {link && (
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className="p-2 bg-slate-50 rounded-full hover:bg-blue-50 hover:text-blue-600 transition-colors text-slate-400 shrink-0 ml-2"
              aria-label={linkType === 'github' ? "View Source" : "View Details"}
            >
              {linkType === 'github' ? <Github size={20} /> : <ArrowUpRight size={20} />}
            </a>
          )}
        </div>

        {/* Description */}
        <div className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow whitespace-pre-line">
          {description}
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100 mt-auto">
          {tags.map((tag) => {
            const iconFile = techIcons[tag];

            if (iconFile) {
              return (
                <span
                  key={tag}
                  className="pl-2 pr-3 py-1 flex items-center gap-1.5 text-[11px] rounded-full bg-blue-50/50 text-slate-700 border border-blue-100 font-medium group-hover:bg-blue-50 group-hover:border-blue-200 transition-colors"
                >
                  <img
                    src={`/technologies/${iconFile}`}
                    alt={tag}
                    className="w-3.5 h-3.5 object-contain"
                  />
                  {tag}
                </span>
              );
            }

            return (
              <span
                key={tag}
                className="px-2.5 py-1 text-[11px] rounded-full bg-slate-50 text-slate-600 border border-slate-200 font-medium group-hover:border-blue-100 group-hover:bg-blue-50/50 group-hover:text-blue-700 transition-colors"
              >
                {tag}
              </span>
            );
          })}
        </div>

      </div>
    </div>
  );
};