import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

const sliderVariants = {
  incoming: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    scale: 1.2,
    opacity: 0
  }),
  active: { x: 0, scale: 1, opacity: 1 },
  exit: (direction: number) => ({
    x: direction > 0 ? "-100%" : "100%",
    scale: 1,
    opacity: 0
  })
}

const sliderTransition = {
  duration: 0.5,
  ease: [0.16, 0.83, 0.13, 1.00],
}

const Carousel = ({ imageUrls }: { imageUrls: string[] }) => {
  const [[imageCount, direction], setImageCount] = useState([0, 0])

  const activeImageIndex = wrap(0, imageUrls.length, imageCount)

  const swipeToImage = (swipeDirection: number) => {
    setImageCount([imageCount + swipeDirection, swipeDirection])
  }

  const dragEndHandler = (dragInfo: any) => {
    const draggedDistance = dragInfo.offset.x
    const swipeThreshold = 50
    if (draggedDistance > swipeThreshold) {
      swipeToImage(-1)
    } else if (draggedDistance < -swipeThreshold) {
      swipeToImage(1)
    }
  }

  const skipToImage = (imageId: number) => {
    let changeDirection = 0
    if (imageId > activeImageIndex) {
      changeDirection = 1
    } else if (imageId < activeImageIndex) {
      changeDirection = -1
    }
    setImageCount([imageId, changeDirection])
  }

  return (
    <div className='w-[100%] h-[100%]'>
      <div className="relative h-[90%] flex justify-center items-center">
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            className={`absolute h-[100%] object-contain rounded-3xl pb-2 ${imageUrls.length > 1 ? 'hover:cursor-grab active:cursor-grabbing': ''}`}
            key={imageCount}
            src={`${imageUrls[activeImageIndex]}`}
            custom={direction}
            variants={sliderVariants}
            initial="incoming"
            animate="active"
            exit="exit"
            transition={sliderTransition}
            drag={imageUrls.length > 1 ? "x" : undefined}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(_, dragInfo) => dragEndHandler(dragInfo)}
          />
        </AnimatePresence>

        {imageUrls.length > 1 && <>
          <div
            className="absolute top-1/2 transform -translate-y-1/2 bg-neutral-50 rounded-full shadow-xl p-5 flex justify-center items-center select-none cursor-pointer z-2 left-0 sm:-left-10"
            onClick={() => swipeToImage(-1)}
          >
            <BsChevronCompactLeft />
          </div>
          <div
            className="absolute top-1/2 transform -translate-y-1/2 bg-neutral-50 rounded-full shadow-xl p-5 flex justify-center items-center select-none cursor-pointer z-2 right-0 sm:-right-10"
            onClick={() => swipeToImage(1)}
          >
            <BsChevronCompactRight />
          </div>
        </>}
      </div>

      <div className="flex justify-center h-[10%]">
        {imageUrls.map((image, i) => (
          <div
            key={i}
            onClick={() => skipToImage(i)}
            className="relative h-[100%] hover:cursor-pointer"
          >
            <img src={image} alt={`Thumbnail_${i}`} className='h-[100%] max-w-[100px] rounded-xl' />
            <div className={`absolute -top-2 right-0 h-[15px] w-[15px] bg-white pointer-events-none transition-transform rounded-full ${i === activeImageIndex ? "scale-x-2" : 'scale-x-0'}`} >
              <div className='flex justify-center items-center h-full'>
                <div className='h-[10px] w-[10px] bg-black rounded-full' />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Carousel