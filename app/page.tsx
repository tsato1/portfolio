import Hero from '@/components/Hero'
import Skills from '@/components/Skills'
import Works from '@/components/Works'
import Experiences from '@/components/Experiences'
// import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="min-h-screen font-palanquin">
      <div className='max-w-4xl mx-auto'>
        <Hero />
        <hr className="mx-auto bg-black dark:bg-white w-2/3 h-0.5" />
        <Skills />
        <hr className="mx-auto bg-black dark:bg-white w-2/3 h-0.5" />
        <Works />
        <hr className="mx-auto bg-black dark:bg-white w-2/3 h-0.5" />
        <Experiences />
        {/* <hr className="mx-auto bg-black dark:bg-white w-2/3 h-0.5" />
        <Contact /> */}
      </div>
    </main>
  )
}
