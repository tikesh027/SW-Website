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
        <div className="mt-6 flex gap-3 ">
          <iframe
            src="https://www.youtube.com/embed/9c6W4CCU9M4" // Replace with a random wildlife video URL
            width="330"
            height="220"
            style={{ border: "none" }}
            title="Random Wildlife Video"
            allowFullScreen
          ></iframe>
          <iframe
            src="https://www.youtube.com/embed/9c6W4CCU9M4" // Replace with a random wildlife video URL
            width="330"
            height="220"
            style={{ border: "none" }}
            title="Random Wildlife Video"
            allowFullScreen
          ></iframe>
          <iframe
            src="https://www.youtube.com/embed/9c6W4CCU9M4" // Replace with a random wildlife video URL
            width="330"
            height="220"
            style={{ border: "none" }}
            title="Random Wildlife Video"
            allowFullScreen
          ></iframe>
          <div className="flex justify-center items-center">
            <h1>
              <a href="#" className="text-xl text-blue-500">
                View More
              </a>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FunFacts;
