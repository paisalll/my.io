import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'
import esperien from "../../public/esperience.png";
import study from "../../public/study.png";
import alta from "../../public/logo-ALTA-v2.png";
import fathillah from "../../public/fathillah.png";
import lti from "../../public/lti.png";

const Experience = () => {
    return (
        <div className="flex flex-col relative w-full h-full mt-24">
            <motion.div
                className="bg-gradient-to-b from-main to-[#A178B9] text-transparent bg-clip-text p-4">
                    <motion.p
                    className='font-extrabold text-[50px] leading-loose tracking-widest'>
                    MY EXPERIENCE AND EDUCATION
                    </motion.p> 
            <div className="w-60 border border-white">

            </div>
            </motion.div>
            <div className="grid grid-cols-2 mx-20">
                <div className="w-full flex">
                    <Image
                    src={study}
                    alt='study'
                    width={220}/>
                    <motion.div className='flex flex-col space-y-2'>
                        <motion.div
                            className="bg-gradient-to-b from-main to-[#A178B9] text-transparent bg-clip-text py-4">
                                <motion.p
                                className='font-extrabold text-[26px] leading-loose tracking-widest'>
                                Education
                                </motion.p> 
                        </motion.div>
                        <motion.div className='flex flex-col space-y-5 text-white justify-center'>
                            <Image
                            src={alta}
                            alt='alta'
                            className='mx-auto'
                            width={120}/>
                            <p className='text-sm text-justify'>
                            Immersive Program Frontend Engineering is an intensive 3 months program designed to train future frontend engineers in the fundamentals of software development. Studying Pair Programming, HTML/CSS, Git, Github, Gitflow, React, Redux, Test Driven Development, Deployment, TailwindCSS, Figma, React Typescript
                            </p>
                        </motion.div>
                        <motion.div className='flex flex-col space-y-5 text-white justify-center'>
                            <Image
                            src={fathillah}
                            alt='fathillah'
                            className='mx-auto'
                            width={50}/>
                            <p className='text-sm text-justify'>
                            Studying at Fatahillah Vocational High Scoll Majoring in Software Engineer, i learn programming from basic. i learn algoritma and for technologi i leran HTML, CSS, Bootstrap, Java, PHP and MySQL
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
                <div className="w-full flex">
                    <Image
                    src={esperien}
                    alt='esperien'
                    width={220}/>
                    <motion.div className='flex flex-col space-y-2'>
                        <motion.div
                            className="bg-gradient-to-b from-main to-[#A178B9] text-transparent bg-clip-text py-4">
                                <motion.p
                                className='font-extrabold text-[26px] leading-loose tracking-widest'>
                                Experience
                                </motion.p> 
                        </motion.div>
                        <motion.div className='flex flex-col space-y-5 text-white justify-center'>
                            <Image
                            src={lti}
                            alt='lti'
                            className='mx-auto'
                            width={180}/>
                            <p className='text-sm text-justify'>
                                I have had one year of experience working as a freelance support admin, my task Creating daily, weekly, and even monthly tasks to be completed by the team and I have also created user interfaces for a company&apos;s website using Laravel, HTML, and CSS. from August 2021 to September 2022.
                            </p>
                        </motion.div>
                        <motion.div className='flex flex-col space-y-5 text-white justify-center'>
                            <Image
                            src={lti}
                            alt='lti'
                            className='mx-auto'
                            width={180}/>
                            <p className='text-sm text-justify'>
                            I interned for 3 months as a network operation center, i&apos;m monitoring the Palapa Ring Tengah Network from November, 2019 - February, 2020
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Experience