import React from 'react';
import { FaFileDownload, FaFolderOpen, FaGithub, FaLinkedinIn } from 'react-icons/fa';
//import { MdEmail } from 'react-icons/md';
import heroImg from '../assets/hero.jpg'; // Add your image path here
import { NavLink } from "react-router";
import { Link } from 'react-router';
import { Typewriter, Cursor } from "react-simple-typewriter";
// import "./cursorStyle/cursorStyle.css";
const About = () => {
    return (
        <section className="bg-gray-50 py-17  sm:px-6 md:px-0" >
            <div className="px-[24px] mx-auto flex flex-col md:flex-row items-center ">

                {/* Left Text */}
                <div className="flex-1 text-center pt-2 md:text-left">
                    <span className="px-4 py-2  text-sm bg-blue-100 text-blue-600 rounded-full">
                        Welcome to my portfolio
                    </span>

                    <h1 className="text-4xl mt-10 md:text-5xl lg:text-6xl font-bold leading-tight">
                        Hi, I'm <span className="text-blue-500">Bidyut</span>
                    </h1>

                    <h2 className="text-2xl md:text-3xl font-medium text-gray-600 mt-2">
                       {" "}
                        <span className="text-gray-600">
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
                        <span className="text-gray-600 ">
                            <Cursor cursorStyle="|" cursorBlinking />
                        </span>
                    </h2>

                    <p className="text-gray-600 text-[21px] mt-6 leading-relaxed ">
                        I’m a dedicated full-stack developer specializing in the MERN stack, with solid project management experience. I enjoy building efficient, user-friendly applications and leading teams to deliver successful projects.
                    </p>

                    <div className="flex flex-row gap-4 mt-8 justify-center md:justify-start">
                        <NavLink to={'/projects'}
                            className="flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow hover:shadow-lg hover:scale-102 cursor-pointer transition-all "
                        >
                            <FaFolderOpen size={20} />
                            View Projects
                        </NavLink>
                        <NavLink
                            className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-gray-800 via-blue-900 to-blue-800 text-white rounded-lg hover:shadow-lg hover:scale-102 cursor-pointer transition-all "
                        >
                            <FaFileDownload size={20} />
                            Resume
                        </NavLink>
                    </div>



                    {/* Stylish Social Links */}
                    <div className="flex justify-center pb-6 md:justify-start gap-4 mt-10 text-xl">
                        <Link to={"https://github.com/Kausarhossainbidyut"}
                            aria-label="GitHub"
                            className="p-3 rounded-full bg-gradient-to-br from-gray-800 to-black text-white shadow-md
              hover:scale-107 focus:outline-none focus:ring-4 focus:ring-gray-700 transition-transform"
                        >
                            <FaGithub />
                        </Link>
                        <Link to={"https://www.linkedin.com/in/kausarhossainbidyut/"}
                            href="#"
                            aria-label="LinkedIn"
                            className="p-3 rounded-full bg-gradient-to-br from-blue-600 to-blue-400 text-white shadow-md
              hover:scale-107 focus:outline-none focus:ring-4 focus:ring-blue-400 transition-transform"
                        >
                            <FaLinkedinIn />
                        </Link>
                        {/* <Link to={"khbidyut31@gmai.com"}
                            aria-label="Email"
                            className="p-3 rounded-full bg-gradient-to-br from-pink-500 to-red-400 text-white shadow-md
              hover:scale-107 focus:outline-none focus:ring-4 focus:ring-pink-400 transition-transform"
                        >
                            <MdEmail />
                        </Link> */}
                    </div>
                </div>

                {/* Right Image */}
                <div className="flex-1 flex justify-center md:justify-end">
                    <div className="relative w-80 h-80 md:w-96 md:h-96 mx-auto rounded-full overflow-hidden  shadow-lg border-4 border-white">
                        <img
                            src={heroImg}
                            alt="Portrait of Hamid, full stack developer"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
