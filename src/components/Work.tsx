import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
{
  title: "PDF & DB RAG System",
  category: "Ask questions from PDFs and databases using AI",
  tools: "Node.js, Express, MongoDB, OpenAI API, LangChain, Vector DB",
  image: "/images/projects/project7.png",
  link: ""
},
  
  {
    title: "MeetEase",
    category: "A real-time video calling web application enabling peer-to- peer communication.",
    tools: "React, Material UI,Web RTC",
    image: "/images/projects/project1.png",
    link: "https://apna-videocall-frontend.onrender.com/",
  },
  {
    title: "Airbnb",
    category: "A web-based platform for listing and booking rental properties. The application allows users to perform CRUD operations for property listings and includes secure authentication for user accounts.",
    tools: " MongoDB, Node.js, EJS",
    image: "/images/projects/project2.png",
    link: "",
  },
  {
    title: "LinkedIn Platform",
    category: "Built a full-featured LinkedIn clone using the MERN stack with user authentication, real-time posts, likes, comments, and profile management",
    tools: "React, Redux, Cloudinary",
    image: "/images/projects/project3.png",
    link: "https://linkedin-frontend-hi4w.onrender.com",
  },
  {
    title: "Amazon",
    category: "Ecommerce Platform ",
    tools: "oauth 2.0, React, Cloudinary",
    image: "/images/projects/project4.png",
    link: "",
  },
  {
    title: "Portfolio",
    category: "A modern and responsive personal portfolio showcasing my skills, projects, and experience.Built using React, Tailwind CSS, and deployed on platforms like Netlify.Features smooth animations, interactive UI, and sections like About, Projects, Contact, and Resume. ",
    tools: " React Tailwind CSS",
    image: "/images/projects/project6.png",
    link: "https://neon-nasturtium-ec6760.netlify.app/",
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
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Features</span>
                          <p>{project.tools}</p>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage
                        image={project.image}
                        alt={project.title}
                        link={project.link}
                      />
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
