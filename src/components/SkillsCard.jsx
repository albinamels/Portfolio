const SkillsCard = ({ icon, title }) => {
  return (
    <div className="p-6">{icon}</div>
    // <div className="border place-items-center">
    //   <span>{icon}</span>
    //   <p className="mt-3 mb-12 text-lg font-semibold text-slate-600 flex">
    //     {title}
    //   </p>
    // </div>
  );
};

export default SkillsCard;
