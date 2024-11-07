import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../../assets/Images/assets";

function Navbar() {
  const [change, setchange] = useState(true);
  return (
    <div className=" bg-black sticky max-w-full text-[#e5e5e5] flex  sm:bg-black sticky top-0 max-w-full text-[#e5e5e5] flex  justify-between items-center py-5 px-[5%]">
      <div class="ml-[30px] sm:flex  items-center gap-10  ">
        <img src={assets.shivam_logo} alt="" class="w-[150px]" />
        <ul class="hidden sm:flex gap-[100px] list-none text-[18px] cursor-pointer ml-6 ">
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                `${isActive ? "text-orange-500" : ""}`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/About"}
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
      <div>
        {change ? (
          <div className=" sm:hidden">
            <img
              onClick={() => {
                setchange(false);
              }}
              src={assets.menu_bar}
              alt=""
              className="w-[30px] filter invert brightness-50"
            />
          </div>
        ) : (
          <div className="flex items-center justify-center p-4 ">
            <div className="absolute top-[38%] left bg-white p-7 mr-52 z-10 w-44 rounded-xl bg-opacity-80">
              <ul className="flex flex-col gap-3 p-4 text-lg text-center text-gray-500">
                <li>
                  <NavLink
                    to={"/"}
                    className={({ isActive }) =>
                      `${isActive ? "text-orange-500" : ""}`
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/About"}
                    className={({ isActive }) =>
                      `${isActive ? "text-orange-500" : ""}`
                    }
                  >
                    About
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
            <div className="relative">
              <img
                onClick={() => {
                  setchange(true);
                }}
                src={assets.x_button}
                alt="Close"
                className="w-[20px] cursor-pointer z-20"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
