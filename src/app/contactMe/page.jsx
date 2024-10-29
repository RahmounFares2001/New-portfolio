"use client";

import React, { useState } from 'react'

// motion
import { motion } from 'framer-motion';

// icons
import { FaSignature } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';


export default function page() {

    const [spin, setSpin] = useState(false);

    const [contactData, setContactData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })
    const onSubmit = async () => {
        try {
            setSpin(true);

            const response = await axios.post('/api/contact', contactData);
            setSpin(false);
            toast.success('Message sent successfully');
                
        } catch (error) {
            setSpin(false);
            toast.error('Failed');
            console.log(error);
        } 
    };


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

        <div className='flex flex-col lg:flex-row px-4 sm:px-24 gap-20 lg:gap-10
            items-center lg:items-start' >

            <motion.div className='flex items-center lg:items-start w-full lg:w-2/6'
                initial= {{x: '-40vw', opacity: '0', type: ""}}
                animate= {{x: 0, opacity: '1'}}
                transition={{ duration: 0.5, delay: 0.3, stiffness: 50, type: 'spring' }} >
                <div className='w-full flex items-center lg:items-start flex-col gap-7' >
                    <h1 className='text-2xl font-bold' >DONT'T BE <span className='text-indigo-600'>SHY !</span></h1>

                    <p className='text-center md:text-start' >Feel Free To Send me A Message Or Reach Out To me Whenever You Need Assistance. Your Satisfaction Is myTop Priority</p>

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
            <motion.div className='w-full lg:w-4/6 grid grid-cols-2 gap-10'
                initial= {{x: '40vw', opacity: '0', type: ""}}
                animate= {{x: 0, opacity: '1'}}
                transition={{ duration: 0.5, delay: 0.3, stiffness: 50, type: 'spring' }} >
                <input type="text" name='name' placeholder='YOUR NAME'
                    className='h-max px-5 py-3 rounded-full col-span-2 md:col-span-1
                        bg-gray-900 outline-none border-2 border-black hover:border-indigo-800
                        focus:border-indigo-800' required
                        onChange={(e) => {setContactData({...contactData, name: e.target.value})}} />

                <input type="text" name='email' placeholder='YOUR EMAIL'
                    className='h-max px-5 py-3 rounded-full col-span-2 md:col-span-1
                        bg-gray-900 outline-none border-2 border-black hover:border-indigo-800
                        focus:border-indigo-800' required
                        onChange={(e) => {setContactData({...contactData, email: e.target.value})}} />
                
                <input type="text" name='subject' placeholder='YOUR SUBJECT'
                    className='h-max px-5 py-3 rounded-full col-span-2
                        bg-gray-900 outline-none border-2 border-black hover:border-indigo-800
                        focus:border-indigo-800' required
                        onChange={(e) => {setContactData({...contactData, subject: e.target.value})}} />

                <textarea name='message' placeholder='YOUR MESSAGE'
                    cols='20'
                    className='h-40 px-5 py-3 rounded-xl col-span-2
                        bg-gray-900 outline-none border-2 border-black hover:border-indigo-800
                        focus:border-indigo-800' required
                        onChange={(e) => {setContactData({...contactData, message: e.target.value})}} />


                <div className='col-span-2 flex justify-center' >
                    <button className={`${spin && 'button button-loading'} w-max px-32 py-3 border text-indigo-400 border-indigo-400
                        rounded-full hover:bg-indigo-400 hover:text-black text-sm`}
                        onClick={onSubmit} >
                            <span className='button-text' >SUMBIT</span>
                    </button>
                </div>
            </motion.div>


        </div>

    <Toaster />

    </motion.section>
    </>
  )
}