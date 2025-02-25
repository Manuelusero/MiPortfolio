import React from 'react'
import "./Conteiner.css"

const Conteiner = () => {
    return (
        <div className='container'>
            <div className='presentation'>
                <h1 className='titleh1'>Hola soy Manuel! </h1>
                <h2 className='subtitle'>Desarrollador Web Full Stack</h2>
                <p className='description'>
                    Apasionado por la tecnología y la creación de soluciones digitales. Me encanta aprender, innovar y enfrentar nuevos desafíos en el mundo del desarrollo.
                </p>
                <a href="/CVspanish.pdf" download="CVspanish.pdf" className='cv-button'>
                    Curriculum
                </a>
            </div>
            <div className='img-container'>
                <div className='circle-background'>
                    <img className='img1' src="/postaperfil.png" alt="img profile" />
                </div>
            </div>
        </div>
    )
}

export default Conteiner;
