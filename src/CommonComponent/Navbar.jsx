import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const menulist = [
    {
      id: 1,
      name: "প্রথম পাতা",
      path: "/",
    },
    {
      id: 2,
      name: "কলেজ সম্পর্কে",
      path: "/aboutcollege",
    },
    {
      id: 3,
      name: "শিক্ষর্থী",
      path: "/students",
    },
    {
      id: 4,
      name: "অভিভাবক",
      path: "/guardian",
    },
    {
      id: 5,
      name: "ফলাফল",
      path: "/result",
    },
    {
      id: 6,
      name: "ছবিঘর",
      path: "/pictures",
    },
    {
      id: 7,
      name: "যোগাযোগ",
      path: "/contact",
    },
  ];

  return (
    <div className="container">
      <div className=" mt-5 overflow-x-auto no-scrollbar">
        <ul className="flex flex-nowrap gap-3 p-2">
          {menulist.map((item) => (
            <li
              key={item.id}
              className="whitespace-nowrap  shadow text-sm cursor-pointer font-notoSerif"
            >
              <NavLink
                to={item.path}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "text-black px-4 py-2 rounded"
                    : isActive
                    ? " bg-red-500 font-bold text-white px-4 py-2 rounded"
                    : "text-black  bg-gray-100  px-4 py-2 rounded"
                }
              >
                {" "}
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
