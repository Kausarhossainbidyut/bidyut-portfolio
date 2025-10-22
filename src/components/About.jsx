import React from 'react';
import { FaFileDownload, FaFolderOpen, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import heroImg from '../assets/hero.jpg';
import { Link } from 'react-router';
import { Typewriter, Cursor } from "react-simple-typewriter";
import { motion } from 'framer-motion';
const About = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    return (
        <section id='home' className="bg-gradient-to-br from-purple-50 via-violet-50 to-fuchsia-50 dark:from-gray-900 dark:via-purple-950/20 dark:to-violet-950/20 py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">

                {/* Left Text */}
                <motion.div 
                    className="flex-1 text-center md:text-left w-full"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.span 
                        className="inline-block px-4 py-2 text-xs sm:text-sm bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/40 dark:to-purple-900/40 text-indigo-700 dark:text-indigo-300 rounded-full font-semibold shadow-sm"
                        variants={itemVariants}
                    >
                        👋 Welcome to my portfolio
                    </motion.span>

                    <motion.h1 
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mt-6 md:mt-10 text-gray-900 dark:text-white"
                        variants={itemVariants}
                    >
                        Hi, I'm <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Bidyut</span>
                    </motion.h1>

                    <motion.h2 
                        className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mt-3 md:mt-4"
                        variants={itemVariants}
                    >
                        {" "}
                        <span className="text-gray-600 dark:text-gray-400">
                            <Typewriter
                                words={[
                                    "FullStack Developer",
                                    "Problem Solver",
                                    "MERN Specialist",
                                    "Project Management",
                                ]}
                                loop={0}
                                typeSpeed={150}
                                deleteSpeed={120}
                                delaySpeed={1800}
                            />
                        </span>
                        <span className="text-gray-600 dark:text-gray-400">
                            <Cursor cursorStyle="|" cursorBlinking />
                        </span>
                    </motion.h2>

                    <motion.p 
                        className="text-gray-600 dark:text-gray-400 text-base sm:text-lg md:text-xl mt-4 md:mt-6 leading-relaxed max-w-2xl mx-auto md:mx-0"
                        variants={itemVariants}
                    >
                        I'm a dedicated full-stack developer specializing in the MERN stack, with solid project management experience. I enjoy building efficient, user-friendly applications and leading teams to deliver successful projects.
                    </motion.p>

                    <motion.div 
                        className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 md:mt-8 justify-center md:justify-start"
                        variants={itemVariants}
                    >
                        <motion.a 
                            href='#projects'
                            className="flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white rounded-xl shadow-lg font-semibold text-sm sm:text-base cursor-pointer"
                            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(99, 102, 241, 0.3)" }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                            <FaFolderOpen size={20} />
                            <span>View Projects</span>
                        </motion.a>
                        <motion.a
                            href="https://drive.google.com/uc?export=download&id=1IuKFl0E7xZJ_F2aeEcHWQFpjA32KS8ZJ"
                            className="flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-xl shadow-lg font-semibold text-sm sm:text-base cursor-pointer"
                            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                            download
                        >
                            <FaFileDownload size={20} />
                            <span className="hidden sm:inline">Download</span>
                            <span>Resume</span>
                        </motion.a>
                    </motion.div>



                    {/* Stylish Social Links */}
                    <motion.div 
                        className="flex justify-center md:justify-start gap-4 mt-8 md:mt-10 text-xl pb-6 md:pb-0"
                        variants={itemVariants}
                    >
                        <motion.div
                            whileHover={{ scale: 1.2, rotate: 360 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                            <Link 
                                to={"https://github.com/Kausarhossainbidyut"}
                                aria-label="GitHub"
                                className="p-4 rounded-full bg-gradient-to-br from-gray-800 to-black text-white shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-gray-700 inline-block transition-all"
                            >
                                <FaGithub />
                            </Link>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.2, rotate: -360 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                            <Link 
                                to={"https://www.linkedin.com/in/kausarhossainbidyut/"}
                                aria-label="LinkedIn"
                                className="p-4 rounded-full bg-gradient-to-br from-blue-600 to-blue-500 text-white shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-400 inline-block transition-all"
                            >
                                <FaLinkedinIn />
                            </Link>
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* Right Image */}
                <motion.div 
                    className="flex-1 flex justify-center md:justify-end w-full order-first md:order-last"
                    variants={imageVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div 
                        className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-white dark:border-gray-700 ring-4 ring-indigo-200 dark:ring-indigo-800 group"
                        whileHover={{ scale: 1.05, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    >
                        <img
                            src={heroImg}
                            alt="Portrait of Bidyut, full stack developer"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        {/* Subtle overlay in dark mode for better contrast */}
                        <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/20 to-transparent dark:from-indigo-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
