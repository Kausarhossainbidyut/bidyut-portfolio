import React, { useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaEye, FaCode, FaStar, FaCalendar } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { projectsData, getCategories } from "../data/projectsData";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = getCategories();

  // Filter projects by category
  const filteredProjects = activeCategory === "All" 
    ? projectsData 
    : projectsData.filter(project => project.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-violet-50 to-fuchsia-50 dark:from-gray-900 dark:via-purple-950/20 dark:to-violet-950/20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.h2 
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-8 md:mb-12 text-center select-none tracking-tight"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          My <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Projects</span>
        </motion.h2>

        {/* Category Filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12 md:mb-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-semibold text-xs sm:text-sm transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white shadow-lg"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 shadow-md"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

      {/* Projects Grid */}
      <motion.div 
        className="grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        key={activeCategory} // Re-animate when category changes
      >
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            variants={cardVariants}
            whileHover={{ y: -10, boxShadow: "0 25px 50px rgba(99, 102, 241, 0.2)" }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden transition-all duration-300 flex flex-col group relative"
          >
            {/* Featured Badge */}
            {project.featured && (
              <div className="absolute top-4 right-4 z-10">
                <motion.div 
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 500, delay: 0.3 }}
                >
                  <FaStar size={10} /> Featured
                </motion.div>
              </div>
            )}

            {/* Image Container */}
            <div className="relative overflow-hidden h-48 sm:h-52 md:h-56 bg-gray-100 dark:bg-gray-800">
              <motion.img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent dark:from-black/80 dark:via-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm text-indigo-600 dark:text-indigo-400 px-3 py-1 rounded-full text-xs font-bold">
                    {project.category}
                  </span>
                </div>
              </div>
            </div>

            {/* Card Content */}
            <div className="p-5 sm:p-6 flex flex-col flex-grow">
              {/* Title & Year */}
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors flex-1">
                  {project.name}
                </h3>
                {project.year && (
                  <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400 text-xs ml-2">
                    <FaCalendar size={10} />
                    <span>{project.year}</span>
                  </div>
                )}
              </div>

              {/* Short Description */}
              {project.shortDescription && (
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                  {project.shortDescription}
                </p>
              )}

              {/* Tech Stack Preview (First 3) */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.slice(0, 3).map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-2 py-1 rounded-md font-medium"
                  >
                    {tech}
                  </span>
                ))}
                {project.techStack.length > 3 && (
                  <span className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-md font-medium">
                    +{project.techStack.length - 3} more
                  </span>
                )}
              </div>

              {/* View More Button */}
              <motion.button
                onClick={() => setSelectedProject(project)}
                className="mt-auto flex cursor-pointer items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl text-sm sm:text-base font-semibold shadow-lg"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(99, 102, 241, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <FaEye className="text-white" />
                View Details
              </motion.button>
            </div>
          </motion.div>
        ))}
      </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 px-4 sm:px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-full sm:max-w-lg md:max-w-2xl lg:max-w-3xl w-full p-6 sm:p-8 relative overflow-y-auto max-h-[90vh]"
              initial={{ scale: 0.8, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.8, y: 50, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
            <motion.button
              onClick={() => setSelectedProject(null)}
              className="absolute cursor-pointer top-2 right-2 sm:top-4 sm:right-4 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-red-500 text-white flex items-center justify-center text-2xl sm:text-3xl font-bold shadow-lg hover:bg-red-600"
              whileHover={{ scale: 1.2, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              &times;
            </motion.button>

            <div className="relative overflow-hidden rounded-xl mb-6">
              <motion.img
                src={selectedProject.image}
                alt={selectedProject.name}
                className="w-full h-56 sm:h-64 md:h-72 object-cover shadow-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              />
              {/* Dark mode overlay for better contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent dark:from-black/30"></div>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold mb-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">{selectedProject.name}</h3>

            <p className="mb-6 text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">{selectedProject.description}</p>

            <div className="mb-6">
              <strong className="text-lg text-gray-900 dark:text-white">Main Technology Stack:</strong>
              <div className="flex flex-wrap gap-2 mt-3">
                {selectedProject.techStack.map((tech, idx) => (
                  <motion.span
                    key={idx}
                    className="bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/40 dark:to-purple-900/40 text-indigo-700 dark:text-indigo-300 text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-sm"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + idx * 0.05 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Features List */}
            {selectedProject.features && selectedProject.features.length > 0 && (
              <div className="mb-6">
                <strong className="text-lg text-gray-900 dark:text-white flex items-center gap-2">
                  <FaStar className="text-yellow-500" /> Key Features:
                </strong>
                <ul className="mt-3 space-y-2">
                  {selectedProject.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      className="flex items-start gap-2 text-sm sm:text-base text-gray-700 dark:text-gray-300"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + idx * 0.1 }}
                    >
                      <span className="text-indigo-600 dark:text-indigo-400 mt-1">✓</span>
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            )}

            <p className="mb-4 sm:mb-6 text-sm sm:text-base text-gray-700 dark:text-gray-300">
              <strong className="text-gray-900 dark:text-white">Challenges Faced:</strong> {selectedProject.challenges}
            </p>
            <p className="mb-6 sm:mb-8 text-sm sm:text-base text-gray-700 dark:text-gray-300">
              <strong className="text-gray-900 dark:text-white">Potential Improvements & Future Plans:</strong>{" "}
              {selectedProject.improvements}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <motion.a
                href={selectedProject.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-xl shadow-lg text-sm sm:text-base font-semibold flex-1"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(99, 102, 241, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <FaExternalLinkAlt /> Live Demo
              </motion.a>
              <motion.a
                href={selectedProject.githubClient}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-gray-800 to-gray-900 text-white px-6 py-3 rounded-xl shadow-lg text-sm sm:text-base font-semibold flex-1"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.4)" }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <FaGithub /> Client Code
              </motion.a>
              {selectedProject.githubServer && (
                <motion.a
                  href={selectedProject.githubServer}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-xl shadow-lg text-sm sm:text-base font-semibold flex-1"
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(34, 197, 94, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <FaCode /> Server Code
                </motion.a>
              )}
            </div>
          </motion.div>
        </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
