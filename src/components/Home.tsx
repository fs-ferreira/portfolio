import { Download, Github, Instagram, Linkedin } from 'lucide-react'
import profilePicture from '../assets/profile.jpg'
import CV_enUS from '../assets/CV_en.pdf'
import CV_ptBR from '../assets/CV_pt.pdf'
import Button from './Button'

export default function Home() {
  return (
    <div className='w-full flex flex-col text-center items-center justify-center gap-3 mt-16'>
      <img
        className='rounded-full object-cover size-72'
        src={profilePicture}
        alt="" />
      <h2 className='text-4xl font-semibold'>Felipe Ferreira</h2>
      <p className='text-lg text-violet-200/60'>Software Developer</p>
      <div className="flex gap-2 item">
        <Button className='border-none bg-violet-800'>
          <a href="https://www.linkedin.com/in/felipe-ferreira-ab6a8b199/" target='_blank' tabIndex={-1}>
            <Linkedin size={28} />
          </a>
        </Button>
        <Button className='border-none bg-violet-800' >
          <a href="https://github.com/fs-ferreira" target='_blank' tabIndex={-1}>
            <Github size={28} />
          </a>
        </Button>
        <Button className='border-none bg-violet-800'>
          <a href="https://www.instagram.com/feli_pih/" target='_blank' tabIndex={-1}>
            <Instagram size={28} />
          </a>
        </Button>
      </div>
      <a href={CV_enUS} download="CV - Felipe da Silva Ferreira" tabIndex={-1} >
        <Button className='mt-3 font-semibold text-lg hocus:scale-105'>
          <Download />Download CV
        </Button>
      </a>
      <a href={CV_ptBR} download="CV - Felipe da Silva Ferreira" tabIndex={-1} >
        <Button className='font-semibold border-none hocus:scale-105 hocus:bg-transparent'>or download in pt-BR</Button>
      </a>
    </div>
  )
}