import React from 'react'
import { motion } from 'framer-motion'
import { TfiClose } from 'react-icons/tfi'

import ModalBackdrop from "./ModalBackdrop"
import Carousel from './Carousel'

type ModalProps = {
  handleClose: () => void,
  text: string,
  imageUrls: string[]
}

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "-100vh",
    opacity: 0,
  },
};

const Modal = ({ handleClose, text, imageUrls }: ModalProps) => {
  return (
    <ModalBackdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="relative w-[90%] sm:w-[700px] md:w-[80%] h-[96%] px-0 sm:px-10"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <p>{text}</p>
        <Carousel imageUrls={imageUrls} />
        <button
          className='absolute top-0 right-0 bg-neutral-50 rounded-full p-5'
          onClick={handleClose}
        >
          <TfiClose />
        </button>
      </motion.div>
    </ModalBackdrop>
  )
}

export default Modal