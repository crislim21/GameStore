import React from "react";

const HomeNavbar = () => {
  return (
    <>
      <nav className="bg-blue-500 p-2 mx-72 bg-opacity-80">
        <div className="flex items-center justify-between">
          <ul className="flex space-x-4 mx-5 text-center">
            <li className="text-white mx-5">Top Seller</li>
            <li className="text-white mx-5">Categories</li>
            <li className="text-white mx-5">Wishlist</li>
          </ul>
          {/* Search Bar */}
          <div className="relative text-gray-600">
            <input
              type="search"
              name="search"
              placeholder="Search"
              className="bg-white h-10 px-5 pr-10 text-sm focus:outline-none w-64"
            />
            <button type="submit" className="absolute right-0 top-0 mt-2 mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-gray-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default HomeNavbar;
