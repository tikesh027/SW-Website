"use client";
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const Subscription = () => {
  const [formData, setFormData] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log(formData);
  };

  return (
    <div className="px-10 sm:px-10 md:px-[100px]">
      <div className="text-3xl sm:text-4xl md:text-5xl font-semibold mt-5 md:mt-[20px]">
        Subscribe
      </div>
      <div className="mt-8 md:mt-[50px]">
        <Form onSubmit={handleSubmit}>
          {/* Username */}
          <Form.Group controlId="formUsername">
            <Form.Label className="text-xl sm:text-2xl md:text-3xl">
              Username*{" "}
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-3 py-2 mt-2 h-14 sm:h-[60px] md:h-[80px] bg-green-300 rounded-none text-black focus:outline-none focus:bg-green-300 "
            />
          </Form.Group>

          {/* First Name */}
          <Form.Group controlId="formFirstName" className="mt-4 md:mt-5">
            <Form.Label className="text-xl sm:text-2xl md:text-3xl">
              First Name*{" "}
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your first name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-3 py-2 mt-2 h-14 sm:h-[60px] md:h-[80px] bg-green-300 rounded-none text-black focus:outline-none focus:bg-green-300 "
            />
          </Form.Group>

          {/* Last Name */}
          <Form.Group controlId="formLastName" className="mt-4 md:mt-5">
            <Form.Label className="text-xl sm:text-2xl md:text-3xl">
              Last Name*{" "}
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your last name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-3 py-2 mt-2 h-14 sm:h-[60px] md:h-[80px] bg-green-300 rounded-none text-black focus:outline-none focus:bg-green-300 "
            />
          </Form.Group>

          {/* Email */}
          <Form.Group controlId="formEmail" className="mt-4 md:mt-5">
            <Form.Label className="text-xl sm:text-2xl md:text-3xl">
              Your Email*{" "}
            </Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 mt-2 h-14 sm:h-[60px] md:h-[80px] bg-green-300 rounded-none text-black focus:outline-none focus:bg-green-300 "
            />
          </Form.Group>

          {/* Password */}
          <Form.Group controlId="formPassword" className="mt-4 md:mt-5">
            <Form.Label className="text-xl sm:text-2xl md:text-3xl">
              Password*{" "}
            </Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 mt-2 h-14 sm:h-[60px] md:h-[80px] bg-green-300 rounded-none text-black focus:outline-none focus:bg-green-300 "
            />
          </Form.Group>

          {/* Confirm Password */}
          <Form.Group controlId="formConfirmPassword" className="mt-4 md:mt-5">
            <Form.Label className="text-xl sm:text-2xl md:text-3xl">
              Confirm Password*
            </Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-3 py-2 mt-2 h-14 sm:h-[60px] md:h-[80px] bg-green-300 rounded-none text-black focus:outline-none focus:bg-green-300 "
            />
          </Form.Group>

          {/* Submit Button */}
          <Button
            variant="primary"
            type="submit"
            className="mt-10 sm:mt-12 md:mt-[60px] rounded-[50px] px-6 sm:px-8 md:px-10 bg-yellow-500 focus:bg-yellow-500 hover:bg-yellow-600 border-none h-[50px] sm:h-[55px] md:h-[60px] w-[150px] sm:w-[180px] md:w-[200px] text-black text-lg sm:text-xl md:text-2xl"
          >
            Subscribe
          </Button>
        </Form>
      </div>
      <div className="h-[400px] sm:h-[600px] md:h-[800px] flex justify-center items-center text-2xl sm:text-3xl md:text-4xl mt-10">
        <h1>AD</h1>
      </div>
    </div>
  );
};

export default Subscription;
