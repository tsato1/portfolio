"use client"

import React, { useRef } from 'react'
import Image from 'next/image'
import { BsLinkedin } from 'react-icons/bs'
import { motion, useScroll, useTransform } from 'framer-motion'

import SkillTablet from './SkillTablet'

const Experience = ({
  companyLogoUrl,
  title,
  companyName,
  workingPeriod,
  jobDescriptions,
  skills,
  testimonials,
}: {
  companyLogoUrl: string,
  title: string,
  companyName: string,
  workingPeriod: string,
  jobDescriptions: string[],
  skills: { imageUrl: string, name: string }[],
  testimonials: { imageUrl: string, name: string, position: string, words: string, linkedInUrl: string }[],
}) => {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    // "0 1"   -> when the bottom of the viewport (0) crosses the top of the target (1), start the animation 
    // "1.33 1"-> when the bottom of the viewport has gone 33% beyond the end of the target(1.33), complete the animation (1)
    offset: ["0 1", "0.7 1"],
  });
  // while the scrollYProgress value goes from 0 to 1, transformation goes from 0.8 to 1
  const scaleProgess = useTransform(scrollYProgress, [0.1, 0.9], [0.3, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0.5, 0.9], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
    >
      <div className='bg-neutral-100/70 rounded-xl shadow-xl p-3 sm:p-6 gap-3'>
        <div className='flex items-center w-auto h-auto py-2'>
          {companyLogoUrl && <Image
            className='object-fit h-10 w-10 mr-5'
            src={companyLogoUrl}
            alt={companyName}
            width={40}
            height={40} />}
          <h2 className='text-xl'>{title} {companyName && 'at'} {companyName}</h2>
        </div>

        <p className=''>{workingPeriod}</p>

        <ul className='list-disc px-5 py-5'>
          {jobDescriptions.map(desc => (
            <li key={desc} className='py-0.5'>{desc}</li>
          ))}
        </ul>

        <ul className='skill-tablets'>
          {skills.map(skill => (
            <React.Fragment key={skill.name}>
              <SkillTablet skill={skill} />
            </React.Fragment>
          ))}
        </ul>
      </div>

      <ul className='m-4'>
        {testimonials.map(testimonial => (
          <li key={testimonial.name} className='relative flex flex-col sm:flex-row sm:items-center border-b border-neutral-400'>
            <div className='flex flex-row items-center gap-3 p-1'>
              {testimonial.imageUrl ? <Image
                className='w-12 h-12 rounded-full border border-slate-500'
                src={testimonial.imageUrl}
                alt={testimonial.name}
                width={100}
                height={100} /> : <div className='w-12 h-12 bg-neutral-500 rounded-full' />}
              <div className='gap-2'>
                <p className='w-[10rem] text-md'>{testimonial.name}</p>
                <p className='w-[10rem] text-sm font-light'>{testimonial.position}</p>
              </div>
            </div>
            <p className='text-sm px-0 sm:px-4 pr-0 sm:pr-16'>{testimonial.words}</p>
            {testimonial.linkedInUrl && <a className='absolute right-0 p-4 gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer border-black border-black/10 dark:bg-white/10' href={testimonial.linkedInUrl} target="_blank">
              <BsLinkedin />
            </a>}
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

export default Experience