import { motion } from 'framer-motion'
import React, { useState } from 'react'
import lapak from '../../public/Lapak.png'
import airbnb1 from '../../public/airbnb1.png'
import airbnb2 from '../../public/airbnb2.png'
import movie from '../../public/movieapp.png'
import Image from 'next/image'
import { AspectRatio } from './ImageRatio'
import { AlertDialog } from './Modal'

export const FADE_DOWN_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0, transition: { type: "spring" } },
};

const Projects = () => {
    const [openLapak, setOpenLapak] = useState(false)
    const [openBnb, setOpenBnb] = useState(false)
    const [openMovie, setOpenMovie] = useState(false)
    return (
        <div className="flex flex-col relative w-full h-full mt-24 px-2">
            <motion.div
                className="bg-gradient-to-b from-main to-[#A178B9] text-transparent bg-clip-text p-4">
                    <motion.p 
                    variants={FADE_DOWN_ANIMATION_VARIANTS}
                    className='font-extrabold text-[50px] leading-loose tracking-widest'>
                    MY PROJECTS
                    </motion.p> 
            <div className="w-60 border border-white">

            </div>
            </motion.div>
            <motion.div className='grid grid-cols-3 gap-x-5 mt-20 mx-auto w-11/12 justify-center'>
                <AspectRatio
                name='Lapak-UMKM'
                src={lapak}
                handleOpen={()=> setOpenLapak(true)}
                />
                <AspectRatio
                name='AirBnb'
                src={airbnb1}
                src2={airbnb2}
                size='w-[400px] mx-auto'
                handleOpen={()=> setOpenBnb(true)}
                />
                <AspectRatio
                name='My Movie App'
                src={movie}
                handleOpen={()=> setOpenMovie(true)}
                />
            </motion.div>
            <AlertDialog
            title='Lapak-UMKM'
            website={"https://lapakumkm.netlify.app/"}
            github='https://github.com/ALTA-LapakUMKM-Group-2/LapakUMKM-FE'
            handleOk={()=> setOpenLapak(false)}
            open={openLapak}
            >
                <p> LapakUMKM is a platform connects customers with locally-made products from various regions in Indonesia and supports business owners by providing a new sales channel to reach a wider audience. In this project, I am using React TypeScript and also using ReactOauth to provide a login option with Google. As for the components, we are trying to use the ones from Radix UI.</p>
            </AlertDialog>
            <AlertDialog
            title='AirBnb'
            github='https://github.com/Alta-Project3/GroupProject3-Airbnb-App'
            website={'https://alta-bnb-dzhkklzyq-acamalaka.vercel.app/'}
            handleOk={()=> setOpenBnb(false)}
            open={openBnb}
            >
                <p>This platform was created to facilitate customers who are looking for accommodations or homestays in specific areas. The platform also utilizes the Geocoding API to obtain latitude and longitude, which allows users to view the accommodation location in detail.</p>
            </AlertDialog>
            <AlertDialog
            title='My Movie App'
            github='https://github.com/ALTA-FE12-FaizalTriasa/MyMovies-React-App'
            handleOk={()=> setOpenMovie(false)}
            open={openMovie}
            >
                <p>This app is a first time app i create using React Typescript, in this app i use library from react like Redux Toolkit, React Router, and i use framework form Tailwind for make make component i use Daisyui</p>
            </AlertDialog>
        </div>
    )
}

export default Projects