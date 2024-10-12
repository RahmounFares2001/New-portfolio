import Image from 'next/image'
import React from 'react'

export default function page() {

  const list = [
    {
      id: 1,
      name: "Ecommerce",
      src: "/portfolio/ecommerce.png"
    },
    {
      id: 2,
      name: "Wadjed",
      src: "/portfolio/wadjed.png"
    },
    {
      id: 3,
      name: "Services Management",
      src: "/portfolio/services.png"
    },
    {
      id: 4,
      name: "Car Rental",
      src: "/portfolio/carRental.png"
    },
    {
      id: 5,
      name: "IPTV",
      src: "/portfolio/iptv.png"
    },
    {
      id: 6,
      name: "Elstar",
      src: "/portfolio/ecommerce.png"
    }
  ]
  return (
    <section className='text-white flex flex-col items-center gap-20 py-24' >
        <h1 className='text-4xl sm:text-5xl font-bold' >MY <span className='text-indigo-600'>PORTFOLIO</span></h1>

        {/* filter */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-8 md:gap-10' >
          <button className='text-xl sm:text-2xl w-40 py-2 hover:bg-indigo-800 bg-indigo-800 rounded-md' >All</button>

          <button className='text-xl sm:text-2xl w-40 py-2 hover:bg-indigo-800 rounded-md' >Full Stack</button>

          <button className='text-xl sm:text-2xl w-40 py-2 hover:bg-indigo-800 rounded-md' >Backend</button>

          <button className='text-xl sm:text-2xl w-40 py-2 hover:bg-indigo-800 rounded-md' >Frontend</button>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
          px-10 lg:px-24 gap-10 md:gap-5' >
          {list.map((item, index) => (
            <div className='col-span-1 rounded-lg cursor-pointer' >
              <Image src={item.src} width={800} height={800} alt='Project'
                  className='w-full h-full rounded-lg border border-indigo-800' />
            </div>
          ))}
        </div>
    </section>
  )
}
