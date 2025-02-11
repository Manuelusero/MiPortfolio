import React from "react";
import "./Projects.css";

const projects = [
    {
        title: "Replica chat de whatsapp",
        category: "Desarrollo de frontend y backend",
        link: "https://whatsapp-clone-frontend-lilac.vercel.app",
        image: "src/assets/captura-whatsapp.png",

    },
    {
        title: "Replica de frontend de whatsapp",
        category: "Desarrollo de frontend con react",
        link: "https://clonemsguserdeish24.netlify.app",
        image: "src/assets/front-whatsapp.png",
    },

    {
        title: "Mi portfolio",
        category: "Desarrollo con react",
        link: "#",
        image: "src/assets/miPortfolio.png",
    },
    {
        title: "Proyecto GreenRouse",
        category: "Desarrollo con HTML y CSS",
        link: "#",
        image: "src/assets/Greenrouse.png",
    },
];

const ProjectCard = ({ title, category, link, image }) => {
    return (
        <a href={link} target="blank" className="project-card">
            <div className="project-content">
                <img src={image} alt={title} className="project-image" />
                <p className="category">{category}</p>
                <h3 className="title">{title}</h3>
            </div>
        </a>
    );
};

const Projects = () => {
    return (
        <div>
            <h1>Proyectos</h1>
            <div className="projects-container">
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </div>
    );
};

export default Projects;
