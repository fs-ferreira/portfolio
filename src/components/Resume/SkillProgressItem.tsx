export interface SkillProgressItemProps {
  title: string,
  percentage: number
}

export default function SkillProgressItem({ title, percentage }: SkillProgressItemProps) {
  const percentageVariants: any = {
    10: 'w-[10%]',
    20: 'w-[20%]',
    30: 'w-[30%]',
    40: 'w-[40%]',
    50: 'w-[50%]',
    60: 'w-[60%]',
    70: 'w-[70%]',
    80: 'w-[80%]',
    90: 'w-[90%]',
    100: 'w-[100%]',
  }

  return (
    <div className="flex flex-col gap-2">
        <div className="flex justify-between font-medium">
          <span>{title}</span>
          <span>{percentage}%</span>
        </div>
        <div className="h-2 rounded-md w-full bg-neutral-200">
          <div className={`h-2 rounded-md bg-violet-500 ${percentageVariants[percentage]}`}></div>
        </div>
    </div>
  )
}