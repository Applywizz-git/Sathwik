import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Users, Trophy, Star } from 'lucide-react';

const AboutSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.05,
    rootMargin: '0px 0px -50px 0px',
    triggerOnce: true,
  });

  const stats = [
    { icon: Code2, value: 40, label: 'Projects Delivered', suffix: '+' },
    { icon: Users, value: 5, label: 'Years Experience', suffix: '+' },
    // { icon: Trophy, value: 98, label: 'Client Satisfaction', suffix: '%' },
    { icon: Star, value: 25, label: 'Technologies Mastered', suffix: '+' },
  ];

  const skills = [
    { name: 'Java 17 / Spring Boot', level: 95 },
    { name: 'React.js / Angular', level: 90 },
    { name: 'AWS / Kubernetes', level: 85 },
    { name: 'Apache Kafka / Messaging', level: 80 },
    { name: 'CI/CD (Jenkins, GitHub Actions)', level: 80 },
    { name: 'SQL & NoSQL Databases', level: 85 },
  ];

  const experience = [
    {
      year: '2025 - Present',
      title: 'Java Full Stack Developer',
      company: 'Liberty Mutual Insurance',
      description: 'Developing modular microservices, modernizing portals with React.js, integrating secure APIs, and deploying containerized workloads on AWS EKS with CI/CD automation.',
    },
    {
      year: '2024 - 2025',
      title: 'Java Full Stack Developer',
      company: 'Mercy Health',
      description: 'Refactored patient onboarding APIs, built Angular care plan tools, migrated scheduling to AWS serverless, and enabled FHIR-compliant patient data exchange.',
    },
    {
      year: '2022 - 2023',
      title: 'Java Full Stack Developer',
      company: 'Infosys Pvt Ltd',
      description: 'Built backend microservices with Spring Boot, Angular UI components, CI/CD automation, and cloud-based integrations for vendor invoice processing.',
    },
  ];


  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold gradient-text mb-6">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Java Full Stack Developer with 5+ years of experience delivering secure, scalable enterprise and cloud-native applications, integrating microservices, modern UIs, and cloud deployments.
          </p>
        </motion.div>

        {/* Stats Counter */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} delay={index * 0.1} inView={inView} />
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Story */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-display font-bold text-primary mb-4">
              My Journey in Tech
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              I commenced my career by developing logistics automation modules and progressed to delivering enterprise-grade microservices,
              modern user portals, and cloud-native solutions across the insurance, healthcare, and industrial sectors.
              Over the past 5+ years, I have led feature delivery, CI/CD automation, and secure API integrations that support high-availability systems.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              My mission is to engineer robust, scalable, and secure platforms that optimize business workflows and enhance user experiences. I place strong emphasis on clean code practices, automation, and staying at the forefront of advancements in cloud and microservices technology.
            </p>

            {/* Skills */}
            <div className="pt-8">
              <h4 className="text-xl font-semibold mb-6">Technical Skills</h4>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <SkillBar
                    key={skill.name}
                    skill={skill}
                    delay={index * 0.1}
                    inView={inView}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3 className="text-2xl font-display font-bold text-primary mb-8">
              Experience Timeline
            </h3>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-primary" />

              {experience.map((exp, index) => (
                <motion.div
                  key={exp.year}
                  className="relative pl-12 pb-12 last:pb-0"
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.8 + index * 0.2 }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-2 top-2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg" />

                  <div className="glass p-6 rounded-xl">
                    <div className="text-sm font-semibold text-primary mb-2">
                      {exp.year}
                    </div>
                    <h4 className="text-lg font-semibold mb-1">{exp.title}</h4>
                    <div className="text-accent font-medium mb-3">{exp.company}</div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

interface StatCardProps {
  stat: {
    icon: any;
    value: number;
    label: string;
    suffix: string;
  };
  delay: number;
  inView: boolean;
}

const StatCard = ({ stat, delay, inView }: StatCardProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (inView) {
      let start = 0;
      const increment = stat.value / 60; // 60 frames for smooth animation
      const timer = setInterval(() => {
        start += increment;
        if (start >= stat.value) {
          setCount(stat.value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16); // ~60fps

      return () => clearInterval(timer);
    }
  }, [inView, stat.value]);

  return (
    <motion.div
      className="text-center group cursor-hover"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.6 }}
      whileHover={{ scale: 1.05 }}
    >
      <div className="glass p-6 rounded-xl hover:shadow-primary transition-all duration-300">
        <stat.icon className="w-8 h-8 text-primary mx-auto mb-4 group-hover:animate-bounce" />
        <div className="text-3xl font-bold gradient-text mb-2">
          {count}{stat.suffix}
        </div>
        <div className="text-sm text-muted-foreground">{stat.label}</div>
      </div>
    </motion.div>
  );
};

interface SkillBarProps {
  skill: {
    name: string;
    level: number;
  };
  delay: number;
  inView: boolean;
}

const SkillBar = ({ skill, delay, inView }: SkillBarProps) => {
  return (
    <motion.div
      className="space-y-2"
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay, duration: 0.6 }}
    >
      <div className="flex justify-between items-center">
        <span className="font-medium">{skill.name}</span>
        <span className="text-sm text-muted-foreground">{skill.level}%</span>
      </div>
      <div className="skill-bar h-3">
        <motion.div
          className="skill-fill h-full"
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : {}}
          transition={{ delay: delay + 0.5, duration: 1.5, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
};

export default AboutSection;