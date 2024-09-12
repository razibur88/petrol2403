import React from "react";
import { MdOutlineMail, MdAddCall } from "react-icons/md";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Header = () => {
  return (
    <header className="py-2 bg-hbg">
      <div className="max-w-container mx-auto">
        <div className="flex items-center flex-wrap">
          <div className="w-full lg:w-1/4">
            <div className="flex items-center justify-center lg:justify-start gap-x-2">
              <MdOutlineMail className="text-white" />
              <p className="text-white text-center font-pops">
                mail@yourcompany.com
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/4 py-2 lg:py-0">
            <div className="flex items-center justify-center lg:justify-start gap-x-2">
              <MdAddCall className="text-white" />
              <p className="text-white font-pops">+896 120 5889 (Toll free)</p>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="flex lg:justify-end justify-center gap-x-3">
              <FaFacebookF className="text-white" />
              <FaTwitter className="text-white" />
              <FaLinkedinIn className="text-white" />
              <FaInstagram className="text-white" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
