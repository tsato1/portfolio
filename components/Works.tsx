import React from 'react'

import { works } from '@/libs/data'

import SectionHeading from './reusable/SectionHeading'
import Work from './reusable/Work'

const Works = () => {
  return (
    <section id="works" className="section py-16">
      <SectionHeading>Works</SectionHeading>

      <div className='grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-4 py-10'>
        {works.map((work, i) => (
          <React.Fragment key={i}>
            <Work {...work} />
          </React.Fragment>
        ))}
      </div>
    </section>
  )
}

export default Works