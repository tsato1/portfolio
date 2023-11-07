"use client"

import React, { useState } from "react"
import Image from "next/image"
import { AnimatePresence, Variants, motion } from "framer-motion"

import { works } from "@/libs/data"

import SkillTablet from "./SkillTablet"
import Modal from "./Modal"

type WorkProps = (typeof works)[number]

const cardVariants: Variants = {
  offscreen: {
    y: 500,
    rotate: 10,
    scale: 0,
    opacity: 0
  },
  onscreen: {
    y: 0,
    rotate: 0,
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};

const Work = ({
  name,
  description,
  category,
  imageUrls,
  isLive,
  skills,
  link
}: WorkProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const close = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'visible'
  }

  const open = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'
  }

  return (
    <>
      <motion.div
        id="work-div"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.7 }}>
        <motion.div
          className='flex flex-col bg-neutral-100/100 shadow-lg rounded-xl p-3 sm:p-6 gap-4'
          variants={cardVariants}
        >
          <p className='text-xl'>{name}</p>
          <p className='text-md'>{description}</p>
          <Image
            className="object-contain min-h-[200px] max-h-[257px] rounded-2xl hover:cursor-pointer m-auto"
            onClick={() => (isModalOpen ? close() : open())}
            src={imageUrls[0]}
            alt={name}
            width={1280}
            height={1280} />
          {link && <a href={link}>
            <Image
              className="w-30 h-10 m-auto"
              alt='Get it on Google Play'
              src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'
              width={100}
              height={30} />
          </a>}
          {/* {isLive && <div className="w-fit inline-block rounded-full border border-slate-950 text-sm px-2">✨ Live in Production</div>} */}
          <ul className="skill-tablets">
            {skills.map(skill => (
              <React.Fragment key={skill.name}>
                <SkillTablet skill={skill} />
              </React.Fragment>
            ))}
          </ul>
        </motion.div>
      </motion.div>

      <AnimatePresence
        // Disable any initial animations on children that
        // are present when the component is first rendered
        initial={false}
        // Only render one component at a time.
        // The exiting component will finish its exit
        // animation before entering component is rendered
        // exitBeforeEnter={true}
        mode='wait'
        // Fires when all exiting nodes have completed animating out
        onExitComplete={() => null}
      >
        {isModalOpen && <Modal handleClose={close} text="" imageUrls={imageUrls} />}
      </AnimatePresence>
    </>
  )
}

export default Work