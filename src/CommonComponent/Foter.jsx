import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { CiReceipt } from "react-icons/ci";
import { FaUserGroup } from "react-icons/fa6";
import { PiStudentFill } from "react-icons/pi";
import { NavLink } from "react-router-dom";

const Foter = () => {
  const footerItem = [
    {
      id: 1,
      icon: <AiOutlineHome />,
      name: "প্রথম পাতা",
      path: "",
    },
    {
      id: 2,
      icon: <CiReceipt />,
      name: "ফলাফল",
      path: "",
    },
    {
      id: 3,
      icon: <PiStudentFill />,
      name: "শিক্ষার্থী",
      path: "",
    },
    {
      id: 4,
      icon: <FaUserGroup />,
      name: "অভিভাবক",
      path: "",
    },
  ];
  return (
    <div className="container fixed bottom-0 left-0 ">
      <div>
        <ul className="flex justify-between items-center">
          {footerItem.map((item) => (
            <li key={item.id} className="flex flex-col justify-center items-center ">
              <span className=" font-bold text-2xl">{item.icon}</span>
              
              <NavLink
                to={item.path}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "text-black px-4 py-2 rounded"
                    : isActive
                    ? "  font-bold  px-4 py-2 rounded"
                    : "text-black  bg-gray-100  px-4 py-2 rounded"
                }
              >
              
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Foter;
