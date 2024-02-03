import { FaGithub, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";

const ProjectCard = ({ url, img, github, title, text }) => {
  return (
    <article className="bg-stone-200 rounded-lg shadow-md hover:shadow-xl duration-300">
      <img src={img} alt="title" className="w-full object-cover rounded-t-lg" />
      <div className="capitalize px-8 py-4 text-slate-700">
        <h2 className="text-xl pb-3 border-b-2 border-stone-400">{title}</h2>
        <p className="mt-3 ">{text}</p>
        <div className="mt-5 mb-3 flex justify-center gap-x-20">
          <a href={url} target="blank">
            <TbWorldWww className="h-8 w-8 text-stone-600   hover:text-teal-500 duration-300" />
          </a>
          <a href={github} target="blank">
            <FaGithub className="h-8 w-8 text-stone-600 hover:text-teal-500 duration-300 " />
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
