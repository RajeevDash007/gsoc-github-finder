"use client";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-gray-100 bg-white/80 py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg">
      <div className="px-4 flex justify-between items-center">
        <div className="flex-shrink-0">
          <a aria-current="page" className="flex items-center" href="/">
            <p className="text-indigo-700 font-extrabold text-3xl">
              <span className="text-yellow-600">G</span>GF
            </p>
          </a>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="inline-flex items-center justify-center rounded-md bg-blue-600 p-2 text-white focus:outline-none focus:ring focus:ring-blue-300"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
        <nav
          className={`md:flex md:items-center md:justify-center md:gap-5 lg:justify-center ${
            isOpen ? "block" : "hidden"
          }`}
        >
          {/* <a aria-current="page" className="block md:inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900" href="#">How it works</a>
                    <a className="block md:inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900" href="#">Pricing</a> */}
          <a
            className="block md:inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
            href="/login"
          >
            Sign in
          </a>
          <a
            className="block md:inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-200 transition-all duration-200 hover:bg-blue-600 hover:text-gray-100 bg-blue-500"
            href="/login"
          >
            Login
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
