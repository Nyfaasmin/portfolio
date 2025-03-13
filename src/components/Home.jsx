import React from 'react'
import HeroImage from "../assets/portfolio/profile1.jpg"
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row '>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-3xl sm:text-5xl font-bold text-white'>
                    I'm Nyfa Asmin....
                </h2>
                <p className='text-gray-500 py-4 max-w-md'>
                  
                Currently pursuing Bachelor of Technology at Shri Vishnu Engineering College for Women in the field of Computer Science Engineering. Passionate about exploring and working with diverse technologies.
<br />
| Innovator | Problem Solver |
                    
                </p>


                <div>
                    <Link to="portfolio" smooth duration={800} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                        Portfolio 
                        <span className='group-hover:rotate-90 duration-300'><MdOutlineKeyboardArrowRight size={(25)} className='ml-1'/></span>
                    </Link>
                </div>
            </div>
            <div className='ml-6 md:ml-10'>
            <img src={HeroImage} alt='myprofile' className='rounded-full mx-auto w-0/3 md:w-full' />

            </div>
        </div>
    </div>
  )
}

export default Home
