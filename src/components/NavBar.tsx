import { Code, Contact, FileText, Folder, Menu, User } from "lucide-react";
import Button from "./Button";
import { useState } from "react";

interface NavBarProps {
  onChangeTab: (index: number) => void
}

export default function NavBar({ onChangeTab }: NavBarProps) {

  const [opened, setOpened] = useState(false)

  function onHandleOpen() {
    setOpened(!opened)
  }

  return (
    <nav className="flex justify-between items-start max-w-7xl mx-auto py-10 px-1 xl:px-0">
      <div className="flex items-center gap-2 cursor-pointer " onClick={() => onChangeTab(0)}>
        <Code size={44} />
        <span className="font-bold text-3xl">Ferreira</span>
      </div>
      <div className="hidden md:flex gap-4 text-center font-medium">
        <Button onClick={() => onChangeTab(1)}><User size={20} /> About</Button>
        <Button onClick={() => onChangeTab(2)}><FileText size={20} /> Resume</Button>
        <Button onClick={() => onChangeTab(3)}><Folder size={20} /> Projects</Button>
        <Button onClick={() => onChangeTab(4)}><Contact size={20} /> Contact</Button>
      </div>
      <div className="flex flex-row-reverse items-start gap-2 md:hidden">
        <button onClick={onHandleOpen}>
          <Menu size={32} />
        </button>
        {opened && <div className="flex flex-col gap-1 font-bold w-full items-start">
          <a
            className="underline underline-offset-4"
            onClick={() => onChangeTab(1)}>
            About
          </a>
          <a
            className="underline underline-offset-4"
            onClick={() => onChangeTab(2)}>
            Resume
          </a>
          <a
            className="underline underline-offset-4"
            onClick={() => onChangeTab(3)}>
            Projects
          </a>
          <a
            className="underline underline-offset-4"
            onClick={() => onChangeTab(4)}>
            Contact
          </a>
        </div>}
      </div>
    </nav>
  )
}