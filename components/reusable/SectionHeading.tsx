type SectionHeadingProps = {
  children: React.ReactNode
}

const SectionHeading = ({ children }: SectionHeadingProps) => {
  return (
    <h2
      className="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white"
    >
      {children}
    </h2>
  )
}

export default SectionHeading