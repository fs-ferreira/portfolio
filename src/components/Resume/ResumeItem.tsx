
interface ResumeItemProps {
  date: string
  title: string
  description: string
}

export default function ResumeItem({ date, title, description }: ResumeItemProps) {
  return (
    <div className="shadow-md w-full flex flex-col gap-2 p-5 rounded-md">
      <span className="text-xs text-zinc-600">{date}</span>
      <h2 className="font-bold text-xl">{title}</h2>
      <p className="text-sm italic">{description}</p>
    </div>
  )
}