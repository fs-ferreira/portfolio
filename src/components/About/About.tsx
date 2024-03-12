import DefaultSection from './AdditionalSection'
import PersonalSection from './PersonalSection'

export default function About() {
  return (
    <div className="bg-violet-50 rounded-md text-zinc-900 p-5 md:p-10 shadow-lg shadow-zinc-900/50 space-y-10">
    <PersonalSection/>
    <DefaultSection/>
    </div>
  )
}