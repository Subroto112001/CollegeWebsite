import React from "react";
import { CgDetailsMore } from "react-icons/cg";
import { FaUserCircle } from "react-icons/fa";
import logo from "../assets/logo.png";
const Header = () => {
  return (
    <div className="container">
      <div className="flex justify-between items-center ">
        <div className="flex gap-2">
          <div className="w-[60px] h-[60px]">
            <picture>
              <img src={logo} alt={logo} />
            </picture>
          </div>
          <div className="flex flex-col">
            <h3 className="font-bold text-[16px]">
              সরকারি শাহ্ আব্দুর রউফ কলেজ
            </h3>
            <h3 className="font-medium text-shadow-md">পীরগঞ্জ রংপুর</h3>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-2xl hidden sm:block">
            <FaUserCircle />
          </span>
          <span className="text-2xl ">
            <CgDetailsMore />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
