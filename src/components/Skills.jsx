import SectionTitle from "./SectionTitle";
import SkillsCard from "./SkillsCard";
import { skills } from "../data";

const Skills = () => {
  return (
    <section className="pt-20 pb-12 align-element" id="skills">
      <SectionTitle text="technical skills" />
      <div className="pt-16 grid place-items-center gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        {skills.map((skill) => {
          return <SkillsCard key={skill.id} {...skill} />;
        })}
      </div>
    </section>
  );
};

export default Skills;
