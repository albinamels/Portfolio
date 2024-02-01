import heroImg from "../assets/hero.svg";
import { FaGithubSquare, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail, MdLocationPin } from "react-icons/md";

const Hero = () => {
  return (
    <div className="bg-emerald-50 py-24">
      <div className="align-element grid md:grid-cols-2 items-center gap-8">
        <article>
          <h1 className="text-5xl font-medium  text-slate-700">Albina Mels</h1>
          <p className="mt-4 mb-10 text-3xl text-slate-600">
            Front-End Developer
          </p>
          <p className="mt-2 text-lg text-slate-600 flex hover:text-emerald-300 duration-300">
            <MdOutlineEmail className="mr-2 my-1 h-6 w-6 " />
            <a href="mailto:albina.mels@gmail.com">albina.mels@gmail.com</a>
          </p>
          <p className="mt-2 text-lg text-slate-600 flex">
            <FaPhoneAlt className="mr-3 my-1 h-5 w-5 " />
            +1 310 353 6836
          </p>
          <p className="mt-2 text-lg text-slate-600 flex">
            <MdLocationPin className="mr-2 my-1 h-6 w-6 " />
            Los Angeles, CA
          </p>
          <div className="flex gap-x-6 mt-10">
            <a href="#">
              <FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-emerald-300 duration-300" />
            </a>
            <a href="#">
              <FaLinkedin className="h-8 w-8 text-slate-500 hover:text-emerald-300 duration-300" />
            </a>
          </div>
        </article>
        <article className="hidden md:block">
          <img src={heroImg} className="h-80 lg:h-96" />
        </article>
      </div>
    </div>
  );
};

export default Hero;
