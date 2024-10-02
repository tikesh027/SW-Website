"use client";
import Image from "next/image";
import React from "react";
import sampleImage from "../../Assets/sampleImage.png";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

const Posts = () => {
  return (
    <div>
      <div className="max-w-screen-lg mx-auto p-4">
        <div className="text-blue-500 text-3xl mb-4">
          Home/Category/Post Name
        </div>
        <div className="">
          <div className="text-4xl font-semibold">
            Some Disorder Associated with the Respiratory System
          </div>
          <div className="flex space-x-4 mt-4 flex-col">
            <div className="ml-4 text-2xl text-blue-500 mb-2">
              By author name/date
            </div>
            <div className="flex gap-2 w-6 h-6">
              {" "}
              {/* Adjusted the container size */}
              <div className="text-blue-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8" // Increased size using Tailwind CSS classes
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5" />
                </svg>
              </div>
              <div className="text-green-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                </svg>
              </div>
              <div className="text-blue-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                </svg>
              </div>
              <div className="text-red-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0a8 8 0 0 0-2.915 15.452c-.07-.633-.134-1.606.027-2.297.146-.625.938-3.977.938-3.977s-.239-.479-.239-1.187c0-1.113.645-1.943 1.448-1.943.682 0 1.012.512 1.012 1.127 0 .686-.437 1.712-.663 2.663-.188.796.4 1.446 1.185 1.446 1.422 0 2.515-1.5 2.515-3.664 0-1.915-1.377-3.254-3.342-3.254-2.276 0-3.612 1.707-3.612 3.471 0 .688.265 1.425.595 1.826a.24.24 0 0 1 .056.23c-.061.252-.196.796-.222.907-.035.146-.116.177-.268.107-1-.465-1.624-1.926-1.624-3.1 0-2.523 1.834-4.84 5.286-4.84 2.775 0 4.932 1.977 4.932 4.62 0 2.757-1.739 4.976-4.151 4.976-.811 0-1.573-.421-1.834-.919l-.498 1.902c-.181.695-.669 1.566-.995 2.097A8 8 0 1 0 8 0" />
                </svg>
              </div>
              <div className="text-blue-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.555 1.358-1.25-.015-.71-.52-1.25-1.342-1.25-.822 0-1.358.54-1.358 1.25 0 .694.52 1.25 1.328 1.25h.014zm4.907 8.212V9.359c0-.213.015-.425.078-.578.17-.425.557-.865 1.207-.865.853 0 1.194.653 1.194 1.611v4.218h2.401V9.25c0-2.211-1.18-3.239-2.755-3.239-1.28 0-1.845.706-2.165 1.198v.031h-.014a5.55 5.55 0 0 1 .014-.031V6.169H6.842c.03.555 0 7.225 0 7.225h2.401z" />
                </svg>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="currentColor"
                  class="bi bi-instagram"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[30px] text-xl">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div className="mt-[30px] text-xl">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div className="mt-[30px] text-xl">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div className="mt-[30px] text-xl">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div className="mt-[30px] text-xl">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
      <div className="mt-4">
        <h1 className="text-4xl font-semibold">Share Icons</h1>
      </div>
      <div className="mt-4">
        <h1 className="text-4xl font-semibold">Related Posts</h1>
        <div className="flex flex-col md:flex-row gap-4 mt-4">
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className="p-1 border-2 border-black rounded w-full md:w-[400px]"
            >
              <Image
                src={sampleImage}
                className="w-full h-[300px] object-cover"
                alt="Sample Image"
              />
              <div className="px-2 flex flex-col gap-2 mt-2 mb-2">
                <h2 className="text-2xl font-medium">
                  Some Disorders associated with Respiration
                </h2>
                <h2 className="text-xl text-blue-500">
                  Post by/post date/Category
                </h2>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-[50px]">
          <div>
            <h1 className="text-4xl font-semibold">
              More Posts from This Site
            </h1>
          </div>
          <div className="flex flex-col md:flex-row gap-4 mt-4">
            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                className="p-1 border-2 border-black rounded w-full md:w-[400px]"
              >
                <Image
                  src={sampleImage}
                  className="w-full h-[300px] object-cover"
                  alt="Sample Image"
                />
                <div className="px-2 flex flex-col gap-2 mt-2 mb-2">
                  <h2 className="text-2xl font-medium">
                    Some Disorders associated with Respiration
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mx-10 md:mx-[15%] mt-[100px]">
          <div>
            <h1 className="text-5xl font-semibold">Leave a Comment</h1>
          </div>
          <div className="mt-2">
            <h2 className="text-2xl">
              Your email address will not be published. Required fields are
              marked *
            </h2>
          </div>
          <div className="mt-5 p-5 bg-gray-100 rounded-lg shadow-lg">
            <Form>
              <Form.Group
                className="mb-4"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Control
                  as="textarea"
                  rows={10}
                  className="bg-green-300 border-2 border-black text-black text-xl rounded-lg p-4 placeholder-gray-600 focus:bg-green-200"
                  placeholder="Type your Comment here...."
                />
              </Form.Group>
              <div className="flex flex-col md:flex-row gap-4 mb-4">
                <Form.Group className="flex-1" controlId="formBasicName">
                  <Form.Control
                    type="text"
                    placeholder="Your Name"
                    className="bg-white border-2 border-gray-300 text-black text-lg rounded-lg p-3 focus:bg-gray-100"
                  />
                </Form.Group>
                <Form.Group className="flex-1" controlId="formBasicEmail">
                  <Form.Control
                    type="email"
                    placeholder="Your Email"
                    className="bg-white border-2 border-gray-300 text-black text-lg rounded-lg p-3 focus:bg-gray-100"
                  />
                </Form.Group>
              </div>
              <div className="mb-4 flex items-center">
                <InputGroup.Checkbox
                  aria-label="Save my name and email in this browser for the next time I comment."
                  className="mr-2"
                />
                <span className="text-black text-sm">
                  Save my name and email for next time
                </span>
              </div>
              <Button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-white text-lg py-3 rounded-lg transition-colors"
              >
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
