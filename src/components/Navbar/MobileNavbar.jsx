import React, { useState } from 'react';
import { FaBars, FaSearch } from 'react-icons/fa';
import Link from 'next/link';

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-between items-center p-4 bg-green-700 text-white">
      {/* Menu Icon */}
      <div onClick={toggleMenu} className="cursor-pointer">
        <FaBars />
      </div>

      {/* Logo */}
      <div className="flex-grow text-center">
        <img src="/logo.png" alt="Logo" className="h-8 mx-auto" /> {/* Adjust the logo path */}
      </div>

      {/* Search Icon */}
      <div className="cursor-pointer">
        <FaSearch />
      </div>

      {/* Menu Links */}
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } md:flex md:items-center md:justify-between md:w-auto w-full`}
      >
        <ul className="flex flex-col md:flex-row md:items-center md:space-x-6 text-white">
          <li>
            <Link href="/micro-organisms" legacyBehavior>
              <a>Micro-Organisms</a>
            </Link>
          </li>
          <li>
            <Link href="/biology" legacyBehavior>
              <a>Biology</a>
            </Link>
          </li>
          <li>
            <Link href="/physics" legacyBehavior>
              <a>Physics</a>
            </Link>
          </li>
          <li>
            <Link href="/chemistry" legacyBehavior>
              <a>Chemistry</a>
            </Link>
          </li>
          <li>
            <Link href="/mcqs" legacyBehavior>
              <a>MCQs</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MobileNavbar;
