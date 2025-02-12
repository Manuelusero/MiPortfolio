import React from 'react'
import './Home.css'
import Navbar from '../components/Navbar'
import Conteiner from '../components/Conteiner'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import ScrollToTop from '../components/ScrollToTop'

const Home = () => {
    return (
        <div className='Home'>
            <Navbar />
            <Conteiner />
            <About />
            <Projects />
            <Contact />
            <ScrollToTop />


        </div>
    )
}

export default Home
