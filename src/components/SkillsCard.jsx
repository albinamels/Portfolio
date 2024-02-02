const SkillsCard = ({ icon, title, text }) => {
  return (
    <article>
      <span>{icon}</span>
      <p className="mt-2 mb-16 text-lg font-semibold text-slate-600 flex">
        {title}
      </p>
      {/* <p className="mt-2 text-slate-500">{text}</p> */}
    </article>
  );
};

export default SkillsCard;
