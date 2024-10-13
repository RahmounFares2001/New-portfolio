"use client";

import React from 'react'

import { motion } from 'framer-motion';

export default function page() {
  return (
    <motion.section className='overflow-x-hidden w-full h-[100vh] text-white flex flex-col items-center gap-16 pb-40 pt-24 bg-black'
            initial= {{y: '-100vh'}}
            animate= {{y: 0}}
            transition={{ duration: 0.5, delay: 0, stiffness: 50 }} >

      <motion.h1 className='text-4xl sm:text-5xl font-bold'
            initial= {{y: '-20vw', opacity: '0'}}
            animate= {{y: 0, opacity: '1'}}
            transition={{ duration: 0.5, delay: 0.3, stiffness: 50 }} >

            ABOUT <span className='text-indigo-600'>ME</span>
            
      </motion.h1>

        <div className='w-full flex flex-col items-center ' >

          <motion.div className='grid sm:grid-cols-2 w-11/12 sm:w-5/6 md:w-4/5 lg:w-3/5 text-sm gap-6
                justify-center sm:justify-normal'
                initial= {{x: '-40vw', opacity: '0', type: ""}}
                animate= {{x: 0, opacity: '1'}}
                transition={{ duration: 0.5, delay: 0.3, stiffness: 50, type: 'spring' }} >

            <h1 className='col-span-2 w-11/12 sm:w-5/6 md:w-4/5 lg:w-3/5 text-2xl text-white font-bold text-start' >PERSONAL INFO</h1>

            <h1 className='text-gray-500 col-span-2 sm:col-span-1' >First Name :
                  <span className='text-white font-bold' > Fares</span>
            </h1>

            <h1 className='text-gray-500 col-span-2 sm:col-span-1' >Last Name : 
                  <span className='text-white font-bold' > Fares</span>
            </h1>

            <h1 className='text-gray-500 col-span-2 sm:col-span-1' >Age : 
                  <span className='text-white font-bold' > 23</span>
            </h1>

            <h1 className='text-gray-500 col-span-2 sm:col-span-1' >Nationality : 
                  <span className='text-white font-bold' > Algeirs</span>
            </h1>

            <h1 className='text-gray-500 col-span-2 sm:col-span-1' >Freelance : 
                  <span className='text-indigo-600 font-bold' > Avaible</span>
            </h1>

            <h1 className='text-gray-500 col-span-2 sm:col-span-1' >Adress : 
                  <span className='text-white font-bold' > Algeria</span>
            </h1>

            <h1 className='text-gray-500 col-span-2 sm:col-span-1' >Phone : 
                  <span className='text-white font-bold' > +213656794752</span>
            </h1>

            <h1 className='text-gray-500 col-span-2 sm:col-span-1' >E-Mail : 
                  <span className='text-white font-bold' > rahmoun.fares.abdelhamid@gmail.com</span>
            </h1>

            <h1 className='text-gray-500 col-span-2 sm:col-span-1' >Linkdin : 
                  <span className='text-white font-bold' > Fares Rahmoun</span>
            </h1>

            <h1 className='text-gray-500 col-span-2 sm:col-span-1' >Languages : 
                  <span className='text-white font-bold' > Arabic, English, French</span>
            </h1>
    
            <button className='col-span-2 mt-3 w-max px-16 py-3 rounded-full text-indigo-400 hover:text-white
                hover:bg-indigo-600 border border-indigo-600' >DOWNLOAD CV</button>

          </motion.div>

        </div>
    </motion.section>
  )
}
