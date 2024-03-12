import { BriefcaseBusiness, GraduationCap, LibraryBig } from "lucide-react";
import ResumeTitle from "./ResumeTitle";
import ResumeItem from "./ResumeItem";
import PageTitle from "../PageTitle";

export default function ResumeSection() {
  return (
    <>
      <PageTitle value="Resume" />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div className="flex flex-col gap-5">
          <ResumeTitle title="Education">
            <GraduationCap size={40} />
          </ResumeTitle>
          <div className="overflow-y-auto md:h-[60vh]">
            <ResumeItem date="2020 - 2024" title="ESAMC Campinas" description="Scholarship for bachelor in Computer Engineering" />
            <ResumeItem date="2017 - 2019" title="ETEC Bento Quirino" description="High school with informatics technical formation" />
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <ResumeTitle title="Experience">
            <BriefcaseBusiness size={32} />
          </ResumeTitle>
          <div className="overflow-y-auto md:h-[60vh]">
            <ResumeItem date="2023 - Present" title="Senior Sistemas" description="HCM project - New Payroll and Time Management" />
            <ResumeItem date="2022 - 2023" title="NTT Data Brasil" description="Refactoring of an airline company legacy system." />
            <ResumeItem date="2020 - 2022" title="Fundação para Inovações Tecnológicas" description="Projects on data management and logistics organization" />
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <ResumeTitle title="Courses">
            <LibraryBig size={36} />
          </ResumeTitle>
          <div className="overflow-y-auto md:h-[60vh]">
            <ResumeItem date="01/2024" title="Fullstack project with NodeJS, Reac and React Native" description="Udemy Brasil" />
            <ResumeItem date="02/2024" title="Microservices from Scratch with Spring Cloud, Spring Boot, and Docker" description="Udemy Brasil" />
            <ResumeItem date="02/2024" title="Unit Testing from Scratch with Angular 14 / Jasmine and Karma" description="Udemy Brasil" />
            <ResumeItem date="01/2024" title="NLW Expert React Track" description="Rocketseat" />
            <ResumeItem date="01/2024" title="Advanced Angular 11: Creating a Master/Detail Architecture" description="Udemy Brasil" />
          </div>
        </div>
      </div>
    </>
  )
}