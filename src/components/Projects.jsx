import React, { useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaEye } from "react-icons/fa";

const projectsData = [
  {
    id: 1,
    name: "BloodConnect",
    image: "https://i.ibb.co/BMPNmmX/finall-project.jpg",
    techStack: [
      "React",
      "Node.js",
      "Express.js",
      "JavaScript",
      "Tailwind CSS",
      "MongoDB",
      "HTML",
      "CSS",
    ],
    description:
      "BloodConnect is a community-driven platform that bridges the gap between blood donors and recipients. It empowers users to save lives by making blood donation accessible, easy, and impactful through real-time connectivity and seamless user experience.",
    liveLink: "https://assignment-12-b4719.web.app/",
    githubClient: "https://github.com/Kausarhossainbidyut/BloodConnect-client-side",
    challenges:
      "Ensuring smooth real-time updates for donor availability, optimizing backend API performance under high load, and maintaining secure user authentication across devices.",
    improvements:
      "Integrate a blog section for awareness articles, implement multi-language support for wider reach, and add an AI-powered matching system to improve donor-recipient pairing.",
  },
  {
    id: 2,
    name: "FoodBond",
    image: "https://i.ibb.co/4hVwkPv/res.jpg",
    techStack: [
      "React",
      "Node.js",
      "Express.js",
      "JavaScript",
      "Tailwind CSS",
      "MongoDB",
      "HTML",
      "CSS",
    ],
    description:
      "FoodBond connects food lovers to promote sharing and reduce food waste. The platform encourages users to discover, share, and enjoy delicious food responsibly, fostering a sustainable community-driven movement towards food conservation.",
    liveLink: "https://assignment-11-2a60f.web.app/",
    githubClient: "https://github.com/Kausarhossainbidyut/FoodBond-client-side",
    challenges:
      "Managing complex application state with numerous user interactions, securing online transactions, and handling inventory updates in real-time.",
    improvements:
      "Introduce personalized product recommendations based on user preferences and history, enable user reviews and ratings for better trust, and add social sharing features.",
  },
  {
    id: 3,
    name: "GreenNest",
    image: "https://i.ibb.co/hxjfJmtb/project-2.jpg",
    techStack: [
      "React",
      "Node.js",
      "Express.js",
      "JavaScript",
      "Tailwind CSS",
      "MongoDB",
      "HTML",
      "CSS",
    ],
    description:
      "GreenNest is a vibrant community platform for gardeners to connect, exchange expert tips, discover local gardening events, and nurture their passion for plants. It promotes collaboration and knowledge sharing among gardening enthusiasts.",
    liveLink: "https://assignment-10-b19a1.web.app/",
    githubClient: "https://github.com/Kausarhossainbidyut/GreenNests-client-side",
    challenges:
      "Implementing real-time data synchronization between users, resolving conflicts from concurrent edits, and ensuring a seamless UX on both desktop and mobile devices.",
    improvements:
      "Develop a mobile app for on-the-go gardening help, add offline mode for access without internet, and introduce AI-based plant disease detection to assist gardeners.",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h2 className="text-4xl font-extrabold text-gray-900 mb-12 text-center select-none tracking-tight">
        My Projects
      </h2>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col"
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-56 sm:h-48 md:h-56 lg:h-60 object-cover"
            />

            <div className="p-4 sm:p-6 flex flex-col flex-grow">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                {project.name}
              </h3>

              <button
                onClick={() => setSelectedProject(project)}
                className="flex cursor-pointer items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-4 sm:px-5 py-2 rounded-xl text-sm sm:text-base font-semibold shadow-md hover:shadow-xl transition-all duration-300"
              >
                <FaEye className="text-white" />
                View More
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-50 px-4 sm:px-6"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white rounded-lg shadow-lg max-w-full sm:max-w-lg md:max-w-2xl w-full p-4 sm:p-6 relative overflow-y-auto max-h-[90vh] transform scale-95 opacity-0 transition-all duration-300 ease-out animate-[fadeIn_0.3s_ease-out_forwards]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute cursor-pointer top-1 right-1 text-gray-600 hover:text-gray-900 text-4xl sm:text-3xl font-bold"
            >
              &times;
            </button>

            <img
              src={selectedProject.image}
              alt={selectedProject.name}
              className="w-full h-48 sm:h-56 md:h-60 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl sm:text-2xl font-bold mb-2">{selectedProject.name}</h3>

            <p className="mb-4 text-sm sm:text-base">{selectedProject.description}</p>

            <div className="mb-4">
              <strong>Main Technology Stack:</strong>
              <div className="flex flex-wrap gap-2 mt-2">
                {selectedProject.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-purple-100 text-purple-700 text-xs sm:text-sm font-semibold px-2 sm:px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <p className="mb-4 text-sm sm:text-base">
              <strong>Challenges Faced:</strong> {selectedProject.challenges}
            </p>
            <p className="mb-4 text-sm sm:text-base">
              <strong>Potential Improvements & Future Plans:</strong>{" "}
              {selectedProject.improvements}
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={selectedProject.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg shadow-md text-sm sm:text-base font-semibold transition"
              >
                <FaExternalLinkAlt /> Live Demo
              </a>
              <a
                href={selectedProject.githubClient}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-4 py-2 rounded-lg shadow-md text-sm sm:text-base font-semibold transition"
              >
                <FaGithub /> Code
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Tailwind custom animation */}
      <style>
        {`
          @keyframes fadeIn {
            0% { opacity: 0; transform: scale(0.95); }
            100% { opacity: 1; transform: scale(1); }
          }
        `}
      </style>
    </section>
  );
};

export default Projects;
