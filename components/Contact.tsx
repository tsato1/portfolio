'use client'

import toast from 'react-hot-toast'

import { sendEmail } from '@/actions/send-email'

import ContactSubmitButton from "./ContactSubmitButton"
import SectionHeading from './reusable/SectionHeading'

const Contact = () => {
  return (
    <section id="contact" className='section scroll-mt-2 py-16'>
      <SectionHeading>Contact</SectionHeading>

      <form
        action={async (formData) => {
        }}
        className="mx-auto flex flex-col items-left gap-4 py-10"
      >
        <label htmlFor="name">Name:{" "}<span className='text-red-500'>*</span></label>
        <input
          type="text" id="name" name="name" required minLength={3} maxLength={60}
          placeholder="Your Name"
          className="w-full p-3 bg-neutral-100/70 shadow-md focus:bg-white rounded-xl focus:outline-black dark:border-none" />
        <label htmlFor="email">Email:{" "}<span className='text-red-500'>*</span></label>
        <input type="email" id="email" name="email" required minLength={3} maxLength={60}
          placeholder="Your Email"
          className="w-full p-3 bg-neutral-100/70 shadow-md focus:bg-white rounded-xl focus:outline-black dark:border-none" />
        <label htmlFor="confirm_email">Confirm Email:{" "}<span className='text-red-500'>*</span></label>
        <input type="email" id="confirm_email" name="confirm_email" required minLength={3} maxLength={60}
          placeholder="Confirm your Email"
          className="w-full p-3 bg-neutral-100/70 shadow-md focus:bg-white rounded-xl focus:outline-black dark:border-none" />
        <label htmlFor="message">Subject:{" "}<span className='text-red-500'>*</span></label>
        <input type="text" id="subject" name="subject" required minLength={3} maxLength={60}
          placeholder="Your Subject"
          className="w-full p-3 bg-neutral-100/70 shadow-md focus:bg-white rounded-xl focus:outline-black dark:border-none" />
        <label htmlFor="message">Message:{" "}<span className='text-red-500'>*</span></label>
        <textarea id="message" name="message" cols={30} rows={10} placeholder="Your Message" required
          className="w-full p-3 bg-neutral-100/70 shadow-md focus:bg-white rounded-xl focus:outline-black dark:border-none"></textarea>
        <ContactSubmitButton />
      </form>

      <div className='flex justify-center'>
        <p className='py-10 text-sm text-center'>
          Or, directly message me at: <a className='underline' href="mailto:takahidesato7@gmail.com">takahidesato7@gmail.com</a>
        </p>
      </div>
    </section>
  )
}

export default Contact