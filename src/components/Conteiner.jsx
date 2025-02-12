import React from 'react'
import "./Conteiner.css"
const Conteiner = () => {
    return (
        <div className='container'>
            <div className='presentation'>
                <h1 className='title'>Hola soy Manuel, </h1>
                <h2 className='subtitle'>Desarrollador Web Full Stack</h2>
                {/* 🔹 Botón para descargar el CV */}
                <a href="/mi-cv.pdf" target="_blank" rel="noopener noreferrer" className='cv-button'>
                    Descargar CV
                </a>
            </div>
            <div className='img-container'>
                <img className='img1' src="/yoop.jpeg" alt="img profile" />
                <p className='description'>Apasionado por la tecnología y la creación de soluciones digitales. Me encanta aprender, innovar y enfrentar nuevos desafíos en el mundo del desarrollo.
                </p>
            </div>
        </div>
    )
}

export default Conteiner
