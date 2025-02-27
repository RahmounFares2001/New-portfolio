"use client";

import Image from "next/image";

// motion
import { motion } from "framer-motion";

// icons 
import { FaArrowRight } from "react-icons/fa6";


export default function Home() {
  const picStyle = {
    borderRadius: '34% 64% 77% 26% / 73% 54% 45% 19%',
    animation: 'spin 5s linear infinite', 
  };

  return (
    <>
    <motion.section className="overflow-x-hidden w-full h-[100vh] flex justify-center items-center bg-black"
        initial= {{y: '-100vh'}}
        animate= {{y: 0}}
        transition={{ duration: 0.5, delay: 0, stiffness: 50 }} >
      <div className="flex gap-7 sm:gap-10 md:gap-16 w-full lg:w-10/12 
        pb-40 pt-20 lg:py-0 px-8 lg:px-0
        flex-col lg:flex-row justify-center items-center" >
        
        <motion.div className="w-max h-max"
          initial= {{x: '-80vw', opacity: '0'}}
          animate= {{x: 0, opacity: '1'}}
          transition={{ duration: 0.5, delay: 0.2, stiffness: 50 }} >

            <Image src='/me.jpg' width={800} height={800} alt="IMAGE"
              className="hidden lg:block w-72 rounded-full border-2"
              style={picStyle} />

        </motion.div>

        <Image src='/phonePic.jpg' width={800} height={800} alt="IMAGE"
          className="lg:hidden block w-44 rounded-full border-2"
          style={picStyle} />

        <div className="text-white text-2xl lg:text-5xl flex flex-col gap-3 lg:gap-6
              w-full tracking-wide items-center lg:items-start justify-center" >

          <motion.h1 className="font-bold"
              initial= {{y: '-40vh', opacity: '0'}}
              animate= {{y: 0, opacity: '1'}}
              transition={{ duration: 0.5, delay: 0.2, stiffness: 50 }} >

            I'm <span className="text-indigo-600" >Rahmoun Fares</span>

          </motion.h1>

          <motion.h1 className="font-bold text-indigo-600"
            initial= {{x: '40vw', opacity: '0'}}
            animate= {{x: 0, opacity: '1'}}
            transition={{ duration: 0.5, delay: 0.4, stiffness: 50 }} >
            FullStack Developer
          </motion.h1>

          <motion.p className="text-xl text-center lg:text-start lg:w-4/5 py-3 sm:py-5"
            initial= {{x: '40vw', opacity: '0', scale: '0'}}
            animate= {{x: 0, opacity: '1', scale: '1'}}
            transition={{ duration: 0.5, delay: 0.5, stiffness: 50 }} >
              Hi, I'm a Full-Stack Developer with 2 years of experience in building, and maintaining responsive web applications.
          </motion.p>

          <motion.a href="/aboutMe" target="_blank" rel="noopener noreferrer"
                className="text-sm text-center font-bold rounded-full
                border border-indigo-600 w-64  
                flex justify-between items-center hover:bg-indigo-600
                t transition-colors duration-500 delay-150"
                initial= {{y: '-100vh'}}
                animate= {{y: 0}}
                transition={{ duration: 1, delay: 1, stiffness: 50 , type: 'spring' }} 
               > 
            <h1 className="w-4/5" >MORE ABOUT ME</h1>
            <div className="h-full py-7 aspect-square bg-indigo-600
                rounded-full flex justify-center items-center" >
              <FaArrowRight className="text-2xl text-white" />
            </div>
          </motion.a>

        </div>
      </div>

     
    </motion.section>
    </>
  );
}
