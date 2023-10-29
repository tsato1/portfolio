import { experiences } from "@/libs/data"
import Arrow from "./reusable/Arrow"
import Experience from "./reusable/Experience"
import React from "react"
import SectionHeading from "./reusable/SectionHeading"

const Experiences = () => {
  return (
    <section id="experiences" className="section">
      <SectionHeading>Experiences</SectionHeading>
      
      {experiences.map((experience, i) => (
        <React.Fragment key={i}>
          <Arrow />
          <Experience
            companyLogoUrl={experience.companyLogoUrl}
            title={experience.title}
            companyName={experience.companyName}
            workingPeriod={experience.workingPeriod}
            jobDescriptions={experience.jobDescriptions}
            skills={experience.skills}
            testimonials={experience.testimonials} />
        </React.Fragment>
      ))}
    </section>
  )
}

export default Experiences