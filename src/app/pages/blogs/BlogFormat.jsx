"use client";
import React from "react";
import Image from "next/image";
import sampleImage from "../../Assets/sampleimage.png";
import Button from "react-bootstrap/Button";

const BlogFormat = () => {
  return (
    <div>
      <div className="w-full h-[450px] border-3 border-green-800 rounded">
        <div className="flex flex-col md:flex-row p-3">
          <div className="w-full md:w-[50%]">
            <Image className="w-full h-[350px]" src={sampleImage} />
          </div>
          <div className="w-full md:w-[50%] px-6 py-2 flex flex-col justify-between">
            <div>
              <h1 className="text-2xl md:text-4xl mb-3 font-semibold">
                Some Disorder Associated With Respiration
              </h1>
              <div className="text-blue-500">Post by/Post Date/Category</div>
            </div>
            <div className="text-2xl">
              This an ellergic Reaction Related to lungs.
            </div>
            <div>
              <Button
                variant=""
                className="bg-gray-300 hover:bg-gray-400 w-full md:w-[280px] h-[50px] rounded-none text-black font-semibold text-base md:text-xl px-4 md:px-12 py-2 md:py-3"
              >
                READ MORE...
              </Button>
            </div>
          </div>
        </div>
        <div className="px-1 mt-2">
          <div className="border-1 border-black w-full"></div>
        </div>
      </div>
    </div>
  );
};

export default BlogFormat;
