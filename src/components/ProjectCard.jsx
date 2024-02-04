import { FaGithub, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";

const ProjectCard = ({ url, img, github, title, text }) => {
  return (
    // <article className=" rounded-lg hover:shadow-xl duration-300">
    <article className="grid lg:grid-cols-2 gap-x-20 gap-10 my-10">
      <img
        src={img}
        alt="title"
        className="w-full object-cover rounded-lg shadow-xl"
      />
      <div className=" px-1  text-slate-700">
        <h2 className="text-xl pb-3 border-b-2 capitalize">{title}</h2>
        <p className="mt-3 ">{text}</p>
        <div className="mt-5 mb-3 flex gap-x-10">
          <a href={url} target="blank">
            <TbWorldWww className="h-8 w-8 text-stone-500 hover:text-teal-500 duration-300" />
          </a>

          <a href={github} target="blank">
            <FaGithub className="h-8 w-8 text-stone-500 hover:text-teal-500 duration-300 " />
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
