import Image from 'next/image'
import React from 'react'

const Project = () => {
  return (
    <div id="Project">
        <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        My Projects
      </h1>
    </div>
    <div className="flex flex-wrap -m-5 -mt-[5rem]">
      <div className="lg:w-1/3 p-4">
        <div className="flex relative rounded-md">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src="/assets/project/project-pic01.jpg"
            width={500}
            height={500}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-red-900 mb-1">
              My Portfolio
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              PORTFOLIO
            </h1>
            <p className="leading-relaxed">
              My professional information with 
              <a href="/assets/cv/cv.pdf" className='text-red-900 font-bold hover:text-red-500'> CV </a>. 
            </p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

    </div>
  )
}

export default Project