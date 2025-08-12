import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

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
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      <h2 className="text-4xl font-extrabold text-gray-900 mb-12 text-center select-none tracking-tight">
        My Projects
      </h2>

      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col"
          >
            {/* Image */}
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-56 object-cover"
            />

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">
              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {project.name}
              </h3>

              {/* Description */}
              <p className="text-gray-700 mb-4 flex-grow">{project.description}</p>

              {/* Tech Stack Badges */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full select-none"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Challenges */}
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 text-sm mb-1">
                  Challenges Faced
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {project.challenges}
                </p>
              </div>

              {/* Improvements */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 text-sm mb-1">
                  Potential Improvements & Future Plans
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {project.improvements}
                </p>
              </div>

              {/* Buttons */}
              <div className="flex gap-3 mt-auto">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-shadow shadow-md hover:shadow-lg text-sm font-semibold"
                  aria-label={`Visit live demo of ${project.name}`}
                >
                  <FaExternalLinkAlt className="w-4 h-4" />
                  Live Demo
                </a>
                <a
                  href={project.githubClient}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-4 py-2 rounded-lg transition-shadow shadow-md hover:shadow-lg text-sm font-semibold"
                  aria-label={`View GitHub repository of ${project.name}`}
                >
                  <FaGithub className="w-5 h-5" />
                  Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
