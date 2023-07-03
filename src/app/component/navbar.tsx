import Link from 'next/link'
import React from 'react'
import { FiDownload } from 'react-icons/fi'
const Navbar = () => {
    return (
        <div className='bg-white z-50 sticky top-0'>
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center sticky">
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        {/* <span className="ml-3 text-3xl text-red-900 from-neutral-100">Muhammad Sajjad Afzal</span> */}
                    </a>
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                        <Link href="/" className="text-lg font-bold mr-5 hover:text-red-500 text-red-900">Home</Link>
                        <Link href="#skills" className="text-lg mr-5 font-bold hover:text-red-500 text-red-900">Skills</Link>
                        <Link href="#Project" className="text-lg mr-5 font-bold hover:text-red-500 text-red-900">Projects</Link>
                        <Link href="#Contact" className="text-lg mr-5 font-bold hover:text-red-500 text-red-900">Contact</Link>
                    </nav>
                        <a href="/assets/cv/cv.pdf">
                    <button  className="inline-flex items-center bg-red-900 border-0 py-1 px-3 focus:outline-none hover:bg-red-500 rounded-full text-base mt-4 md:mt-0 text-white">
                        Download CV
                        
                        <FiDownload className='ml-3'/>
                    </button>
                        </a>
                </div>
            </header>
        </div>
    )
}

export default Navbar
