import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap, Award, Code } from "lucide-react";

const journeyItems = [
  {
    date: "2023 - Present",
    title: "Senior Full Stack Developer",
    description: "Leading development of enterprise-scale web applications with React, Node.js, and cloud technologies.",
    icon: Briefcase,
    type: "work",
  },
  {
    date: "2022",
    title: "Frontend Developer",
    description: "Built responsive web interfaces and implemented modern design systems for multiple clients.",
    icon: Code,
    type: "work",
  },
  {
    date: "2021",
    title: "Certified Cloud Developer",
    description: "Achieved AWS certification and expanded expertise in cloud architecture and deployment.",
    icon: Award,
    type: "achievement",
  },
  {
    date: "2020",
    title: "Bachelor's in Computer Science",
    description: "Graduated with honors, specializing in software engineering and web technologies.",
    icon: GraduationCap,
    type: "education",
  },
  {
    date: "2019",
    title: "Started Coding Journey",
    description: "Began learning web development, building first projects and discovering passion for technology.",
    icon: Code,
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

        <div className="relative max-w-3xl mx-auto">
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
