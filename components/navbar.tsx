"use client";

import Link from 'next/link';
import { ModeToggle } from './mode-toggle';
import { FaHandshake } from 'react-icons/fa';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="p-4 flex justify-between items-center">
      <div className="text-2xl font-bold">
        ISMAIL
      </div>

      <div className="lg:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Menu items */}
      <ul className={`flex-col lg:flex-row flex lg:space-x-8 space-y-4 lg:space-y-0 lg:items-center lg:static absolute top-full left-0 w-full lg:w-auto  lg:bg-transparent z-10 transition-transform duration-300 ease-in-out transform ${menuOpen ? 'translate-y-0' : '-translate-y-full lg:translate-y-0'}`}>
        <li className="text-center lg:text-left">
          <Link href="/">
            <p className="hover:text-orange-500">Home</p>
          </Link>
        </li>
        <li className="text-center lg:text-left">
          <Link href="/about">
            <p className="hover:text-orange-400">About</p>
          </Link>
        </li>
        <li className="text-center lg:text-left">
          <Link href="/service">
            <p className="hover:text-orange-400">Service</p>
          </Link>
        </li>
        <li className="text-center lg:text-left">
          <Link href="/projects">
            <p className="hover:text-orange-400">Works</p>
          </Link>
        </li>
        <li className="text-center lg:text-left">
          <Link href="/contact">
            <p className="hover:text-orange-400">Contact</p>
          </Link>
        </li>
        <li className="lg:hidden text-center">
          <ModeToggle />
        </li>
        <li className="text-center lg:hidden">
          <button className="bg-transparent border py-2 px-4 rounded-full flex items-center justify-center space-x-2 hover:bg-orange-400 mx-auto">
            <span>Hire Me</span>
            <FaHandshake />
          </button>
        </li>
      </ul>

      {/* Mode toggle and hire me button for desktop */}
      <div className="hidden lg:flex items-center space-x-4">
        <ModeToggle />
        <button className="bg-transparent border py-2 px-4 rounded-full flex items-center space-x-2 hover:bg-orange-400">
          <span>Hire Me</span>
          <FaHandshake />
        </button>
      </div>
    </nav>
  );
}
