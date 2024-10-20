"use client";

import React from 'react'

import { motion } from 'framer-motion';

export default function page() {
  return (
    <motion.section className='overflow-x-hidden w-full h-[100vh] text-white flex flex-col items-center gap-20 pb-40 pt-24 bg-black'
                  initial= {{y: '-100vh'}}
                  animate= {{y: 0}}
                  transition={{ duration: 0.5, delay: 0, stiffness: 50 }} >

      <motion.h1 className='text-4xl sm:text-5xl font-bold'
            initial= {{y: '-20vw', opacity: '0'}}
            animate= {{y: 0, opacity: '1'}}
            transition={{ duration: 0.5, delay: 0.3, stiffness: 50 }} >

            MY <span className='text-indigo-600'>SKILLS</span>
            
      </motion.h1>

        <motion.div className='w-full flex flex-col items-center gap-8'
            initial= {{x: '-40vw', opacity: '0', type: ""}}
            animate= {{x: 0, opacity: '1'}}
            transition={{ duration: 0.5, delay: 0.3, stiffness: 50, type: 'spring' }} >


          <div className='grid sm:grid-cols-2 w-11/12 sm:w-5/6 md:w-4/5 text-sm gap-6
                justify-center sm:justify-normal' >
            <h1 className='col-span-2 w-11/12 sm:w-5/6 md:w-4/5 text-2xl text-white font-bold text-start' >TECH STACK</h1>

            <h1 className='text-gray-500 col-span-2 sm:col-span-1' >Front-End : 
                  <span className='text-white font-bold' > HTML5, CSS3, JavaScript (React.js, Next.js)</span>
            </h1>

            <h1 className='text-gray-500 col-span-2 sm:col-span-1' >Back-End : 
                  <span className='text-white font-bold' > Golang(Gin), Node.js</span>
            </h1>

            <h1 className='text-gray-500 col-span-2 sm:col-span-1' >DBMS : 
                  <span className='text-white font-bold' > PostgreSQL, OracleDB, MongoDB</span>
            </h1>

            <h1 className='text-gray-500 col-span-2 sm:col-span-1' >Mobile App Development : 
                  <span className='text-white font-bold' > React Native</span>
            </h1>

            <h1 className='text-gray-500 col-span-2 sm:col-span-1' >CSS Frameworks : 
                  <span className='text-white font-bold' > Tailwind CSS, Material-UI (MUI)</span>
            </h1>

            <h1 className='text-gray-500 col-span-2 sm:col-span-1' >CI/CD : 
                  <span className='text-white font-bold' > Jenkins</span>
            </h1>

            <h1 className='text-gray-500 col-span-2 sm:col-span-1' >Containerization : 
                  <span className='text-white font-bold' > Docker, Kubernetes</span>
            </h1>

            <h1 className='text-gray-500 col-span-2 sm:col-span-1' >Cloud Services : 
                  <span className='text-white font-bold' > AWS</span>
            </h1>

            <h1 className='text-gray-500 col-span-2 sm:col-span-1' >Scripts : 
                  <span className='text-white font-bold' > Bash</span>
            </h1>

            <h1 className='text-gray-500 col-span-2 sm:col-span-1' >Version Control : 
                  <span className='text-white font-bold' > Git, Github</span>
            </h1>

          </div>

        </motion.div>

    </motion.section>
  )
}
