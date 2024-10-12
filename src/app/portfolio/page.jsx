"use client";

import Image from 'next/image'
import Link from 'next/link';
import React, { useState } from 'react'


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
    <section className='text-white flex flex-col items-center gap-20 pb-40 pt-24' >
        <h1 className='text-4xl sm:text-5xl font-bold' >MY <span className='text-indigo-600'>PORTFOLIO</span></h1>

        {/* filter */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-8 md:gap-10' >
          <button className={`text-xl sm:text-2xl w-40 py-2 hover:bg-indigo-800 
              ${filter == 'all' && 'bg-indigo-800'} rounded-md`}
                  onClick={()=> {setFilter('all')}} >All</button>

          <button className={`text-xl sm:text-2xl w-40 py-2 hover:bg-indigo-800
              ${filter == 'fullstack' && 'bg-indigo-800'} rounded-md`}
                  onClick={()=> {setFilter('fullstack')}} >Full Stack</button>

          <button className={`text-xl sm:text-2xl w-40 py-2 hover:bg-indigo-800
              ${filter == 'backend' && 'bg-indigo-800'} rounded-md`}
                  onClick={()=> {setFilter('backend')}} >Backend</button>

          <button className={`text-xl sm:text-2xl w-40 py-2 hover:bg-indigo-800
              ${filter == 'frontend' && 'bg-indigo-800'} rounded-md`}
                  onClick={()=> {setFilter('frontend')}} >Frontend</button>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
          px-10 lg:px-24 gap-10 md:gap-5' >

          {lists.filter(list => (filter === 'all' || list.category === filter)).map((item, index) => (
            <div className='col-span-1 rounded-lg cursor-pointer relative'
                key={index}
                onMouseEnter={()=> {setItemHovered(item.id)}}
                onMouseLeave={()=> {setItemHovered(0)}} >
              <Image src={item.src} width={800} height={800} alt='Project'
                  className='w-full h-full rounded-lg border border-indigo-800' />
              
              {itemHovered == item.id &&
                <div className='absolute top-0 right-0 w-full h-[100%] bg-indigo-600 
                    rounded-lg flex justify-center items-center' >
                  <h1 className='text-white text-2xl' >{item.name}</h1>
                  <Link href={item.link} target='_blank' >
                    <FaLink className='absolute text-2xl bottom-3 right-3' />
                  </Link>

                  <Link href={item.github} target='_blank' >
                    <FaGithub className='absolute text-2xl bottom-3 left-3' />
                  </Link>
                </div>  }
                
            </div>
          ))}
        </div>
    </section>
  )
}
