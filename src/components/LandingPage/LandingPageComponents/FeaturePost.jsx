import React from "react";
import firstImage from "../../Assets/sampleImage.png";
import Image from "next/image";

const FeaturePost = () => {
  return (
    <div className="mb-10">
      <div className="mb-8">
        <h1 className="text-5xl font-semibold">Featured Post</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 h-[450px] w-full">
        <div className="col-span-1 md:col-span-3 h-[300px] w-full relative">
          <Image
            src={firstImage}
            alt="Featured Post"
            layout="fill"
            objectFit="cover"
            className="absolute top-0 left-0"
          />
          <div className="absolute top-0 left-0 w-full h-full flex items-end justify-center z-10">
            <h1 className="text-white text-xl font-bold">
              Your Post title comes here.
            </h1>
          </div>
        </div>
        <div className="h-[150px] w-full relative">
          <Image
            src={firstImage}
            alt="Additional Post 1"
            layout="fill"
            objectFit="cover"
            className="absolute top-0 left-0"
          />
          <div className="absolute top-0 left-0 w-full h-full flex items-end justify-center z-10">
            <h1 className="text-white text-sm font-bold">
              Your Post title comes here.
            </h1>
          </div>
        </div>
        <div className="h-[150px] w-full relative">
          <Image
            src={firstImage}
            alt="Additional Post 2"
            layout="fill"
            objectFit="cover"
            className="absolute top-0 left-0"
          />
          <div className="absolute top-0 left-0 w-full h-full flex items-end justify-center z-10">
            <h1 className="text-white text-sm font-bold">
              Your Post title comes here.
            </h1>
          </div>
        </div>
        <div className="h-[150px] w-full relative">
          <Image
            src={firstImage}
            alt="Additional Post 3"
            layout="fill"
            objectFit="cover"
            className="absolute top-0 left-0"
          />
          <div className="absolute top-0 left-0 w-full h-full flex items-end justify-center z-10">
            <h1 className="text-white text-sm font-bold">
              Your Post title comes here.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturePost;
