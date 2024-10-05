"use client";
import React from "react";
import Image from "next/image";
import logo from "../../Assets/logo.png";
import Dropdown from "react-bootstrap/Dropdown";
import Link from "next/link";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FaInstagram, FaFacebook, FaYoutube, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  // Common classes for dropdown items
  const dropdownItemClasses =
    "text-[18px] mt-1 hover:bg-green-500 focus:bg-green-500";

  // Common classes for dropdown toggle buttons
  const dropdownToggleClasses =
    "w-[250px] bg-green-400 hover:bg-green-600 focus:bg-green-500 text-center";

  const pages = [
    { name: "About Us", path: "/pages/aboutus" },
    { name: "Contact Us", path: "/pages/contactus" },
    { name: "Private Policy", path: "/pages/privacypolicy" },
    { name: "Site Map", path: "/pages/sitemap" },
    { name: "Home", path: "/" },
  ];

  return (
    <div>
      {/* Desktop Footer */}
      <div className="hidden lg:block">
        <div className="w-full h-[18px] bg-white border-t-4 border-black"></div>
        <div className="bg-[#061a03] h-[550px]">
          <div className="grid grid-cols-1 md:grid-cols-3 w-full h-[400px] px-4 md:px-[80px] pt-[30px] mx-auto">
            <div className="flex flex-col gap-[60px] items-center">
              <Image
                src={logo}
                width="100"
                height="100"
                className="w-[100px] h-[100px]"
                alt="Logo"
              />
              <div className="mt-18 flex flex-col gap-[50px]">
                {["Archive"].map((title, i) => (
                  <div className="w-fit" key={i}>
                    <Dropdown>
                      <Dropdown.Toggle
                        variant=""
                        id={`dropdown-${title.toLowerCase()}`}
                        className={dropdownToggleClasses}
                      >
                        {title}
                      </Dropdown.Toggle>

                      <Dropdown.Menu className="bg-green-400 w-full">
                        {["Category 1", "Category 2", "Category 3"].map(
                          (item, index) => (
                            <Dropdown.Item
                              href={`#/action-${index + 1}`}
                              key={index}
                              className={dropdownItemClasses}
                            >
                              {item}
                            </Dropdown.Item>
                          )
                        )}
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                ))}
                <div>
                  <div className="flex">
                    <Dropdown>
                      <Dropdown.Toggle
                        variant=""
                        id="dropdown-pages"
                        className={dropdownToggleClasses}
                      >
                        Pages
                      </Dropdown.Toggle>
                      <Dropdown.Menu className="bg-green-400 w-full">
                        {pages.map((page, index) => (
                          <Dropdown.Item
                            key={index}
                            className={dropdownItemClasses}
                          >
                            <Link href={page.path} passHref>
                              {page.name}
                            </Link>
                          </Dropdown.Item>
                        ))}
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-[50px] flex flex-col items-center">
              <div className="mx-auto text-white">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Popular posts
                </h2>
                <ul className="list-disc pl-[12px] list-inside space-y-2 md:space-y-4">
                  {[
                    "Add Popular Post",
                    "Add Popular Post",
                    "Add Popular Post",
                  ].map((post, index) => (
                    <li key={index} className="text-lg md:text-xl">
                      {post}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-[50px] flex flex-col items-center">
              <div className="mx-auto text-white">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                  Popular Category
                </h2>
                <ul className="list-disc pl-[12px] list-inside space-y-2 md:space-y-4">
                  {[
                    "Add Popular Category",
                    "Add Popular Category",
                    "Add Popular Category",
                  ].map((category, index) => (
                    <li key={index} className="text-lg md:text-xl">
                      {category}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Add icons for the desktop version here */}
          <div className="flex gap-4 mt-6 justify-end pr-[150px]">
            <FaInstagram className="text-white w-[50px] h-[50px]" />
            <FaFacebook className="text-white w-[50px] h-[50px]" />
            <FaYoutube className="text-white w-[50px] h-[50px]" />
            <FaWhatsapp className="text-white w-[50px] h-[50px]" />
          </div>

          <div className="flex justify-center mt-8">
            <h2 className="text-white text-sm md:text-2xl">
              Copyright @2024 - SCIENCE’S World
            </h2>
          </div>
        </div>
      </div>

      {/* Mobile Footer */}
      <div className="block lg:hidden">
        <div className="w-full bg-[#061a03]">
          <div className="border-t-4 border-black h-[18px]"></div>
          <div className="flex flex-col items-center py-6 px-4">
            <Form className="flex flex-col items-center mb-6 w-full max-w-[400px]">
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Control
                  type="email"
                  placeholder="Enter Your Email"
                  className="w-full"
                />
              </Form.Group>
              <Button
                variant=""
                type="submit"
                className="bg-[#061a03] text-white text-lg sm:text-xl font-semibold w-full max-w-[150px]"
              >
                Sign up
              </Button>
            </Form>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-[1200px] items-center">
              <div className="flex justify-center">
                <Dropdown>
                  <Dropdown.Toggle
                    variant=""
                    id="dropdown-categories"
                    className={dropdownToggleClasses}
                  >
                    Archive
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="bg-green-400 w-full">
                    {["Category 1", "Category 2", "Category 3"].map(
                      (category, index) => (
                        <Dropdown.Item
                          href={`#/action-${index + 1}`}
                          key={index}
                          className={dropdownItemClasses}
                        >
                          {category}
                        </Dropdown.Item>
                      )
                    )}
                  </Dropdown.Menu>
                </Dropdown>
              </div>

              <div className="flex justify-center">
                <Image src={logo} width="100" height="100" alt="Logo" />
              </div>

              <div className="flex justify-center">
                <Dropdown>
                  <Dropdown.Toggle
                    variant=""
                    id="dropdown-pages"
                    className={dropdownToggleClasses}
                  >
                    Pages
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="bg-green-400 w-full">
                    {pages.map((page, index) => (
                      <Dropdown.Item
                        key={index}
                        className={dropdownItemClasses}
                      >
                        <Link href={page.path} passHref>
                          {page.name}
                        </Link>
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>

            {/* Icons for the mobile version */}
            <div className="flex gap-4 mt-6 justify-end">
              <FaInstagram className="text-white w-[50px] h-[50px]" />
              <FaFacebook className="text-white w-[50px] h-[50px]" />
              <FaYoutube className="text-white w-[50px] h-[50px]" />
              <FaWhatsapp className="text-white w-[50px] h-[50px]" />
            </div>

            <div className="flex flex-col items-center mt-5 gap-3">
              <h1 className="text-white text-2xl sm:text-3xl md:text-5xl">
                Subscribe for more
              </h1>
              <Button
                className="bg-[#faefe6] text-orange-500 text-lg sm:text-2xl md:text-5xl border-none focus:bg-orange-700 hover:bg-orange-700"
                style={{ borderRadius: "20px 20px 20px 0px" }}
              >
                <Link href="/pages/subscription">Subscribe</Link>
              </Button>
            </div>
            <div className="flex justify-center mt-8">
              <h2 className="text-white text-sm md:text-2xl">
                Copyright @2024 - SCIENCE’S World
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
