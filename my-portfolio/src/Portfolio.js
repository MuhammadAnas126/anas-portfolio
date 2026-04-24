import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Download, Mail, Phone, MapPin, Github, Linkedin, MessageCircleMore, ExternalLink, Menu, X } from 'lucide-react';
import "./Portfolio.css";
import emailjs from '@emailjs/browser';
import profileImage from './assets/profile.jpeg';

import smartCafe1 from './assets/Smart Cafeteria System/1.png';
import smartCafe2 from './assets/Smart Cafeteria System/2.png';
import smartCafe3 from './assets/Smart Cafeteria System/3.png';
import smartCafe4 from './assets/Smart Cafeteria System/4.png';
import smartCafe5 from './assets/Smart Cafeteria System/5.png';
import smartCafe6 from './assets/Smart Cafeteria System/6.png';
import smartCafe7 from './assets/Smart Cafeteria System/7.png';
import smartCafe8 from './assets/Smart Cafeteria System/8.png';
import smartCafe9 from './assets/Smart Cafeteria System/9.png';
import smartCafe10 from './assets/Smart Cafeteria System/10.png';
import smartCafe11 from './assets/Smart Cafeteria System/11.png';
import smartCafe12 from './assets/Smart Cafeteria System/12.png';
import smartCafe13 from './assets/Smart Cafeteria System/13.png';


import AIchatbot1 from './assets/AI Chatbot/1.png';
import AIchatbot2 from './assets/AI Chatbot/2.png';

import gradeChecker1 from './assets/Student Grade Checker/1.png';
import gradeChecker2 from './assets/Student Grade Checker/2.png';
import gradeChecker3 from './assets/Student Grade Checker/3.png';

import stock1 from './assets/Stock Trading Platform/1.png';
import stock2 from './assets/Stock Trading Platform/2.png';
import stock3 from './assets/Stock Trading Platform/3.png';
import stock4 from './assets/Stock Trading Platform/4.png';
import stock5 from './assets/Stock Trading Platform/5.png';

import hotel1 from './assets/Hotel Reservation System/1.png';
import hotel2 from './assets/Hotel Reservation System/2.png';
import hotel3 from './assets/Hotel Reservation System/3.png';

