const SkillsCard = ({ icon, title }) => {
  return (
    <article>
      <span>{icon}</span>
      <p className="mt-3 mb-12 text-lg font-semibold text-slate-600 flex">
        {title}
      </p>
      {/* <p className="mt-2 text-slate-500">{text}</p> */}
    </article>
  );
};

export default SkillsCard;
