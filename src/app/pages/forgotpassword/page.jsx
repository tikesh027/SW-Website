"use client";
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Link from "next/link";

const ForgotPasswordForm = () => {
  const [formData, setFormData] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle password reset logic
    console.log(formData);
  };

  return (
    <div className="px-4 md:px-20 lg:px-[100px] py-[50px]">
      <div className="border-2 border-black rounded-none shadow-lg p-[30px] md:p-[60px] lg:p-[120px] mx-auto max-w-md md:max-w-2xl">
        <div className="text-3xl md:text-4xl lg:text-4xl font-semibold mb-[60px] text-center">
          Reset Password
        </div>
        <Form onSubmit={handleSubmit}>
          {/* New Password */}
          <Form.Group controlId="formNewPassword" className="mb-10">
            <Form.Label className="text-lg md:text-2xl lg:text-2xl">
              New Password
            </Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter new password"
              name="newPassword"
              value={formData.newPassword}
              onChange={handleChange}
              className="w-full px-5 py-3 h-[50px] md:h-[50px] lg:h-[80px] bg-green-300 rounded-md focus:outline-none focus:bg-green-200"
            />
          </Form.Group>

          {/* Confirm New Password */}
          <Form.Group controlId="formConfirmPassword" className="mb-10">
            <Form.Label className="text-lg md:text-xl lg:text-2xl">
              Confirm New Password
            </Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm new password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-5 py-3 h-[50px] md:h-[50px] lg:h-[80px] bg-green-300 rounded-md focus:outline-none focus:bg-green-200"
            />
          </Form.Group>

          {/* Submit Button */}
          <div className="flex justify-center">
            <Button
              variant="primary"
              type="submit"
              className="rounded-full px-8 md:px-10 lg:px-12 py-2 bg-yellow-500 hover:bg-yellow-600 border-none text-black text-lg md:text-xl lg:text-2xl"
            >
              Reset Password
            </Button>
          </div>
          <div className="flex justify-center items-center flex-col gap-3 text-lg md:text-xl lg:text-2xl mt-4">
            <Link href="/pages/signin">Back to Login</Link>
          </div>
        </Form>
      </div>
      <div className="h-[800px] flex justify-center items-center text-4xl mt-12">
        <h1>AD</h1>
      </div>
    </div>
  );
};

export default ForgotPasswordForm;
