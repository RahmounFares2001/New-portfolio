"use client";

import Image from 'next/image'
import Link from 'next/link';
import React, { useState } from 'react'


import { delay, motion } from 'framer-motion';


// icons
import { FaLink } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


export default function page() {

  const lists = [
    {
      id: 1,
      name: "Ecommerce",
      src: "/portfolio/ecommerce.png",
      link: "#",
      github: "https://github.com/RahmounFares2001",
      category: "fullstack"
    },
    {
      id: 2,
      name: "Wadjed",
      src: "/portfolio/wadjed.png",
      link: "https://demo.wadjed.com/",
      github: "https://github.com/RahmounFares2001",
      category: "fullstack"
    },
    {
      id: 3,
      name: "Services Management",
      src: "/portfolio/services.png",
      link: "https://service-management.vercel.app/",
      github: "https://github.com/RahmounFares2001/service-management",
      category: "fullstack"
    },
    {
      id: 4,
      name: "Simple Bank Backend",
      src: "/portfolio/carRental.png",
      link: "#",
      github: "https://github.com/RahmounFares2001/simple-bank-backend",
      category: "backend"
    },
    {
      id: 5,
      name: "Car Rental",
      src: "/portfolio/carRental.png",
      link: "https://carrental-orcin.vercel.app/",
      github: "https://github.com/RahmounFares2001/car-rental",
      category: "frontend"
    },
    {
      id: 6,
      name: "IPTV",
      src: "/portfolio/iptv.png",
      link: "#",
      github: "https://github.com/RahmounFares2001",
      category: "frontend"
    },
    {
      id: 7,
      name: "Elstar",
      src: "/portfolio/ecommerce.png",
      link: "#",
      github: "https://github.com/RahmounFares2001",
      category: "frontend"
    }
  ]

  // hover
  const [itemHovered, setItemHovered] = useState(0);

  // filter 
  const [filter, setFilter] = useState('all');



  return (
    <motion.section className='overflow-x-hidden w-full h-[100vh] text-white flex flex-col items-center gap-20 pb-40 pt-24 bg-black'
          initial= {{y: '-100vh'}}
          animate= {{y: 0}}
          transition={{ duration: 0.5, delay: 0, stiffness: 50 }} >

        <motion.h1 className='text-4xl sm:text-5xl font-bold'
            initial= {{y: '-20vw', opacity: '0'}}
            animate= {{y: 0, opacity: '1'}}
            transition={{ duration: 0.5, delay: 0.3, stiffness: 50 }} >

            My <span className='text-indigo-600'>PORTFOLIO</span>
            
        </motion.h1>

        {/* filter */}
        <motion.div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-8 md:gap-10' >
          <motion.button className={`text-xl sm:text-2xl w-40 py-2 hover:bg-indigo-800 
              ${filter == 'all' && 'bg-indigo-800'} rounded-md`}
                  onClick={()=> {setFilter('all')}}
                  initial= {{x: '-40vw', opacity: '0', type: ""}}
                  animate= {{x: 0, opacity: '1'}}
                  transition={{ duration: 0.5, delay: 0.3, stiffness: 50, type: 'spring' }} >All
          </motion.button>

          <motion.button className={`text-xl sm:text-2xl w-40 py-2 hover:bg-indigo-800
              ${filter == 'fullstack' && 'bg-indigo-800'} rounded-md`}
                  onClick={()=> {setFilter('fullstack')}}
                  initial= {{x: '-40vw', opacity: '0', type: ""}}
                  animate= {{x: 0, opacity: '1'}}
                  transition={{ duration: 0.5, delay: 0.4, stiffness: 50, type: 'spring' }}>Full Stack
          </motion.button>

          <motion.button className={`text-xl sm:text-2xl w-40 py-2 hover:bg-indigo-800
              ${filter == 'backend' && 'bg-indigo-800'} rounded-md`}
                  onClick={()=> {setFilter('backend')}}
                  initial= {{x: '-40vw', opacity: '0', type: ""}}
                  animate= {{x: 0, opacity: '1'}}
                  transition={{ duration: 0.5, delay: 0.6, stiffness: 50, type: 'spring' }} >Backend
          </motion.button>

          <motion.button className={`text-xl sm:text-2xl w-40 py-2 hover:bg-indigo-800
              ${filter == 'frontend' && 'bg-indigo-800'} rounded-md`}
                  onClick={()=> {setFilter('frontend')}}
                  initial= {{x: '-40vw', opacity: '0', type: ""}}
                  animate= {{x: 0, opacity: '1'}}
                  transition={{ duration: 0.5, delay: 0.8, stiffness: 50, type: 'spring' }} >Frontend
          </motion.button>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
          px-10 lg:px-24 gap-10 md:gap-5' >

          {lists.filter(list => (filter === 'all' || list.category === filter)).map((item, index) => (
            <motion.div className='col-span-1 rounded-lg cursor-pointer relative'
                key={index}
                onMouseEnter={()=> {setItemHovered(item.id)}}
                onMouseLeave={()=> {setItemHovered(0)}}
                initial= {{y: '40vh', opacity: '0', type: ""}}
                animate= {{y: 0, opacity: '1'}}
                transition={{ duration: 0.5, delay: 0.4, stiffness: 50, type: 'spring' }} >
              <Image src={item.src} width={800} height={800} alt='Project'
                  className='w-full h-full rounded-lg border border-indigo-800' />
              
              {itemHovered == item.id &&
                <motion.div className='absolute top-0 right-0 w-full h-[100%] bg-indigo-600 
                    rounded-lg flex justify-center items-center'
                    initial= {{opacity: 0}}
                    animate= {{opacity: 1}}
                    transition={{ duration: 0.3, delay: 0, stiffness: 50 }} >

                  <h1 className='text-white text-2xl' >{item.name}</h1>
                  <Link href={item.link} target='_blank' >
                    <FaLink className='absolute text-2xl bottom-3 right-3' />
                  </Link>

                  <Link href={item.github} target='_blank' >
                    <FaGithub className='absolute text-2xl bottom-3 left-3' />
                  </Link>

                </motion.div>  }
                
            </motion.div>
          ))}
        </div>
    </motion.section>
  )
}
