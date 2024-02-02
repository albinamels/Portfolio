import SectionTitle from "./SectionTitle";
import SkillsCard from "./SkillsCard";
import { skills } from "../data";

const Skills = () => {
  return (
    <section className="py-20 align-element" id="skills">
      <SectionTitle text="technical skills" />
      <div className="pt-16 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        {skills.map((skill) => {
          return <SkillsCard key={skill.id} {...skill} />;
        })}
      </div>
    </section>
  );
};

export default Skills;
