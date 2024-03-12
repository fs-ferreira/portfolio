import { Cake, Mail, MapPin, Smartphone } from "lucide-react";
import PersonalItem from "./PersonalItem";
import aboutPicture from '../../assets/about.jpg'
import PageTitle from "../PageTitle";
export default function PersonalSection() {
  return (
    <div className="grid md:grid-cols-[auto_1fr] gap-8">
      <div className="md:row-span-2 flex justify-center">
        <img src={aboutPicture} alt="About photo" className='max-h-[520px] rounded-lg' />
      </div>
      <div className="space-y-3">
        <PageTitle value="About me" />
        <p className='leading-6 max-w-[90%] overflow-auto text-violet-950/70'>Welcome to my profile! I am a Fullstack Developer with academic experience in the field since the age of 15. <br /> <br />
          With 4 to 5 years of experience in Angular frameworks and a little over 3 years in Java, Spring, and relational databases, these are my main skills. The rest are detailed in my previous jobs. <br /> <br />
          Currently, I am expanding my knowledge in new languages and technologies, including ReactJS, Python, Cloud, and DevOps. As part of the process of consolidating and promoting my work, I create small projects to demonstrate my learning.</p>
      </div>
      <div className="space-y-5 md:col-span-2 lg:col-span-1">
        <PageTitle value="Personal information" />
        <div className='grid md:grid-cols-[1fr_auto] xl:grid-cols-2 gap-6'>
          <PersonalItem title='Phone number' description='+55 19 998653389'>
            <Smartphone strokeWidth={1.75} size={44} color='#4d7c0f' />
          </PersonalItem>
          <PersonalItem title='Location' description='Campinas - SP, Brazil'>
            <MapPin strokeWidth={1.75} size={44} color='#6b21a8' />
          </PersonalItem>
          <PersonalItem title='Email' description='felipeferreira0811@gmail.com'>
            <Mail strokeWidth={1.75} size={44} color='#0891b2' />
          </PersonalItem>
          <PersonalItem title='Birthday' description='August 11, 2002'>
            <Cake strokeWidth={1.75} size={44} color='#dc2626' />
          </PersonalItem>
        </div>
      </div>
    </div>
  )
}