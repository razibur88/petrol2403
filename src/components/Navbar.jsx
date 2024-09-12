import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  let [show, setShow] = useState(false);

  return (
    <nav className="bg-[#F40404] py-4">
      <div className="max-w-container mx-auto">
        <div className="flex items-center">
          <div className="w-1/4">
            <img src={Logo} alt="" />
          </div>
          <div className="w-3/4">
            <ul className="flex justify-end">
              <li className="text-[16px] font-pops text-white font-semibold hover:text-[#282828] duration-300 ease-in-out p-4">
                Home
              </li>
              <li className="text-[16px] font-pops text-white font-semibold hover:text-[#282828] duration-300 ease-in-out p-4">
                About
              </li>
              <li className="text-[16px] font-pops text-white font-semibold hover:text-[#282828] duration-300 ease-in-out p-4">
                Services
              </li>
              <li className="text-[16px] font-pops text-white font-semibold hover:text-[#282828] duration-300 ease-in-out p-4">
                Gallery
              </li>
              <li className="text-[16px] font-pops text-white font-semibold hover:text-[#282828] duration-300 ease-in-out p-4">
                Blog
              </li>
              <li className="text-[16px] font-pops text-white font-semibold hover:text-[#282828] duration-300 ease-in-out border-2 border-[#fff] p-4 hover:border-[#282828]">
                Contact
              </li>
            </ul>
          </div>
          <div
            onClick={() => setShow(!show)}
            className="lg:hidden cursor-pointer"
          >
            {show == true ? <RxCross2 /> : <FaBars />}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
