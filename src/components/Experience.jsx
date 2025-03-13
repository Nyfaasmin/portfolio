import React from 'react'
import html from '../assets/portfolio/html.png'
import css from '../assets/portfolio/css.png'
import javascript from '../assets/portfolio/javascript.png'
import react from '../assets/portfolio/react.png'
import github from '../assets/portfolio/github.png'
import java from '../assets/portfolio/java.png'
import androidStudio from '../assets/portfolio/andriod-studio.png';
import python from '../assets/portfolio/pythonimg.png'

const Experience = () => {

    const tech =[
        {
            id: 1,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500',
        },
        {
            id: 2,
            src: css,
            title: 'CSS',
            style: 'shadow-blue-500',
        },
        {
            id: 3,
            src: javascript,
            title: 'JAVASCRIPT',
            style: 'shadow-yellow-500',
        },
        {
            id: 4,
            src: react,
            title: 'REACT',
            style: 'shadow-blue-500',
        },
        {
            id: 5,
            src: github,
            title: 'GITHUB',
            style: 'shadow-gray-500',
        },
        {
            id: 6,
            src: androidStudio, 
            title: 'ANDROID STUDIO',
            style: 'shadow-green-500', 
        },
        {
            id: 7,
            src: python,
            title: 'PYTHON',
            style: 'shadow-yellow-500',
        },
        {
            id: 8,
            src: java,
            title: 'JAVA',
            style: 'shadow-orange-800',
        },
    ]
  return (
    <div name='experience' className='bg-gradient-to-b from-gray-800 to-black w-full h-screen'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center text-white'>
            <div>
            <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
            <p className='py-6'>These are the technologies I've worked with or known!</p>
        </div>

        <div className='w-full grid grid-cols-3 gap-8 text-center py-8 px-12 sm:px-8'>

            {
                tech.map(({id , src, title, style}) => (
                    <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                    <img src={src} alt='' className='w-20 mx-auto'/>
                    <p className='mt-4'>{title}</p>
                </div>
                ))
            }
        </div>
    </div>
 </div>
  )
}

export default Experience;
