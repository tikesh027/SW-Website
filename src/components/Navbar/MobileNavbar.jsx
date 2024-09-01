import React, { useState } from 'react';
import { FaBars, FaSearch, FaTimes } from 'react-icons/fa';
import Link from 'next/link';

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="flex justify-between items-center p-4 bg-green-700 text-white fixed top-0 left-0 w-full z-50">

      <div className="md:hidden" onClick={toggleMenu}>
        <FaBars className="cursor-pointer" />
      </div>


      <div className="flex-grow text-center">
        <Link href="/" legacyBehavior>
          <a>
            <img src="/logo.png" alt="Logo" className="h-8 mx-auto" />
          </a>
        </Link>
      </div>


      <div className="flex items-center space-x-4">
        <FaSearch className="cursor-pointer" />
      </div>


      <div
        className={`transform top-0 left-0 h-screen w-full bg-green-700 fixed z-40 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
      >
        <div className="flex justify-between items-center p-4">

          <FaTimes className="cursor-pointer text-white" onClick={closeMenu} />
        </div>
        <ul className="flex flex-col items-center space-y-4 p-4">
          <li>
            <Link href="/micro-organisms" legacyBehavior>
              <a onClick={closeMenu}>Micro-Organisms</a>
            </Link>
          </li>
          <li>
            <Link href="/biology" legacyBehavior>
              <a onClick={closeMenu}>Biology</a>
            </Link>
          </li>
          <li>
            <Link href="/physics" legacyBehavior>
              <a onClick={closeMenu}>Physics</a>
            </Link>
          </li>
          <li>
            <Link href="/chemistry" legacyBehavior>
              <a onClick={closeMenu}>Chemistry</a>
            </Link>
          </li>
          <li>
            <Link href="/mcqs" legacyBehavior>
              <a onClick={closeMenu}>MCQs</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MobileNavbar;
