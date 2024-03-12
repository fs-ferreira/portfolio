import { ReactNode } from "react";

interface PersonalItemProps {
  children?: ReactNode,
  title: string,
  description: string
}

export default function PersonalItem({ title, description, children }: PersonalItemProps) {

  return (
    <div className='flex gap-2 sm:gap-3 items-center'>
      <div className="shadow p-2 rounded-lg">
      {children}
      </div>
      <div className='flex flex-col'>
        <span className='text-sm text-zinc-500'>{title}</span>
        <span className="font-medium">{description}</span>
      </div>
    </div>
  )
}