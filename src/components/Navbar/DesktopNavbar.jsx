import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  link,
} from "@nextui-org/react";
import Image from "next/image";
import logo from "../assets/logo.png";
import SearchIcon from "@mui/icons-material/Search";

export default function App() {
  return (
    <div className="bg-green-600 h-[120px] flex justify-center">
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
            <Button>
              <SearchIcon className="text-white text-5xl" />
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </div>
  );
}
