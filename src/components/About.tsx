import { motion } from 'framer-motion'
import React from 'react'
import Image from 'next/image';
import gambar from "../../public/headers2.png";
import gam1 from "../../public/Programming logos and icons by hrhasnai (8).svg";
import gam2 from "../../public/Programming logos and icons by hrhasnai (11).svg";
import gam3 from "../../public/Programming logos and icons by hrhasnai (5).svg";
import gam4 from "../../public/Programming logos and icons by hrhasnai (33).svg";
import gam5 from "../../public/react.svg";
import gam6 from "../../public/Frame.png";
import gam7 from "../../public/original.png";

export const FADE_DOWN_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0, transition: { type: "spring" } },
};

const About = () => {
    return (
        <div className="flex flex-col relative w-full h-full mt-24 px-2">
            <motion.div
                className="bg-gradient-to-b from-main to-[#A178B9] text-transparent bg-clip-text p-4">
                    <motion.p 
                    variants={FADE_DOWN_ANIMATION_VARIANTS}
                    className='font-extrabold text-[72px] leading-loose tracking-widest'>
                    ABOUT ME
                    </motion.p> 
            <div className="w-60 border border-white">

            </div>
            </motion.div>
            <motion.div className=''>
                <motion.p
                className='mt-5 mx-auto p-2 hover:cursor-pointer text-[18px] text-white'>
                Hello, i am Faizal. I am very interested in the world of programming, especially in becoming a frontend
                engineer.
                <p>
                Creating an attractive user 
                interface that is easily understandable for  
                users is 
                truly enjoyable.
                I have 
                been 
                </p>
                <p>
                familiar
                with 
                programming since 2018 when I entered 
                vocational high 
                school, majoring in 
                software 
                </p>
                engineering.
                And I continued my learning journey and 
                joining Alterra 
                Academy to enhance my 
                skills. Here, I 
                <p>
                </p>
                learned React,
                TypeScript,
                and their 
                respective libraries, currently i
                learn next js.
                Now, I want
                to continue what 
                <p>
                I started and 
                work
                as a frontend 
                engineer in
                a company where I can grow 
                professionally.
                </p>
                </motion.p>
                <Image
                className='absolute top-48 rigth-0 ml-[900px]'
                src={gambar}
                width={450}
                alt='header'
                />
            </motion.div>
            <motion.div className='flex flex-col'>
                <motion.div
                    className="bg-gradient-to-b from-main to-[#A178B9] text-transparent bg-clip-text p-4">
                        <motion.p 
                        variants={FADE_DOWN_ANIMATION_VARIANTS}
                        className='font-extrabold text-[32px] leading-loose tracking-widest'>
                        Technology Stack
                        </motion.p> 
                </motion.div>
                <motion.div className='ml-10 flex space-x-10'>
                    <Image
                    src={gam3}
                    alt='skill1'
                    width={80}
                    />
                    <Image
                    src={gam1}
                    alt='skill1'
                    width={80}
                    />
                    <Image
                    src={gam2}
                    alt='skill1'
                    width={80}
                    />
                    <Image
                    src={gam7}
                    alt='skill1'
                    width={80}
                    />
                    <Image
                    src={gam4}
                    alt='skill1'
                    className='bg-white'
                    width={80}
                    />
                    <Image
                    src={gam6}
                    alt='skill1'
                    width={80}
                    />
                    <Image
                    src={gam5}
                    className='animate-spin'
                    alt='skill1'
                    width={80}
                    />
                </motion.div>
            </motion.div>
        </div>
    )
}

export default About