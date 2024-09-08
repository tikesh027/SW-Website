import Image from "next/image";
import React from "react";
import sampleImage from "../../Assets/sampleImage.png";
import { Button } from "@nextui-org/react";

const Category = () => {
  return (
    <div>
      <div className="border-[3px] border-green-800 rounded-lg">
        <div className="flex gap-4">
          <div className="flex-1">
            <Image
              src={sampleImage}
              className="w-[560px] h-[520px] pl-4 pt-4"
            />
          </div>
          <div className="flex-1 flex justify-around flex-col px-2 py-5">
            <div>
              <h2>Some Disorder of associated with respiratory</h2>
            </div>
            <div>
              <p className="text-2xl">
                Alergy Related to respertory system, found in lungs and wind
                pipe.
              </p>
            </div>
            <div>
              <Button className="bg-gray-300 text-black font-semibold text-xl px-12 py-3">
                READ MORE...
              </Button>
            </div>
          </div>
        </div>
        <div>
          <hr className="border-t-4 border-black" />
          <div className="w-full h-[30px]">
            <div className="flex justify-center text-xl gap-4">
              <div>Post By/</div>
              <div>Post Date/</div>
              <div>Category</div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[20px]">
        <div className="grid grid-cols-3 gap-10">
          <div className="flex flex-col border-[3px] border-green-800 rounded-lg w-[360px] gap-4">
            <div className="flex justify-center items-center">
              <Image src={sampleImage} className="w-[350px] h-[290px]" />
            </div>
            <div className="px-4 flex flex-col gap-4">
              <div>
                <p className="text-[20px] font-semibold">
                  Some Disorder of associated with respiratory
                </p>
              </div>
              <div>
                <p className="">
                  Alergy Related to respertory system, found in lungs and wind
                  pipe.
                </p>
              </div>
              <div>
                <Button className="bg-gray-300 text-black font-semibold px-12 py-3">
                  READ MORE...
                </Button>
              </div>
            </div>
            <div>
              <hr className="border-t-4 border-black" />
              <div className="w-full h-[30px]">
                <div className="flex justify-center text-xl gap-4">
                  <div>Post By/</div>
                  <div>Post Date/</div>
                  <div>Category</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col border-[3px] border-green-800 rounded-lg w-[360px] gap-4">
            <div className="flex justify-center items-center">
              <Image src={sampleImage} className="w-[350px] h-[290px]" />
            </div>
            <div className="px-4 flex flex-col gap-4">
              <div>
                <p className="text-[20px] font-semibold">
                  Some Disorder of associated with respiratory
                </p>
              </div>
              <div>
                <p className="">
                  Alergy Related to respertory system, found in lungs and wind
                  pipe.
                </p>
              </div>
              <div>
                <Button className="bg-gray-300 text-black font-semibold px-12 py-3">
                  READ MORE...
                </Button>
              </div>
            </div>
            <div>
              <hr className="border-t-4 border-black" />
              <div className="w-full h-[30px]">
                <div className="flex justify-center text-xl gap-4">
                  <div>Post By/</div>
                  <div>Post Date/</div>
                  <div>Category</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col border-[3px] border-green-800 rounded-lg w-[360px] gap-4">
            <div className="flex justify-center items-center">
              <Image src={sampleImage} className="w-[350px] h-[290px]" />
            </div>
            <div className="px-4 flex flex-col gap-4">
              <div>
                <p className="text-[20px] font-semibold">
                  Some Disorder of associated with respiratory
                </p>
              </div>
              <div>
                <p className="">
                  Alergy Related to respertory system, found in lungs and wind
                  pipe.
                </p>
              </div>
              <div>
                <Button className="bg-gray-300 text-black font-semibold px-12 py-3">
                  READ MORE...
                </Button>
              </div>
            </div>
            <div>
              <hr className="border-t-4 border-black" />
              <div className="w-full h-[30px]">
                <div className="flex justify-center text-xl gap-4">
                  <div>Post By/</div>
                  <div>Post Date/</div>
                  <div>Category</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
