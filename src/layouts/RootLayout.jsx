import { useState } from "react";
import { Outlet, NavLink } from "react-router"; // Assuming react-router-dom
import { TfiMenuAlt } from "react-icons/tfi";
import { FaRegHeart, FaRegUser } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import {
  IoHomeOutline,
  IoInformationCircleOutline,
  IoCallOutline,
  IoCubeOutline
} from "react-icons/io5";
import { IoIosCloseCircle } from "react-icons/io";
import { Link } from "react-router"; // Assuming react-router-dom

function RootLayout() {
  // 1. Manage sidebar open/close state (Default to false so it starts hidden)
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div>

        {/* Header */}
        <div className="max-w-7xl mx-auto flex justify-between p-5">
          <div className="flex gap-x-5 items-center">
            {/* Added onClick to open the sidebar */}
            <div
              className="cursor-pointer"
              onClick={() => setIsOpen(true)}
            >
              <TfiMenuAlt className="size-5 md:hidden text-black hover:text-amber-500 hover:underline" />
            </div>
            <div className="text-xl">KH</div>
          </div>

          <div className="hidden md:block">
            <nav className="flex gap-x-5 items-center">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-amber-500 underline"
                    : "text-black hover:text-amber-500 hover:underline"
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/product"
                className={({ isActive }) =>
                  isActive
                    ? "text-amber-500 underline"
                    : "text-black hover:text-amber-500 hover:underline"
                }
              >
                Product
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "text-amber-500 underline"
                    : "text-black hover:text-amber-500 hover:underline"
                }
              >
                Contact
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "text-amber-500 underline"
                    : "text-black hover:text-amber-500 hover:underline"
                }
              >
                About
              </NavLink>
            </nav>
          </div>
          <div className="flex gap-x-5 items-center">
            <div className="hover:text-amber-500 cursor-pointer">
              <FaRegHeart />
            </div>
            <div className="hover:text-amber-500 cursor-pointer">
              <FaRegUser />
            </div>
            <div className="hover:text-amber-500 cursor-pointer">
              <FiShoppingBag />
            </div>
          </div>
        </div>

        {/* 2. Dynamic class toggling with smooth transition */}
        <div
          className={`bg-slate-800/80 w-full h-screen fixed top-0 flex z-50 transition-all duration-300 ${isOpen ? "left-0" : "-left-full"
            }`}
        >
          {/* // todo Sidebar */}
          <div className="bg-green-500 w-80 p-5 flex">
            <div className="bg-blue-400 w-full h-full flex flex-col gap-y-2 p-4 rounded">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block p-3 rounded cursor-pointer transition-colors duration-200
                ${isActive
                    ? "bg-slate-700 text-amber-500 underline"
                    : "text-white hover:bg-slate-700 hover:text-amber-500 hover:underline"
                  }`
                }
              >
                <div className="flex items-center gap-x-5">
                  <IoHomeOutline className="text-2xl" />
                  <p>Home</p>
                </div>
              </NavLink>

              <NavLink
                to="/product"
                className={({ isActive }) =>
                  `block p-3 rounded cursor-pointer transition-colors duration-200
                ${isActive
                    ? "bg-slate-700 text-amber-500 underline"
                    : "text-white hover:bg-slate-700 hover:text-amber-500 hover:underline"
                  }`
                }
              >
                <div className="flex items-center gap-x-5">
                  <IoCubeOutline className="text-2xl" />
                  <p>Product</p>
                </div>
              </NavLink>

              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `block p-3 rounded cursor-pointer transition-colors duration-200
                ${isActive
                    ? "bg-slate-700 text-amber-500 underline"
                    : "text-white hover:bg-slate-700 hover:text-amber-500 hover:underline"
                  }`
                }
              >
                <div className="flex items-center gap-x-5">
                  <IoCallOutline className="text-2xl" />
                  <p>Contact</p>
                </div>
              </NavLink>

              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `block p-3 rounded cursor-pointer transition-colors duration-200
                ${isActive
                    ? "bg-slate-700 text-amber-500 underline"
                    : "text-white hover:bg-slate-700 hover:text-amber-500 hover:underline"
                  }`
                }
              >
                <div className="flex items-center gap-x-5">
                  <IoInformationCircleOutline className="text-2xl" />
                  <p>About</p>
                </div>
              </NavLink>

              {/* 3. Close button triggers setIsOpen(false) */}
              <button
                onClick={() => setIsOpen(false)}
                className="block w-full text-left p-3 rounded cursor-pointer mt-auto transition-colors duration-200 text-white hover:bg-red-500 hover:text-white"
              >
                <div className="flex items-center gap-x-5">
                  <IoIosCloseCircle className="text-2xl" />
                  <p>Close</p>
                </div>
              </button>
            </div>
          </div>

          {/* 4. Clicking the backdrop also triggers setIsOpen(false) */}
          <div
            className="bg-black/50 flex-1 flex justify-center items-center text-white text-2xl font-bold cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            (Click Here to close Sidebar)
          </div>
        </div>

        <Outlet />
        {/* // todo: Footer Section */}
        <div className="bg-black text-white py-6 w-full">
          <div className="max-w-7xl mx-auto px-5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm md:text-base">

            {/* Copyright Text */}
            <p className="text-center md:text-left">
              Copyright &copy; 2026 CHOUY CHEAY PRINTING & PHOTOGRAPHY
            </p>

            {/* Navigation Links */}
            <nav className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2">
              <Link to="/" className="hover:text-amber-500 transition-colors">
                Home
              </Link>
              <Link to="/contact" className="hover:text-amber-500 transition-colors">
                Contact Us
              </Link>
              <Link to="/about" className="hover:text-amber-500 transition-colors">
                About Us
              </Link>
              <Link to="/terms" className="hover:text-amber-500 transition-colors">
                Term and Conditional
              </Link>
            </nav>

          </div>
        </div>
      </div>
    </>
  );
}

export default RootLayout;