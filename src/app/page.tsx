"use client";

import React, { useEffect } from "react";
import Hero from "./components/Hero";
import ProjectCard from "./components/ProjectCard";
import Title from "./components/Title";
import ContactForm from "./components/ContactForm";
import { initScrollAnimations } from "./utils/scrollAnimations";
import {
  Code,
  Palette,
  Smartphone,
  Globe,
  Database,
  Zap,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Instagram
} from "lucide-react";

export default function Home() {
  useEffect(() => {
    // Initialize scroll animations
    const observer = initScrollAnimations();

    // Fallback: Make sure cards are visible after a delay
    const fallbackTimer = setTimeout(() => {
      const cards = document.querySelectorAll('.scroll-animate');
      cards.forEach(card => {
        if (!card.classList.contains('animate')) {
          card.classList.add('animate');
        }
      });
    }, 2000);

    return () => {
      if (observer) {
        observer.disconnect();
      }
      clearTimeout(fallbackTimer);
    };
  }, []);

  const projects = [
    {
      title: "Toolstation.nl",
      description: "Developed responsive UI components and implemented pixel-perfect designs for the Toolstation project with focus on performance and user experience. Achieved 10% sales growth through improved user interface.",
      image: "/images/ts.webp",
      liveUrl: "https://toolstation.nl/",
      tags: ["Responsive Design", "UI Components", "Performance", "User Experience"]
    },
    {
      title: "Vaah.dev",
      description: "Built and maintained modern, responsive UI components for various modules on the vaahh.dev platform with exceptional performance metrics. Achieved 100% Lighthouse score.",
      image: "/images/vaah.webp",
      liveUrl: "https://vaah.dev/store/",
      githubUrl: "https://github.com/webreinvent/vaahstore",
      tags: ["React", "UI Components", "Lighthouse", "Performance"]
    },
    {
      title: "Webreinvent.com",
      description: "Implemented modern, responsive UI for the WRI site, focusing on performance and visual consistency with the latest Nuxt.js framework. Successfully upgraded to Nuxt3.",
      image: "/images/webreinvent.webp",
      liveUrl: "https://webreinvent.com/",
      tags: ["Nuxt.js", "Vue.js", "Responsive Design", "Modern UI"]
    }
  ];

  const skills = [
    { name: "Frontend Development", icon: <Code className="w-5 h-5 sm:w-6 sm:h-6" />, level: 90 },
    { name: "UI/UX Design", icon: <Palette className="w-5 h-5 sm:w-6 sm:h-6" />, level: 85 },
    { name: "Responsive Design", icon: <Smartphone className="w-5 h-5 sm:w-6 sm:h-6" />, level: 95 },
    { name: "Web Development", icon: <Globe className="w-5 h-5 sm:w-6 sm:h-6" />, level: 88 },
    { name: "Database Design", icon: <Database className="w-5 h-5 sm:w-6 sm:h-6" />, level: 75 },
    { name: "Performance Optimization", icon: <Zap className="w-5 h-5 sm:w-6 sm:h-6" />, level: 80 }
  ];

  const contactInfo = [
    { icon: <Mail className="w-4 h-4 sm:w-5 sm:h-5" />, label: "Email", value: "parthinteract@gmail.com", href: "mailto:parthinteract@gmail.com" },
    { icon: <Phone className="w-4 h-4 sm:w-5 sm:h-5" />, label: "Phone", value: "+91 7876800210", href: "tel:+917876800210" },
    { icon: <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />, label: "Location", value: "Kangra, H.P, India", href: "#" }
  ];

  const socialLinks = [
    { icon: <Github className="w-4 h-4 sm:w-5 sm:h-5" />, label: "GitHub", href: "https://github.com/parth2880/" },
    { icon: <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />, label: "LinkedIn", href: "https://www.linkedin.com/in/parthsharma2880/" },
    { icon: <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />, label: "Instagram", href: "https://www.instagram.com/parthsharma6505/" }
  ];

  return (
    <div className="space-y-20 sm:space-y-24 lg:space-y-32">
      {/* Hero Section */}
      <Hero />

      {/* Projects Section */}
      <section id="projects" className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Title>Featured Projects</Title>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                image={project.image}
                liveUrl={project.liveUrl}
                githubUrl={project.githubUrl}
                tags={project.tags}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-12 sm:py-16 lg:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Title>Skills & Expertise</Title>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="bg-card border border-border rounded-xl p-4 sm:p-6 hover-lift scroll-animate"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="p-2 sm:p-3 bg-primary/10 rounded-lg text-primary">
                    {skill.icon}
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-foreground">{skill.name}</h3>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs sm:text-sm text-muted-foreground">
                    <span>Proficiency</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-1.5 sm:h-2">
                    <div
                      className="bg-primary h-1.5 sm:h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about-me" className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-4 sm:space-y-6 scroll-animate">
              <Title>About Me</Title>
              <div className="space-y-3 sm:space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm a passionate web designer and frontend developer based in Kangra, H.P, India.
                  With a keen eye for design and a love for clean, efficient code, I create digital
                  experiences that not only look great but also perform exceptionally.
                </p>
                <p>
                  My journey in web development started with curiosity and has evolved into a
                  professional passion. I specialize in creating responsive, user-friendly websites
                  that combine modern design principles with cutting-edge technologies.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new design trends, contributing
                  to open-source projects, or sharing knowledge with the developer community.
                </p>
              </div>
            </div>
            <div className="relative scroll-animate">
              <div className="bg-gradient-to-br from-primary/10 to-purple-500/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8">
                <div className="grid grid-cols-2 gap-4 sm:gap-6">
                  <div className="text-center p-3 sm:p-4 bg-card rounded-xl">
                    <div className="text-xl sm:text-2xl font-bold text-primary">50+</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">Projects Completed</div>
                  </div>
                  <div className="text-center p-3 sm:p-4 bg-card rounded-xl">
                    <div className="text-xl sm:text-2xl font-bold text-primary">2+</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">Years Experience</div>
                  </div>
                  <div className="text-center p-3 sm:p-4 bg-card rounded-xl">
                    <div className="text-xl sm:text-2xl font-bold text-primary">100%</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">Client Satisfaction</div>
                  </div>
                  <div className="text-center p-3 sm:p-4 bg-card rounded-xl">
                    <div className="text-xl sm:text-2xl font-bold text-primary">24/7</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">Support Available</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-12 sm:py-16 lg:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Title>Get In Touch</Title>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mt-12 sm:mt-16">
            {/* Contact Info */}
            <div className="space-y-6 sm:space-y-8 scroll-animate">
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-4 sm:mb-6">Let's work together</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                </p>
              </div>

              <div className="space-y-3 sm:space-y-4">
                {contactInfo.map((contact, index) => (
                  <a
                    key={contact.label}
                    href={contact.href}
                    className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-card border border-border rounded-lg hover-lift transition-all duration-300"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="p-1.5 sm:p-2 bg-primary/10 rounded-lg text-primary">
                      {contact.icon}
                    </div>
                    <div>
                      <div className="font-medium text-foreground text-sm sm:text-base">{contact.label}</div>
                      <div className="text-muted-foreground text-xs sm:text-sm">{contact.value}</div>
                    </div>
                  </a>
                ))}
              </div>

              <div className="pt-2 sm:pt-4">
                <h4 className="text-base sm:text-lg font-semibold text-foreground mb-3 sm:mb-4">Follow me</h4>
                <div className="flex gap-3 sm:gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 sm:p-3 bg-card border border-border rounded-lg text-muted-foreground hover:text-primary hover-lift transition-all duration-300"
                      style={{ animationDelay: `${(index + 3) * 0.1}s` }}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
