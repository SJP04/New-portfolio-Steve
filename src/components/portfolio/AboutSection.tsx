import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Palette, Rocket, Users } from "lucide-react";

const stats = [
  { value: "5+", label: "Years Experience", icon: Code2 },
  { value: "50+", label: "Projects Completed", icon: Rocket },
  { value: "30+", label: "Happy Clients", icon: Users },
  { value: "10+", label: "Technologies", icon: Palette },
];

const expertise = [
  "Frontend Development",
  "Backend Architecture",
  "Database Design",
  "API Development",
  "UI/UX Design",
  "Cloud Deployment",
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            About <span className="text-gradient-primary">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Passion drives innovation. Here's what shapes my work.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - About Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-display font-semibold mb-4 text-foreground">
                Who I Am
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I'm a passionate full-stack developer with a keen eye for design and a love for 
                creating seamless digital experiences. With expertise in modern web technologies, 
                I transform complex ideas into elegant, user-friendly solutions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My approach combines technical excellence with creative problem-solving, 
                ensuring every project I work on delivers both functionality and aesthetic appeal.
              </p>
            </div>

            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-display font-semibold mb-4 text-foreground">
                What I Build
              </h3>
              <div className="flex flex-wrap gap-2">
                {expertise.map((item, index) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                    className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="glass-card p-6 rounded-2xl text-center group hover:border-primary/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="text-primary" size={24} />
                  </div>
                  <div className="text-3xl md:text-4xl font-display font-bold text-gradient-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
