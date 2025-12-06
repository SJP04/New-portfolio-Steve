import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Full Stack",
    description: "A comprehensive e-commerce solution with real-time inventory management, secure payment processing, and AI-powered recommendations.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "/placeholder.svg",
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "Task Management App",
    category: "Web Application",
    description: "Collaborative project management tool with real-time updates, drag-and-drop functionality, and team analytics dashboard.",
    tags: ["TypeScript", "Next.js", "PostgreSQL", "WebSocket"],
    image: "/placeholder.svg",
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "AI Content Generator",
    category: "AI / ML",
    description: "Smart content generation platform leveraging GPT models for automated blog posts, social media content, and marketing copy.",
    tags: ["Python", "OpenAI", "React", "FastAPI"],
    image: "/placeholder.svg",
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    title: "Health & Fitness Tracker",
    category: "Mobile / Web",
    description: "Cross-platform fitness application with workout tracking, nutrition logging, and personalized wellness insights.",
    tags: ["React Native", "Firebase", "Charts.js", "PWA"],
    image: "/placeholder.svg",
    liveUrl: "#",
    githubUrl: "#",
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
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-4xl font-display font-bold text-primary/30">
                      {project.title.charAt(0)}
                    </span>
                  </div>
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <Button variant="hero" size="sm" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    </Button>
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
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              View All Projects
              <ArrowUpRight className="ml-2" size={18} />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
