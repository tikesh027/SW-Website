import React from "react";

const FunFacts = () => {
  return (
    <div>
      <div className="flex justify-center items-center text-2xl w-full h-[300px] mb-6">
        AD
      </div>
      <div>
        <div>
          <h1 className="text-5xl font-semibold">Fun Facts</h1>
        </div>
        <div className="mt-6 flex justify-start flex-wrap gap-3">
          <iframe
            src="https://www.youtube.com/embed/9c6W4CCU9M4"
            className="w-full sm:w-1/3 md:w-1/3 lg:w-1/4 h-[220px] border-none"
            title="Random Wildlife Video"
            allowFullScreen
          ></iframe>
          <iframe
            src="https://www.youtube.com/embed/9c6W4CCU9M4"
            className="w-full sm:w-1/3 md:w-1/3 lg:w-1/4 h-[220px] border-none"
            title="Random Wildlife Video"
            allowFullScreen
          ></iframe>
          <iframe
            src="https://www.youtube.com/embed/9c6W4CCU9M4"
            className="w-full sm:w-1/3 md:w-1/3 lg:w-1/4 h-[220px] border-none"
            title="Random Wildlife Video"
            allowFullScreen
          ></iframe>
          <h1 className="w-full md:w-auto flex justify-start md:justify-center items-center mt-4">
            <a href="#" className="text-xl text-blue-500">
              View More
            </a>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default FunFacts;
