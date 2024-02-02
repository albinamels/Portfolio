import { nanoid } from "nanoid";
import { FaHtml5, FaCss3Alt, FaBootstrap, FaGithub } from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiRedux,
  SiMui,
  SiTailwindcss,
  SiAxios,
  SiFirebase,
  SiPostman,
  SiJest,
  SiNetlify,
  SiJira,
} from "react-icons/si";
import { BsFiletypeJson } from "react-icons/bs";
import { GiGears } from "react-icons/gi";

export const links = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#projects", text: "projects" },
];

export const skills = [
  {
    id: nanoid(),
    title: "HTML5",
    icon: <FaHtml5 className="h-16 w-16 text-orange-600" />,
  },
  {
    id: nanoid(),
    title: "CSS3",
    icon: <FaCss3Alt className="h-16 w-16 text-blue-600" />,
  },
  {
    id: nanoid(),
    title: "JavaScript",
    icon: <SiJavascript className="h-16 w-16 text-yellow-300" />,
  },
  {
    id: nanoid(),
    title: "TypeScript",
    icon: <SiTypescript className="h-16 w-16 text-sky-500" />,
  },
  {
    id: nanoid(),
    title: "React | Hooks",
    icon: <SiReact className="h-16 w-16 text-cyan-400" />,
  },
  {
    id: nanoid(),
    title: "Redux",
    icon: <SiRedux className="h-16 w-16 text-violet-600" />,
  },
  {
    id: nanoid(),
    title: "Bootstrap",
    icon: <FaBootstrap className="h-16 w-16 text-violet-600" />,
  },
  {
    id: nanoid(),
    title: "Material UI",
    icon: <SiMui className="h-16 w-16 text-sky-500" />,
  },
  {
    id: nanoid(),
    title: "Tailwind CSS",
    icon: <SiTailwindcss className="h-16 w-16 text-cyan-400" />,
  },
  {
    id: nanoid(),
    title: "JSON",
    icon: <BsFiletypeJson className="h-16 w-16 text-sky-800" />,
  },
  {
    id: nanoid(),
    title: "REST API",
    icon: <GiGears className="h-16 w-16 text-sky-500" />,
  },
  {
    id: nanoid(),
    title: "Axios",
    icon: <SiAxios className="h-16 w-16 text-violet-600" />,
  },
  {
    id: nanoid(),
    title: "Firebase",
    icon: <SiFirebase className="h-16 w-16 text-amber-400" />,
  },
  {
    id: nanoid(),
    title: "Postman",
    icon: <SiPostman className="h-16 w-16 text-orange-500" />,
  },
  {
    id: nanoid(),
    title: "UnitTest | Jest",
    icon: <SiJest className="h-16 w-16 text-red-700" />,
  },
  {
    id: nanoid(),
    title: "GitHub",
    icon: <FaGithub className="h-16 w-16 text-slate-800" />,
  },
  {
    id: nanoid(),
    title: "Netlify",
    icon: <SiNetlify className="h-16 w-16 text-teal-400" />,
  },
  {
    id: nanoid(),
    title: "Jira",
    icon: <SiJira className="h-16 w-16 text-blue-500" />,
  },
];

export const projects = [
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "https://react-projects.netlify.app/",
    github: "https://github.com/john-smilga",
    title: "first project",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
  },
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/2148222/pexels-photo-2148222.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "https://react-projects.netlify.app/",
    github: "https://github.com/john-smilga",
    title: "second project",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
  },
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "https://react-projects.netlify.app/",
    github: "https://github.com/john-smilga",
    title: "third project",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
  },
];
