import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-black dark:via-gray-900 dark:to-black text-white py-6 sm:py-8">
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-col items-center space-y-4">
          <motion.div 
            className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            Bidyut.
          </motion.div>
          
          <p className="text-center text-sm sm:text-base text-gray-300 dark:text-gray-400">
            Full Stack Developer | MERN Specialist | Problem Solver
          </p>
          
          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>
          
          <motion.p 
            className="text-center text-xs sm:text-sm text-gray-400 dark:text-gray-500"
            whileHover={{ scale: 1.02 }}
          >
            © {new Date().getFullYear()} Md Kausar Hossain Bidyut. All rights reserved.
          </motion.p>
          
          <p className="text-center text-xs text-gray-500 dark:text-gray-600">
            Built with ❤️ 
          </p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
