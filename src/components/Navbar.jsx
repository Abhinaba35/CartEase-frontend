import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="py-4 px-8 flex justify-between items-center bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-400 shadow-lg sticky top-0 z-50">
      <div className="font-bold text-2xl tracking-wide text-blue-900 drop-shadow-lg select-none">
        <span className="bg-blue-900 text-white px-3 py-2 rounded-lg shadow-md">
          CartEase..
        </span>
      </div>
      <div className="flex gap-2 items-center">
        <input
          className="border border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 py-1 px-3 rounded-md outline-none transition-all duration-200 bg-white text-blue-900 placeholder:text-blue-400 shadow-sm"
          placeholder="Search..."
        />
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-1 px-4 rounded-md shadow-md transition-all duration-200">
          Search
        </button>
      </div>
      <div className="flex gap-4 items-center">
        <Link
          to="/profile"
          className="hover:text-blue-700 font-medium px-3 py-1 rounded transition-colors duration-200 hover:bg-white/70"
        >
          Profile
        </Link>
        <Link
          to="/signup"
          className="hover:text-blue-700 font-medium px-3 py-1 rounded transition-colors duration-200 hover:bg-white/70 border border-blue-700"
        >
          Signup
        </Link>
      </div>
    </nav>
  );
};

export { Navbar };
