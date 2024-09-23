"use client";
import React from "react";
import Image from "next/image";
import logo from "../../Assets/logo.png";
import Dropdown from "react-bootstrap/Dropdown";
import Link from "next/link";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

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
          <div className="grid grid-cols-1 md:grid-cols-3 w-full h-[400px] px-4 md:px-[50px] pt-[30px]">
            <div className="flex flex-col gap-[60px]">
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
            <div className="mt-[50px]">
              <div className="mx-auto text-white">
                <h2 className="text-2xl md:text-4xl font-bold mb-4">
                  Popular posts
                </h2>
                <ul className="list-disc pl-[12px] list-inside space-y-2 md:space-y-4">
                  {[
                    "Add Popular Post",
                    "Add Popular Post",
                    "Add Popular Post",
                  ].map((post, index) => (
                    <li key={index} className="text-lg md:text-2xl">
                      {post}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-[50px]">
              <div className="mx-auto text-white">
                <h2 className="text-2xl md:text-4xl font-bold mb-6">
                  Popular Category
                </h2>
                <ul className="list-disc pl-[12px] list-inside space-y-2 md:space-y-4">
                  {[
                    "Add Popular Category",
                    "Add Popular Category",
                    "Add Popular Category",
                  ].map((category, index) => (
                    <li key={index} className="text-lg md:text-2xl">
                      {category}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="flex gap-4 mt-6 justify-end pr-[150px]">
            {/* SVG icons here */}
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

            <div className="flex gap-4 mt-6 justify-end">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="text-white w-[50px] h-[50px]"
                viewBox="0 0 16 16"
                fill="currentColor"
              >
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="text-white w-[50px] h-[50px]"
                viewBox="0 0 16 16"
                fill="currentColor"
              >
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="text-white w-[50px] h-[50px]"
                viewBox="0 0 16 16"
                fill="currentColor"
              >
                <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="text-white w-[50px] h-[50px]"
                viewBox="0 0 16 16"
                fill="currentColor"
              >
                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
              </svg>
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
