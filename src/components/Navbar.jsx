import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navbar">
            {/* Botón menú hamburguesa (solo visible en móviles) */}
            <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <FaTimes /> : <FaBars />}
            </div>

            {/* Menú de navegación */}
            <div className={`links ${menuOpen ? "show" : ""}`}>
                <Link to="/" className="link" onClick={() => setMenuOpen(false)}>INICIO</Link>
                <Link to="/About" className="link" onClick={() => setMenuOpen(false)}>SOBRE MI</Link>
                <Link to="/Contact" className="link" onClick={() => setMenuOpen(false)}>CONTACTO</Link>
            </div>

            {/* Iconos de redes sociales */}
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
