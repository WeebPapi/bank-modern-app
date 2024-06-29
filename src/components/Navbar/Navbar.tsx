import { FC, useState } from "react";
import { logo, menu, close } from "../../assets";
import { navLinks } from "../../constants";

const Navbar: FC = () => {
  return (
    <nav className="w-full flex justify-between items-center py-6 navbar">
      <img src={logo} alt="logo" className="w-[124px] h-[32px]" />
      <ul className="flex justify-between items-center w-1/3 list-none">
        {navLinks.map((link, index) => (
          <li key={index}>
            <a
              className="ease-in-out duration-300 no-underline text-dimWhite text-[16px] hover:text-white hover:drop-shadow-[0px_0px_15px_rgba(255,255,255,1)] font-poppins"
              href={`#${link.id}`}
            >
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
