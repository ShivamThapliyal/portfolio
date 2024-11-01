import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../../assets/Images/assets";

function Navbar() {
  return (
    <div className="bg-black sticky top-0 max-w-full text-[#e5e5e5] flex  justify-between items-center py-5 px-[5%]">
      <div class="flex  items-center gap-10  ">
        <img src={assets.shivam_logo} alt="" class="w-[150px]" />
        <ul class="flex gap-[100px] list-none text-[18px] cursor-pointer ml-6">
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                `${isActive ? "text-orange-500" : ""}`
              }
            >
              About Me
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/Skills"}
              className={({ isActive }) =>
                `${isActive ? "text-orange-500" : ""}`
              }
            >
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/Projects"}
              className={({ isActive }) =>
                `${isActive ? "text-orange-500" : ""}`
              }
            >
              Project
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/Contact"}
              className={({ isActive }) =>
                `${isActive ? "text-orange-500" : ""}`
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div>Close icon</div>
    </div>
  );
}

export default Navbar;
