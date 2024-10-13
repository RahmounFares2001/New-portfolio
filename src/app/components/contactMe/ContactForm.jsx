'use client';

import React from 'react'

// motion
import { motion } from 'framer-motion';

export default function ContactForm() {
  return (
    <motion.div className='w-full lg:w-4/6 grid grid-cols-2 gap-10'
          initial= {{x: '40vw', opacity: '0', type: ""}}
          animate= {{x: 0, opacity: '1'}}
          transition={{ duration: 0.5, delay: 0.3, stiffness: 50, type: 'spring' }} >
        <input type="text" name='name' placeholder='YOUR NAME'
            className='h-max px-5 py-3 rounded-full col-span-2 md:col-span-1
                bg-gray-900 outline-none border-2 border-black hover:border-indigo-800
                  focus:border-indigo-800' required />

        <input type="text" name='name' placeholder='YOUR EMAIL'
            className='h-max px-5 py-3 rounded-full col-span-2 md:col-span-1
                bg-gray-900 outline-none border-2 border-black hover:border-indigo-800
                  focus:border-indigo-800' required />
        
        <input type="text" name='name' placeholder='YOUR SUBJECT'
            className='h-max px-5 py-3 rounded-full col-span-2
                bg-gray-900 outline-none border-2 border-black hover:border-indigo-800
                  focus:border-indigo-800' required />

        <textarea name='name' placeholder='YOUR MESSAGE'
            cols='20'
            className='h-40 px-5 py-3 rounded-xl col-span-2
                bg-gray-900 outline-none border-2 border-black hover:border-indigo-800
                  focus:border-indigo-800' required />


        <div className='col-span-2 flex justify-center' >
          <button className='w-max px-32 py-3 border text-indigo-400 border-indigo-400
              rounded-full hover:bg-indigo-400 hover:text-black text-sm' >SUMBIT</button>
        </div>
    </motion.div>
  )
}
