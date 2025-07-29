import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import ParticleBackground from './ParticleBackground';

const HeroSection = () => {
  const [typewriterText, setTypewriterText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [glitchEffect, setGlitchEffect] = useState(false);

  const fullText = "Hi, I’m Sai Sathvik Reddy Loka";

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypewriterText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
        // Trigger glitch effect after typing completes
        setTimeout(() => {
          setGlitchEffect(true);
          setTimeout(() => setGlitchEffect(false), 300);
        }, 500);
      }
    }, 100);

    // Cursor blink effect
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 750);

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Parallax Background Layers */}
      <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      <ParticleBackground />

      {/* Floating Code Snippets */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-primary/10 font-mono text-sm"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          >
            {['const', 'function', 'return', 'useState', 'useEffect', 'import'][i]}
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            {/* Main Headline with Typewriter + Glitch */}
            <motion.h1
              className={`text-4xl md:text-5xl lg:text-6xl font-display font-bold ${glitchEffect ? 'animate-glitch' : ''
                }`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="gradient-text">
                {typewriterText}
                {showCursor && (
                  <span className="text-primary animate-pulse">|</span>
                )}
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-lg md:text-xl text-muted-foreground max-w-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Java Full Stack Developer specializing in building secure, scalable
              enterprise and cloud-native applications using Java 17, Spring Boot, React, Angular, and AWS.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <motion.a
                href="#contact"    // scrolls to contact section
                className="btn-cinematic cursor-hover group text-center"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(56, 178, 172, 0.4)"
                }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">Let's Connect</span>
              </motion.a>

              <motion.a
                href="/SaiSatwikResume.pdf"
                download="SaiSatwikResume.pdf"
                className="px-8 py-4 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 rounded-xl font-semibold cursor-hover flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Download Resume
              </motion.a>

            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex space-x-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 2 }}
            >
              {[
                // { Icon: Github, href: '#', label: 'GitHub' },
                { Icon: Linkedin, href: 'https://www.linkedin.com/in/sai-sathvik-loka-b1736615a/', label: 'LinkedIn' },
                { Icon: Mail, href: 'mailto:Saisathvikl2544@gmail.com', label: 'Email' },
              ].map(({ Icon, href, label }, index) => (
                <motion.a
                  key={label}
                  href={href}
                  className="w-12 h-12 bg-card border border-border rounded-xl flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300 cursor-hover group"
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0 0 20px rgba(56, 178, 172, 0.3)"
                  }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.2 + index * 0.1 }}
                >
                  <Icon size={20} className="group-hover:animate-pulse" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <motion.div
              className="relative w-64 h-64 lg:w-80 lg:h-80"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.5 }}
            >
              <motion.div
                className="floating w-full h-full sm:mb-64 lg:mb-0"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="relative">
                  <div className="w-100 h-100 lg:w-120 lg:h-120 rounded-full bg-gradient-primary p-1">
                    <img
                      src="/sathvik-photo.png"
                      alt="Professional headshot"
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  {/* Orbit rings */}
                  <motion.div
                    className="absolute inset-0 border-2 border-primary/30 rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    style={{ scale: 1.2 }}
                  />
                  <motion.div
                    className="absolute inset-0 border border-accent/30 rounded-full"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                    style={{ scale: 1.4 }}
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
        >
          <motion.div
            className="cursor-hover"
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <ArrowDown className="text-primary" size={24} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;