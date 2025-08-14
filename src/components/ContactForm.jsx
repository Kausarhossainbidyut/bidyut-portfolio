import React, { useState } from "react";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setSuccess(null);

    const serviceID = "service_msnxizb";
    const templateID = "template_2g6djjp";
    const userID = "liFCmNewJZ0LtESVB";

    emailjs
      .send(serviceID, templateID, form, userID)
      .then(() => {
        setSuccess(true);
        setForm({ name: "", email: "", message: "" });
      })
      .catch(() => {
        setSuccess(false);
      })
      .finally(() => {
        setSending(false);
      });
  };

  return (
    <section
      id="contact"
      className="w-full bg-gradient-to-tr from-green-50 via-white to-green-50 flex flex-col md:flex-row gap-6 md:gap-12 px-4 sm:px-6 lg:px-8 py-8 md:py-12"
    >
      {/* Left Info Panel */}
      <div className="w-full md:w-1/2 bg-white rounded-2xl shadow-md p-6 sm:p-8 flex flex-col justify-start md:justify-center space-y-6">
        <h2
          className="text-2xl sm:text-3xl font-extrabold text-green-900 select-none"
          tabIndex={-1}
        >
          Connect with Me
        </h2>

        <div className="space-y-4 sm:space-y-5 text-gray-700 text-sm sm:text-base">
          <div className="flex items-center gap-3">
            <FaEnvelope className="text-green-600 w-5 h-5 sm:w-6 sm:h-6" />
            <p>khbidyut31@gmail.com</p>
          </div>
          <div className="flex items-center gap-3">
            <FaPhoneAlt className="text-green-600 w-5 h-5 sm:w-6 sm:h-6" />
            <span className="text-xs sm:text-sm">+880 1796-343549</span>
          </div>
          <div className="flex items-center gap-3">
            <FaWhatsapp className="text-green-600 w-5 h-5 sm:w-6 sm:h-6" />
            <span className="text-xs sm:text-sm">+880 1796-343549</span>
          </div>
          <div className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-green-600 w-5 h-5 sm:w-6 sm:h-6" />
            <span className="text-xs sm:text-sm">Dhaka, Bangladesh</span>
          </div>
        </div>

        <div className="flex space-x-4 sm:space-x-6 mt-4 sm:mt-6 text-gray-700 text-xl sm:text-2xl">
          <a
            href="https://www.linkedin.com/in/kausarhossainbidyut"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-600 transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Kausarhossainbidyut"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-600 transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://x.com/khbidyut31"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-600 transition-colors"
          >
            <FaTwitter />
          </a>
        </div>
      </div>

      {/* Right Contact Form */}
      <form
        onSubmit={handleSubmit}
        className="w-full md:w-1/2 bg-white rounded-2xl shadow-md p-6 sm:p-8 flex flex-col justify-start md:justify-center space-y-4"
        aria-label="Contact form"
      >
        <h2
          className="text-xl sm:text-2xl font-extrabold text-green-900 mb-4 select-none"
          tabIndex={-1}
        >
          Send a Message
        </h2>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          className="border border-green-300 rounded-md p-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-green-400 transition shadow-sm"
          disabled={sending}
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
          className="border border-green-300 rounded-md p-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-green-400 transition shadow-sm"
          disabled={sending}
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows={5}
          value={form.message}
          onChange={handleChange}
          required
          className="border border-green-300 rounded-md p-3 resize-none text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-green-400 transition shadow-sm"
          disabled={sending}
        />

        <button
          type="submit"
          disabled={sending}
          className={`bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white font-semibold py-2 rounded-md transition shadow-md ${
            sending ? "opacity-70 cursor-not-allowed" : ""
          }`}
        >
          {sending ? "Sending..." : "Send Email"}
        </button>

        {success === true && (
          <p
            className="text-green-600 font-semibold mt-2 text-sm sm:text-base"
            role="alert"
            tabIndex={0}
          >
            Message sent successfully!
          </p>
        )}
        {success === false && (
          <p
            className="text-red-600 font-semibold mt-2 text-sm sm:text-base"
            role="alert"
            tabIndex={0}
          >
            Failed to send message. Please try again.
          </p>
        )}
      </form>
    </section>
  );
};

export default ContactForm;
