import React from 'react'
import { motion } from 'framer-motion'

interface ModalBackdropProps {
  children: React.ReactNode,
  onClick: () => void
}

const ModalBackdrop = ({ children, onClick }: ModalBackdropProps) => {
  return (
    <motion.div
      className="fixed inset-0 bg-black/50 flex justify-center items-center"
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  )
}

export default ModalBackdrop