import React from "react";
import BlogFormat from "./BlogFormat";
import Image from "next/image";
import galleryImage from "../../Assets/gallery.jpg";

const Blogs = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16">
      <div className="space-y-14">
        <BlogFormat />
        <BlogFormat />
        <div className="w-full h-[200px] flex items-center justify-center bg-gray-200">
          <span className="text-xl font-semibold">AD</span>
        </div>
        <BlogFormat />
        <BlogFormat />
        <div className="w-full h-[200px] flex items-center justify-center bg-gray-200">
          <span className="text-xl font-semibold">AD</span>
        </div>
        <BlogFormat />
        <BlogFormat />
        <div className="w-full h-[200px] flex items-center justify-center bg-gray-200">
          <span className="text-xl font-semibold">AD</span>
        </div>
      </div>
      <div className="mt-14">
        <h2 className="text-3xl md:text-5xl font-semibold">Fun Facts</h2>
        <div className="flex flex-wrap justify-between items-center gap-4 mt-5">
          <div className="flex-shrink-0 w-full md:w-[350px] h-[220px]">
            <Image
              src={galleryImage}
              className="w-full h-full object-cover"
              alt="Gallery"
            />
          </div>
          <div className="flex-shrink-0 w-full md:w-[350px] h-[220px]">
            <Image
              src={galleryImage}
              className="w-full h-full object-cover"
              alt="Gallery"
            />
          </div>
          <div className="flex-shrink-0 w-full md:w-[350px] h-[220px]">
            <Image
              src={galleryImage}
              className="w-full h-full object-cover"
              alt="Gallery"
            />
          </div>
          <div className="w-full md:w-[150px] h-[50px] flex justify-center items-center text-2xl bg-gray-300 rounded-lg mt-4 md:mt-0">
            View More
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