import moshify1 from './assets/moshify Website/1.png';
import moshify2 from './assets/moshify Website/2.png';
import moshify3 from './assets/moshify Website/3.png';
import moshify4 from './assets/moshify Website/4.png';
import moshify5 from './assets/moshify Website/5.png';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showThankYouModal, setShowThankYouModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // Refs for scroll animations
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  // Sample project data with multiple images
  const projects = React.useMemo(() => [
    {
      id: 1,
      title: "Smart Cafeteria System",
      description:
        "A sophisticated POS (Point of Sale) application for cafeteria management. Built with Java and JavaFX, it features a sleek, dark-themed UI that streamlines the ordering process through categorized menu selection and real-time order tracking.",
      images: [smartCafe1, smartCafe2, smartCafe3, smartCafe4, smartCafe5, smartCafe6, smartCafe7, smartCafe8, smartCafe9, smartCafe10, smartCafe11, smartCafe12, smartCafe13],
      checklist: [
        "Modern GUI developed with JavaFX and Custom CSS styling",
        "Dynamic order management with real-time bill calculation",
        "Categorized menu system (Fast Food, Pizza, Beverages, etc.)",
        "Automated inventory and price tracking logic",
        "Robust input validation for order quantities",
        "Clean OOP architecture for menu item scalability"
      ],
      features: [
        "Interactive sidebar for real-time order summaries",
        "Multi-category navigation for efficient menu browsing",
        "Visual feedback for item selection and pricing",
        "Automated 'Total Bill' generation including taxes/discounts",
        "User-friendly layout optimized for fast-paced environments",
        "Persistent data handling for menu and pricing updates",
        "Responsive UI design with professional color palettes"
      ],
      technologies: [
        "Java",
        "JavaFX",
        "Scene Builder",
        "CSS",
        "OOP Principles"
      ],
      liveLink: "https://youtu.be/jwv4lE5FE1o", 
      githubLink: "https://github.com/MuhammadAnas126/OOP-Project"
    },
    {
      id: 2,
      title: "AI Chatbot (GUI & NLP)",
      description:
        "Developed 'CodeAlphaBot,' a virtual assistant with a custom-built Graphical User Interface. The bot processes natural language queries to provide real-time information, such as current time and task assistance, while maintaining a seamless conversational flow.",
      images: [AIchatbot1, AIchatbot2],
      checklist: [
        "Interactive GUI built with JavaFX for a modern user experience",
        "Natural Language Processing (NLP) for intent recognition",
        "Real-time system integration for dynamic responses (e.g., time/date)",
        "Automated conversation logging and state management",
        "Custom CSS-styled chat bubbles and responsive layout",
        "Exception handling for unrecognized user queries"
      ],
      features: [
        "User-friendly messaging interface with 'Send' functionality",
        "Personalized virtual assistant identity (CodeAlphaBot)",
        "Pattern matching for frequently asked questions (FAQs)",
        "Persistent chat history for user reference",
        "Scrollable message viewport for long conversations",
        "Instantaneous response generation",
        "Lightweight and optimized backend logic"
      ],
      technologies: [
        "Java",
        "JavaFX",
        "NLP Fundamentals",
        "Event-Driven Programming",
        "CSS (for GUI styling)"
      ],
      githubLink: "https://github.com/MuhammadAnas126/codealpha_tasks/tree/artificial-intelligence-chatbot"
    },
    {
      id: 3,
      title: "Moshify - Cloud Hosting Landing Page",
      description:
        "A professionally designed, high-conversion landing page for a cloud hosting service. Built using pure HTML5 and CSS3, this project showcases advanced layout techniques and a mobile-first responsive strategy without relying on heavy frameworks.",
      images: [moshify1, moshify2, moshify3, moshify4, moshify5], 
      checklist: [
        "Semantic HTML5 for improved SEO and accessibility",
        "Advanced CSS Grid and Flexbox for complex layouts",
        "Mobile-first responsive design architecture",
        "Custom CSS components using the BEM naming convention",
        "Optimized SVG graphics and high-resolution image assets",
        "Cross-browser style normalization and consistency"
      ],
      features: [
        "Sleek hero section with call-to-action buttons",
        "Multi-column features grid with custom icons",
        "Interactive-style plan comparison and pricing tables",
        "Optimized typography for readability and visual hierarchy",
        "Modular CSS structure for easy maintenance",
        "Responsive navigation and fluid media elements",
        "Pixel-perfect implementation of modern design patterns"
      ],
      technologies: [
        "HTML5",
        "CSS3",
        "Mobile-First Design",
        "CSS Grid / Flexbox",
        "BEM Methodology"
      ],
      liveLink: "https://deployhub.netlify.app/", 
      githubLink: "https://github.com/MuhammadAnas126/First-Website"
    },
    {
      id: 4,
      title: "Student Grade Tracker",
      description:
        "A Java-based desktop application developed to help educators track and analyze student performance. It features a custom GUI for data entry and provides real-time statistical analysis including class averages and performance extremes.",
      images: [gradeChecker1, gradeChecker2, gradeChecker3],
      checklist: [
        "Interactive Desktop GUI for seamless data management",
        "Dynamic grade processing using Java Collections (ArrayList)",
        "Real-time calculation of Average, Highest, and Lowest scores",
        "Persistent data storage with automated saving/loading",
        "Robust input validation for grade ranges (0-100)",
        "Modular architecture following Clean Code principles"
      ],
      features: [
        "Live dashboard for student record visualization",
        "Instant performance metrics and class statistics",
        "Automated record persistence across sessions",
        "User-friendly input forms with placeholder text",
        "Dynamic table updates upon student addition",
        "Error handling for invalid or empty name/grade entries"
      ],
      technologies: [
        "Java",
        "Desktop GUI Development",
        "Data Structures (ArrayList)",
        "File I/O",
        "OOP Principles"
      ],
      githubLink: "https://github.com/MuhammadAnas126/codealpha_tasks/tree/student-grade-tracker"
    },
    {
      id: 5,
      title: "Stock Trading Platform",
      description:
        "A logic-intensive trading simulator designed to model financial market behaviors and portfolio management. The platform enables users to monitor real-time stock price fluctuations, execute buy/sell orders based on market trends, and maintain a historical record of all transactions within a performance-optimized console environment.",
      images: [stock1, stock2, stock3, stock4, stock5],
      checklist: [
        "Dynamic market price simulation using algorithmic logic",
        "Efficient portfolio management system using Object-Oriented principles",
        "Transaction history logging with persistent File I/O storage",
        "Execution of market orders with real-time balance updates",
        "Data validation for trade volume and insufficient funds",
        "Modular architecture for scalable financial instrument modeling"
      ],
      features: [
        "Live-simulated ticker for real-time market data visualization",
        "Automated calculation of profit/loss and portfolio valuation",
        "Features a robust transaction engine that accurately tracks net worth, cash balances, and asset valuations across multiple trades.",
        "Secure user balance management and credit tracking",
        "Interactive command-line interface for trade execution",
        "Detailed transaction history export to local text files",
        "Support for multi-stock tracking and dynamic price adjustments",
        "Built-in safeguards against invalid trade operations"
      ],
      technologies: [
        "Java",
        "Data Structures & Algorithms (DSA)",
        "Object-Oriented Programming (OOP)",
        "File I/O",
        "Standard Template Library (STL)"
      ],
      githubLink: "https://github.com/MuhammadAnas126/codealpha_tasks/tree/stock-trading-platform"
    },
    {
      id: 6,
      title: "Hotel Reservation System",
      description:
        "A logic-driven console application designed to manage hotel room bookings and guest records. The system features room category filtering (Deluxe, Luxury, Standard), real-time availability tracking, and a secure payment/confirmation workflow.",
      images: [hotel1, hotel2, hotel3], 
      checklist: [
        "Object-Oriented design with Guest and Room class entities",
        "Dynamic room search and availability filtering",
        "Automated booking confirmation and ID generation",
        "Logic for multi-category room management and pricing",
        "Input sanitization to prevent double-bookings",
        "Persistent record tracking via console-based state management"
      ],
      features: [
        "Search rooms by specific category (e.g., Deluxe vs. Standard)",
        "Real-time display of available room numbers and prices",
        "Integrated reservation process with guest details input",
        "Detailed booking summaries including room type and total cost",
        "Confirmation system to verify successful reservations",
        "User-friendly terminal navigation with a clean menu structure",
        "Error handling for invalid room choices or capacity limits"
      ],
      technologies: [
        "Java",
        "Data Structures (ArrayList)",
        "Object-Oriented Programming (OOP)",
        "Logic Engineering",
        "CLI (Command Line Interface)"
      ], 
      githubLink: "https://github.com/MuhammadAnas126/codealpha_tasks/tree/hotel-reservation-system"
    },
    
  ], []);

  const skills = [
    { name: "Java (Mastered OOP)", level: 95 },
    { name: "JavaFX (Desktop UI)", level: 90 },
    { name: "C++ (Advanced DSA)", level: 90 },
    { name: "JavaScript", level: 80 },
    { name: "Data Structures & Algorithms", level: 85 },
    { name: "HTML5 & CSS3", level: 85 },
    { name: "Object-Oriented Design", level: 90 },
    { name: "File I/O & Persistence", level: 80 },
    { name: "Git & GitHub", level: 85 },
    { name: "Problem Solving", level: 90 },
    { name: "Software Engineering", level: 80 },
    { name: "Natural Language Processing", level: 75 },
];

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const projectsGridRef = useRef(null);

  // Add these functions for carousel navigation
  const scrollProjects = (direction) => {
    const container = projectsGridRef.current;
    if (container) {
      const scrollAmount = 370; // card width + gap
      const newScrollLeft = direction === 'left'
        ? container.scrollLeft - scrollAmount
        : container.scrollLeft + scrollAmount;

      container.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  const checkScrollButtons = () => {
    const container = projectsGridRef.current;
    if (container) {
      setCanScrollLeft(container.scrollLeft > 0);
      setCanScrollRight(
        container.scrollLeft < container.scrollWidth - container.clientWidth
      );
    }
  };

  // Add useEffect to check scroll buttons
  useEffect(() => {
    const container = projectsGridRef.current;
    if (container) {
      checkScrollButtons();
      container.addEventListener('scroll', checkScrollButtons);
      window.addEventListener('resize', checkScrollButtons);

      return () => {
        container.removeEventListener('scroll', checkScrollButtons);
        window.removeEventListener('resize', checkScrollButtons);
      };
    }
  }, [projects]);

  // Initialize EmailJS
  useEffect(() => {
    // Initialize EmailJS with your public key
    if (window.emailjs) {
      window.emailjs.init("Nd9jiARGjVtarMcnm"); // Replace with your EmailJS public key
    }
  }, []);

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  // Handle project image navigation
  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) =>
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert('Please fill in all fields');
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(
        "service_lxfkwfj",
        "template_9qmp4aw",
        {
          name: formData.name,
          email: formData.email,
          title: formData.subject,
          message: formData.message,
        },
        "Nd9jiARGjVtarMcnm"
      );

      setFormData({ name: '', email: '', subject: '', message: '' });
      setShowThankYouModal(true);
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Sorry, there was an error sending your message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Scroll effect for navbar and animations
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Update scrolled state for navbar
      setScrolled(scrollPosition > 50);

      // Handle section active states
      const sections = ['home', 'about', 'experience', 'skills', 'projects', 'contact'];
      const scrollPos = scrollPosition + 100;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPos >= offsetTop && scrollPos < offsetTop + height) {
            setActiveSection(section);
          }
        }
      });

      // Animate sections on scroll with dynamic staggered children
      const animateOnScroll = (ref, className, childSelector) => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          const isVisible = rect.top < window.innerHeight * 0.8;

          if (isVisible && !ref.current.classList.contains(className)) {
            ref.current.classList.add(className);

            // Apply staggered animation to children
            if (childSelector) {
              const children = ref.current.querySelectorAll(childSelector);
              children.forEach((child, index) => {
                setTimeout(() => {
                  child.classList.add('fade-in');
                  child.style.animationDelay = `${(index % 4) * 0.1}s`;
                }, 0);
              });
            }
          }
        }
      };

      animateOnScroll(aboutRef, 'animate-in', '.stat');
      animateOnScroll(experienceRef, 'animate-in', '.experience-item');
      animateOnScroll(skillsRef, 'animate-in', '.skill-item');
      animateOnScroll(projectsRef, 'animate-in', '.project-card');
      animateOnScroll(contactRef, 'animate-in');
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="portfolio">
      {/* Navigation */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="nav-logo">
            <span>Portfolio</span>
          </div>

          <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            {['home', 'about', 'experience', 'skills', 'projects', 'contact'].map((item) => (
              <button
                key={item}
                className={`nav-link ${activeSection === item ? 'active' : ''}`}
                onClick={() => scrollToSection(item)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
          </div>

          <div className="nav-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                Hi, I'm <span className="highlight">Muhammad Anas</span>
              </h1>
              <h2 className="hero-subtitle">Software Engineer</h2>
              <p className="hero-description">
                🎓 Software Engineering student at COMSATS. Mastered Java OOP and JavaFX through diverse projects including a Food Management System and an AI Chatbot. Strong foundation in C++ Data Structures and modern web design. Dedicated to building high-performance software and seeking to contribute to real-world development projects.
              </p>
              <div className="hero-buttons">
                <button className="btn btn-primary" onClick={() => scrollToSection('projects')}>
                  View My Work
                </button>
                <a 
                  href="/Muhammad_Anas_Resume.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-outline"
                  style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px', justifyContent: 'center' }}
                >
                  <Download size={20} />
                  View Resume
                </a>
              </div>
              <div className="social-links">
                <a href="https://github.com/MuhammadAnas126" target="_blank" rel="noopener noreferrer">
                  <Github size={24} />
                </a>
                <a href="https://www.linkedin.com/in/muhammad-anas0/" target="_blank" rel="noopener noreferrer">
                  <Linkedin size={24} />
                </a>
                <a
                  href="https://wa.me/923084260003?text=Hi%2C%20I%20visited%20your%20portfolio%20and%20wanted%20to%20connect!"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircleMore size={24} />
                </a>
              </div>
            </div>
            <div className="hero-image">
              <div className="image-container">
                <img
                  src={profileImage}
                  alt="Muhammad Anas"
                />
                <div className="image-glow"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about" ref={aboutRef}>
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                I am a motivated Software Engineering student at COMSATS University Lahore with a 3.5 CGPA. I specialize in Object-Oriented Programming (OOP) and have mastered Java through the development of complex projects like a Food Management System using JavaFX and various CodeAlpha internship tasks.
              </p>
              <p>
                I possess a strong foundation in Data Structures and Algorithms (DSA) using C++, with hands-on experience implementing Linked Lists, Stacks, and Queues to solve logical problems. From architecting desktop solutions to crafting responsive web interfaces with HTML5, CSS3 and JavaScript, I am passionate about writing clean, maintainable code that solves real-world problems. I thrive in learning-focused environments and am eager to apply my technical skills to professional development teams.
              </p>
              <div className="about-stats">
                <div className="stat">
                  <span className="stat-number">8+</span>
                  <span className="stat-label">Projects Completed</span>
                </div>
                <div className="stat">
                  <span className="stat-number">3.5+</span>
                  <span className="stat-label">Current CGPA</span>
                </div>
                <div className="stat">
                  <span className="stat-number">100%</span>
                  <span className="stat-label">Onsite Availability</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
<section id="experience" className="experience" ref={experienceRef}>
  <div className="container">
    <h2 className="section-title">Internship Experience</h2>
    <div className="experience-timeline">
      <div className="experience-item">
        <div className="experience-header">
          <h3 className="experience-title">Java Programming Intern</h3>
          <span className="experience-company">CodeAlpha (Remote)</span>
          <span className="experience-duration">Dec 2025 – Jan 2026</span>
        </div>
        <div className="experience-content">
          <h4 className="experience-category">Software Development (Java)</h4>
          <ul className="experience-details">
            <li>Developed four full-scale Java applications focusing on Object-Oriented Programming (OOP) principles and clean architecture.</li>
            <li>Implemented an AI Chatbot using Natural Language Processing (NLP) techniques and a custom GUI for real-time interaction.</li>
            <li>Designed a Hotel Reservation System featuring room categorization, booking management, and payment simulation logic.</li>
            <li>Built a Student Grade Tracker utilizing ArrayLists for dynamic data management and automated performance reporting.</li>
            <li>Integrated File I/O across projects to ensure permanent data storage and persistence.</li>
            <li>Utilized GitHub for version control, managing multiple project branches and following professional documentation standards.</li>
          </ul>

          <h4 className="experience-category">Key Technologies</h4>
          <div className="experience-technologies">
            <span className="tech-tag">Java</span>
            <span className="tech-tag">OOP</span>
            <span className="tech-tag">JavaFX</span>
            <span className="tech-tag">C++ (DSA)</span>
            <span className="tech-tag">File I/O</span>
            <span className="tech-tag">Git / GitHub</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Skills Section */}
      <section id="skills" className="skills" ref={skillsRef}>
        <div className="container">
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-info">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div
                    className="skill-progress"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects" ref={projectsRef}>
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-container">
            <button
              className="carousel-nav-btn prev"
              onClick={() => scrollProjects('left')}
              disabled={!canScrollLeft}
            >
              <ChevronLeft size={24} />
            </button>

            <div className="projects-grid" ref={projectsGridRef}>
              {projects.map((project) => (
                <div key={project.id} className="project-card">
                  <div className="project-image">
                    <img src={project.images[0]} alt={project.title} />
                    <div className="project-overlay">
                      <button
                        className="btn btn-primary"
                        onClick={() => {
                          setSelectedProject(project);
                          setCurrentImageIndex(0);
                        }}
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                  <div className="project-content">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    <div className="project-technologies">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                    <div className="project-links">
                      {project.liveLink && (
                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link">
                          <ExternalLink size={16} />
                          Live Demo
                        </a>
                      )}
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
                        <Github size={16} />
                        Code
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              className="carousel-nav-btn next"
              onClick={() => scrollProjects('right')}
              disabled={!canScrollRight}
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact" ref={contactRef}>
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Let's work together!</h3>
              <p>I'm always interested in new opportunities and exciting projects.</p>
              <div className="contact-details">
                <div className="contact-item">
                  <Mail size={20} />
                  <span>anasashfaq3456@gmail.com</span>
                </div>
                <div className="contact-item">
                  <Phone size={20} />
                  <span>+92 308 4260003</span>
                </div>
                <div className="contact-item">
                  <MapPin size={20} />
                  <span>Lahore, Pakistan</span>
                </div>
              </div>
            </div>
            <div className="contact-form">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>
              <button
                onClick={handleSubmit}
                className={`btn btn-primary ${isSubmitting ? 'submit-button-loading' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setSelectedProject(null)}
            >
              <X size={24} />
            </button>

            <div className="modal-header">
              <h3>{selectedProject.title}</h3>
            </div>

            <div className="image-carousel">
              <button className="carousel-btn prev" onClick={prevImage}>
                <ChevronLeft size={24} />
              </button>

              <div className="carousel-image">
                <a
                  href={selectedProject.images[currentImageIndex]}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={selectedProject.images[currentImageIndex]}
                    alt={`${selectedProject.title}`}
                  />
                </a>
              </div>

              <button className="carousel-btn next" onClick={nextImage}>
                <ChevronRight size={24} />
              </button>

              <div className="carousel-dots">
                {selectedProject.images.map((_, index) => (
                  <button
                    key={index}
                    className={`dot ${index === currentImageIndex ? 'active' : ''}`}
                    onClick={() => setCurrentImageIndex(index)}
                  ></button>
                ))}
              </div>
            </div>

            <div className="modal-body">
              <p>{selectedProject.description}</p>
              <div>
                <div className="features-title">Overview</div>
                <ul className='project-checklist'>
                  {selectedProject.checklist.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="features-title">Features</div>
                <ul className="project-features">
                  {selectedProject.features.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              {/* <div className="project-technologies">
                {selectedProject.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div> */}
              <div className="project-links">
                {selectedProject.liveLink && (
                  <a href={selectedProject.liveLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    <ExternalLink size={16} />
                    Live Demo
                    </a>
                  )}
                  <a href={selectedProject.githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                    <Github size={16} />
                    View Code
                  </a>
                </div>
            </div>
          </div>
        </div>
      )}

      {/* Thank You Modal */}
      {showThankYouModal && (
        <div className="thank-you-modal-overlay" onClick={() => setShowThankYouModal(false)}>
          <div className="thank-you-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="thank-you-modal-close"
              onClick={() => setShowThankYouModal(false)}
            >
              <X size={18} />
            </button>

            <div className="thank-you-icon">
              <Mail />
            </div>

            <h3 className="thank-you-title">Thank You!</h3>

            <p className="thank-you-message">
              Your message has been sent successfully. I'll get back to you as soon as possible!
            </p>

            <button
              className="thank-you-button"
              onClick={() => setShowThankYouModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2026 Muhammad Anas. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
};

export default Portfolio;