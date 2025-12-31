'use client';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, Code2, Cpu, Brain, Database, Layout, Bot, ChartArea } from 'lucide-react';
import { FeatureCard, Feature } from '../ui/FeatureCard';

interface Role {
  title: string;
  period: string;
  features: Feature[];
}

interface CompanyExperience {
  company: string;
  location: string;
  logo: React.ReactNode;
  roles: Role[];
  layout?: 'list' | 'grid'; // NEW: Controls role layout (vertical stack vs side-by-side)
}

// --- Data ---
const experiences: CompanyExperience[] = [
  {
    company: "Salesforce",
    location: "Bangalore, India",
    layout: "list",
    logo: (
      <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center overflow-hidden shrink-0 relative z-10 border border-slate-100 shadow-sm">
        <img src="/salesforce.svg" alt="Salesforce" className="w-full h-full object-contain p-1" />
      </div>
    ),
    roles: [
      {
        title: "Software Engineering MTS",
        period: "Feb 2025 - Present",
        features: [
            {
                title: "Data Kit Deployment Orchestration",
                category: "Backend Engineering",
                description: "Re-architected the Data Kit Deployment Orchestration Workflow, transitioning from a resource-intensive polling model to a scalable event-driven architecture. To enhance maintainability, I designed a task registry leveraging the Strategy Pattern, allowing for modular execution of post-deployment logic. This modernization drastically optimized system performance, reducing API overhead by 40x and accelerating notification delivery speeds by 97.5%.",
                tags: ["Java", "Spring Boot", "PostgreSQL"],
                icon: <Cpu size={20} />
            },
            {
                title: "Semantic Clustering (HDBSCAN)",
                category: "Machine Learning",
                description: "Engineered a scalable clustering and labeling pipeline integrated directly into Data Cloud via Spark UDFs. This solution semantically groups complex contact reasons and generates descriptive labels for each cluster, exposing advanced logic through standard Data Transforms. This architecture directly bridged the gap between raw data and actionable product analytics.",
                tags: ["AWS S3", "Java", "Python", "Spark", "Bazel", "Embeddings", "Prompt Engineering"],
                icon: <Brain size={20} />
            },
            {
                title: "SLM Analysis and Integration",
                category: "Gen AI",
                description: "Architected a robust evaluation framework to benchmark Small Language Models (SLMs) including Phi-4, Gemma, and Qwen-3b against a GPT-4 baseline for the Customer Signals Intelligence pipeline. I deployed high-performance inference endpoints using vLLM on Dockerized AWS EC2 (g6e.xlarge, Deep Learning Base OSS Nvidia Driver GPU AMI) instances. Leveraging an LLM-as-a-Judge (GPT-4.1) methodology, I rigorously measured critical trade-offs across performance scores, win+tie rates, consistency, and latency to validate model feasibility.",
                tags: ["Python", "AWS EC2", "Docker", "vLLM", "Phi-4", "Gemma", "Qwen-3b"],
                icon: <ChartArea size={20} />
            },
            {
                title: "Intelligent Signal Extraction and AI Agent Actions",
                category: "Backend Engineering / Prompt Engineering",
                description: "Engineered advanced ReAct and Chain-of-Thought (CoT) prompt templates to significantly reduce hallucinations while accurately extracting high-value signals like sentiment and contact reasons. Building on this foundation, I developed AgentForce Actions to drive automated case resolution and intelligent product description enhancement. To maximize business value, I extended platform extensibility, enabling customers to define and extract custom signals, persisting them as structured JSON within Data Cloud DMOs.",
                tags: ["Java", "Spring Boot", "Data Cloud", "LLM"],
                icon: <Bot size={20} />
            },
        ]
      },
      {
        title: "Software Engineering AMTS",
        period: "Nov 2023 - Jan 2025",
        features: [
            {
                title: "Customer Signals Intelligence",
                category: "Gen AI / Distributed Systems",
                description: "Played a pivotal role in architecting Customer Signals Intelligence (CSI) from the ground up. This platform addresses a critical business need: unifying fragmented customer interactions across Case, Voice, Chat, and other channels into a single, cohesive narrative. By harnessing the Generative AI capabilities of the AgentForce platform, we didn't just build a dashboard; we built a proactive engine that empowers agents to anticipate needs before they arise, setting a new standard for modern customer engagement.",
                tags: ["Service Cloud", "LLM", "Microservices"],
                link: "https://help.salesforce.com/s/articleView?id=service.concept_cxi.htm&type=5", 
                icon: <Layout size={20} />
            },
            {
                title: "Scalable Event Driven Systems",
                category: "Distributed Systems",
                description: "Designed a scalable microservice architecture capable of handling 260M+ monthly events via Kafka. I optimized the system for high availability by leveraging PostgreSQL for reliable storage and Redis for low-latency caching, effectively removing I/O bottlenecks. The infrastructure was delivered via containerized deployments, supported by Grafana dashboards for real-time monitoring and issue resolution.",
                tags: ["Java", "Spring Boot", "Kafka", "PostgreSQL", "Redis", "Docker", "Kubernetes"],
                icon: <Database size={20} />
            }
        ]
      }
    ]
  },
  {
    company: "Gameskraft",
    location: "Bangalore, India",
    layout: "grid",
    logo: (
      <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center overflow-hidden shrink-0 relative z-10 border border-slate-100 shadow-sm">
        <img src="/gameskraft.png" alt="Gameskraft" className="w-full h-full object-contain p-1" />
      </div>
    ),
    roles: [
      {
        title: "Software Engineer",
        period: "Jul 2023 - Oct 2023",
        features: [
            {
                title: "Real-time Pub/Sub System",
                category: "Scalability / Real-time Systems",
                description: "Designed a scalable solution for real-time market data delivery leveraging a Redis-backed publish-subscribe pattern. I implemented a robust WebSocket Connection Manager to optimize concurrent TCP connection handling, allowing a single server instance to broadcast high-frequency updates to multiple clients with minimal latency.",
                tags: ["Java", "Spring Boot", "Redis", "WebSockets"],
                icon: <Cpu size={20} />
            }
        ]
      },
      {
        title: "Software Engineer Intern",
        period: "Jan 2023 - Jun 2023",
        features: [
            {
                title: "Serialization Benchmarking",
                category: "Optimization",
                description: "Benchmarked binary serializers (Protobuf, Avro, Schemapack, MessagePack) to optimize inter-service communication, driving a data strategy that reduced payload size by 60% and significantly cut network bandwidth usage.",
                tags: ["Javascript", "Protobuf"],
                icon: <Code2 size={20} />
            }
        ]
      }
    ]
  },
  {
    company: "Arcesium",
    location: "Hyderabad, India",
    layout: "grid",
    logo: (
      <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center overflow-hidden shrink-0 relative z-10 border border-slate-100 shadow-sm">
        <img src="/arcesium.png" alt="Arcesium" className="w-full h-full object-contain p-1" />
      </div>
    ),
    roles: [
      {
        title: "Software Engineer Intern",
        period: "May 2022 - Jul 2022",
        features: [
            {
                title: "Data Extraction Framework",
                category: "Backend Engineering",
                description: "Designed a versatile data extraction framework supporting APIs, Databases, and CSV, ensuring forward compatibility for various data manipulation tasks.",
                tags: ["Python", "Pandas", "API Design"],
                icon: <Database size={20} />
            }
        ]
      }
    ]
  }
];

