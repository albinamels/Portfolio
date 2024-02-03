import ProjectCard from "./ProjectCard";
import { projects } from "../data";
import SectionTitle from "./SectionTitle";

const Projects = () => {
  return (
    <section className="align-element py-20" id="projects">
      <SectionTitle text="my projects" />
      <div className="py-16 grid lg:grid-cols-3 gap-8">
        {projects.map((project) => {
          return <ProjectCard key={project.id} {...project} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
