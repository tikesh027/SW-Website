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
    <div className="px-[100px] py-[50px]">
      <div className="border-2 border-black rounded-none shadow-lg p-[120px] mx-auto">
        <div className="text-4xl font-semibold mb-8 text-center">
          Reset Password
        </div>
        <Form onSubmit={handleSubmit}>
          {/* New Password */}
          <Form.Group controlId="formNewPassword" className="mb-6">
            <Form.Label className="text-2xl">New Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter new password"
              name="newPassword"
              value={formData.newPassword}
              onChange={handleChange}
              className="w-full px-5 py-3 h-[90px] bg-green-300 rounded-md text-black border-2 border-black focus:outline-none focus:bg-green-200"
            />
          </Form.Group>

          {/* Confirm New Password */}
          <Form.Group controlId="formConfirmPassword" className="mb-6">
            <Form.Label className="text-2xl">Confirm New Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm new password"
              name="confirmPassword"
              value={formData.confirmPassword}
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
              Reset Password
            </Button>
          </div>
          <div className="flex justify-center items-center flex-col gap-3 text-2xl mt-4">
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
