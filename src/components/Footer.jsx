const Footer = () => {
  return (
    <div className="py-8 flex align-element border-t-2">
      <h4 className="capitalize text-xl text-slate-700 tracking-wide">
        Albina Mels &copy; {new Date().getFullYear()}
      </h4>
    </div>
  );
};

export default Footer;
