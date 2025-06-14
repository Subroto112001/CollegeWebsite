import React from "react";
import { CgDetailsMore } from "react-icons/cg";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
    return (
      <div className="container">
        <div className="flex justify-between items-center font-notoSerif">
          <div>
            <h3 className="font-bold text-xl">আমাদের কলেজ</h3>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">
              <FaUserCircle />
            </span>
            <span className="text-2xl">
              <CgDetailsMore />
            </span>
          </div>
        </div>
      </div>
    );
};

export default Header;
