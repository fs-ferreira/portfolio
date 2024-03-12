interface ProjectCardProps {
  imgSrc: any,
  title: string
  link: string
}

export default function ProjectCard({ imgSrc, title, link }: ProjectCardProps) {

  return (
    <div className='bg-transparent max-w-[440px]'>
      <button
        className="w-full outline-none hocus:scale-105 transition-all shadow-md"
      >
        <a
          href={`https://github.com/fs-ferreira/${link}`}
          target="_blank"
          tabIndex={-1}
        >
          <img src={imgSrc} alt={title} className="w-full rounded-t-md" />
          <div className='text-center p-3 text-violet-50 bg-violet-700/80 rounded-b-md'>
            <span className='font-semibold sm:text-lg'>{title}</span>
          </div>
        </a>
      </button>
    </div>
  )
}