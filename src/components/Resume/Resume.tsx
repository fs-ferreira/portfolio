import ResumeSection from "./ResumeSection";
import SkillsSection from "./SkillsSection";


export default function Resume() {
  return (
    <div className="bg-violet-50 rounded-md text-zinc-900 p-5 md:p-10 shadow-lg shadow-zinc-900/50 space-y-5">
      <ResumeSection />
      <SkillsSection />
    </div>
  )
}