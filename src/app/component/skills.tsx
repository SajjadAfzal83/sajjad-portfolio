import React from 'react'
import { TbBrandHtml5 } from "react-icons/tb"
import { MdCss } from "react-icons/md"
import {SiTailwindcss} from "react-icons/si"
import {DiJavascript1} from "react-icons/di"
import {TbBrandNextjs} from "react-icons/tb"
import {FaChalkboardTeacher} from "react-icons/fa"
const Skills = () => {
  return (
    <div id="skills">
      <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            My Skills
          </h1>
        </div>
        <div className="flex flex-wrap -m-4 rounded-3xl -mt-[5rem]">
          <div className="p-4 w-[100%] md:w-1/3">
            <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-red-900 text-white flex-shrink-0">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                  <circle cx={12} cy={7} r={4} />
                  <TbBrandHtml5 className='text-2xl' />
                </div>
                <h2 className="text-red-900 text-lg title-font font-medium">
                  HTML
                </h2>
              </div>
              <div className='relative h-1 w-full bg-gray-300 rounded-xl'>
                <div className='absolute bg-red-900 h-1 w-[100%]'>
                </div>
              </div>
              <p className='font-bold text-right text-red-900'>100%</p>
            </div>
          </div>
          <div className="p-4 w-[100%] md:w-1/3">
            <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-red-900 text-white flex-shrink-0">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                  <circle cx={12} cy={7} r={4} />
                  <MdCss className='text-2xl' />
                </div>
                <h2 className="text-red-900 text-lg title-font font-medium">
                  CSS
                </h2>
              </div>
              <div className='relative h-1 w-full bg-gray-300 rounded-xl'>
                <div className='absolute bg-red-900 h-1 w-[89%]'>
                </div>
              </div>
              <p className='font-bold text-right text-red-900'>89%</p>
            </div>
          </div>
          <div className="p-4 w-[100%] md:w-1/3">
            <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-red-900 text-white flex-shrink-0">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                  <circle cx={12} cy={7} r={4} />
                  <SiTailwindcss className='text 2xl' />
                </div>
                <h2 className="text-red-900 text-lg title-font font-medium">
                  Tailwind CSS
                </h2>
              </div>
              <div className='relative h-1 w-full bg-gray-300 rounded-xl'>
                <div className='absolute bg-red-900 h-1 w-[94%]'>
                </div>
              </div>
              <p className='font-bold text-right text-red-900'>94%</p>
            </div>
          </div>
          <div className="p-4 w-[100%] md:w-1/3">
            <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-red-900 text-white flex-shrink-0">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                  <circle cx={12} cy={7} r={4} />
                  <DiJavascript1 className='text 2xl' />
                </div>
                <h2 className="text-red-900 text-lg title-font font-medium">
                  Javascript/Typescript
                </h2>
              </div>
              <div className='relative h-1 w-full bg-gray-300 rounded-xl'>
                <div className='absolute bg-red-900 h-1 w-[99%]'>
                </div>
              </div>
              <p className='font-bold text-right text-red-900'>99%</p>
            </div>
          </div>
          <div className="p-4 w-[100%] md:w-1/3">
            <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-red-900 text-white flex-shrink-0">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                  <circle cx={12} cy={7} r={4} />
                  <TbBrandNextjs className='text 4xl' />
                </div>
                <h2 className="text-red-900 text-lg title-font font-medium">
                  Next.JS
                </h2>
              </div>
              <div className='relative h-1 w-full bg-gray-300 rounded-xl'>
                <div className='absolute bg-red-900 h-1 w-[95%]'>
                </div>
              </div>
              <p className='font-bold text-right text-red-900'>95%</p>
            </div>
          </div>
        <div className="p-4 w-[100%] md:w-1/3">
            <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-red-900 text-white flex-shrink-0">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                  <circle cx={12} cy={7} r={4} />
                  <FaChalkboardTeacher className='text 4xl' />
                </div>
                <h2 className="text-red-900 text-lg title-font font-medium">
                  Teaching All These
                </h2>
              </div>
              <div className='relative h-1 w-full bg-gray-300 rounded-xl'>
                <div className='absolute bg-red-900 h-1 w-[100%]'>
                </div>
              </div>
              <p className='font-bold text-right text-red-900'>100%</p>
            </div>
          </div>
        </div>
      </div>
  </section>
    </div>

  )
}

export default Skills
