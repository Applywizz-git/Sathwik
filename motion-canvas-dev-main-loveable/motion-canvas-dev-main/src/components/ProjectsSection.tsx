import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';
import policyImg from "../assets/Policy Microservices & Portal Modernization.png";
import healthcareImg from "../assets/Healthcare Patient Onboarding & Scheduling.png";
import vendorImg from "../assets/Vendor Invoice Processing Platform.png";
import logisticsImg from "../assets/Logistics Automation & Reporting System.png";
import portalImg from "../assets/Online Healthcare Portal.png";


const ProjectsSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      id: 1,
      title: "Policy Microservices & Portal Modernization",
      description:
        "Designed and developed modular microservices for policy quoting, claims validation, and renewals using Java 17 and Spring Boot, while modernizing customer and agent portals with React.js and Tailwind CSS. Deployed scalable workloads on AWS EKS and integrated Kafka-based real-time streaming for faster underwriting decisions.",
      image: policyImg,
      technologies: ["Java 17", "Spring Boot", "React.js", "AWS EKS", "Kafka"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      id: 2,
      title: "Healthcare Patient Onboarding & Scheduling",
      description:
        "Refactored patient onboarding APIs using Spring Boot, JPA, and Hibernate, and built Angular-based interactive care plan tools with RxJS streams. Migrated appointment scheduling to AWS Lambda and API Gateway, cutting hosting costs and enabling real-time appointment slot sync with DynamoDB and Redis.",
      image: healthcareImg,
      technologies: ["Spring Boot", "Angular", "AWS Lambda", "DynamoDB", "Redis"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      id: 3,
      title: "Vendor Invoice Processing Platform",
      description:
        "Built backend microservices using Java 11, Spring Boot, and MongoDB for processing millions of vendor invoices monthly, reducing reconciliation errors by over 40%. Created modular Angular UI components and Node.js proxy services, improving response reliability and asynchronous data exchange under peak loads.",
      image: vendorImg,
      icon: "📄",
      technologies: ["Java 11", "Spring Boot", "Angular", "Node.js", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      id: 4,
      title: "Logistics Automation & Reporting System",
      description:
        "Developed logistics automation modules using Java EE and Spring MVC for shipment tracking and dispatch, integrating Kafka and JMS for real-time data sync. Designed dashboards using JSP and AJAX to monitor truck turnaround times and implemented JasperReports for automated reporting.",
      image: logisticsImg,
      icon: "🚚",
      technologies: ["Java EE", "Spring MVC", "Kafka", "JMS", "JasperReports"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      id: 5,
      title: "Online Healthcare Portal",
      description:
        "Developed and deployed a cloud-native healthcare portal using Spring Boot and Angular, enabling appointment booking, prescription access, and record tracking. Implemented JWT-based access control, AWS EC2/RDS/S3 integration, and Kafka alerts for real-time updates.",
      image: portalImg,
      icon: "🏥",
      technologies: ["Spring Boot", "Angular", "AWS EC2", "RDS", "Kafka"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
  ];


  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-40 left-20 w-64 h-64 bg-violet rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold gradient-text mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work, featuring modern web applications built with cutting-edge technologies.
          </p>
        </motion.div>

        {/* Project Carousel */}
        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Buttons */}
          <motion.button
            onClick={prevProject}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-card border border-border rounded-xl flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300 cursor-hover group"
            whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(56, 178, 172, 0.3)" }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5 }}
          >
            <ChevronLeft size={20} className="group-hover:animate-pulse" />
          </motion.button>

          <motion.button
            onClick={nextProject}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-card border border-border rounded-xl flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300 cursor-hover group"
            whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(56, 178, 172, 0.3)" }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5 }}
          >
            <ChevronRight size={20} className="group-hover:animate-pulse" />
          </motion.button>

          {/* Project Cards */}
          <div className="overflow-hidden">
            <motion.div
              className="flex"
              animate={{ x: `-${currentProject * 100}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {projects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  inView={inView}
                />
              ))}
            </motion.div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {projects.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentProject(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentProject ? 'bg-primary' : 'bg-muted'
                  }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>

        {/* All Projects Grid */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3 className="text-2xl font-display font-bold text-center mb-12">
            More Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(2).map((project, index) => (
              <motion.div
                key={project.id}
                className="glass p-6 rounded-xl group cursor-hover tilt-3d"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1 + index * 0.2 }}
                whileHover={{ y: -10 }}
              >
                <div className="text-4xl mb-4 group-hover:animate-bounce">
                  {project.icon}
                </div>
                <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  {/* <a
                    href={project.liveUrl}
                    className="text-primary hover:text-accent transition-colors cursor-hover"
                  >
                    <ExternalLink size={18} />
                  </a>
                  <a
                    href={project.githubUrl}
                    className="text-primary hover:text-accent transition-colors cursor-hover"
                  >
                    <Github size={18} />
                  </a> */}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    description: string;
    image: string;
    technologies: string[];
    liveUrl: string;
    githubUrl: string;
    featured: boolean;
  };
  index: number;
  inView: boolean;
}

const ProjectCard = ({ project, index, inView }: ProjectCardProps) => {
  return (
    <motion.div
      className="w-full flex-shrink-0 px-4 lg:px-64"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ delay: index * 0.2, duration: 0.6 }}
    >
      <div className="bg-card border border-border rounded-2xl overflow-hidden group cursor-hover tilt-3d">
        {/* Project Image/Icon */}
        <div className="w-full aspect-[16/9] overflow-hidden group-hover:scale-105 transition-transform duration-500">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>


        {/* Project Content */}
        <div className="p-8">
          <div className="flex items-start justify-between mb-4">
            <h3 className="text-2xl font-display font-bold group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            {project.featured && (
              <span className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-md font-medium">
                Featured
              </span>
            )}
          </div>

          <p className="text-muted-foreground mb-6 leading-relaxed">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-lg font-medium"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          {/* <div className="flex space-x-4">
            <motion.a
              href={project.liveUrl}
              className="flex-1 btn-cinematic text-center cursor-hover"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <ExternalLink size={18} className="inline mr-2" />
              Live Demo
            </motion.a>
            <motion.a
              href={project.githubUrl}
              className="w-12 h-12 bg-muted border border-border rounded-xl flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300 cursor-hover"
              whileHover={{ 
                scale: 1.1,
                boxShadow: "0 0 20px rgba(56, 178, 172, 0.3)"
              }}
              whileTap={{ scale: 0.9 }}
            >
              <Github size={20} />
            </motion.a>
          </div> */}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectsSection;