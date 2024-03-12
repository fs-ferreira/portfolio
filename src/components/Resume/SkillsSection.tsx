import KnowledgeItem from "./KnowledgeItem"
import SkillProgressItem, { SkillProgressItemProps } from "./SkillProgressItem"

export default function SkillsSection() {

  const skillsSet: SkillProgressItemProps[] = [
    { title: "Web Design", percentage: 90 },
    { title: "Frontend", percentage: 70 },
    { title: "Backend", percentage: 50 },
    { title: "Cloud", percentage: 30 },
    { title: "Mobile", percentage: 40 },
  ]
  const skillsNameSet: string[] = [
    'Angular',
    'Java',
    'ReactJS',
    'NextJS',
    'React Native',
    'Spring',
    'NodeJS',
    'Docker',
    'Git',
    'RabbitMQ',
    'AWS',
    'Scrum',
    'Kanabn',
    'Python',
    'Design Patterns',
    'CI/CD',
    'PL/SQL',
    'API Rest'
  ]
  return (
    <div className="grid md:grid-cols-2 gap-10">
      <div>
        <h2 className='font-bold text-2xl text-violet-950 mb-5'>Working Skills</h2>
        <div className="space-y-3">
          {
            skillsSet.sort((a, b) => a.percentage < b.percentage ? 1 : -1).map((item, index) => (
              <SkillProgressItem key={index} title={item.title} percentage={item.percentage} />
            ))
          }
        </div>
      </div>
      <div>
        <h2 className='font-bold text-2xl text-violet-950 mb-5'>Knowledges</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {
            skillsNameSet.map((item, index) => (
              <KnowledgeItem key={index} itemName={item} />
            ))
          }
        </div>
      </div>
    </div>
  )
}