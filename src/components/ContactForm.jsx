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
    <section className="py-8 bg-gradient-to-tr from-green-50 via-white to-green-50 min-h-screen flex flex-col md:flex-row md:px-[40px] mx-auto px-4 gap-8">
      {/* Left Info Panel */}
      <div className="md:w-1/2 bg-white rounded-2xl shadow-md p-8 flex flex-col justify-center space-y-6">
        <h2
          className="text-3xl font-extrabold text-green-900 tracking-tight select-none"
          tabIndex={-1}
        >
          Connect with Me
        </h2>

        <div className="space-y-5 text-gray-700 text-sm md:text-base">
          <div className="flex items-center gap-3" aria-label="Email address">
            <FaEnvelope className="text-green-600 w-5 h-5 md:w-6 md:h-6" />
            <p
              className="hover:text-green-700 focus:outline-none focus:ring-1 focus:ring-green-600 rounded transition"
            >
              khbidyut31@gmail.com
            </p>
          </div>

          <div className="flex items-center gap-3" aria-label="Phone number">
            <FaPhoneAlt className="text-green-600 w-5 h-5 md:w-6 md:h-6" />
            <span className="text-xs md:text-sm">+880 1796-343549</span>
          </div>
          <div className="flex items-center gap-3" aria-label="Phone number">
            <FaWhatsapp className="text-green-600 w-5 h-5 md:w-6 md:h-6" />
            <span className="text-xs md:text-sm">+880 1796-343549</span>
          </div>

          <div className="flex items-center gap-3" aria-label="Location">
            <FaMapMarkerAlt className="text-green-600 w-5 h-5 md:w-6 md:h-6" />
            <span className="text-xs md:text-sm">Dhaka, Bangladesh</span>
          </div>
        </div>

        <div className="flex space-x-6 mt-8 text-gray-700 text-xl md:text-2xl">
          <a
            href="https://www.linkedin.com/in/kausarhossainbidyut"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-green-600 transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Kausarhossainbidyut"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-green-600 transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://x.com/khbidyut31"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="hover:text-green-600 transition-colors"
          >
            <FaTwitter />
          </a>
        </div>
      </div>

      {/* Right Contact Form */}
      <form
        onSubmit={handleSubmit}
        className="md:w-1/2 bg-white rounded-2xl shadow-md p-8 flex flex-col space-y-4"
        aria-label="Contact form"
      >
        <h2
          className="text-2xl font-extrabold text-green-900 mb-4 select-none"
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
          aria-required="true"
          className="border border-green-300 rounded-md p-3 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-green-400 transition shadow-sm"
          disabled={sending}
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
          aria-required="true"
          className="border border-green-300 rounded-md p-3 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-green-400 transition shadow-sm"
          disabled={sending}
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows={5}
          value={form.message}
          onChange={handleChange}
          required
          aria-required="true"
          className="border border-green-300 rounded-md p-3 resize-none text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-green-400 transition shadow-sm"
          disabled={sending}
        />

        <button
          type="submit"
          disabled={sending}
          className={`bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-md transition shadow-sm ${
            sending ? "opacity-70 cursor-not-allowed" : ""
          }`}
        >
          {sending ? "Sending..." : "Send Email"}
        </button>

        {success === true && (
          <p
            className="text-green-600 font-semibold mt-2"
            role="alert"
            tabIndex={0}
          >
            Message sent successfully!
          </p>
        )}
        {success === false && (
          <p
            className="text-red-600 font-semibold mt-2"
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
