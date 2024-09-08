import React from "react";
import Category from "./LandingPageComponents/Category";
import RightSidebar from "./LandingPageComponents/Right-Sidebar";

const LandingPage = () => {
  return (
    <div className="w-full h-full">
      <div className="flex items-start">
        <div className="w-[70%] px-11 py-[80px]">
          <Category />
        </div>
        <div className="w-[30%] p-4 px-10 py-[80px] border-l-4 border-black">
          <RightSidebar />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
