"use client"

import React from 'react'
import { motion } from 'motion/react'

const Arrow = () => {
  return (
    <div className='flex flex-col items-center'>
      <motion.div
        className='w-[24px] h-[10px] mt-[20px] bg-black rounded-md'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }} />
      <motion.div
        className='w-[24px] h-[10px] mt-2 bg-black rounded-md'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.26 }} />
      <motion.div
        className='w-[24px] h-[10px] mt-2 bg-black rounded-md'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.32 }} />
      <motion.div
        className='w-[24px] h-[10px] mt-2 bg-black rounded-tr-md rounded-tl-md'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.38 }} />
      <motion.div
        className='w-0 h-0 border-transparent border-t-black border-[28px] rounded-lg'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.44 }} />
    </div>
  )
}

export default Arrow