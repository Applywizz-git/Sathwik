import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUp, Heart } from 'lucide-react';

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    // {
    //   icon: Github,
    //   href: 'https://github.com',
    //   label: 'GitHub',
    //   color: 'hover:text-primary',
    // },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/sai-sathvik-loka-b1736615a/',
      label: 'LinkedIn',
      color: 'hover:text-accent',
    },
    {
      icon: Mail,
      href: 'mailto:Saisathvikl2544@gmail.com',
      label: 'Email',
      color: 'hover:text-violet',
    },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-card border-t border-border overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-primary rounded-full blur-3xl" />
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2">
              <div className="relative">
                <motion.div
                  className="w-8 h-8 bg-gradient-primary rounded-lg"
                  animate={{
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <div className="absolute inset-1 bg-background rounded-sm" />
                <div className="absolute inset-1.5 bg-gradient-primary rounded-sm" />
              </div>
              <span className="text-lg font-display font-bold gradient-text">
                Sai Sathvik Reddy Loka
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Java Full Stack Developer specializing in building secure, scalable applications
              with expertise in microservices, cloud-native solutions, and modern UI frameworks.
            </p>
          </motion.div>

          {/* Quick Links */}
          {/* <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold text-primary">Quick Links</h3>
            <nav className="space-y-2">
              {['Home', 'About', 'Projects', 'Contact'].map((link) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-300 text-sm cursor-hover"
                  whileHover={{ x: 5 }}
                >
                  {link}
                </motion.a>
              ))}
            </nav>
          </motion.div> */}
          <div>

          </div>

          {/* Contact Info */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold text-primary">Get in Touch</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
               <p>Fairborn, OH</p>
              <p>Saisathvikl2544@gmail.com</p>
              <p>+1 937 266 4356</p>
            </div>
          </motion.div>
        </div>

        {/* Social Links */}
        <motion.div
          className="flex justify-center space-x-6 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {socialLinks.map(({ icon: Icon, href, label, color }, index) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-12 h-12 bg-muted border border-border rounded-xl flex items-center justify-center text-muted-foreground ${color} transition-all duration-300 cursor-hover group`}
              whileHover={{
                scale: 1.1,
                boxShadow: "0 0 20px rgba(56, 178, 172, 0.3)",
                rotate: 5,
              }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
            >
              <Icon size={20} className="group-hover:animate-pulse" />
            </motion.a>
          ))}
        </motion.div>

        {/* Copyright */}
        <motion.div
          className="text-center pt-8 border-t border-border"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground text-sm flex items-center justify-center space-x-1">
            <span>© {currentYear} Sai Sathvik Reddy Loka. Made with</span> 
            <motion.span
              animate={{
                scale: [1, 1.2, 1],
                color: ["#38b2ac", "#ff6b6b", "#38b2ac"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Heart size={16} className="fill-current" />
            </motion.span>
            {/* <span>and lots of ☕</span> */}
          </p>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-primary text-primary-foreground rounded-xl shadow-lg cursor-hover z-30 group"
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: showScrollTop ? 1 : 0,
          scale: showScrollTop ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        whileHover={{
          scale: 1.1,
          boxShadow: "0 0 30px rgba(56, 178, 172, 0.4)"
        }}
        whileTap={{ scale: 0.9 }}
      >
        <ArrowUp size={20} className="mx-auto group-hover:animate-bounce" />
      </motion.button>
    </footer>
  );
};

export default Footer;