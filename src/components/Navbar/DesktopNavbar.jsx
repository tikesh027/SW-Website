import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import Image from "next/image";
import logo from "../assets/logo.png";
import { FaSearch } from "react-icons/fa";
import "../../app/globals.css";
import DropdownComponent from "./DropdownComponent";

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
    <div className="bg-green-600 h-[200px] flex flex-col">
      <div className="flex h-[120px] justify-center items-center">
        <Navbar className="px-10">
          <NavbarBrand>
            <Image src={logo} className="w-[80px] h-[80px] p-2" />
          </NavbarBrand>
          <NavbarContent className="flex justify-end gap-4">
            <NavbarItem>
              <Button as={Link} href="#" className="text-xl text-white">
                SIGN IN
              </Button>
            </NavbarItem>
            <NavbarItem>
              <Button className="bg-[#D1B000] text-black px-5 py-2 text-xl rounded-xl">
                Subscribe
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
      <div className="flex gap-2 bg-green-200 h-[90px] justify-start items-center pl-10">
        <div className="text-2xl font-semibold p-0">
          <Button>Home</Button>
        </div>
        <DropdownComponent title="MICRO-ORGANISMS" items={microbiologyItems} />
        <DropdownComponent title="BIOLOGY" items={biologyItems} />
        <DropdownComponent title="PHYSICS" items={physicsItems} />
        <DropdownComponent title="CHEMESTRY" items={chemistryItems} />
        <DropdownComponent title="MCQs" items={mcqItems} />
      </div>
    </div>
  );
}
