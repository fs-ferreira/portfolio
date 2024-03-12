import { ReactNode } from "react";

interface PersonalCardPorps { 
  children?: ReactNode,
  title: string;
  description: string
}

export default function PersonalCard({ title, description, children }: PersonalCardPorps) {
  return (
    <div className="w-full bg-slate-300/20 shadow-md rounded-md p-3 flex gap-3 items-center">
      <div>{children}</div>
      <div>
        <h1 className="font-bold text-lg">{title}</h1>
        <p className="text-violet-900/70">{description}</p>
      </div>
    </div>
  )
}