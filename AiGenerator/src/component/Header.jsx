import React from "react";
import { FaSearch } from "react-icons/fa";

const Header = () => (
  <header className="w-full bg-white shadow px-6 py-3 flex items-center justify-between">
    {/* Left: Logo + Search */}
    <div className="flex items-center space-x-4">
      {/* Logo */}
      <div className="flex items-center space-x-1">
        <img src="..\src\assets\logo.PNG" alt="Cheffify logo" className="w-5 h-5" />
        <span className="text-pink-600 font-bold text-xl">Cheffify</span>
      </div>

      {/* Search box */}
      <div className="relative">
        <input
          type="text"
          placeholder="What would you like to cook?"
          className="pl-10 pr-4 py-1.5 border border-gray-300 rounded-full text-sm w-64 focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
        <FaSearch className="absolute top-2 left-3 text-gray-400 text-sm" />
      </div>
    </div>

    {/* Center: Navigation */}
    <nav className="flex items-center space-x-6 text-sm text-gray-700 font-medium">
      <a href="#" className="hover:text-pink-600">What to cook</a>
      <a href="#" className="hover:text-pink-600">Recipes</a>
      <a href="#" className="hover:text-pink-600">Ingredients</a>
      <a href="#" className="hover:text-pink-600">Occasions</a>
      <a href="#" className="hover:text-pink-600">About Us</a>
    </nav>

    {/* Right: Buttons */}
    <div className="flex items-center space-x-2">
      <button className="px-4 py-1 border border-pink-500 text-pink-500 rounded-full hover:bg-pink-50">
        Login
      </button>
      <button className="px-4 py-1 bg-pink-500 text-white rounded-full hover:bg-pink-600">
        Subscribe
      </button>
    </div>
  </header>
);

export default Header;
