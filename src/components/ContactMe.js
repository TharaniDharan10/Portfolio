import React, { useState } from "react";
import emailjs from "emailjs-com";

function ContactMe() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vqu6lse", // Replace with your Service ID from EmailJS
        "template_t8wp32r", // Replace with your Template ID from EmailJS
        e.target,
        "s5k3UIxyIcUzgo07q" // Replace with your User ID from EmailJS
      )
      .then(
        (result) => {
          console.log("Message sent successfully", result.text);
          alert("Your message has been sent!");
        },
        (error) => {
          console.error("Error sending message", error.text);
          alert("Something went wrong. Please try again later.");
        }
      );
  };

  return (
    <div>
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          required
        />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default ContactMe;
