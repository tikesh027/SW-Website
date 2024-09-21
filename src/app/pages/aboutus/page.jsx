import React from "react";

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="px-4 md:px-10 lg:px-20 py-10">
        <div className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">
          About Us
        </div>
        <div className="text-lg md:text-xl lg:text-2xl">
          Detail about the company and what it does.
        </div>
      </div>
      <div className="flex-grow flex justify-center items-center text-lg md:text-xl lg:text-2xl w-full">
        AD
      </div>
    </div>
  );
};

export default AboutUs;
