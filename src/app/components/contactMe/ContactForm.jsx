import React from 'react'

export default function ContactForm() {
  return (
    <div className='w-full lg:w-4/6 grid grid-cols-2 gap-10' >
        <input type="text" name='name' placeholder='YOUR NAME'
            className='h-max px-5 py-3 rounded-full col-span-1
                bg-gray-900 outline-none border-2 border-black hover:border-indigo-800
                  focus:border-indigo-800' required />

        <input type="text" name='name' placeholder='YOUR EMAIL'
            className='h-max px-5 py-3 rounded-full col-span-1
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
          <button className='w-max px-32 py-3 border text-indigo-600 border-indigo-600
              rounded-full hover:bg-indigo-600 hover:text-white text-sm' >SUMBIT</button>
        </div>
    </div>
  )
}
