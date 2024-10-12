import Image from "next/image";


// icons 
import { FaArrowRight } from "react-icons/fa6";


export default function Home() {
  const picStyle = {
    borderRadius: '34% 64% 77% 26% / 73% 54% 45% 19%',
    animation: 'spin 5s linear infinite', 
  };

  return (
    <section className="w-full h-full lg:h-[100vh] flex justify-center items-center" >
      <div className="flex gap-7 sm:gap-10 md:gap-16 w-full lg:w-10/12 
        pb-40 pt-20 lg:py-0 px-8 lg:px-0
        flex-col lg:flex-row justify-center items-center" >

        <Image src='/me.jpg' width={800} height={800} alt="IMAGE"
          className="hidden lg:block w-72 rounded-full border-2"
          style={picStyle} />

        <Image src='/phonePic.jpg' width={800} height={800} alt="IMAGE"
          className="lg:hidden block w-44 rounded-full border-2"
          style={picStyle} />

        <div className="text-white text-2xl lg:text-5xl flex flex-col gap-3 lg:gap-6
              w-full tracking-wide items-center lg:items-start justify-center" >

          <h1 className="font-bold" >I'm <span className="text-indigo-600" >Rahmoun Fares</span></h1>
          <h1 className="font-bold text-indigo-600" >FullStack Developer</h1>

          <p className="text-xl text-center lg:w-4/5 py-3 sm:py-5" >Hi, I'm a Full-Stack Developer with 2 years of experience in building, and maintaining responsive web applications.</p>

          <button className="text-sm font-bold rounded-full
                border border-indigo-600 w-64  
                flex justify-between items-center hover:bg-indigo-600" > 
            <h1 className="w-4/5" >MORE ABOUT ME</h1>
            <div className="h-full py-7 aspect-square bg-indigo-600
                rounded-full flex justify-center items-center" >
              <FaArrowRight className="text-2xl text-white" />
            </div>
          </button>

        </div>
      </div>

     
    </section>
  );
}
