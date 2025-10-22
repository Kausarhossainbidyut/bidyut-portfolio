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
import { motion } from "framer-motion";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

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
    <motion.section
      id="contact"
      className="w-full bg-gradient-to-br from-purple-50/50 via-violet-50/50 to-fuchsia-50/50 dark:from-gray-900 dark:via-purple-950/10 dark:to-violet-950/10 py-16  relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {/* Simplified decorative elements */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-gradient-to-br from-purple-400/5 to-violet-400/5 dark:from-purple-500/3 dark:to-violet-500/3 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-gradient-to-br from-fuchsia-400/5 to-pink-400/5 dark:from-fuchsia-500/3 dark:to-pink-500/3 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2 
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Get In <span className="bg-gradient-to-r from-purple-600 via-violet-600 to-fuchsia-600 dark:from-purple-400 dark:via-violet-400 dark:to-fuchsia-400 bg-clip-text text-transparent">Touch</span>
        </motion.h2>
        
        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          {/* Left Info Panel */}
          <motion.div 
        className="w-full md:w-1/2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-md p-8 md:p-10 flex flex-col justify-center space-y-6 border border-gray-200/60 dark:border-gray-700/60 transition-all duration-300 hover:shadow-xl"
        variants={itemVariants}
      >
        <h3
          className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white"
        >
          Connect with Me
        </h3>

        <div className="space-y-4 text-gray-700 dark:text-gray-300 text-sm sm:text-base">
          <div className="flex items-center gap-4 p-3.5 rounded-lg bg-purple-50/50 dark:bg-purple-900/10 border border-purple-100 dark:border-purple-800/30 transition-all duration-300 hover:bg-purple-100/50 dark:hover:bg-purple-900/20">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-violet-500 flex items-center justify-center shadow-md flex-shrink-0">
              <FaEnvelope className="text-white w-4 h-4" />
            </div>
            <p className="break-all font-medium">khbidyut31@gmail.com</p>
          </div>
          <div className="flex items-center gap-4 p-3.5 rounded-lg bg-indigo-50/50 dark:bg-indigo-900/10 border border-indigo-100 dark:border-indigo-800/30 transition-all duration-300 hover:bg-indigo-100/50 dark:hover:bg-indigo-900/20">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center shadow-md flex-shrink-0">
              <FaPhoneAlt className="text-white w-4 h-4" />
            </div>
            <span className="font-medium">+880 1796-343549</span>
          </div>
          <div className="flex items-center gap-4 p-3.5 rounded-lg bg-fuchsia-50/50 dark:bg-fuchsia-900/10 border border-fuchsia-100 dark:border-fuchsia-800/30 transition-all duration-300 hover:bg-fuchsia-100/50 dark:hover:bg-fuchsia-900/20">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-fuchsia-500 to-purple-500 flex items-center justify-center shadow-md flex-shrink-0">
              <FaWhatsapp className="text-white w-4 h-4" />
            </div>
            <span className="font-medium">+880 1796-343549</span>
          </div>
          <div className="flex items-center gap-4 p-3.5 rounded-lg bg-pink-50/50 dark:bg-pink-900/10 border border-pink-100 dark:border-pink-800/30 transition-all duration-300 hover:bg-pink-100/50 dark:hover:bg-pink-900/20">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center shadow-md flex-shrink-0">
              <FaMapMarkerAlt className="text-white w-4 h-4" />
            </div>
            <span className="font-medium">Dhaka, Bangladesh</span>
          </div>
        </div>

        <div className="flex space-x-4 mt-8 text-2xl justify-center md:justify-start">
          <a
            href="https://www.linkedin.com/in/kausarhossainbidyut"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 text-white flex items-center justify-center shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Kausarhossainbidyut"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-lg bg-gradient-to-br from-gray-700 to-gray-800 dark:from-gray-600 dark:to-gray-700 text-white flex items-center justify-center shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://x.com/khbidyut31"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-lg bg-gradient-to-br from-sky-400 to-sky-500 text-white flex items-center justify-center shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300"
          >
            <FaTwitter />
          </a>
        </div>
          </motion.div>

          {/* Right Contact Form */}
          <motion.form
        onSubmit={handleSubmit}
        className="w-full md:w-1/2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-md p-8 md:p-10 flex flex-col justify-center space-y-5 border border-gray-200/60 dark:border-gray-700/60 transition-all duration-300 hover:shadow-xl"
        aria-label="Contact form"
        variants={itemVariants}
      >
        <h3
          className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white"
        >
          Send a Message
        </h3>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          className="border border-gray-300 dark:border-gray-600 dark:bg-gray-700/50 dark:text-white rounded-lg p-4 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
          disabled={sending}
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
          className="border border-gray-300 dark:border-gray-600 dark:bg-gray-700/50 dark:text-white rounded-lg p-4 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
          disabled={sending}
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows={5}
          value={form.message}
          onChange={handleChange}
          required
          className="border border-gray-300 dark:border-gray-600 dark:bg-gray-700/50 dark:text-white rounded-lg p-4 resize-none text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
          disabled={sending}
        />

        <button
          type="submit"
          disabled={sending}
          className={`bg-gradient-to-r from-purple-600 via-violet-600 to-fuchsia-600 hover:from-purple-700 hover:via-violet-700 hover:to-fuchsia-700 text-white font-bold py-4 rounded-lg shadow-lg text-sm sm:text-base transition-all duration-300 hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed`}
        >
          {sending ? "Sending..." : "Send Message"}
        </button>

        {success === true && (
          <motion.p
            className="text-green-700 dark:text-green-300 font-medium mt-2 text-sm sm:text-base bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-700"
            role="alert"
            tabIndex={0}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Message sent successfully!
            </span>
          </motion.p>
        )}
        {success === false && (
          <motion.p
            className="text-red-700 dark:text-red-300 font-medium mt-2 text-sm sm:text-base bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-700"
            role="alert"
            tabIndex={0}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
              Failed to send message. Please try again.
            </span>
          </motion.p>
        )}
        </motion.form>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactForm;
