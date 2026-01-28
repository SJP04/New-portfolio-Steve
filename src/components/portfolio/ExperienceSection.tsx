import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    company: "Rotaract Club of Karunya University.",
    position: "Chair of District Priority Projects",
    location: "Coimbatore, India",
    period: "JUNE 2024 - Present",
    description: "As the District Priority Projects Head, I am responsible for 📋 planning, 🤝 coordinating, and 🚀 executing district-level initiatives aligned with Rotary International’s annual themes and goals.",
    technologies: ["Team Work", "Social Service", "Rotract", "Fostering collaboration", "volunteering"],
  },
  {
    company: "White And Box - Tech Products & Services.",
    position: "Artificial Intelligence and Machine Learning Intern",
    location: "Bangaluru, India",
    period: "JUNE 2025 - JULY 2025",
    description: "Developed a Large Language Model (LLM) for employee data management and intelligent querying using Hugging Face transformers with fine-tuning.",
    technologies: ["Hugging Face", "Transformer", "Python", "Pytorch"],
  },
  {
    company: "Next24tech Technology & Services LLP.",
    position: "Web Development Intern",
    location: "Coimbatore, India",
    period: "MAY 2024 - JULY 2024",
    description: "Developed and deployed three web projects: a personal portfolio, an e-commerce site, and an e-learning platform. Built responsive user interfaces and integrated dynamic content sections.",
    technologies: ["JavaScript", "HTML", "CSS", "Netlify", "Bootstrap"],
  },
];

export const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -translate-y-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Work <span className="text-gradient-primary">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional journey through impactful roles and projects.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.company}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="glass-card p-6 md:p-8 rounded-2xl hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-display font-semibold text-foreground">
                    {experience.position}
                  </h3>
                  <div className="flex items-center gap-2 mt-2 text-primary">
                    <Building2 size={18} />
                    <span className="font-medium">{experience.company}</span>
                  </div>
                </div>
                <div className="flex flex-col gap-1 text-sm text-muted-foreground md:text-right">
                  <div className="flex items-center gap-2 md:justify-end">
                    <Calendar size={16} />
                    <span>{experience.period}</span>
                  </div>
                  <div className="flex items-center gap-2 md:justify-end">
                    <MapPin size={16} />
                    <span>{experience.location}</span>
                  </div>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {experience.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg bg-primary/10 text-primary text-sm font-medium border border-primary/20"
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
