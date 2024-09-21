import Image from "next/image";
import React from "react";
import sampleImage from "../../../Assets/sampleImage.png";
import { Button } from "@nextui-org/react";

const Category = () => {
  return (
    <div>
      {/* Main Container */}
      <div className="border-[3px] border-green-800 rounded-lg bg-white">
        <div className="flex flex-col xl:flex-row gap-4">
          {/* Image Section */}
          <div className="flex-1">
            <Image
              src={sampleImage}
              width={560}
              height={520}
              alt="Respiratory Disorder"
              className="p-2 w-full object-cover"
            />
          </div>

          {/* Text Section */}
          <div className="flex-1 flex justify-around flex-col px-2 py-5">
            <h2 className="text-2xl font-semibold text-center md:text-left">
              Some Disorder Associated with Respiratory System
            </h2>
            <p className="text-xl text-center md:text-left">
              Allergy related to the respiratory system, found in lungs and
              windpipe.
            </p>
            <div className="flex justify-center items-center">
              {/* Removed fixed width from button */}
              <Button
                auto
                className="bg-gray-300 w-full md:w-[300px] justify-center flex mt-4 text-black font-semibold text-xl px-4 py-2 md:px-12 md:py-3"
              >
                READ MORE...
              </Button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div>
          <hr className="border-4 border-black" />
          <div className="w-full h-[60px] flex flex-col justify-center">
            <div className="flex justify-center text-base gap-2">
              <div>Post By/</div>
              <div>Post Date/</div>
              <div>Category</div>
            </div>
          </div>
        </div>
      </div>

      {/* Grid of Items */}
      <div className="mt-[20px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[11px]">
          {/* Repeated Card Template */}
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="flex flex-col border-[3px] border-green-800 bg-white rounded-lg w-full gap-4"
            >
              <div className="flex justify-center items-center">
                <Image
                  src={sampleImage}
                  width={370}
                  height={320}
                  alt="Respiratory Disorder"
                  className="w-full sm:w-[370px] 2xl:pt-2 object-cover"
                />
              </div>
              <div className="px-4 flex flex-col gap-4">
                <p className="text-[22px] font-semibold text-center sm:text-left">
                  Some Disorder Associated with Respiratory System
                </p>
                <p className="text-center sm:text-left">
                  Allergy related to the respiratory system, found in lungs and
                  windpipe.
                </p>
                <div className="flex justify-center sm:justify-start">
                  {/* Removed fixed width from button */}
                  <Button
                    auto
                    className="bg-gray-300 w-full text-black font-semibold px-4 py-2 md:px-8 md:py-3"
                  >
                    READ MORE...
                  </Button>
                </div>
              </div>
              <hr className="border-t-4 border-black" />
              <div className="w-full h-[30px]">
                <div className="flex justify-center text-base gap-2">
                  <div>Post By/</div>
                  <div>Post Date/</div>
                  <div>Category</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
