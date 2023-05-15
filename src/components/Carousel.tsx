import React from 'react'
import Headers from './Headers'
import About from './About'
import Projects from './Projects'
import { HoverCard } from './HoverCard'

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
            <div id="stacks" className="carousel-item w-full">
                <div className="mx-auto my-40">

                <HoverCard/>
                </div>
            </div>
            <div id="contacts" className="carousel-item w-full">
                <img src="https://images.unsplash.com/photo-1682687982501-1e58ab814714?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" className="w-full" />
            </div>
        </div>
        </>
    )
}

export default Carousel