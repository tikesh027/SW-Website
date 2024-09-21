import React, { useState } from "react";
import { FaBars, FaSearch, FaTimes } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../Assets/logo.png";

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
      <div className="flex justify-around items-center w-full">
        <div className="md:hidden" onClick={toggleMenu}>
          <FaBars className="cursor-pointer" />
        </div>

        <div className="flex-grow text-center flex justify-center">
          <Link href="/" legacyBehavior>
            <a>
              <Image src={Logo} alt="Logo" className="w-10 h-10" />
            </a>
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <FaSearch className="cursor-pointer" />
        </div>
      </div>
      <div
        className={`transform top-0 left-0 h-screen w-full bg-green-700 fixed z-40 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4">
          <FaTimes className="cursor-pointer text-white" onClick={closeMenu} />
        </div>
        <ul className="flex flex-col items-start space-y-4 p-4">
          <li className="w-full">
            <div
              onClick={() => toggleDropdown(0)}
              className="flex items-center justify-between cursor-pointer w-full"
            >
              <span>Micro-Organisms</span>
              <span>{dropdownOpen === 0 ? "-" : "+"}</span>
            </div>
            {dropdownOpen === 0 && (
              <ul className="pl-4 mt-2 space-y-2">
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
          </li>

          <li className="w-full">
            <div
              onClick={() => toggleDropdown(1)}
              className="flex items-center justify-between cursor-pointer w-full"
            >
              <span>Biology</span>
              <span>{dropdownOpen === 1 ? "-" : "+"}</span>
            </div>
            {dropdownOpen === 1 && (
              <ul className="pl-4 mt-2 space-y-2">
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
          </li>

          <li className="w-full">
            <div
              onClick={() => toggleDropdown(2)}
              className="flex items-center justify-between cursor-pointer w-full"
            >
              <span>Physics</span>
              <span>{dropdownOpen === 2 ? "-" : "+"}</span>
            </div>
            {dropdownOpen === 2 && (
              <ul className="pl-4 mt-2 space-y-2">
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
          </li>

          <li className="w-full">
            <div
              onClick={() => toggleDropdown(3)}
              className="flex items-center justify-between cursor-pointer w-full"
            >
              <span>Chemistry</span>
              <span>{dropdownOpen === 3 ? "-" : "+"}</span>
            </div>
            {dropdownOpen === 3 && (
              <ul className="pl-4 mt-2 space-y-2">
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
          </li>

          <li className="w-full">
            <div
              onClick={() => toggleDropdown(4)}
              className="flex items-center justify-between cursor-pointer w-full"
            >
              <span>MCQs</span>
              <span>{dropdownOpen === 4 ? "-" : "+"}</span>
            </div>
            {dropdownOpen === 4 && (
              <ul className="pl-4 mt-2 space-y-2">
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
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MobileNavbar;
