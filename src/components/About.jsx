import SectionTitle from "./SectionTitle";

const About = () => {
  return (
    <section
      className="bg-[url('https://images.unsplash.com/photo-1483794344563-d27a8d18014e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-no-repeat bg-left-top bg-cover object-fill py-0 h-dvh"
      id="about"
    >
      <section className="py-20 align-element" id="about">
        <SectionTitle text="about me" />
      </section>
    </section>
  );
};

export default About;
