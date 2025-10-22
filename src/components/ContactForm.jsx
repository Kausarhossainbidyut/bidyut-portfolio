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
      className="w-full bg-gradient-to-br from-green-50 via-white to-green-100 py-12 md:py-16 lg:py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-10 md:mb-14 text-gray-900"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Get In <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Touch</span>
        </motion.h2>
        
        <div className="flex flex-col md:flex-row gap-6 md:gap-12">
          {/* Left Info Panel */}
          <motion.div 
        className="w-full md:w-1/2 bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-10 flex flex-col justify-center space-y-6"
        variants={itemVariants}
      >
        <h2
          className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-green-700 to-emerald-700 bg-clip-text text-transparent select-none"
          tabIndex={-1}
        >
          Connect with Me
        </h2>

        <div className="space-y-4 sm:space-y-5 text-gray-700 text-sm sm:text-base">
          <motion.div 
            className="flex items-center gap-3 sm:gap-4 p-3 rounded-lg hover:bg-green-50 transition-colors"
            whileHover={{ x: 10, backgroundColor: "#f0fdf4" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaEnvelope className="text-green-600 w-6 h-6 sm:w-7 sm:h-7 flex-shrink-0" />
            <p className="break-all">khbidyut31@gmail.com</p>
          </motion.div>
          <motion.div 
            className="flex items-center gap-3 sm:gap-4 p-3 rounded-lg hover:bg-green-50 transition-colors"
            whileHover={{ x: 10, backgroundColor: "#f0fdf4" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaPhoneAlt className="text-green-600 w-6 h-6 sm:w-7 sm:h-7 flex-shrink-0" />
            <span className="text-sm sm:text-base">+880 1796-343549</span>
          </motion.div>
          <motion.div 
            className="flex items-center gap-3 sm:gap-4 p-3 rounded-lg hover:bg-green-50 transition-colors"
            whileHover={{ x: 10, backgroundColor: "#f0fdf4" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaWhatsapp className="text-green-600 w-6 h-6 sm:w-7 sm:h-7 flex-shrink-0" />
            <span className="text-sm sm:text-base">+880 1796-343549</span>
          </motion.div>
          <motion.div 
            className="flex items-center gap-3 sm:gap-4 p-3 rounded-lg hover:bg-green-50 transition-colors"
            whileHover={{ x: 10, backgroundColor: "#f0fdf4" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaMapMarkerAlt className="text-green-600 w-6 h-6 sm:w-7 sm:h-7 flex-shrink-0" />
            <span className="text-sm sm:text-base">Dhaka, Bangladesh</span>
          </motion.div>
        </div>

        <div className="flex space-x-4 sm:space-x-6 mt-6 sm:mt-8 text-gray-700 text-2xl sm:text-3xl justify-center md:justify-start">
          <motion.a
            href="https://www.linkedin.com/in/kausarhossainbidyut"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-600 p-3 rounded-full hover:bg-green-50 transition-all"
            whileHover={{ scale: 1.3, rotate: 360 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href="https://github.com/Kausarhossainbidyut"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-600 p-3 rounded-full hover:bg-green-50 transition-all"
            whileHover={{ scale: 1.3, rotate: -360 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="https://x.com/khbidyut31"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-600 p-3 rounded-full hover:bg-green-50 transition-all"
            whileHover={{ scale: 1.3, rotate: 360 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaTwitter />
          </motion.a>
        </div>
          </motion.div>

          {/* Right Contact Form */}
          <motion.form
        onSubmit={handleSubmit}
        className="w-full md:w-1/2 bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-10 flex flex-col justify-center space-y-5"
        aria-label="Contact form"
        variants={itemVariants}
      >
        <h2
          className="text-xl sm:text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-green-700 to-emerald-700 bg-clip-text text-transparent select-none"
          tabIndex={-1}
        >
          Send a Message
        </h2>

        <motion.input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          className="border-2 border-green-300 rounded-xl p-3.5 sm:p-4 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all shadow-sm"
          disabled={sending}
          whileFocus={{ scale: 1.02, boxShadow: "0 0 0 4px rgba(34, 197, 94, 0.2)" }}
          transition={{ duration: 0.2 }}
        />

        <motion.input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
          className="border-2 border-green-300 rounded-xl p-3.5 sm:p-4 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all shadow-sm"
          disabled={sending}
          whileFocus={{ scale: 1.02, boxShadow: "0 0 0 4px rgba(34, 197, 94, 0.2)" }}
          transition={{ duration: 0.2 }}
        />

        <motion.textarea
          name="message"
          placeholder="Your Message"
          rows={5}
          value={form.message}
          onChange={handleChange}
          required
          className="border-2 border-green-300 rounded-xl p-3.5 sm:p-4 resize-none text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all shadow-sm"
          disabled={sending}
          whileFocus={{ scale: 1.02, boxShadow: "0 0 0 4px rgba(34, 197, 94, 0.2)" }}
          transition={{ duration: 0.2 }}
        />

        <motion.button
          type="submit"
          disabled={sending}
          className={`bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold py-3.5 sm:py-4 rounded-xl shadow-lg text-sm sm:text-base ${
            sending ? "opacity-70 cursor-not-allowed" : ""
          }`}
          whileHover={!sending ? { scale: 1.05, boxShadow: "0 20px 40px rgba(34, 197, 94, 0.3)" } : {}}
          whileTap={!sending ? { scale: 0.95 } : {}}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          {sending ? "Sending..." : "Send Email"}
        </motion.button>

        {success === true && (
          <motion.p
            className="text-green-600 font-bold mt-2 text-sm sm:text-base bg-green-50 p-3 rounded-lg"
            role="alert"
            tabIndex={0}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            ✓ Message sent successfully!
          </motion.p>
        )}
        {success === false && (
          <motion.p
            className="text-red-600 font-bold mt-2 text-sm sm:text-base bg-red-50 p-3 rounded-lg"
            role="alert"
            tabIndex={0}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            ✗ Failed to send message. Please try again.
          </motion.p>
        )}
        </motion.form>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactForm;
