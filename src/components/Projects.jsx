import ProjectCard from "./ProjectCard";
import { projects } from "../data";
import SectionTitle from "./SectionTitle";

const Projects = () => {
  return (
    <section className="align-element pt-24" id="projects">
      <SectionTitle text="my projects" />
      {/* <div className="py-8 grid lg:grid-cols-3 gap-x-20 gap-y-10"> */}
      <div className="py-8">
        {projects.map((project) => {
          return <ProjectCard key={project.id} {...project} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
