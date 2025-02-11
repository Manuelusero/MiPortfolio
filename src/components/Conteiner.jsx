import React from 'react'
import "./Conteiner.css"
const Conteiner = () => {
    return (
        <div className='container'>
            <div className='presentation'>
                <h1 className='title'>Hola soy Manuel, </h1>
                <h2 className='subtitle'>Desarrollador web fullstack</h2>
            </div>
            <div className='img-container'>
                <img className='img1' src="/src/assets/yoop.jpeg" alt="img profile" />
                <p className='description'>Soy un desarrollador web full stack apasionado por la tecnología y la creación de soluciones digitales. Me encanta aprender, innovar y enfrentar nuevos desafíos en el mundo del desarrollo.
                </p>
            </div>
        </div>
    )
}

export default Conteiner
