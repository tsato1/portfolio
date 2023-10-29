import Image from "next/image"

const SkillTablet = ({
  skill
}: {
  skill: { imageUrl: string, name: string }
}) => {
  return (
    <li className='flex items-center w-auto h-auto p-1 rounded-md shadow-md ring-1 ring-slate-900 dark:ring-slate-100 bg-neutral-50 dark:bg-black'>
      {skill.imageUrl && <Image
        className="object-fit h-4 w-4"
        src={skill.imageUrl}
        alt={skill.name}
        width={48}
        height={48} />}

      <p className='text-sm text-gray-700 dark:text-gray-200 ms-1 me-1'>
        {skill.name}
      </p>
    </li>
  )
}

export default SkillTablet