import { motion } from 'framer-motion'
import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import { Alert } from './Alert';
import github from "../../public/github.svg";
import ig from "../../public/ig.svg";
import wa from "../../public/wa.svg";
import linkin from "../../public/linkin.svg";
import Image from 'next/image';


const Contact = () => {
    const form: any = useRef()
    const service: string = process.env.NEXT_PUBLIC_SERVICE_ID!;
    const templateId: string = process.env.NEXT_PUBLIC_TEMPLATE_ID!;
    const publicKey: string = process.env.NEXT_PUBLIC_PUBLIC_ID!;
    const [error, setError] = useState(false)
    const [succes, setsuccess] = useState(false)

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        emailjs.sendForm(service, templateId, form.current, publicKey)
            .then((result) => {
                console.log(result.text);
                setsuccess(true)
            }, (error) => {
                console.log(error.text);
                setError(true)
            });
        };
    const handleWa =() => {
        window.open('https://wa.me/6285156484127')
    }
    const handleIg =() => {
        window.open('https://www.instagram.com/paisaalll/')
    }
    const handleLinkin =() => {
        window.open('https://www.linkedin.com/in/paisallll')
    }
    const handleGithub =() => {
        window.open('https://github.com/paisalll')
    }
        return (
            <div className="flex flex-col relative w-full h-full mt-20 px-2">
            <motion.div
                className="bg-gradient-to-b from-main to-[#A178B9] text-transparent bg-clip-text p-4">
                    <motion.p 
                    className='font-extrabold text-[50px] leading-loose tracking-widest'>
                    Contacts
                    </motion.p> 
            </motion.div>
            <div className="grid grid-cols-2 mx-20 gap-x-5">
                <div className="flex flex-col">
                    <p className='text-base font-semibold text-main text-center'>
                        I&apos;m still learning about programing but if you need me, i will do my best with 1000% my ability for my growth
                    </p>
                    <p className='text-sm font-normal text-white text-center mt-5'>
                        To find me you can fill the form or find me in...
                    </p>
                    <div className="flex flex-wrap justify-center mt-10 space-x-10 w-full">
                        <Image
                        src={wa}
                        alt='wa'
                        className='w-16 hover:scale-110 cursor-pointer'
                        onClick={()=> handleWa()}
                        />
                        <Image
                        src={ig}
                        alt='ig'
                        className='w-16 hover:scale-110 cursor-pointer'
                        onClick={()=> handleIg()}
                        />
                        <Image
                        src={linkin}
                        alt='linkin'
                        className='w-16 hover:scale-110 cursor-pointer'
                        onClick={()=> handleLinkin()}
                        />
                        <Image
                        src={github}
                        alt='github'
                        className='w-16 hover:scale-110 cursor-pointer'
                        onClick={()=> handleGithub()}
                        />
                    </div>
                </div>
                <div className="w-[800px]">
                    <form ref={form} onSubmit={sendEmail} className='flex flex-col justify-center mx-auto gap-5  p-5'>
                            <h1 className='mx-auto text-main text-2xl font-bold text-justify w-[500px]'>
                            Contact Form
                            </h1>
                            <div className='flex flex-col '>
                                <label className=' font-semibold text-lg text-main '>Your Name</label>
                                <input className='input  bg-zinc-900 text-white w-full max-w-lg focus:ring-2 focus:outline-none focus:ring-main mt-1' required type="text" name="user_name" defaultValue='' placeholder='Faizal Triasa' />
                            </div>
                            <div className='flex flex-col'>
                                <label className=' font-semibold text-lg text-main'>Company Name</label>
                                <input className='input bg-zinc-900 text-white w-full max-w-lg focus:ring-2 focus:outline-none focus:ring-main mt-1'  type="text" name="company_name" defaultValue='' placeholder='company name' />
                            </div>
                        <motion.div className='flex flex-col'>
                            <label className=' font-semibold text-lg text-main'>Your Email</label>
                            <input className='input bg-zinc-900 text-white  w-full max-w-lg focus:ring-2 focus:outline-none focus:ring-main mt-1' required type="email" name="user_email" defaultValue='' placeholder='example@gmail.com' />
                        </motion.div>
                        <motion.div className='flex flex-col'>
                            <label className=' font-semibold text-lg text-main'>Message</label>
                            <textarea className="textarea bg-zinc-900 text-white w-full max-w-lg focus:ring-2 focus:outline-none focus:ring-main mt-1" required name="message" defaultValue='' placeholder='hello faizal, ...' />
                        </motion.div>
                            <button
                                type="submit"
                                value="Send"
                                className='btn bg-main mx-auto rounded-lg hover:bg-purple-800 focus:ring-2 focus:outline-none focus:ring-main text-white border-none btn-wide text-lg gap-2 mb-5 hover:border-none  hover:scale-110'>
                                Send 
                            </button>
                    </form>
                </div>
            </div>
            <Alert
            open={succes}
            handleConfirm={()=> setsuccess(false)}
            title='Succes Send Email'
            text='Thank you for sending me an email. Please wait for my response.'
            />
            <Alert
            open={error}
            handleConfirm={()=> setError(false)}
            title='Error Send Email'
            text='sorri for the error'
            />
        </div>
    )
}

export default Contact