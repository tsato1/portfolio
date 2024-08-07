import React from 'react'
import Link from 'next/link'
import { BsLinkedin, BsTwitter } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer className='h-60 flex flex-col items-center justify-center mb-14 px-4 text-center text-gray-500 space-y-2'>
      <div className='flex sm:flex-col my-6'>
        <Link href="/commerce-disclosure">
          <span className='text-sm'>Commerce Disclosure</span>
        </Link>
      </div>

      <div className='flex items-center justify-center'>
        <Link href='https://x.com/takahide_sato' target="_blank">
          <BsTwitter className='w-5 h-5' />
        </Link>
      </div>

      <div>
        <p className='text-xs'>
          This website was created by <span className='font-semibold'>Tak Sato</span>
        </p>
        <small className='text-xs'>
          &copy; 2024. all rights reserved
        </small>
      </div>
    </footer>
  )
}

export default Footer