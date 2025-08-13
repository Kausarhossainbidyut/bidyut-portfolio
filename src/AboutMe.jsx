import React from "react";
import { Link } from "react-router";
//import { FaBoxOpen, FaFileAlt, FaUsers, FaLaptopCode } from "react-icons/fa";
// import profileImage from "../assets/your-image.jpg"; // Replace with your image

// const stats = [
//     { icon: <FaBoxOpen />, number: "4+", label: "Years Experience" },
//     { icon: <FaFileAlt />, number: "20+", label: "Projects Completed" },
//     { icon: <FaUsers />, number: "30+", label: "Happy Clients" },
//     { icon: <FaLaptopCode />, number: "50K+", label: "Lines of Code" },
// ];

const AboutMe = () => {
    return (
        <div>
            <section className="max-w-7xl mx-auto px-6 py-16 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-lg flex flex-col md:flex-row gap-12">

                {/* Left Image */}
                <div className=" flex-1 rounded-2xl  shadow-lg">
                    <img
                        src="https://i.ibb.co.com/DfbcJKZT/programming-background-with-person-working-with-codes-computer.jpg"
                        alt="Md Kausar Hossain Bidyut"
                        className="w-full h-full object-cover rounded-2xl shadow-lg"
                    />

                </div>

                {/* Right Content */}
                <div className="flex-1 flex flex-col justify-center space-y-6">

                    {/* Title */}
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
                        About <span className="text-indigo-600">Me</span>
                    </h2>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed max-w-lg text-lg">
                        I’m a passionate full-stack developer and a Computer Science undergraduate, dedicated to crafting clean, efficient, and user-friendly web solutions. Currently, I’m diving deeper into React.js, Node.js, and other modern technologies to build scalable and impactful applications. I love learning new skills and continuously growing in the world of software development.
                    </p>

                    {/* Personal Info */}
                    <div className="flex gap-10  ">
                        <div className="space-y-3 text-[16px]">
                            <p>Full Name:</p>
                            <p>Address:</p>
                            <p>Email:</p>
                            <p>Phone:</p>
                        </div>
                        <div className="space-y-3 text-[16px]">
                            <p>Md Kausar Hossain Bidyut</p>
                            <p>Dhaka, Bangladesh</p>
                            <p className="text-purple-500 hover:underline">khbidyut31@gmail.com</p>
                            <p className="text-purple-500 hover:underline ">+8801796-343549</p>
                        </div>
                    </div>


                    {/* Contact Button */}
                    <Link to={'/contact'} className="inline-block max-w-max px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium rounded-lg shadow hover:shadow-lg hover:brightness-110 transition duration-300">
                        Contact Me
                    </Link>

                    {/* Stats */}
                    {/* <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-10 max-w-lg">
                    {stats.map(({ icon, number, label }, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl p-5 shadow hover:shadow-lg transition flex flex-col items-center"
                        >
                            <div className="text-indigo-500 text-4xl mb-2">{icon}</div>
                            <div className="font-bold text-2xl">{number}</div>
                            <div className="text-gray-500 text-sm">{label}</div>
                        </div>
                    ))}
                </div> */}

                </div>
            </section>
            
        </div>

    );
};

export default AboutMe;
