"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import Typewriter from 'typewriter-effect';
const Hero = () => {
  return (
      <section className="body-font bg-gray-50">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col">
<div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
  <Image
    className="object-cover object-center rounded-full mx-auto w-[20rem] h-[20rem]"
    alt="hero"
    src='/assets/photo/pic03.jpg'
    width={500}
    height={500}
  />
</div>
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        I am
        <br className="hidden lg:inline-block" />
        <Typewriter
  options={{
    strings: ['Web Developer'],
    autoStart: true,
    loop: true,
  }}
/>
      </h1>
      <div className='h-[3px] w-[100px] bg-red-900'></div>
      <p className="mb-8 leading-relaxed p-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque expedita, commodi quaerat doloremque quis quam veritatis cumque magnam fuga ab temporibus, dignissimos at a esse ad, quisquam obcaecati ipsa rem?
      </p>
      <div className="flex justify-center">
        <Link href="#Contact">
        <button className="inline-flex items-center bg-red-900 border-0 py-1 px-8 focus:outline-none hover:bg-red-500 rounded-full text-base mt-4 md:mt-0 text-white">
          Contact
        </button>
        </Link>
      </div>
    </div>
  </div>
</section>

  )
}

export default Hero