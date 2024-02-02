import heroImg from "../assets/hero.svg";
import { FaGithubSquare, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail, MdLocationPin } from "react-icons/md";

const Hero = () => {
  return (
    <div className="bg-[url('https://images.unsplash.com/photo-1518655048521-f130df041f66?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-no-repeat bg-cover h-lvh object-fill py-0">
      <div className="align-element grid md:grid-cols-2 items-center gap-8 pt-44">
        <article>
          <h1 className="text-6xl font-medium  text-slate-700 tracking-wide">
            Albina Mels
          </h1>
          <p className="mt-4 mb-20 text-4xl font-medium text-slate-600">
            Front-End Developer
          </p>
          <p className="mt-2 text-lg text-slate-600 flex  hover:text-red-800 duration-300">
            <MdOutlineEmail className="mr-8 my-1 h-6 w-6 " />
            <a href="mailto:albina.mels@gmail.com">albina.mels@gmail.com</a>
          </p>
          <p className="mt-2 text-lg text-slate-600 flex">
            <FaPhoneAlt className="mr-9 my-1 h-5 w-5 " />
            +1 310 353 6836
          </p>
          <p className="mt-2 mb-20 text-lg text-slate-600 flex">
            <MdLocationPin className="mr-8 my-1 h-6 w-6 " />
            Los Angeles, CA
          </p>
          <div className="flex gap-x-6 mt-10">
            <a href="https://github.com/albinamels" target="blank">
              <FaGithubSquare className="h-10 w-10 text-slate-500 hover:text-red-900 duration-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/albina-mels-49720443"
              target="blank"
            >
              <FaLinkedin className="h-10 w-10 text-slate-500 hover:text-red-900 duration-300" />
            </a>
          </div>
        </article>
        {/* <article className="hidden md:block">
          <img src={heroImg} className="h-80 lg:h-96" />
        </article> */}
      </div>
    </div>
  );
};

export default Hero;
