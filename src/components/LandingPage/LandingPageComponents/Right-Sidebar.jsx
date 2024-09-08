import Image from "next/image";
import React from "react";
import Pencil from "../../Assets/pencil.png";

const RightSidebar = () => {
  return (
    <div className="overflow-x-auto">
      <div className="bg-green-200 w-full max-w-[450px] h-[350px] flex flex-col justify-evenly items-center p-4">
        <div className="flex">
          <div>
            <Image
              src={Pencil}
              style={{ width: "60px", height: "100px", zIndex: "20" }}
            />
          </div>
          <h1 className="text-5xl font-semibold">Latest News</h1>
        </div>
        <p className="text-3xl text-center">
          Add a little bit of body text Add a little bit of body text ......
        </p>
      </div>
    </div>
  );
};

export default RightSidebar;
