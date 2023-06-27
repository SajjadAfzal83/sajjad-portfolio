import Image from 'next/image'
import Hero from './component/hero'
import Contact from './component/contact'
import Project from './component/project'
import Skills from './component/skills'

export default function Home() {
  return (
    <div>
      <Hero />
      <Skills />
      <Project />
      <Contact />
    </div>
    )
}
