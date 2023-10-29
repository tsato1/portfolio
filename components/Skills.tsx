"use client"

import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

import { useTechStacks } from "@/hooks/use-tech-stacks"
import SectionHeading from './reusable/SectionHeading'
import { useState } from 'react'

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    scale: 0
  },
  animate: (index: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.04 * index
    }
  }),
  exit: {
    opacity: 0,
    scale: 0
  }
}

const Skills = () => {
  const techStacks = useTechStacks()
  const [pending, setPending] = useState(false)
  const onCheckboxClicked = () => {
    if (!pending) {
      setPending(true)

      setTimeout(() => {
        setPending(false)
      }, 500)
    }
  }

  return (
    <section id="skills" className="section py-16">
      <SectionHeading>Skills</SectionHeading>

      <div className='shadow-xl rounded-2xl p-3 sm:p-6 py-10'>
        <motion.div
          className="flex flex-col sm:flex-row items-start sm:items-center justify-center py-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { delay: 0.25 } }}
          viewport={{ once: true }}
        >
          <input
            className="checkbox"
            id="web"
            type="checkbox"
            checked={techStacks.isWebDevChecked}
            onChange={() => {
              // onCheckboxClicked()
              techStacks.onWebDevChanged()
            }}
            disabled={pending} />
          <label htmlFor="web" className="checkbox cursor-pointer">Web Fullstack</label>
          <input
            className="checkbox"
            id="mobile"
            type="checkbox"
            checked={techStacks.isMobileDevChecked}
            onChange={() => {
              onCheckboxClicked()
              techStacks.onMobileDevChanged()
            }}
            disabled={pending} />
          <label htmlFor="mobile" className="checkbox cursor-pointer">Mobile Fullstack</label>
          <input
            className="checkbox"
            id="infra"
            type="checkbox"
            checked={techStacks.isInfraChecked}
            onChange={() => {
              onCheckboxClicked()
              techStacks.onInfraChanged()
            }}
            disabled={pending} />
          <label htmlFor="infra" className="checkbox cursor-pointer">Infrastructure</label>
        </motion.div>

        <ul className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-4">
          <AnimatePresence>
            {techStacks.items.map((item, i) => (
              <motion.li
                key={item.id}
                variants={fadeInAnimationVariants}
                initial="initial"
                exit="exit"
                whileInView="animate"
                viewport={{ once: true }}
                custom={i}
              >
                <div className='flex flex-row gap-5 items-center'>
                  <Image
                    className='object-contain w-8 h-8 sm:w-9 sm:h-9 align-middle justify-center items-center rounded-full ring-1 ring-neutral-400 bg-neutral-50 dark:bg-black shadow-lg'
                    src={item.imageUrl}
                    alt={item.name}
                    width={30}
                    height={30} />
                  <p className=''>{item.name}</p>
                </div>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      </div>
    </section>
  )
}

export default Skills