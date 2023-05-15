// @refresh
// @useClient
import { motion } from 'framer-motion'
import React from 'react'
import Link from 'next/link';

const Navbar = () => {

    return (
        <motion.div
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="z-50 items-center sticky top-0 bg-sideColor shadow-normal shadow-white rounded-b-xl">
                <motion.div className="flex items-center h-20 justify-between hidden w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
                    <ul className="flex flex-col text-main mx-auto font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
                        <li>
                            <motion.a whileHover={{scale: 1.5}} href="#home" className="block py-4 px-6 w-24 rounded font-bold text-base ">Home</motion.a>
                        </li>
                        <li>
                            <motion.a whileHover={{scale: 1.5}} href="#about" className="block py-4 px-6 w-24 rounded font-bold text-base ">About</motion.a>
                        </li>
                        <li>
                            <motion.a whileHover={{scale: 1.5}} href="#projects" className="block py-4 px-5 w-24 rounded font-bold text-base ">Projects</motion.a>
                        </li>
                        <li>
                            <motion.a whileHover={{scale: 1.5}} href="#stacks" className="block py-4 px-5 w-24 rounded font-bold text-base ">Stacks</motion.a>
                        </li>
                        <li>
                            <motion.a whileHover={{scale: 1.5}} href="#contacts" className="block py-4 px-5 w-24 rounded font-bold text-base ">Contact</motion.a>
                        </li>
                    </ul>
                </motion.div>
        </motion.div>

    )
}

export default Navbar