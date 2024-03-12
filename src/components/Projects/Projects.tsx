import financeControl from '../../assets/financeControl.png'
import primeFlix from '../../assets/primeFlix.png'
import nlwNotes from '../../assets/nlwNotes.png'
import weLovePizza from '../../assets/weLovePizza.png'
import dockerEnv from '../../assets/dockerEnv.png'
import awsCdk from '../../assets/awsCdk.png'
import unitTestShowcase from '../../assets/unitTestShowcase.png'
import ProjectCard from './ProjectCard'
import PageTitle from '../PageTitle'

export default function Projects() {
  return (
    <div className="bg-violet-50 rounded-md text-zinc-900 p-5 md:p-10 shadow-lg shadow-zinc-900/50 space-y-5">
      <PageTitle value="Projects" />

      <div className="grid md:grid-cols-3 gap-10 ">
        <ProjectCard imgSrc={weLovePizza} title='We Love Pizza' link='we-love-pizza' />
        <ProjectCard imgSrc={primeFlix} title='Primeflix' link='primeflix' />
        <ProjectCard imgSrc={nlwNotes} title='NLW Expert Notes' link='nlw-expert-notes' />
        <ProjectCard imgSrc={awsCdk} title='Aws cdk with Java' link='aws_cdk' />
        <ProjectCard imgSrc={financeControl} title='Finance Control App' link='finance-control-app' />
        <ProjectCard imgSrc={dockerEnv} title='Spring Microservices with Docker' link='docker_env' />
        <ProjectCard imgSrc={unitTestShowcase} title='Angular Unit Test Showcase' link='unit-test-showcases' />
      </div>
    </div>
  )
}