import { links } from "../data";

const Navbar = () => {
  return (
    // <nav className="py-7 px-28 fixed bg-stone-100 bg-opacity-25">
    <nav className="w-lvw fixed bg-stone-100 ">
      <div className="mx-auto max-w-7xl px-24 flex flex-col  sm:flex-row sm:gap-x-16 sm:items-center sm:py-8">
        {/* <h2 className="text-3xl font-bold">
          My<span className="text-emerald-600">Portfolio</span>
        </h2> */}
        <div className="flex gap-x-8 ">
          {links.map((link) => {
            const { id, href, text } = link;

            return (
              <a
                key={id}
                href={href}
                className="capitalize text-xl text-slate-700 tracking-wide hover:tracking-widest duration-300"
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
