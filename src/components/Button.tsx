import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode,
}

export default function Button({ children, className, onClick }: ButtonProps) {
  return <button onClick={onClick} className={`flex gap-1 items-center outline-none border-2 border-violet-400 px-4 py-2 rounded-lg hocus:bg-violet-700 hocus:border-violet-700 transition-all ${className}`}>{children}</button>
}