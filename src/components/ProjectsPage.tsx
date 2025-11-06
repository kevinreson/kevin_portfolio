import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Eye } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Financial infrastructure to grow your revenue",
    description: "Stripe is a leading fintech platform that enables businesses to accept payments, manage subscriptions, and power online transactions globally.",
    image: "/Images/1.png",
    tech: ["Mobile responsive UI", "React Native (optional)", "Touch interaction design", "React", "Node.js"],
    liveUrl: "https://stripe.com/",
    githubUrl: "https://github.com/pavithraKNRajan/Tours-Travel-frontend",
  },

  {
    id: 2,
    title: "Pitch is a collaborative presentation platform",
    description: "A virtual reality project that lets users explore a college campus online using 360° images, arrows to move around, and a chatbot for help.",
    image: "/Images/2.png",
    tech: ["Responsive web design", "Mobile SDKs", "Security & encryption", "React","Typescript", "Database"],
    liveUrl: "https://pitch.com/",
    githubUrl: "https://github.com/pavithraKNRajan/Virtual-campus-tour",
  },

  {
    id: 3,
    title: "Innovative smartphone by Apple",
    description: "Pitch is a modern presentation and collaboration tool that helps teams create, design, and share beautiful decks effortlessly in the cloud.",
    image: "/Images/3.png",
    tech: ["React", "Mobile-first design", "Native features for web", "Performance optimization"],
    liveUrl: "https://www.apple.com/iphone/",
    githubUrl: "https://github.com/pavithraKNRajan/Pavithra-Portfolio",
  },
  {
    id: 4,
    title: "Modern connected healthcare platform",
    description: "Carbon Health is a healthcare company that provides easy access to medical care both online and in-person.",
    image: "/Images/4.png",
    tech: ["Mobile app development","React",  "Telemedicine features", "Security & HIPAA compliance"],
    liveUrl: "https://carbonhealth.com/",
    githubUrl: "https://github.com/pavithraKNRajan/Pavithra-Portfolio",
  },
  {
    id: 5,
    title: "No-code tool for building responsive websites",
    description: "Framer is a powerful web design platform that allows creators to build and publish high-end interactive websites without writing code.",
    image: "/Images/5.png",
    tech: ["Mobile preview", "Responsive design", "Touch & gesture support", "React","Database","Security"],
    liveUrl: "https://www.framer.com/",
    githubUrl: "https://github.com/pavithraKNRajan/Pavithra-Portfolio",
  },
];

interface ProjectsPageProps {
  onSectionChange: (section: string) => void;
}

export const ProjectsPage = ({ onSectionChange }: ProjectsPageProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 100, opacity: 0, rotateX: -15 },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section className="min-h-screen py-20 px-6">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
            My Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Here are some of my recent projects showcasing my skills in
            React Native, Flutter, Node.js, UI/UX design and modern technologies.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{
                scale: 1.02,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              className="glass-card group cursor-pointer overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="hero" size="icon" className="h-8 w-8">
                      <Eye className="h-4 w-4" />
                    </Button>
                  </a>
                </div>

              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button variant="neon" size="sm" className="w-full">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
                  </a>
                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="text-center mt-12"
        >
          <Button
            variant="secondary"
            size="lg"
            onClick={() => onSectionChange("contact")}
            className="group"
          >
            Contact to me.
            <ExternalLink className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};
