import React from "react";
import "./Projects.css";

const projects = [
    {
        title: "Replica chat de whatsapp",
        category: "Desarrollo de frontend y backend",
        link: "https://whatsapp-clone-frontend-lilac.vercel.app",
        image: "/whatsapp1.jpeg",

    },
    {
        title: " Frontend de whatsapp",
        category: "Desarrollo de frontend con react",
        link: "https://clonemsguserdeish24.netlify.app",
        image: "/whatsapp2.jpeg",
    },

    {
        title: "Proyecto GreenRouse",
        category: " HTML, CSS y Proximamente React",
        link: "#",
        image: "/proyectGreen.jpeg",
    },
];

const ProjectCard = ({ title, category, link, image }) => {
    return (
        <a href={link} target="blank" className="project-card">
            <div className="project-content">
                <img src={image} alt={title} className="project-image" />
                <p className="category">{category}</p>
                <h3 className='title'>{title}</h3>
            </div>
        </a>
    );
};

const Projects = () => {
    return (
        <div>
            <h1 id="projects">proyectos.</h1>
            <div className="projects-container">
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </div>
    );
};

export default Projects;
