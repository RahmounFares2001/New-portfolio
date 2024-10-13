"use client";

import React from 'react'

// motion
import { motion } from 'framer-motion';

// icons
import { FaSignature } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import ContactForm from '../components/contactMe/ContactForm';


export default function page() {
  return (
    <>
    <motion.section className='overflow-x-hidden w-full h-[100vh] text-white flex flex-col items-center gap-20 pb-32 pt-24 bg-black'
        initial= {{y: '-100vh'}}
        animate= {{y: 0}}
        transition={{ duration: 0.5, delay: 0, stiffness: 50 }} >
        
        <motion.h1 className='text-4xl sm:text-5xl font-bold'
            initial= {{y: '-20vw', opacity: '0'}}
            animate= {{y: 0, opacity: '1'}}
            transition={{ duration: 0.5, delay: 0.3, stiffness: 50 }} >

            GET IN <span className='text-indigo-600'>TOUCH</span>

        </motion.h1>

        <div className='flex flex-col lg:flex-row px-4 sm:px-24 gap-10
            items-center lg:items-start' >

            <motion.div className='flex items-center lg:items-start w-full lg:w-2/6'
                initial= {{x: '-40vw', opacity: '0', type: ""}}
                animate= {{x: 0, opacity: '1'}}
                transition={{ duration: 0.5, delay: 0.3, stiffness: 50, type: 'spring' }} >
                <div className='w-full flex items-center lg:items-start flex-col gap-7' >
                    <h1 className='text-2xl font-bold' >DONT'T BE <span className='text-indigo-600'>SHY !</span></h1>

                    <p className='' >Feel Free To Send me A Message Or Reach Out To me Whenever You Need Assistance. Your Satisfaction Is myTop Priority</p>

                    <div className='flex flex-col justify-start gap-5' >
                        <div className='flex gap-5 lg:gap-3 items-center' >
                            <FaSignature className='text-3xl sm:text-4xl text-indigo-600' />
                            <div className='flex flex-col gap-1 text-xl font-bold' >
                                <h1>Name :</h1>
                                <h1 className='text-xs sm:text-sm' >Rahmoun Fares</h1>
                            </div>
                        </div>

                        <div className='flex gap-5 lg:gap-3 items-center' >
                            <MdEmail className='text-3xl sm:text-4xl text-indigo-600' />
                            <div className='flex flex-col gap-1 font-bold' >
                                <h1>Email :</h1>
                                <h1 className='text-xs sm:text-sm' >rahmoun.fares.abdelhamid@gmail.com</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>


            {/* contact form */}
            <>
                <ContactForm />
            </>
        </div>
    </motion.section>
    </>
  )
}