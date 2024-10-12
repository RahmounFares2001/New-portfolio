"use client"

import React, { useState } from 'react'


// icons
import { IoMoon } from "react-icons/io5";

import { AiFillHome } from "react-icons/ai";
import { MdPerson } from "react-icons/md";
import { PiStudentBold } from "react-icons/pi";
import { FaImage } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { usePathname } from 'next/navigation';
import Link from 'next/link';


export default function SideBar() {
  const list = [
    {
      id: 1,
      name: 'HOME',
      icon:  <AiFillHome className='text-3xl text-white' />,
      isExpended: false,
      path: '/'
    },{
      id: 2,
      name: 'ABOUT',
      icon:  <MdPerson className='text-3xl text-white' />,
      isExpended: false,
      path: '/aboutMe'
    },
    {
      id: 3,
      name: 'SKILLS',
      icon:  <PiStudentBold className='text-3xl text-white' />,
      isExpended: false,
      path: '/skills'
    },
    {
      id: 4,
      name: 'PORTFOLIO',
      icon:  <FaImage className='text-3xl text-white' />,
      isExpended: false,
      path: '/portfolio'
    },
    {
      id: 5,
      name: 'CONTACT',
      icon:  <FaTelegramPlane className='text-3xl text-white' />,
      isExpended: false,
      path: '/contactMe'
    }
  ]

  const [hoveredButton, setHoveredButton] = useState(0);


  // pathname
  const pathname = usePathname();
  

  return (
    <>
    <div className='hidden lg:flex fixed top-10 right-5 flex-col gap-10 items-end' >

      <button className={`mr-10 px-3 py-3 flex items-center gap-5 w-max 
          rounded-full bg-gray-950 hover:bg-indigo-600`} >
        <IoMoon className='text-3xl text-white' />
      </button>

      {list.map((item, index) => (
        <Link href={item.path}
            className={`px-3 py-3 flex items-center gap-5 w-max rounded-full
              ${hoveredButton == item.id ? "justify-between bg-indigo-600" :
                   "justify-center bg-gray-950"}
              ${pathname == item.path ? "bg-indigo-600" : ""}`}
              onMouseEnter={()=> {setHoveredButton(item.id)}}
              onMouseLeave={()=> {setHoveredButton(0)}}
              key={index} >
                

          {hoveredButton == item.id && <h1 className='pl-3 text-white text-xl' >{item.name}</h1> }
          {item.icon}
        </Link>
      ))}
    </div>


    {/* mobile */}
    <button className={`fixed top-7 right-7 lg:hidden
          px-3 py-3 flex items-center gap-5 w-max 
          rounded-full bg-gray-950 hover:bg-indigo-600`} >
        <IoMoon className='text-3xl text-white' />
      </button>

    <div className='lg:hidden fixed bottom-0 left-0 w-full h-16 bg-slate-900
        flex gap-6 sm:gap-8 justify-center items-center' >

      {list.map((item, index) => (
        <Link href={item.path}
            className={`px-2 sm:px-3 py-2 sm:py-3 flex items-center gap-5 w-max rounded-full
              ${hoveredButton == item.id ? "justify-between bg-indigo-600" :
                   "justify-center bg-gray-950"}`}
              onMouseEnter={()=> {setHoveredButton(item.id)}}
              onMouseLeave={()=> {setHoveredButton(0)}}
              key={index} >

          {hoveredButton == item.id && <h1 className='pl-3 text-white text-xl' >{item.name}</h1> }
          {item.icon}
        </Link>
      ))}

    </div>
    </>
  )
}
