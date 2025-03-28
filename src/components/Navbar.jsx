import React, { useState } from 'react'
import logo from '../assists/white_logo.png'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { Link } from 'react-scroll'

function Navbar() {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  const email = 'mamtakumawaton@gmail.com';

  return (
    <div className='fixed w-full h-20 flex justify-between items-center px-4 text-gray-300 glassmorphism z-40'>

      {/* --------------------- LOGO -------------------------- */}
      <div className='rotate-[15deg]'>
        <img src={logo} alt="Logo" style={{ width: '100px' }} />
        {/* <h1 className='text-2xl border-2 border-white'>Logo</h1> */}
      </div>

      {/* -------------------- nav menu ----------------- */}
      <ul className='hidden md:flex gap-8 font-semibold text-lg'>
        <li className='hover:text-orange-400 '>
          <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='hover:text-orange-400 '>
          <Link to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='hover:text-orange-400 '>
          <Link to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='hover:text-orange-400 '>
          <Link to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* ------------------- hamburger --------------------- */}
      <div onClick={handleClick} className='md:hidden z-50'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* ---------------------- mobile menu list --------------------- */}

    
    
      <ul className={!nav ? 'hidden' : 'absolute top-full z-50 right-0 w-full h-screen sm:w-auto px-20 py-12 mobile-glassmorphism flex justify-start items-center flex-col'}>
        <li className='py-4 text-4xl'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-4 text-4xl'>
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-4 text-4xl'>
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-4 text-4xl'>
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link></li>
      </ul>

      {/* --------------- social media ----------------- */}

      <div className='hidden lg:flex fixed flex-col top-[300%] left-0'>
        <ul>
          <li className='flex justify-between items-center px-4 w-40 h-14 bg-blue-500 ml-[-100px] hover:ml-0 duration-300'>
            <a className='flex justify-between items-center w-full text-gray-300 '
              href="https://www.linkedin.com/in/mamta-kumawat-7397292a4/" rel="noreferrer" target='_blank'>Linkedin <FaLinkedin size={30} /></a>
          </li>
          <li className='flex justify-between items-center px-4 w-40 h-14 bg-[#333333] ml-[-100px] hover:ml-0 duration-300'>
            <a className='flex justify-between items-center w-full text-gray-300 '
              href="https://github.com/Mamtakmt" rel="noreferrer" target='_blank'>Github <FaGithub size={30} /></a>
          </li>
          <li className='flex justify-between items-center px-4 w-40 h-14 bg-[#6fc2b0] ml-[-100px] hover:ml-0 duration-300'>
            <a className='flex justify-between items-center w-full text-gray-300 '
              href={`mailto:${email}`} rel="noreferrer" target='_blank'>Email <HiOutlineMail size={30} /></a>
          </li>
          <li className='flex justify-between items-center px-4 w-40 h-14 bg-[#565f69] ml-[-100px] hover:ml-0 duration-300'>
            <a className='flex justify-between items-center w-full text-gray-300 '
              href="https://drive.google.com/file/d/1alc4x5ZJwk_Vo7JWQlV1Ia73vJMrziJF/view?usp=sharing" rel="noreferrer" target='_blank'>Resume <BsFillPersonLinesFill size={30} /></a>
          </li>
        </ul>
      </div>

    </div>
  )
}

export default Navbar