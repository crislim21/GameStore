import Link from "next/link";
import React from "react";

const HomeNavbar = () => {
  return (
    <>
      <nav className="bg-blue-500 p-2 mx-72 bg-opacity-80">
        <div className="flex items-center justify-between mx-auto">
          <ul className="flex space-x-8 mx-5 text-center text-white">
            <li>
              <Link href="#">Categories</Link>
            </li>
            <li>
              <Link href="#">Wishlist</Link>
            </li>
          </ul>

          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search for games"
              className="w-80 pl-5 pr-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>
      </nav>
    </>
  );
};

export default HomeNavbar;
