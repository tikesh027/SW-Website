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
    <div className="px-[100px] py-[50px]">
      <div className="border-2 border-black rounded-none shadow-lg p-[120px] mx-auto">
        <div className="text-4xl font-semibold mb-8 text-center">Login</div>
        <Form onSubmit={handleSubmit}>
          {/* Email */}
          <Form.Group controlId="formEmail" className="mb-6">
            <Form.Label className="text-2xl">Your Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-5 py-3 h-[90px] bg-green-300 rounded-md text-black border-2 border-black focus:outline-none focus:bg-green-200"
            />
          </Form.Group>

          {/* Password */}
          <Form.Group controlId="formPassword" className="mb-6">
            <Form.Label className="text-2xl">Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-5 py-3 h-[90px] bg-green-300 rounded-md text-black border-2 border-black focus:outline-none focus:bg-green-200"
            />
          </Form.Group>

          {/* Submit Button */}
          <div className="flex justify-center">
            <Button
              variant="primary"
              type="submit"
              className="rounded-full px-12 py-4 bg-yellow-500 hover:bg-yellow-600 border-none text-black text-2xl"
            >
              Login
            </Button>
          </div>
          <div className="flex justify-center items-center flex-col gap-3 text-2xl mt-4">
            <Link href="/pages/subscription">New User?</Link>
            <Link href="/pages/forgotpassword">Forgot Password?</Link>
          </div>
        </Form>
      </div>
      <div className="h-[800px] flex justify-center items-center text-4xl mt-12">
        <h1>AD</h1>
      </div>
    </div>
  );
};

export default LoginForm;
