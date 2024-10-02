"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
} from "@nextui-org/react";
import Image from "next/image";
import logo from "../../Assets/logo.png";
import { FaSearch } from "react-icons/fa";
import "../../../app/globals.css";
import DropdownComponent from "./DropdownComponent";
import Link from "next/link";

export default function App() {
  const microbiologyItems = [
    { label: "Bacteria", href: "" },
    { label: "Viruses", href: "" },
    { label: "Fungi", href: "" },
  ];
  const biologyItems = [
    { label: "Cell Biology", href: "" },
    { label: "Genetics", href: "" },
    { label: "Ecology", href: "" },
  ];
  const physicsItems = [
    { label: "Optics", href: "" },
    { label: "Thermodynamics", href: "" },
    { label: "Electromagnetism", href: "" },
  ];
  const chemistryItems = [
    { label: "Organic Chemistry", href: "" },
    { label: "Inorganic Chemistry", href: "" },
    { label: "Physical Chemistry", href: "" },
  ];
  const mcqItems = [
    { label: "Physics MCQs", href: "" },
    { label: "Chemistry MCQs", href: "" },
    { label: "Biology MCQs", href: "" },
  ];

  return (
    <div className="bg-green-600 h-auto flex flex-col">
      <div className="flex h-auto justify-center items-center">
        <Navbar className="w-full px-4 md:px-10">
          <NavbarBrand>
            <Link href="/">
              <Image src={logo} alt="Logo" className="w-[80px] h-[80px] p-2" />
            </Link>
          </NavbarBrand>
          <NavbarContent className="flex justify-end gap-4">
            <NavbarItem>
              <Button as={Link} href="#" className="text-xl text-white">
                <Link href="/pages/signin">Sign In</Link>
              </Button>
            </NavbarItem>
            <NavbarItem>
              <Button className="bg-[#D1B000] text-black px-5 py-2 text-xl rounded-xl">
                <Link href="/pages/subscription">Subscribe</Link>
              </Button>
            </NavbarItem>
            <NavbarItem>
              <Button className="px-2">
                <FaSearch className="text-white text-3xl" />
              </Button>
            </NavbarItem>
          </NavbarContent>
        </Navbar>
      </div>
      <div className="flex gap-2 bg-green-200 h-auto justify-start items-center px-4 md:px-10 flex-wrap">
        <div className="text-2xl font-semibold p-0">
          <Link href="/">
            <Button className="whitespace-nowrap">Home</Button>
          </Link>
        </div>
        <DropdownComponent title="MICRO-ORGANISMS" items={microbiologyItems} />
        <DropdownComponent title="BIOLOGY" items={biologyItems} />
        <DropdownComponent title="PHYSICS" items={physicsItems} />
        <DropdownComponent title="CHEMISTRY" items={chemistryItems} />
        <DropdownComponent title="MCQs" items={mcqItems} />
      </div>
    </div>
  );
}
