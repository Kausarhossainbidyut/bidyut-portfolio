import React from "react";
import { motion } from "framer-motion";
//import { FaBoxOpen, FaFileAlt, FaUsers, FaLaptopCode } from "react-icons/fa";
// import profileImage from "../assets/your-image.jpg"; // Replace with your image

// const stats = [
//     { icon: <FaBoxOpen />, number: "4+", label: "Years Experience" },
//     { icon: <FaFileAlt />, number: "20+", label: "Projects Completed" },
//     { icon: <FaUsers />, number: "30+", label: "Happy Clients" },
//     { icon: <FaLaptopCode />, number: "50K+", label: "Lines of Code" },
// ];

const AboutMe = () => {
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
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const imageVariants = {
        hidden: { opacity: 0, x: 50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <div>
            <motion.section 
                id="about" 
                className="mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-16 lg:py-20 bg-gradient-to-br from-gray-50 via-white to-indigo-50 rounded-2xl shadow-xl my-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={containerVariants}
            >

                <div className="flex flex-col md:flex-row gap-8 md:gap-12 max-w-7xl mx-auto">
                {/* Left Image */}
                <motion.div 
                    className="flex-1 rounded-2xl shadow-2xl overflow-hidden order-first md:order-first"
                    variants={imageVariants}
                >
                    <motion.img
                        src="https://i.ibb.co.com/DfbcJKZT/programming-background-with-person-working-with-codes-computer.jpg"
                        alt="Md Kausar Hossain Bidyut"
                        className="w-full h-64 sm:h-80 md:h-full object-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.4 }}
                    />
                </motion.div>

                {/* Right Content */}
                <motion.div 
                    className="flex-1 flex flex-col justify-center space-y-4 md:space-y-6"
                    variants={containerVariants}
                >

                    {/* Title */}
                    <motion.h2 
                        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 text-center md:text-left"
                        variants={itemVariants}
                    >
                        About <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Me</span>
                    </motion.h2>

                    {/* Description */}
                    <motion.p 
                        className="text-gray-600 leading-relaxed text-base sm:text-lg max-w-full text-center md:text-left"
                        variants={itemVariants}
                    >
                        I'm a passionate full-stack developer and a Computer Science undergraduate, dedicated to crafting clean, efficient, and user-friendly web solutions. Currently, I'm diving deeper into React.js, Node.js, and other modern technologies to build scalable and impactful applications. I love learning new skills and continuously growing in the world of software development.
                    </motion.p>

                    {/* Personal Info */}
                    <motion.div 
                        className="flex flex-col sm:flex-row gap-4 sm:gap-10 text-center md:text-left"
                        variants={itemVariants}
                    >
                        <div className="space-y-3 text-sm sm:text-base font-semibold text-gray-500">
                            <p>Full Name:</p>
                            <p>Address:</p>
                            <p>Email:</p>
                            <p>Phone:</p>
                        </div>
                        <div className="space-y-3 text-sm sm:text-base text-gray-800">
                            <p className="font-medium">Md Kausar Hossain Bidyut</p>
                            <p className="font-medium">Dhaka, Bangladesh</p>
                            <p className="text-purple-600 hover:text-purple-700 hover:underline transition-colors cursor-pointer">khbidyut31@gmail.com</p>
                            <p className="text-purple-600 hover:text-purple-700 hover:underline transition-colors cursor-pointer">+8801796-343549</p>
                        </div>
                    </motion.div>


                    {/* Contact Button */}
                    <motion.a 
                        href="#contact" 
                        className="inline-block mx-auto md:mx-0 max-w-max px-8 py-3.5 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-semibold rounded-xl shadow-lg text-sm sm:text-base"
                        variants={itemVariants}
                        whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(99, 102, 241, 0.3)" }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                        Contact Me
                    </motion.a>
                </motion.div>
                </div>
            </motion.section>
            
        </div>

    );
};

export default AboutMe;
