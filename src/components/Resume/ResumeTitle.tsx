import { ReactNode } from "react";

interface ResumeTitleProps {
  children?: ReactNode,
  title: string
}

export default function ResumeTitle({ title, children }: ResumeTitleProps) {
  return (
    <div className="flex gap-2 text-violet-900/80 items-center">
      {children}
      <h2 className='font-extrabold text-2xl '>
        {title}
      </h2>
    </div>
  )
}