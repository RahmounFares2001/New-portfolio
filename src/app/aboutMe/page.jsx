import React from 'react'

export default function page() {
  return (
    <section className='text-white flex flex-col items-center gap-16 py-24' >
        <h1 className='text-4xl sm:text-5xl font-bold' >ABOUT <span className='text-indigo-600'>ME</span></h1>

        <div className='w-full flex flex-col items-center gap-8' >

          <h1 className='w-11/12 sm:w-5/6 md:w-4/5 lg:w-3/5 text-2xl text-white font-bold text-start' >PERSONAL INFO</h1>

          <div className='grid sm:grid-cols-2 w-11/12 sm:w-5/6 md:w-4/5 lg:w-3/5 text-sm gap-6
                justify-center sm:justify-normal' >
            <h1 className='text-gray-500 col-span-1' >First Name : 
                  <span className='text-white font-bold' > Fares</span>
            </h1>

            <h1 className='text-gray-500 col-span-1' >Last Name : 
                  <span className='text-white font-bold' > Fares</span>
            </h1>

            <h1 className='text-gray-500 col-span-1' >Age : 
                  <span className='text-white font-bold' > 23</span>
            </h1>

            <h1 className='text-gray-500 col-span-1' >Nationality : 
                  <span className='text-white font-bold' > Algeirs</span>
            </h1>

            <h1 className='text-gray-500 col-span-1' >Freelance : 
                  <span className='text-indigo-600 font-bold' > Avaible</span>
            </h1>

            <h1 className='text-gray-500 col-span-1' >Adress : 
                  <span className='text-white font-bold' > Algeria</span>
            </h1>

            <h1 className='text-gray-500 col-span-1' >Phone : 
                  <span className='text-white font-bold' > +213656794752</span>
            </h1>

            <h1 className='text-gray-500 col-span-1' >E-Mail : 
                  <span className='text-white font-bold' > rahmoun.fares.abdelhamid@gmail.com</span>
            </h1>

            <h1 className='text-gray-500 col-span-1' >Linkdin : 
                  <span className='text-white font-bold' > Fares Rahmoun</span>
            </h1>

            <h1 className='text-gray-500 col-span-1' >Languages : 
                  <span className='text-white font-bold' > Arabic, English, French</span>
            </h1>
    
            <button className='cols-1 mt-3 w-max px-16 py-3 rounded-full text-indigo-600 hover:text-white
                hover:bg-indigo-800 border border-indigo-800' >DOWNLOAD CV</button>

          </div>

        </div>
    </section>
  )
}
