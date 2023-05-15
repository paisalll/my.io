import { motion } from 'framer-motion'
import React from 'react'
import lapak from '../../public/Lapak.png'
import airbnb1 from '../../public/airbnb1.png'
import airbnb2 from '../../public/airbnb2.png'
import movie from '../../public/movieapp.png'
import Image from 'next/image'
import { AspectRatio } from './ImageRatio'

export const FADE_DOWN_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0, transition: { type: "spring" } },
};

const Projects = () => {
    return (
        <div className="flex flex-col relative w-full h-full mt-24 px-2">
            <motion.div
                className="bg-gradient-to-b from-main to-[#A178B9] text-transparent bg-clip-text p-4">
                    <motion.p 
                    variants={FADE_DOWN_ANIMATION_VARIANTS}
                    className='font-extrabold text-[72px] leading-loose tracking-widest'>
                    MY PROJECTS
                    </motion.p> 
            <div className="w-60 border border-white">

            </div>
            </motion.div>
            <motion.div className='grid grid-cols-3 gap-x-5 mx-auto w-11/12 justify-center'>
                <AspectRatio
                name='Lapak-UMKM'
                src={lapak}
                />
                <AspectRatio
                name='AirBnb'
                src={airbnb1}
                src2={airbnb2}
                size='w-[400px] mx-auto'
                />
                <AspectRatio
                name='My Movie App'
                src={movie}
                />
            
            </motion.div>
        </div>
    )
}

export default Projects