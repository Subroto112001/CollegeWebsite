import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { CiReceipt } from "react-icons/ci";

import { IoNotifications } from "react-icons/io5";
import { PiStudentFill } from "react-icons/pi";
import { NavLink } from "react-router-dom";

const Foter = () => {
  const footerItem = [
    {
      id: 1,
      icon: <AiOutlineHome />,
      name: "প্রথম পাতা",
      path: "/",
    },
    {
      id: 2,
      icon: <IoNotifications />,
      name: "নোটিশ",
      path: "/notice",
    },
    {
      id: 3,
      icon: <CiReceipt />,
      name: "ফলাফল",
      path: "/result",
    },
    {
      id: 4,
      icon: <PiStudentFill />,
      name: "শিক্ষার্থী",
      path: "/student",
    },
  ];
  return (
    <div className="container fixed bottom-0 left-0 ">
      <div>
        <ul className="flex justify-between items-center font-hindShiliguri">
          {footerItem.map((item) => (
            <li
              key={item.id}
              className=""
            >
             

              <NavLink
                to={item.path}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "text-black px-4 py-2 rounded flex flex-col justify-center items-center "
                    : isActive
                    ? " text-red-500 font-bold  px-4 py-2 rounded flex flex-col justify-center items-center "
                    : "text-black   px-4 py-2 rounded flex flex-col justify-center items-center "
                }
              > <span className=" font-bold text-2xl">{item.icon}</span>
                <span>{item.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Foter;
