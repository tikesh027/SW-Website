import React from "react";
import BlogFormat from "./BlogFormat";
import Image from "next/image";
import galleryImage from "../../Assets/gallery.jpg";

const Blogs = () => {
  return (
    <div>
      <div className="space-y-14">
        <BlogFormat />
        <BlogFormat />
        <div className="w-full h-[200px] flex items-center justify-center">
          AD
        </div>
        <BlogFormat />
        <BlogFormat />
        <div className="w-full h-[200px] flex items-center justify-center">
          AD
        </div>
        <BlogFormat />
        <BlogFormat />
        <div className="w-full h-[200px] flex items-center justify-center">
          AD
        </div>
      </div>
      <div>
        <div className="text-6xl font-semibold">Fun Facts</div>
        <div className="flex gap-4 mt-5">
          <div>
            <Image src={galleryImage} className="w-[350px] h-[220px]" />
          </div>
          <div>
            <Image src={galleryImage} className="w-[350px] h-[220px]" />
          </div>
          <div>
            <Image src={galleryImage} className="w-[350px] h-[220px]" />
          </div>
          <div className="w-[150px] flex justify-center items-center text-2xl">
            View More
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
