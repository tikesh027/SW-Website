"use client";
import Image from "next/image";
import React from "react";
import Pencil from "../../../Assets/pencil.png";
import { Button, Input } from "@nextui-org/react";
import Dropdown from "react-bootstrap/Dropdown";

const RightSidebar = () => {
  return (
    <div className="w-full max-w-[450px] mx-auto">
      {/* Center the sidebar */}
      <div className="bg-green-200 w-full h-[300px] flex flex-col justify-evenly items-center p-4">
        <div className="flex items-center flex-col md:flex-row md:justify-center">
          <Image
            src={Pencil}
            alt="Pencil Icon"
            width={60}
            height={100}
            className="md:mr-4"
            style={{ zIndex: 20 }}
          />
          <h1 className="text-4xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-center md:text-left">
            Latest News
          </h1>
        </div>
        <p className="text-2xl md:text-xl lg:text-lg xl:text-base text-center">
          Add a little bit of body text Add a little bit of body text ......
        </p>
      </div>

      <div>
        <div className="bg-green-200 w-full h-[140px] flex justify-center sm:flex-col lg:flex-row lg:h-[150px] lg:justify-evenly items-center mt-[200px] gap-3 px-2">
          <input
            type="text"
            placeholder="Search"
            className="w-full max-w-[250px] h-[60px] text-xl md:text-lg lg:text-base border-2 border-black"
          />
          <Button className="border-2 rounded-[30px] w-[140px] h-[60px] bg-green-700 text-2xl md:text-xl lg:text-lg p-0">
            SEARCH
          </Button>
        </div>
      </div>
      <div className="flex justify-center items-center w-full h-[500px]">
        <h1 className="text-xl md:text-lg lg:text-base">AD</h1>
      </div>
      <div className="mt-4">
        <div className="w-full h-[200px] bg-green-200 flex flex-col lg:flex-row justify-between items-center p-6 lg:gap-0">
          <div className="text-3xl md:text-2xl lg:text-xl font-semibold text-black lg:mr-0">
            Latest
          </div>
          <div>
            <Dropdown>
              <Dropdown.Toggle
                variant=""
                id="dropdown-basic"
                className="text-2xl md:text-xl lg:text-lg bg-green-300 text-black border-none hover:bg-green-500 focus:ring-0 focus:outline-none"
              >
                Categories
              </Dropdown.Toggle>
              <Dropdown.Menu className="bg-green-300">
                <Dropdown.Item className="text-lg hover:bg-green-400 focus:bg-green-400 !px-4 !py-2 w-full">
                  Sample 1
                </Dropdown.Item>
                <Dropdown.Item className="text-lg hover:bg-green-400 focus:bg-green-400 !px-4 !py-2 w-full">
                  Sample 2
                </Dropdown.Item>
                <Dropdown.Item className="text-lg hover:bg-green-400 focus:bg-green-400 !px-4 !py-2 w-full">
                  Sample 3
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </div>

      <div className="mt-[160px]">
        <div className="bg-green-200 w-full h-[200px] flex justify-center flex-col px-4">
          <div className="flex-1 justify-center items-center flex">
            <input
              type="text"
              placeholder="Enter Your Email"
              className="min-w-full h-[70px] border-2 border-black text-center text-xl md:text-lg lg:text-base"
            />
          </div>
          <div className="flex-1 flex justify-start items-center px-2">
            <Button className="w-[150px] h-[60px] bg-green-700 text-2xl md:text-xl lg:text-lg text-white rounded-[40px]">
              Sign up
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
