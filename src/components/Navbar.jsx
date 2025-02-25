

import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navbar">
            {/* Links normales en pantallas grandes */}
            <div className="links">
                <a href="#projects" className="link">PROYECTOS</a>
                <a href="#about" className="link">SOBRE MÍ</a>
                <a href="#contact" className="link">CONTACTO</a>
            </div>

            {/* Iconos de redes sociales siempre visibles */}
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

            {/* Botón menú hamburguesa (solo en móviles) */}
            <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <FaTimes /> : <FaBars />}
            </div>

            {/* Menú lateral (solo en móviles) */}
            <div className={`dropdown-menu ${menuOpen ? "show" : ""}`}>
                <a href="#projects" className="link" onClick={() => setMenuOpen(false)}>PROYECTOS</a>
                <a href="#about" className="link" onClick={() => setMenuOpen(false)}>SOBRE MÍ</a>
                <a href="#contact" className="link" onClick={() => setMenuOpen(false)}>CONTACTO</a>
            </div>
        </nav>
    );
};

export default Navbar;
