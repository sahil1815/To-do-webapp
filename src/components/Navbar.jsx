import React, { useState } from "react";
import threeDot from "../assets/threeDot.png";

const Navbar = ({ deleteAll, setFilter }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar w-full max-w-screen-md md:mt-5 md:rounded-t-md flex px-5 items-center h-20 justify-between relative">
      <div className="logo text-xl font-bold hover:cursor-pointer">iTask</div>
      <div className="name font-semibold text-lg">Todo List</div>

      <div className="threedot w-8 relative">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          <img src={threeDot} alt="Options" className="cursor-pointer" />
        </button>

        {menuOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-blue-300 text-white rounded shadow-lg z-50">
            <ul className="text-sm text-black font-semibold">
              <li
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  setMenuOpen(false);
                  setFilter("all");
                }}
              >
                Show All
              </li>
              <li
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  setMenuOpen(false);
                  setFilter("finished");
                }}
              >
                Show Finished Tasks
              </li>
              <li
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  setMenuOpen(false);
                  setFilter("unfinished");
                }}
              >
                Show Unfinished Tasks
              </li>
              <li
                className="px-4 py-2 text-red-600 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  if (
                    window.confirm("Are you sure you want to delete all tasks?")
                  ) {
                    setMenuOpen(false);
                    deleteAll();
                  }
                }}
              >
                Delete All
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
