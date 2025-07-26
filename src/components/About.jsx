import Aos from 'aos'
import React, { useEffect } from 'react'
import 'aos/dist/aos.css'

function About() {
    useEffect(() => {
        Aos.init({
          duration: 1000,
          offset: 100,
        //   easing: 'ease-in-sine',
          delay: 0.2,
        })
      }, [])


    return (
        <div name='about' className='w-full py-20 text-gray-300 h-[80vh]'>
            <div className='w-full h-full flex flex-col justify-center items-center'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-orange-400'>
                            About
                        </p>
                    </div>
                    <div>
                        {/* -------- empty box ---------------  */}
                    </div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div data-aos='zoom-out-bottom' className='sm:text-right text-4xl font-bold'>
                        <p>Hi, I'm Client, nice to meet you. Please take a look around.</p>
                    </div>
                    <div data-aos='zoom-out-top'>
                        <p>I am passionate about building excellent software that improves the lives of those around me. I specialize in creating software for clients ranging from individuals and small-businesses all the way to large enterprise corporations. What would you do if you had a software expert available at your fingertips?</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About