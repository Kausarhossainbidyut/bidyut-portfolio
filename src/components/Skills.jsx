import React from "react";
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
    return (
        <div className="py-16 bg-white">
            <h2 className="text-4xl font-bold  text-gray-800">

            </h2>
            <h2 className="text-4xl md:text-5xl text-center mb-10 font-extrabold text-gray-900">
                Skills / <span className="text-indigo-600">Tools</span>
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 max-w-6xl mx-auto px-4">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        role="button"
                        tabIndex={0}
                        className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        {skill.icon}
                        <p className="mt-3 text-lg font-medium text-gray-800">{skill.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
