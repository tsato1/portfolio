import React from 'react'
import Link from 'next/link'
import { BsLinkedin, BsTwitter } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer className='mb-10 px-4  text-center text-gray-500'>
      <div className='flex items-center justify-center'>
        <Link href='https://x.com/takahide_sato' target="_blank">
          <BsTwitter className='w-5 h-5' />
        </Link>
      </div>
      <small className='mb-2 text-xs'>
        &copy; 2023. all rights reserved
      </small>
      <p className='text-xs'>
        This website was designed and is being polished by <span className='font-semibold'>Tak Sato</span>
      </p>
    </footer>
  )
}

export default Footer