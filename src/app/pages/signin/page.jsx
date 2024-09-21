"use client";
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Link from "next/link";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic
    console.log(formData);
  };

  return (
    <div className="px-4 py-8 md:px-12 lg:px-24 lg:py-16">
      <div className="border-2 border-black shadow-lg p-6 md:p-12 lg:p-16 max-w-lg mx-auto">
        <div className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 lg:mb-8 text-center">
          Login
        </div>
        <Form onSubmit={handleSubmit}>
          {/* Email */}
          <Form.Group controlId="formEmail" className="mb-4 lg:mb-6">
            <Form.Label className="text-lg md:text-xl lg:text-2xl">
              Your Email
            </Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 lg:py-4 bg-green-300 rounded-md text-black border-2 border-black focus:outline-none focus:bg-green-200"
            />
          </Form.Group>

          {/* Password */}
          <Form.Group controlId="formPassword" className="mb-4 lg:mb-6">
            <Form.Label className="text-lg md:text-xl lg:text-2xl">
              Password
            </Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-3 lg:py-4 bg-green-300 rounded-md text-black border-2 border-black focus:outline-none focus:bg-green-200"
            />
          </Form.Group>

          {/* Submit Button */}
          <div className="flex justify-center">
            <Button
              variant="primary"
              type="submit"
              className="rounded-full px-8 py-3 lg:px-12 lg:py-4 bg-yellow-500 hover:bg-yellow-600 border-none text-black text-lg md:text-xl lg:text-2xl"
            >
              Login
            </Button>
          </div>
          <div className="flex justify-center items-center flex-col gap-2 text-lg md:text-xl lg:text-2xl mt-4">
            <Link href="/pages/subscription">New User?</Link>
            <Link href="/pages/forgotpassword">Forgot Password?</Link>
          </div>
        </Form>
      </div>
      <div className="h-[400px] md:h-[600px] lg:h-[800px] flex justify-center items-center text-2xl md:text-3xl lg:text-4xl mt-8">
        <h1>AD</h1>
      </div>
    </div>
  );
};

export default LoginForm;