export const ExperienceV2 = () => {
  return (
    <section id="work" className="pt-12 pb-12 md:py-24 relative overflow-hidden">
        {/* Background */}
        <div className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none">
            <div className="absolute top-[5%] left-[-5%] w-[600px] h-[600px] rounded-full bg-blue-100/40 blur-[120px]" />
            <div className="absolute top-[40%] right-[-10%] w-[500px] h-[500px] rounded-full bg-cyan-100/40 blur-[100px]" />
        </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-slate-900 mb-12 md:mb-16 flex items-center justify-center md:justify-start"
        >
          <Briefcase className="w-8 h-8 mr-4 text-brand-blue" />
          Experience
        </motion.h2>

        <div className="space-y-16 md:space-y-24">
          {experiences.map((exp, companyIndex) => (
            <div key={companyIndex} className="relative">
              
              {/* Company Header */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 mb-8 md:mb-12 border-b border-slate-200 pb-6"
              >
                 {exp.logo}
                 <div>
                    <h3 className="text-2xl font-bold text-slate-900">{exp.company}</h3>
                    <p className="text-slate-500 text-sm">{exp.location}</p>
                 </div>
              </motion.div>

              {/* ROLES CONTAINER: Conditional Layout */}
              <div className={exp.layout === 'grid' ? "grid grid-cols-1 md:grid-cols-2 gap-8" : "space-y-12"}>
                {exp.roles.map((role, roleIndex) => (
                  <div key={roleIndex} className="flex flex-col h-full">
                    
                    {/* Role Title & Date */}
                    <div className="flex flex-col xl:flex-row xl:items-center justify-between mb-6 gap-2">
                        <h4 className="text-lg md:text-xl font-bold text-slate-800 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-brand-blue shrink-0"></span>
                            {role.title}
                        </h4>
                        <span className="inline-flex items-center text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200 text-xs font-medium w-fit whitespace-nowrap">
                            <Calendar size={12} className="mr-1.5" />
                            {role.period}
                        </span>
                    </div>

                    {/* FEATURES GRID */}
                    {/* If Parent is Grid: Force single column for cards to avoid squishing */}
                    {/* If Parent is List: Allow 2 columns for cards */}
                    <div className={exp.layout === 'grid' 
                        ? "grid grid-cols-1 gap-6 flex-grow" 
                        : "grid grid-cols-1 md:grid-cols-2 gap-6"
                    }>
                        {role.features.map((feature, featureIndex) => (
                             <motion.div
                                key={featureIndex}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: featureIndex * 0.1 }}
                                className="h-full"
                             >
                                <FeatureCard 
                                    {...feature} 
                                    linkType="external"
                                />
                             </motion.div>
                        ))}
                    </div>

                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};