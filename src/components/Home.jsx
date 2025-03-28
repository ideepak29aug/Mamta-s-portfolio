import Aos from 'aos'
import React, { useEffect } from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll'
import 'aos/dist/aos.css'


function Home() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      offset: 100,
      // easing: 'ease-in-sine',
      delay: 0.2,
      anchorPlacement: 'bottom-bottom'
    })
  }, [])
  

  return (
    <div name='home' className='w-full h-[80vh]'>

      {/* ------------ container ---------------- */}
      <div className='max-w-[1000px] mx-auto px-8 pt-[10rem] flex flex-col justify-center h-full'>
        <p className='text-orange-400'>Hi, my name is</p>
        <h1 data-aos='fade-right' className=' text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Mamta Kumawat</h1>
        <h2 data-aos='fade-left' className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Frontend Developer</h2>
        <p className='text-[#8892b0] py-4 max-w-[500px] md:max-w-[700px]'>I'm a Frontend Developer specializing in building responsive and animated websites. Currently, I'm searching for opportunity to show my skills.</p>
        <div>
          <button className='group my-2 text-gray-300 px-4 py-3 border-2 hover:bg-orange-400 hover:border-orange-400'>
          <Link to='contact' smooth={true} duration={500} className='flex items-center'>
            Collaborate?
            <span className='group-hover:translate-x-3 group-hover:rotate-45 duration-300'>
              <HiArrowNarrowRight className='ml-3' />
            </span>
            </Link>
          </button>
        </div>
      </div>

    </div>
  )
}

export default Home