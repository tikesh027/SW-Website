import React, { useState } from 'react';
import { FaBars, FaSearch, FaTimes, FaChevronDown } from 'react-icons/fa';
import Link from 'next/link';

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setDropdownOpen(null);
  };

  const toggleDropdown = (index) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
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
            <div className="w-full">
              <div
                onClick={() => toggleDropdown(0)}
                className="flex items-center justify-between cursor-pointer"
              >
                <span>Micro-Organisms</span>
                <FaChevronDown />
              </div>
              {dropdownOpen === 0 && (
                <ul className="ml-4 mt-2 space-y-2">
                  <li>
                    <Link href="/micro-organisms/bacteria" legacyBehavior>
                      <a onClick={closeMenu}>Bacteria</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/micro-organisms/viruses" legacyBehavior>
                      <a onClick={closeMenu}>Viruses</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/micro-organisms/fungi" legacyBehavior>
                      <a onClick={closeMenu}>Fungi</a>
                    </Link>
                  </li>
                </ul>
              )}
            </div>
          </li>


          <li>
            <div className="w-full">
              <div
                onClick={() => toggleDropdown(1)}
                className="flex items-center justify-between cursor-pointer"
              >
                <span>Biology</span>
                <FaChevronDown />
              </div>
              {dropdownOpen === 1 && (
                <ul className="ml-4 mt-2 space-y-2">
                  <li>
                    <Link href="/biology/cell-biology" legacyBehavior>
                      <a onClick={closeMenu}>Cell Biology</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/biology/genetics" legacyBehavior>
                      <a onClick={closeMenu}>Genetics</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/biology/ecology" legacyBehavior>
                      <a onClick={closeMenu}>Ecology</a>
                    </Link>
                  </li>
                </ul>
              )}
            </div>
          </li>


          <li>
            <div className="w-full">
              <div
                onClick={() => toggleDropdown(2)}
                className="flex items-center justify-between cursor-pointer"
              >
                <span>Physics</span>
                <FaChevronDown />
              </div>
              {dropdownOpen === 2 && (
                <ul className="ml-4 mt-2 space-y-2">
                  <li>
                    <Link href="/physics/optics" legacyBehavior>
                      <a onClick={closeMenu}>Optics</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/physics/thermodynamics" legacyBehavior>
                      <a onClick={closeMenu}>Thermodynamics</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/physics/electromagnetism" legacyBehavior>
                      <a onClick={closeMenu}>Electromagnetism</a>
                    </Link>
                  </li>
                </ul>
              )}
            </div>
          </li>


          <li>
            <div className="w-full">
              <div
                onClick={() => toggleDropdown(3)}
                className="flex items-center justify-between cursor-pointer"
              >
                <span>Chemistry</span>
                <FaChevronDown />
              </div>
              {dropdownOpen === 3 && (
                <ul className="ml-4 mt-2 space-y-2">
                  <li>
                    <Link href="/chemistry/organic" legacyBehavior>
                      <a onClick={closeMenu}>Organic Chemistry</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/chemistry/inorganic" legacyBehavior>
                      <a onClick={closeMenu}>Inorganic Chemistry</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/chemistry/physical" legacyBehavior>
                      <a onClick={closeMenu}>Physical Chemistry</a>
                    </Link>
                  </li>
                </ul>
              )}
            </div>
          </li>


          <li>
            <div className="w-full">
              <div
                onClick={() => toggleDropdown(4)}
                className="flex items-center justify-between cursor-pointer"
              >
                <span>MCQs</span>
                <FaChevronDown />
              </div>
              {dropdownOpen === 4 && (
                <ul className="ml-4 mt-2 space-y-2">
                  <li>
                    <Link href="/mcqs/physics" legacyBehavior>
                      <a onClick={closeMenu}>Physics MCQs</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/mcqs/chemistry" legacyBehavior>
                      <a onClick={closeMenu}>Chemistry MCQs</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/mcqs/biology" legacyBehavior>
                      <a onClick={closeMenu}>Biology MCQs</a>
                    </Link>
                  </li>
                </ul>
              )}
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MobileNavbar;
