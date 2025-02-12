// import React, { useState } from "react";
// import { HashLink as Link } from "react-router-hash-link"; // Importamos HashLink
// import { FaGithub, FaLinkedin, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";
// import "./Navbar.css";

// const Navbar = () => {
//     const [menuOpen, setMenuOpen] = useState(false);

//     return (
//         <nav className="navbar">
//             <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
//                 {menuOpen ? <FaTimes /> : <FaBars />}
//             </div>

//             <div className={`links ${menuOpen ? "show" : ""}`}>
//                 <Link smooth to="/#home" className="link" onClick={() => setMenuOpen(false)}>INICIO</Link>
//                 <Link smooth to="/about#top" className="link" onClick={() => setMenuOpen(false)}>SOBRE MI</Link>
//                 <Link smooth to="/contacto#top" className="link" onClick={() => setMenuOpen(false)}>CONTACTO</Link>
//             </div>

//             <div className="socialLinks">
//                 <a href="https://github.com/Manuelusero" target="_blank" rel="noopener noreferrer" className="iconLink">
//                     <FaGithub />
//                 </a>
//                 <a href="https://www.linkedin.com/in/manuel-usero-941772349/" target="_blank" rel="noopener noreferrer" className="iconLink">
//                     <FaLinkedin />
//                 </a>
//                 <a href="mailto:manuelusero6@gmail.com" className="iconLink">
//                     <FaEnvelope />
//                 </a>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;

// import React, { useState } from "react";
// import { Link, useLocation } from "react-router-dom"; // Usa Link de react-router-dom
// import { FaGithub, FaLinkedin, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";
// import "./Navbar.css";

// const Navbar = () => {
//     const [menuOpen, setMenuOpen] = useState(false);
//     const location = useLocation(); // Obtiene la ruta actual

//     // Cierra el menú al hacer clic en un enlace
//     const handleLinkClick = () => {
//         setMenuOpen(false);
//     };

//     return (
//         <nav className="navbar">
//             <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
//                 {menuOpen ? <FaTimes /> : <FaBars />}
//             </div>

//             <div className={`links ${menuOpen ? "show" : ""}`}>
//                 <Link to="/contacto" className="link" onClick={handleLinkClick}>CONTACTO</Link>
//                 <Link to="/about" className="link" onClick={handleLinkClick}>SOBRE MÍ</Link>
//                 <Link to="/" className="link" onClick={handleLinkClick}>INICIO</Link>


//             </div>

//             <div className="socialLinks">
//                 <a href="https://github.com/Manuelusero" target="_blank" rel="noopener noreferrer" className="iconLink">
//                     <FaGithub />
//                 </a>
//                 <a href="https://www.linkedin.com/in/manuel-usero-941772349/" target="_blank" rel="noopener noreferrer" className="iconLink">
//                     <FaLinkedin />
//                 </a>
//                 <a href="mailto:manuelusero6@gmail.com" className="iconLink">
//                     <FaEnvelope />
//                 </a>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;

import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <FaTimes /> : <FaBars />}
            </div>

            <div className={`links ${menuOpen ? "show" : ""}`}>
                <a href="#contact" className="link" onClick={() => setMenuOpen(false)}>CONTACTO</a>
                <a href="#about" className="link" onClick={() => setMenuOpen(false)}>SOBRE MI</a>
                <a href="#home" className="link" onClick={() => setMenuOpen(false)}>INICIO</a>
            </div>

            <div className="socialLinks">
                <a href="https://github.com/Manuelusero" target="_blank" rel="noopener noreferrer" className="iconLink">
                    <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/manuel-usero-941772349/" target="_blank" rel="noopener noreferrer" className="iconLink">
                    <FaLinkedin />
                </a>
                <a href="mailto:manuelusero6@gmail.com" className="iconLink">
                    <FaEnvelope />
                </a>
            </div>
        </nav>
    );
};

export default Navbar;

