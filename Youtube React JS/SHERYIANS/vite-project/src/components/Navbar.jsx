import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-center items-center">
      <nav className="flex justify-center items-center gap-5 w-full h-[10vh] p-3 bg-blue-800">
        <a className="text-white font-bold text-1xl cursor-pointer">Home</a>
        <a className="text-white font-bold text-1xl cursor-pointer">About</a>
        <a className="text-white font-bold text-1xl cursor-pointer">Contact</a>
        <a className="text-white font-bold text-1xl cursor-pointer">Sign Up</a>
        <a className="text-white font-bold text-1xl cursor-pointer">Login</a>
      </nav>
    </div>
  );
};

export default Navbar;
