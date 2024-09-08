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
import CustomDropdown from "./DropdownComponent";

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
  const chemestryItems = [
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
      <div className="w-full h-[80px] flex items-center flex-row justify-center bg-green-200">
        <Navbar className="w-full px-20">
          <NavbarContent className="flex items-center space-x-4">
            <NavbarItem>
              <Button className="text-2xl font-semibold">Home</Button>
            </NavbarItem>
            <NavbarItem className="relative">
              <CustomDropdown
                title="MICRO-ORGANISMS"
                items={microbiologyItems}
              />
            </NavbarItem>
            <NavbarItem className="relative">
              <CustomDropdown title="BIOLOGY" items={biologyItems} />
            </NavbarItem>
            <NavbarItem className="relative">
              <CustomDropdown title="PHYSICS" items={physicsItems} />
            </NavbarItem>
            <NavbarItem className="relative">
              <CustomDropdown title="CHEMISTRY" items={chemestryItems} />
            </NavbarItem>
            <NavbarItem className="relative">
              <CustomDropdown title="MCQ's" items={mcqItems} />
            </NavbarItem>
          </NavbarContent>
        </Navbar>
      </div>
    </div>
  );
}
