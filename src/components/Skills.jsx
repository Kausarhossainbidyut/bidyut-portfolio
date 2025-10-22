import React from "react";
import { motion } from "framer-motion";
import {
    SiHtml5,
    SiCss3,
    SiTailwindcss,
    SiJavascript,
    SiReact,
    SiExpress,
    SiNodedotjs,
    SiMongodb,
    SiPostman,
    SiVercel,
    SiFirebase,
    SiJsonwebtokens,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const skills = [
    { name: "HTML5", icon: <SiHtml5 className="text-orange-500" size={40} /> },
    { name: "CSS3", icon: <SiCss3 className="text-blue-500" size={40} /> },
    { name: "TailwindCSS", icon: <SiTailwindcss className="text-cyan-400" size={40} /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" size={40} /> },
    { name: "React", icon: <SiReact className="text-cyan-500" size={40} /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-700" size={40} /> },
    { name: "Node.js", icon: <SiNodedotjs className="text-green-500" size={40} /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600" size={40} /> },
    { name: "Postman", icon: <SiPostman className="text-orange-400" size={40} /> },
    { name: "Vercel", icon: <SiVercel className="text-black" size={40} /> },
    { name: "Firebase", icon: <SiFirebase className="text-yellow-500" size={40} /> },
    { name: "JWT", icon: <SiJsonwebtokens className="text-pink-500" size={40} /> },
    { name: "VS Code", icon: <VscVscode className="text-blue-500" size={40} /> }
];

const Skills = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20, scale: 0.8 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 12
            }
        }
    };

    return (
        <section id="skills" className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-white via-purple-50 to-indigo-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                <motion.h2 
                    className="text-3xl sm:text-4xl md:text-5xl text-center mb-10 md:mb-14 font-extrabold text-gray-900"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Skills / <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Tools</span>
                </motion.h2>

                <motion.div 
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ 
                                scale: 1.15, 
                                rotate: [0, -10, 10, 0],
                                transition: { duration: 0.4 }
                            }}
                            whileTap={{ scale: 0.9 }}
                            role="button"
                            tabIndex={0}
                            className="flex flex-col items-center p-4 sm:p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer focus:outline-none focus:ring-4 focus:ring-indigo-300 group"
                        >
                            <motion.div
                                className="mb-3"
                                whileHover={{ rotate: 360, scale: 1.2 }}
                                transition={{ duration: 0.6 }}
                            >
                                {skill.icon}
                            </motion.div>
                            <p className="mt-2 text-sm sm:text-base md:text-lg font-semibold text-gray-800 group-hover:text-indigo-600 transition-colors text-center">{skill.name}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
