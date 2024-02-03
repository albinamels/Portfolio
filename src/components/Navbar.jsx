import { links } from "../data";

const Navbar = () => {
  return (
    <nav className="py-8 px-28 fixed bg-stone-100 bg-opacity-25">
      <div className="w-lvw flex flex-col sm:flex-row sm:gap-x-16 sm:items-center ">
        {/* <h2 className="text-3xl font-bold">
          My<span className="text-emerald-600">Portfolio</span>
        </h2> */}
        <div className="flex gap-x-8">
          {links.map((link) => {
            const { id, href, text } = link;
            return (
              <a
                key={id}
                href={href}
                className="capitalize text-xl text-slate-700 tracking-wide hover:text-2xl hover:underline duration-300"
              >
                {text}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
