import { Braces, Clapperboard, Dumbbell, Gamepad2, Music, Trophy } from "lucide-react";
import PersonalCard from "./PersonalCard";
import PageTitle from "../PageTitle";

export default function DefaultSection() {
  return (
    <div className="space-y-5">
      <PageTitle value="Hobbies" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <PersonalCard
          title="We're lost in music!"
          description="I'm always listening to something; music is part of my routine. Additionally, I like to play guitar in my free time."
        >
          <Music size={52} />
        </PersonalCard>
        <PersonalCard
          title="Web Development"
          description="Since I was 15, I've been in this tech ecosystem, and it's something that I love to do. I really enjoy learning new things"
        >
          <Braces size={52} />
        </PersonalCard>
        <PersonalCard
          title="Man of the People"
          description="Many developers start as children who love gaming, and this is no different in my case. It brings me joy."
        >
          <Gamepad2 size={52} />
        </PersonalCard>
        <PersonalCard
          title="Absolute Cinema"
          description="Tell me one person who refuses to watch a TV series or a movie. I have to say, I'm not that person."
        >
          <Clapperboard size={52} />
        </PersonalCard>
        <PersonalCard
          title="Stay healthy"
          description="As a developer, I spend a lot of time seated in my chair. To prevent complications in the future, it is crucial that I take care of my body."
        >
          <Dumbbell size={52} />
        </PersonalCard>
        <PersonalCard
          title="Sports fanboy"
          description="Both sports and e-sports are part of my weekend. Following my favorite teams is a complete rollercoaster of emotions."
        >
          <Trophy size={52} />
        </PersonalCard>
      </div>
    </div>
  )
}