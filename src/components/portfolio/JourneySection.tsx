import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap, Award, Code, Cpu, Smartphone, Rocket } from "lucide-react";

// ... (Your journeyItems array remains exactly the same) ...

const journeyItems = [
  {
    date: "Jul 2025",
    title: "Chair of District Priority Projects at Rac - Kits",
    description: "As the District Priority Projects Head, I am responsible for planning, coordinating, and executing district-level initiatives aligned with Rotary International’s annual themes and goals.",
    icon: Rocket,
    type: "work",
  },
  {
    date: "Jun 2025",
    title: "Artificial Intelligence and Machine Learning Intern at White And Box - Tech Products & Services",
    description: "Developed a Large Language Model (LLM) for employee data management and intelligent querying using Hugging Face transformers with fine-tuning.",
    icon: Briefcase,
    type: "work",
  },
  {
    date: "Oct 2024",
    title: "Voice-Controlled File Explorer",
    description: "Python-based application that combines voice recognition with a user-friendly graphical interface for seamless file and folder management. This project simplifies everyday file operations by enabling users to interact with their file system through intuitive voice commands or a modern GUI.",
    icon: Code,
    type: "work",
  },
  {
    date: "Jun 2024",
    title: "Photographer at Rac - Kits",
    description: "I currently work as a photographer for the Rotaract Club of Karunya University, where I am responsible for capturing the essence of various events, activities, and initiatives organized by the club.",
    icon: Smartphone,
    type: "work",
  },
  {
    date: "May 2024",
    title: "Web Development Intern at Next24Tech",
    description: "Developed and deployed three web projects: a personal portfolio, an e-commerce site, and an e-learning platform.Streamlined project workflows, enhancing overall efficiency. Built responsive user interfaces and Implemented interactive features",
    icon: Cpu,
    type: "work",
  },
  {
    date: "Apr 2024",
    title: "IOT-Enabled Pressure Monitoring And Alert System",
    description: "Developed an IoT-based wearable device using Arduino Uno and water sensors to monitor underwater pressure in real time and detect abnormalities Triggered audible alerts via a buzzer to enhance user safety.",
    icon: Code,
    type: "education",
  },
  {
    date: "Aug 2023",
    title: "Started B.Tech CSE (AI & ML)",
    description: "Joined Karunya Institute of Technology and Sciences as Computer Science Student specializing in Artificial Intelligence and Machine Learning and started exploring the transformative fields of AI and ML.",
    icon: GraduationCap,
    type: "milestone",
  },
];

export const JourneySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="journey" className="py-24 bg-muted/30 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            My <span className="text-gradient-primary">Journey</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Evolution through learning, building, and leading.
          </p>
        </motion.div>

        {/* CHANGED: max-w-3xl -> max-w-6xl for wider layout */}
        <div className="relative max-w-6xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-0.5" />

          {journeyItems.map((item, index) => {
            const Icon = item.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`relative flex items-start mb-12 ${
                  isEven ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background -translate-x-1/2 z-10" />

                {/* Content */}
                <div
                  className={`ml-16 md:ml-0 md:w-1/2 ${
                    isEven ? "md:pl-12" : "md:pr-12 md:text-right"
                  }`}
                >
                  <div
                    className={`glass-card p-6 rounded-2xl hover:border-primary/30 transition-all duration-300 ${
                      isEven ? "" : "md:ml-auto"
                    }`}
                  >
                    <div className={`flex items-center gap-3 mb-3 ${isEven ? "" : "md:justify-end"}`}>
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon className="text-primary" size={20} />
                      </div>
                      <span className="text-sm font-medium text-primary">{item.date}</span>
                    </div>
                    <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};