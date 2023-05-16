import React from 'react'
import Headers from './Headers'
import About from './About'
import Projects from './Projects'
import lapak from '../../public/Lapak.png'
import Experience from './Experience'
import Contact from './Contact'

const Carousel = () => {
    return (
        <>
        <div className="carousel w-screen">
            <div id="home" className="carousel-item w-full h-full">
                <Headers/>
            </div> 
            <div id="about" className="carousel-item w-full">
                <About/>
            </div> 
            <div id="projects" className="carousel-item w-full">
                <Projects/>
            </div> 
            <div id="experience" className="carousel-item w-full">
                <Experience/>
            </div>
            <div id="contacts" className="carousel-item w-full">
                <Contact/>
            </div>
        </div>
        </>
    )
}

export default Carousel