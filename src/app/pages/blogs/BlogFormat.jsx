"use client";
import React from "react";
import Image from "next/image";
import sampleImage from "../../Assets/sampleImage.png";
import Button from "react-bootstrap/Button";

const BlogFormat = () => {
  return (
    <div className="w-full max-w-screen-lg mx-auto">
      <div className="border-3 border-green-800 rounded-lg overflow-hidden">
        <div className="flex flex-col lg:flex-row p-3">
          <div className="w-full lg:w-1/2">
            <Image
              className="w-full h-auto lg:h-[350px] object-cover"
              src={sampleImage}
              alt="Sample"
            />
          </div>
          <div className="w-full lg:w-1/2 px-4 py-2 flex flex-col justify-between">
            <div>
              <h1 className="text-lg lg:text-3xl mb-2 font-semibold">
                Some Disorder Associated With Respiration
              </h1>
              <div className="text-blue-500 text-xs lg:text-base">
                Post by/Post Date/Category
              </div>
            </div>
            <div className="text-base lg:text-2xl">
              This is an allergic reaction related to lungs.
            </div>
            <div>
              <Button
                variant=""
                className="bg-gray-300 hover:bg-gray-400 w-full lg:w-[280px] h-[50px] rounded-none text-black font-semibold text-base lg:text-xl px-4 lg:px-12 py-2 lg:py-3"
              >
                READ MORE...
              </Button>
            </div>
          </div>
        </div>
        <div className="px-2 mt-2 mb-10">
          <div className="border-t-2 border-black w-full"></div>
        </div>
      </div>
    </div>
  );
};

export default BlogFormat;
