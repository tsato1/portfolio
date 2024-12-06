"use client"

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'motion/react'
import { BsArrowDown } from 'react-icons/bs'

const Hero = () => {
  return (
    <section id="hero" className='min-h-screen flex flex-col justify-center items-center gap-24'>
      <div className='flex items-center flex-col-reverse sm:flex-row sm:justify-around p-6 gap-8 scroll-mt-40'>
        <article className='relative sm:w-1/2'>
          {/* Background Blur */}
          <div className='absolute pointer-events-none inset-x-0 transform-gpu blur-3xl sm:-top-40'>
            <div className='relative left-[calc(53%)] aspect-[925/568] w-[33.5rem] -translate-x-1/4 rotate-[53deg] bg-gradient-to-tr from-sky-800 to-primary-muted opacity-30 sm:w-[47.32rem]'></div>
          </div>

          {/* Header */}
          <div>
            <h1 className='max-w-md font-bold text-center sm:text-5xl sm:text-left sm:text-slate-900 dark:text-white'>
              <motion.span
                initial={{ opacity: 0, y: -300 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Hi, I&apos;m Tak.
              </motion.span>
              <br />
              <motion.span
                className='sm:text-3xl'
                initial={{ opacity: 0, y: 300 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                A Software engineer. I develop <span className='italic font-montserrat sm:text-3xl'>Saas</span>.
              </motion.span>
              <br />
            </h1>
          </div>
        </article>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <Image
            className="w-auto h-auto shadow-xl ring-1 ring-slate-900 dark:ring-slate-100 rounded-full"
            src='/profile360.png'
            alt='profile picture'
            width={100}
            height={100}
            priority />
        </motion.div>
      </div>

      {/* Contact Button */}
      {/* <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.14 }}
      >
        <Link
          href="#contact"
          className='group bg-gray-900 text-white shadow-xl px-7 py-3 flex flex-col items-center gap-1 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition'
        >
          Contact me now<BsArrowDown className="opacity-70 group-hover:translate-y-2 transition" />
        </Link>
      </motion.div> */}
    </section >
  )
}

export default Hero