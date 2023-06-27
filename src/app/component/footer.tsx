import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {AiFillYoutube} from 'react-icons/ai'
const Footer = () => {
  return (
    <div className='bg-gray-100'>
        <footer className="text-gray-600 body-fon">
  <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
      <Image
      className='w-[3rem] h-[3rem] rounded-full'
      alt="Logo"
      src= "/assets/project/it-mate.jpg"
      width={500}
      height={500}
      />
      <span className="ml-3 text-2xl"> The Member of IT Mate Pakistan</span>
    </a>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <div>
      <Link 
      target='_blank'
      href = {"https://www.youtube.com/@itmatepakistan"}
      className="text-gray-500">
        <AiFillYoutube className='text-gray-500 text-3xl hover:text-red-600' />
      </Link >
        </div>
    </span>
  </div>
</footer>

    </div>
  )
}

export default Footer