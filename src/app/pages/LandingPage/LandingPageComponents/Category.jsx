import Image from "next/image";
import React from "react";
import sampleImage from "../../../Assets/sampleImage.png";
import { Button } from "@nextui-org/react";

const Category = () => {
  return (
    <div>
      {/* Main Container */}
      <div className="border-[3px] border-green-800 rounded-lg bg-white">
        <div className="flex flex-col xl:flex-row gap-2 lg:gap-3 xl:rounded-[20px]">
          {/* Image Section */}
          <div className="flex-1">
            <Image
              src={sampleImage}
              width={560}
              height={500}
              alt="Respiratory Disorder"
              className="p-2 w-full object-cover lg:rounded-none lg:px-[20px] rounded-[60px]"
            />
          </div>

          {/* Text Section */}
          <div className="flex-1 flex flex-col justify-center gap-[20px]">
            <h2 className="text-xl sm:text-xl md:text-2xl lg:text-3xl font-semibold text-center md:text-left lg:mb-0">
              Some Disorder Associated with Respiratory System
            </h2>
            <p className="text-base sm:text-base md:text-xl text-center md:text-left mb-4 lg:mt-4">
              Allergy related to the respiratory system, found in lungs and
              windpipe.
            </p>
            <div className="flex justify-center">
              <Button
                auto
                className="bg-gray-300 w-[300px] md:w-[300px] flex mb-4 text-black font-semibold text-xl sm:text-base px-4 py-2 md:px-12 md:py-1 sm:px-2 sm:py-1"
              >
                READ MORE...
              </Button>
            </div>
          </div>
        </div>
        <div>
          <div className="w-full bg-black border-1 border-black"></div>
          <div className="w-full h-[60px] flex flex-col justify-center">
            <div className="flex justify-center text-base sm:text-xs gap-2">
              <div>Post By/</div>
              <div>Post Date/</div>
              <div>Category</div>
            </div>
          </div>
        </div>
      </div>

      {/* Grid of Items */}
      <div className="mt-[20px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
                  className="w-full object-cover"
                />
              </div>
              <div className="px-4 sm:px-2 flex flex-col gap-[2px]">
                <p className="text-xl sm:text-lg font-semibold text-center sm:text-left">
                  Some Disorder Associated with Respiratory System
                </p>
                <p className="text-center sm:text-left py-2 sm:text-sm">
                  Allergy related to the respiratory system, found in lungs and
                  windpipe.
                </p>
                <div className="flex justify-center sm:justify-start">
                  <Button
                    auto
                    className="bg-gray-300 w-[300px] text-black font-semibold px-4 py-2 md:px-8 md:py-3 sm:px-2 sm:py-1"
                  >
                    READ MORE...
                  </Button>
                </div>
              </div>
              <div className="w-full bg-black border-1 border-black"></div>
              <div className="w-full h-[30px]">
                <div className="flex justify-center text-base sm:text-xs gap-2 sm:gap-1">
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
