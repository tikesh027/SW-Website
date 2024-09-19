"use client";
import Image from "next/image";
import React from "react";
import Pencil from "../../../Assets/pencil.png";
import { Button, Input } from "@nextui-org/react";
import Dropdown from "react-bootstrap/Dropdown";

const RightSidebar = () => {
  return (
    <div className="overflow-x-auto">
      <div className="bg-green-200 w-full max-w-[450px] h-[350px] flex flex-col justify-evenly items-center p-4">
        <div className="flex items-center">
          <div>
            <Image
              src={Pencil}
              alt="Pencil Icon"
              width={60}
              height={100}
              style={{ zIndex: 20 }}
            />
          </div>
          <h1 className="text-5xl font-semibold ml-4">Latest News</h1>
        </div>
        <p className="text-3xl text-center">
          Add a little bit of body text Add a little bit of body text ......
        </p>
      </div>
      <div>
        <div className="bg-green-200 w-full h-[80px] flex justify-center items-center mt-[200px] gap-5 px-2">
          <input
            type="text"
            placeholder="Search"
            className="w-[250px] h-[60px] text-xl text-center border-2 border-black"
          />
          <Button className="border-2 rounded-[30px] w-[140px] h-[60px] bg-green-700 text-2xl p-0">
            SEARCH
          </Button>
        </div>
      </div>
      <div>
        <div className="w-full h-[500px] justify-center flex items-center">
          <h1>AD</h1>
        </div>
      </div>
      <div className="mt-[10px]">
        <div className="w-full h-[300px] bg-green-200 flex justify-evenly p-6">
          <div className="text-2xl mt-2">Latest</div>
          <div>
            <Dropdown>
              <Dropdown.Toggle
                variant=""
                id="dropdown-basic"
                className="text-2xl bg-green-200 text-black border-none !shadow-none focus:ring-0 focus:outline-none hover:bg-green-300 focus:bg-green-300"
              >
                Categories
              </Dropdown.Toggle>
              <Dropdown.Menu className="bg-green-200">
                <Dropdown.Item className="text-[18px] mt-1 hover:bg-green-300 focus:bg-green-300 !px-4 !py-2 w-[260px]">
                  Sample 1
                </Dropdown.Item>
                <Dropdown.Item className="text-[18px] mt-1 hover:bg-green-300 focus:bg-green-300 !px-4 !py-2 w-[260px]">
                  Sample 2
                </Dropdown.Item>
                <Dropdown.Item className="text-[18px] mt-1 hover:bg-green-300 focus:bg-green-300 !px-4 !py-2 w-[260px]">
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
              className="min-w-full h-[70px] border-2 border-black text-center text-xl"
            />
          </div>
          <div className="flex-1 flex justify-start items-center px-2">
            <Button className="w-[150px] h-[60px] bg-green-700 text-2xl text-white rounded-[40px]">
              Sign up
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
