import { FC, useState } from "react";
import { logo, menu, close } from "../../assets";
import { navLinks } from "../../constants";

const Navbar: FC = () => {
  const [opened, setOpened] = useState(false);
  return (
    <nav className="w-full flex justify-between items-center py-6 navbar">
      <img src={logo} alt="logo" className="w-[124px] h-[32px]" />
      <ul className="sm:flex hidden justify-between items-center xs:w-1/3 list-none">
        {navLinks.map((link, index) => (
          <li key={link.id + index.toString()}>
            <a
              className="ease-in-out duration-300 no-underline text-dimWhite  sm:text-[14px] md:text-[16px] hover:text-white hover:drop-shadow-[0px_0px_15px_rgba(255,255,255,1)] font-poppins"
              href={`#${link.id}`}
            >
              {link.title}
            </a>
          </li>
        ))}
      </ul>
      <img
        className={`inline sm:hidden z-40 w-[28px] h-[28px] object-contain`}
        src={opened ? close : menu}
        alt="open_or_close"
        onClick={() => {
          setOpened((prev) => !prev);
        }}
      />
      {opened ? (
        <div className="w-full h-full bg-black-gradient z-30 absolute top-0 left-0 flex flex-col justify-center ">
          <ul className="flex flex-col justify-evenly items-center w-full h-1/2 list-none">
            {navLinks.map((link, index) => (
              <li key={link.id + index.toString()}>
                <a
                  onClick={() => {
                    setOpened((prev) => !prev);
                  }}
                  className="ease-in-out duration-300 no-underline text-dimWhite text-[23px] hover:text-white hover:drop-shadow-[0px_0px_15px_rgba(255,255,255,1)] font-poppins"
                  href={`#${link.id}`}
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </nav>
  );
};

export default Navbar;
