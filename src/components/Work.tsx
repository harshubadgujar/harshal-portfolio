import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward, MdArrowOutward } from "react-icons/md";

const projects = [
  {
    title: "AutoBiz AI",
    category: "AI SaaS CRM & Lead Automation Platform",
    description:
      "AutoBiz AI is an AI-powered SaaS CRM platform designed to automate lead capture, customer communication, and follow-up workflows for businesses. The system captures leads from different sources such as ads, WhatsApp inquiries, and manual entries, stores them inside a centralized CRM dashboard, and helps businesses track and manage the entire sales pipeline. The platform also integrates AI-powered automated response workflows that allow businesses to respond instantly to new leads and automate follow-ups, reducing manual effort and improving lead conversion speed.",
    features: [
      "Automated lead capture from ads, WhatsApp and forms",
      "Centralized CRM dashboard to manage incoming leads",
      "AI-powered auto response system for instant replies",
      "Sales funnel tracking and lead stage management",
      "Analytics dashboard for lead performance monitoring",
      "Real-time notifications and conversation timeline",
    ],
    techStack: {
      Frontend: "Next.js, React, Tailwind CSS",
      Backend: "Node.js, Express.js, REST API Architecture",
      Database: "MongoDB Atlas",
      "AI Integration": "AI APIs for automated response workflows",
      Deployment: "Vercel (Frontend) · Railway (Backend)",
    },
    links: {
      live: "https://autobiz-ai.vercel.app",
      api: "https://autobiz-ai-production.up.railway.app",
      github: "https://github.com/harshubadgujar/autobiz-ai",
    },
    impact:
      "This system reduces manual lead handling by automating responses and follow-ups, allowing businesses to respond to customer inquiries instantly and manage leads efficiently.",
    image: "/images/autobiz-dashboard.png",
    soldTo: "Socixmedia",
  },
  {
    title: "AI Resume Builder",
    category: "ATS Optimized Resume Platform",
    description:
      "Built an AI-assisted resume generation platform designed to improve ATS compatibility and automate resume creation with dynamic generation APIs, keyword optimization, and real-time preview.",
    features: [
      "Dynamic resume generation APIs",
      "ATS keyword optimization logic",
      "Real-time preview and export functionality",
      "Modular backend architecture with MongoDB storage",
    ],
    techStack: {
      Backend: "Node.js, Express.js",
      Database: "MongoDB Atlas",
    },
    links: {},
    impact: "",
    image: "/images/preview.png",
    soldTo: "",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    {/* Left: Info */}
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>

                        {/* Description */}
                        <p className="carousel-description">
                          {project.description}
                        </p>

                        {/* Key Features */}
                        {project.features.length > 0 && (
                          <div className="carousel-features">
                            <span className="section-label">Key Features</span>
                            <ul>
                              {project.features.map((feat, i) => (
                                <li key={i}>{feat}</li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Tech Stack */}
                        <div className="carousel-tech-stack">
                          <span className="section-label">Tech Stack</span>
                          <div className="tech-stack-grid">
                            {Object.entries(project.techStack).map(
                              ([label, value]) => (
                                <div className="tech-stack-item" key={label}>
                                  <span className="tech-label">{label}</span>
                                  <span className="tech-value">{value}</span>
                                </div>
                              )
                            )}
                          </div>
                        </div>

                        {/* Live Links */}
                        {Object.keys(project.links).length > 0 && (
                          <div className="carousel-links">
                            {project.links.live && (
                              <a
                                href={project.links.live}
                                target="_blank"
                                className="project-link"
                                data-cursor="disable"
                              >
                                Live App <MdArrowOutward />
                              </a>
                            )}
                            {project.links.github && (
                              <a
                                href={project.links.github}
                                target="_blank"
                                className="project-link"
                                data-cursor="disable"
                              >
                                GitHub <MdArrowOutward />
                              </a>
                            )}
                            {project.links.api && (
                              <a
                                href={project.links.api}
                                target="_blank"
                                className="project-link"
                                data-cursor="disable"
                              >
                                Backend API <MdArrowOutward />
                              </a>
                            )}
                          </div>
                        )}

                        {/* Impact */}
                        {project.impact && (
                          <div className="carousel-impact">
                            <span className="section-label">Impact</span>
                            <p>{project.impact}</p>
                          </div>
                        )}

                        {/* Sold To */}
                        {project.soldTo && (
                          <div className="carousel-sold">
                            <span className="sold-badge">
                              ✦ Sold to {project.soldTo}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Right: Image */}
                    <div className="carousel-image-wrapper">
                      <WorkImage image={project.image} alt={project.title} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
