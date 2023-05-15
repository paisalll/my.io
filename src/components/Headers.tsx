import { animate, motion } from 'framer-motion'
import React from 'react'
import Image from 'next/image'
import  gambar  from "../../public/headers.png";

export const FADE_DOWN_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0, transition: { type: "spring" } },
};

const BOUNCING_ANIMATION_VARIANTS = {
    animate: {
        y: [-2, 0],
        transition: {
            duration: 0.5,
            ease: "easeInOut",
            times: [0, 1],
            repeat: Infinity,
            repeatDelay: 0.25,
        },
    },
};
const Headers = () => {
    return (
        <motion.div className="w-screen mt-20 h-full">
            <motion.div className='relative pt-16'>
                <motion.div
                whileHover={{
                    animation: 'animate',
                    scale: 1.2,
                    transition: { duration: 0.3 },
                }}
                className="absolute top-2 left-80 2xl:ml-48 bg-gradient-to-b from-main to-[#A178B9] text-transparent bg-clip-text p-4">
                    <motion.p 
                    variants={FADE_DOWN_ANIMATION_VARIANTS}
                    className='font-extrabold text-[96px] leading-loose tracking-widest'>
                    FAIZAL TRIASA
                    </motion.p> 
                </motion.div>
                <motion.div className="absolute top-44 rigth-0 ml-[820px] 2xl:ml-[1000px] ">
                    <motion.p
                    variants={FADE_DOWN_ANIMATION_VARIANTS}
                    className='font-semibold text-white text-[28px]'>
                    UI UX Designer
                    </motion.p> 
                </motion.div>
                <motion.div className="absolute top-44 left-96 2xl:ml-40">
                    <motion.p
                    variants={FADE_DOWN_ANIMATION_VARIANTS}
                    className='font-semibold text-white text-[28px]'>
                    Front End Enginer
                    </motion.p> 
                </motion.div>
                <Image
                className='h-96 mt-10'
                src={gambar}
                alt='Headers'
                />
            </motion.div>
            
        </motion.div>
    )
}

export default Headers