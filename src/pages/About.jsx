// import React from "react";
// import "./About.css";

// const About = () => {
//     return (
//         <div id="top" className="parent-container">
//             <h2 className="About">sobre mi.</h2>
//             <p>
//                 Soy un apasionado desarrollador web con experiencia en la creación y mantenimiento de sitios y aplicaciones web modernas y funcionales. Manejo tecnologías como HTML, CSS, JavaScript, React.js, Node.js, Express, MongoDB y MySQL.
//             </p>
//             <p>
//                 Me destaco por mi enfoque en la resolución de problemas, el desarrollo ágil y la colaboración efectiva con equipos multidisciplinarios para cumplir y superar las expectativas de los clientes. Además, implemento las mejores prácticas de SEO y optimización de rendimiento para garantizar experiencias web de alta calidad.
//             </p>
//             <p>
//                 Cuando no estoy codificando, disfruto explorar nuevos lugares, capturar momentos a través de la fotografía, escuchar música y hacer deportes. Estoy siempre en busca de nuevos desafíos para mejorar mis habilidades y contribuir al éxito de equipos dinámicos en proyectos innovadores.
//             </p>
//         </div>
//     );
// };

// export default About;

import React, { useEffect } from "react";
import "./About.css";

const About = () => {
    useEffect(() => {
        // Hace scroll automático al cargar la página
        const topElement = document.getElementById("top");
        if (topElement) {
            topElement.scrollIntoView({ behavior: "smooth" });
        }
    }, []);

    return (
        <div id="about" className="parent-container">
            <h2 className="About">sobre mi.</h2>
            <p>
                Soy un apasionado desarrollador web con experiencia en la creación y mantenimiento de sitios y aplicaciones web modernas y funcionales. Manejo tecnologías como HTML, CSS, JavaScript, React.js, Node.js, Express, MongoDB y MySQL.
            </p>
            <p>
                Me destaco por mi enfoque en la resolución de problemas, el desarrollo ágil y la colaboración efectiva con equipos multidisciplinarios para cumplir y superar las expectativas de los clientes. Además, implemento las mejores prácticas de SEO y optimización de rendimiento para garantizar experiencias web de alta calidad.
            </p>
            <p>
                Cuando no estoy codificando, disfruto explorar nuevos lugares, capturar momentos a través de la fotografía, escuchar música y hacer deportes. Estoy siempre en busca de nuevos desafíos para mejorar mis habilidades y contribuir al éxito de equipos dinámicos en proyectos innovadores.
            </p>
        </div>
    );
};

export default About;

