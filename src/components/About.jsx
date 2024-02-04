import SectionTitle from "./SectionTitle";
import { experience, education } from "../data";

const About = () => {
  return (
    <section
      className="bg-[url('https://images.unsplash.com/photo-1483794344563-d27a8d18014e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-no-repeat bg-center bg-cover object-fill py-0"
      id="about"
    >
      <div className="pt-24 align-element">
        <SectionTitle text="about me" />
      </div>
      <div className="align-element">
        <p className="text-lg text-slate-600 flex">
          Self-taught and vision-driven Front-End Developer with 2 years of
          experience specializing in dynamic and user-friendly web applications.
          Proficient in HTML, CSS, JavaScript, React, I stay up-to-date on
          emerging technologies.
        </p>
        <p className="my-2 text-lg text-slate-600 flex">
          A responsive communicator and team player, I quickly learn, share
          knowledge, and foster cooperative working relationships. Combining
          technical expertise with a background in finance from prominent
          international companies, I offer a unique blend of skills. With a
          growth mindset, I thrive in challenging environments, leveraging
          analytical problem-solving to drive success.
        </p>
      </div>
      <div className="pb-16 align-element grid md:grid-cols-2 gap-16">
        <article>
          <h4 className="text-xl font-medium text-slate-600 pt-4">
            Experience
          </h4>
          <div className="list-disc mt-3 space-y-2">
            {experience.map((company) => {
              const { id, title, info, description } = company;
              return (
                <>
                  <p
                    key={id}
                    className="text-md text-slate-600 font-semibold border-t-4 border-stone-300 pt-4 mt-4"
                  >
                    {title}
                  </p>
                  <p className="text-md  text-slate-600 pb-1 italic">{info}</p>
                  <ul className="list-disc text-slate-600 pl-5 pb-3">
                    {description.map((item, index) => (
                      <li className="pb-1" key={index}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </>
              );
            })}
          </div>
        </article>
        <article className="pl-20">
          <h4 className="text-xl font-medium text-slate-600 pt-4">Education</h4>
          <div className="list-disc mt-3 space-y-2">
            {education.map((school) => {
              const { id, degree, uni, info } = school;
              return (
                <>
                  <p
                    key={id}
                    className="text-md text-slate-600 font-semibold border-t-4 border-stone-300 pt-4"
                  >
                    {degree}
                  </p>
                  <p className="text-md text-slate-600 font-semibold">{uni}</p>
                  <p className="text-md  text-slate-600 italic pb-4">{info}</p>
                </>
              );
            })}
          </div>
        </article>
      </div>
    </section>
  );
};

export default About;
