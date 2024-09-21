"use client";
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
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
    <div className="px-10 md:px-10 lg:px-20">
      <div className="text-3xl md:text-4xl font-semibold mt-4 md:mt-8">
        Contact Us
      </div>
      <div className="mt-8">
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formFirstName">
            <Form.Label className="text-lg md:text-2xl">
              First Name (Required)
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your first name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-2 h-[60px] md:h-[80px] bg-green-300 rounded-none text-black border-2 focus:outline-none focus:bg-green-300 border-black"
            />
          </Form.Group>

          <Form.Group controlId="formLastName" className="mt-4">
            <Form.Label className="text-lg md:text-2xl">
              Last Name (Required)
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your last name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-2 h-[60px] md:h-[80px] bg-green-300 rounded-none text-black border-2 focus:outline-none focus:bg-green-300 border-black"
            />
          </Form.Group>

          <Form.Group controlId="formEmail" className="mt-4">
            <Form.Label className="text-lg md:text-2xl">
              Your Email (Required)
            </Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-2 h-[60px] md:h-[80px] bg-green-300 rounded-none text-black border-2 focus:outline-none focus:bg-green-300 border-black"
            />
          </Form.Group>

          <Form.Group controlId="formSubject" className="mt-4">
            <Form.Label className="text-lg md:text-2xl">Subject</Form.Label>
            <Form.Control
              type="text"
              placeholder="Subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-2 h-[60px] md:h-[80px] bg-green-300 rounded-none text-black border-2 focus:outline-none focus:bg-green-300 border-black"
            />
          </Form.Group>

          <Form.Group controlId="formMessage" className="mt-4">
            <Form.Label className="text-lg md:text-2xl">
              Your Message (Required)
            </Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              placeholder="Your Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-2 bg-green-300 rounded-none text-black border-2 focus:outline-none focus:bg-green-300 border-black"
            />
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            className="mt-6 rounded-[50px] px-8 md:px-10 bg-yellow-500 focus:bg-yellow-500 hover:bg-yellow-600 border-none h-[50px] md:h-[60px] w-full md:w-[200px] text-black text-lg md:text-2xl"
          >
            Submit
          </Button>
        </Form>
      </div>
      <div className="h-[800px] flex justify-center items-center text-4xl mt-10">
        <h1>AD</h1>
      </div>
    </div>
  );
};

export default ContactUs;
