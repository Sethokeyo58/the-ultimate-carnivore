import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace these with your EmailJS values
    const serviceID = "service_ek5iplo";
    const templateID = "template_jt7p8lb";
    const publicKey = "ilnS4TOtyVHZ4S8bF";

    emailjs
      .send(
        serviceID,
        templateID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        publicKey
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setSubmitted(true);
          setError(null);
          setFormData({ name: "", email: "", message: "" });
        },
        (err) => {
          console.error("FAILED...", err);
          setError("Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6 mt-7 text-center">Contact Us</h2>
      {submitted && (
        <div className="mb-4 p-3 text-green-700 bg-green-100 rounded">
          Thank you for your message!
        </div>
      )}
      {error && (
        <div className="mb-4 p-3 text-red-700 bg-red-100 rounded">{error}</div>
      )}
      <form onSubmit={handleSubmit} noValidate>
        <label className="block mb-2 font-medium" htmlFor="name">
          Name
        </label>
        <input
          className="w-full px-3 py-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Your name"
        />

        <label className="block mb-2 font-medium" htmlFor="email">
          Email
        </label>
        <input
          className="w-full px-3 py-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="you@example.com"
        />

        <label className="block mb-2 font-medium" htmlFor="message">
          Message
        </label>
        <textarea
          className="w-full px-3 py-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          id="message"
          name="message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
          placeholder="Write your message here"
        ></textarea>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;