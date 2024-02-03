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

export const experience = [
  {
    title: "CargoFleet | Front-End Developer",
    info: "Chicago, IL | Remote | Mar 2022 - Dec 2023",
    description: [
      "Utilized React and Redux Toolkit to create 50+ responsive management tools, ensuring product functionality, alignment with design specs, and enhancing customer satisfaction.",
      "Refactored code by transitioning class components to functional components, leveraging React Hooks for improved maintainability, performance optimization.",
      "Optimized application performance by integrating React Router lazy loading feature, resulting in a notable 15% decrease in average page load duration.",
      "Collaborated with the Back-End team to implement client-side pagination in REST API, reducing response times and boosting API efficiency, resulting in a 30% increase in positive user feedback.",
      "Engaged in collaborative teamwork alongside a group of seven developers, utilizing Agile methodologies in Jira.",
    ],
  },
  {
    title: "Yandex | Finance Manager",
    info: "Istanbul, Turkiye | Full-time | Sep 2015 - Dec 2020",
    description: [
      "Managed intercompany relations within Yandex Group, overseeing budgeting, forecasting, and financial transactions for compliance with regulations and tax requirements.",
      "Aligned client agreement templates with Turkish tax regulations, collaborating with the corporate legal department. Achieved an 85% reduction in Stamp tax amount through the update.",
      "Enhanced profitability by 25% through the optimization of margin calculation procedures. This involved the strategic application of double tax treaties and the revision of corporate standards.",
    ],
  },
  {
    title: "Hewlett-Packard | Accountant",
    info: "Moscow, Russia | Full-time | Oct 2013 – Mar 2015",
    description: [
      "Ensured compliance and security by overseeing audits, database backups, and supporting month-end and year-end close processes.",
      "Established and upheld accounting controls by developing and recommending policies and procedures.",
      "Recorded financial transactions and maintained accuracy through meticulous data entry and reconciliation.",
    ],
  },
];

export const education = [
  {
    degree: "MBA",
    uni: "American University of Central Asia (AUCA)",
    info: "Bishkek, Kyrgyzstan | Jan 2010 - Jun 2012",
  },
  {
    degree: "BA in Finance",
    uni: "Moscow Institute of Entrepreneurship and Law",
    info: "Bishkek, Kyrgyzstan | Sep 2003 - Jun 2007",
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
