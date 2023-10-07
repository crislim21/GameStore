import Link from "next/link";
import React from "react";

const LRNavbar = () => {
  return (
    <nav className="py-4 text-dark mx-72">
      <div className="mx-auto flex justify-between items-center">
        <ul className="flex items-center space-x-8">
          {/* Adjust spacing */}
          <li>
            <Link href="#" className="text-xl font-bold pr-8">
              Game <span className="text-blue-500">Store</span>
            </Link>
          </li>
          {/* Add the search bar with search icon */}
          <li className="relative">
            <div className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
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
                className="w-96 pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
          </li>
          <li>
            <Link href="/store">Store</Link>
          </li>
          <li>
            <Link href="/library">Library</Link>
          </li>
          <li>
            <Link href="/profile">Profile</Link>
          </li>
        </ul>

        <div className="flex space-x-4 items-center">
          <Link href="/cart">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </Link>
          <span>|</span>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
            <Link href="/register">Register</Link>
          </button>
          <button className="text-blue-500 px-4 py-2 font-bold">
            <Link href="/login">Login</Link>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default LRNavbar;