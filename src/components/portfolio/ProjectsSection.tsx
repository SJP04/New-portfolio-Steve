import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "IOT-Enabled Pressure Monitoring And Alert System",
    category: "AI - IOT",
    description: "Developed an IoT-based wearable device using Arduino Uno and water sensors to monitor underwater pressure in real time and detect abnormalities Triggered audible alerts via a buzzer to enhance user safety.",
    tags: ["Iot", "Aurdino uno", "Aurdino Ide", "Sensors"],
    image: "/iot-project.png", 
    githubUrl: "https://github.com/SJP04/IOT-Project.git",
    featured: true,
  },
  {
    title: "Portfolio website",
    category: "Web Development",
    description: "During my internship at Next24tech Technology & services I designed and developed a responsive personal portfolio website to showcase my skills and expertise in web development.",
    tags: ["HTML", "CSS", "Javascript", "Bootstrap"],
    image: "/Portfolio-steve.png",
    liveUrl: "https://stevejachinpeniel.netlify.app/",
    githubUrl: "https://github.com/SJP04/Portfolio-steve.git",
    featured: true,
  },
  {
    title: "Voice-Controlled File Explorer",
    category: "Hardware",
    description: "A Python-based application that allows users to manage files and folders using voice commands and a graphical interface. It combines Tkinter for the GUI, SpeechRecognition for voice control, and pyttsx3 for text-to-speech feedback.",
    tags: ["Python", "Tkinter", "SpeechRecognition ", "pyttsx3"],
    image: "/hardware-project.png",
    githubUrl: "https://github.com/sms32/Voice-Controlled-File-Manager.git",
    featured: false,
  },
  {
    title: "Large Language Model for employee data management",
    category: "AI / ML",
    description: "Developed a Large Language Model (LLM) for employee data management and intelligent querying using Hugging Face transformers.",
    tags: ["Hugging Face", "transformers", "Python", "PyTorch"],
    image: "/Employee-llm.png",
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    title: "E-Learning website",
    category: "Web Development",
    description: "During my internship at Next24tech Technology & Services, I designed and developed a responsive e-learning website to enhance online education accessibility.",
    tags: ["HTML", " CSS", "JavaScript"],
    image: "/E-learning-website.png",
    githubUrl: "https://github.com/SJP04/E-learning-website.git",
    featured: false,
  },
  {
    title: "E-commerce-website",
    category: "Web Development",
    description: "Designed and developed a responsive E-commerce website to showcase my skills and expertise in web development.",
    tags: ["HTML", " CSS", "JavaScript"],
    image: "/E-commerce-website.png",
    githubUrl: "https://github.com/SJP04/E-commerce-website.git",
    featured: false,
  },
];

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-secondary/5 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Featured <span className="text-gradient-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Research thinking meets real-world implementation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group relative"
            >
              <div className="glass-card rounded-2xl overflow-hidden h-full hover:border-primary/30 transition-all duration-500 hover:shadow-lg hover:shadow-primary/10">
                {/* Project Image */}
                <div className="relative h-48 bg-muted overflow-hidden">
                   
                  {/* 1. ACTUAL IMAGE */}
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      // Fallback: If image fails to load, hide image and show the colorful placeholder div below
                      e.currentTarget.style.display = 'none';
                      // Target the next sibling (the div below) and make it flex
                      const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />

                  {/* 2. FALLBACK PLACEHOLDER (Hidden by default, shown if image fails) */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 hidden flex-col items-center justify-center">
                    <span className="text-4xl font-display font-bold text-primary/30">
                      {project.title.charAt(0)}
                    </span>
                  </div>
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    {project.liveUrl && (
                      <Button variant="hero" size="sm" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink size={16} />
                          Live Demo
                        </a>
                      </Button>
                    )}
                    <Button variant="heroOutline" size="sm" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github size={16} />
                        Code
                      </a>
                    </Button>
                  </div>

                  {/* Category badge */}
                  <Badge variant="skill" className="absolute top-4 left-4">
                    {project.category}
                  </Badge>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <ArrowUpRight 
                      className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" 
                      size={20} 
                    />
                  </div>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="glass" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Button variant="heroOutline" size="lg" asChild>
            <a href="https://github.com/SJP04" target="_blank" rel="noopener noreferrer">
              View All Projects
              <ArrowUpRight className="ml-2" size={18} />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};