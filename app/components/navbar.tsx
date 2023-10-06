import Link from "next/link";
import React from "react";

interface NavbarProps {
  links: { name: string; url: string }[];
}

const Navbar = () => {
  return (
    <nav className="bg-slate-700 p-4 text-white">
      <div className="mx-auto flex justify-between">
        <ul className="flex space-x-4">
          <li>
            <Link href="#" className="text-white text-xl font-bold pr-5">
              Game Store
            </Link>
          </li>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/browse">Browse</Link>
          </li>
          <li>
            <Link href="/library">Library</Link>
          </li>
          <li>
            <Link href="/history">History</Link>
          </li>
        </ul>

        <div className="flex space-x-4">
          <Link href="/cart">My Cart</Link>
          <Link href="/login">Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
