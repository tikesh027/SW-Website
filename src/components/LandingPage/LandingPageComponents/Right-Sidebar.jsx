"use client";
import Image from "next/image";
import React from "react";
import Pencil from "../../Assets/pencil.png";
import { Button, Input } from "@nextui-org/react";
import { Dropdown, Item } from "rsuite";

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
          <div className="text-2xl">Latest</div>
          <div>
            <Dropdown title="Categories" className="bg-green-200">
              <Dropdown.Item className="text-" style={{ width: "200px" }}>
                <a href="" className="text-black"></a>
              </Dropdown.Item>
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
