import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaCertificate, 
  FaTrophy, 
  FaStar, 
  FaAward, 
  FaExternalLinkAlt,
  FaCalendar,
  FaCheckCircle,
  FaTimes
} from "react-icons/fa";
import { certificatesData, getCertificateTypes } from "../data/certificatesData";

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [activeType, setActiveType] = useState("All");
  const types = getCertificateTypes();

  // Filter certificates by type
  const filteredCertificates = activeType === "All" 
    ? certificatesData 
    : certificatesData.filter(cert => cert.type === activeType);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  // Get icon based on type
  const getTypeIcon = (type) => {
    switch(type) {
      case "Certificate": return <FaCertificate />;
      case "Award": return <FaTrophy />;
      case "Achievement": return <FaStar />;
      case "Course": return <FaCheckCircle />;
      default: return <FaAward />;
    }
  };

  // Get color based on type
  const getTypeColor = (type) => {
    switch(type) {
      case "Certificate": return "from-blue-500 to-cyan-500";
      case "Award": return "from-yellow-500 to-orange-500";
      case "Achievement": return "from-purple-500 to-pink-500";
      case "Course": return "from-green-500 to-emerald-500";
      default: return "from-indigo-500 to-purple-500";
    }
  };

  return (
    <section id="certificates" className="py-16  px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50 dark:from-gray-900 dark:via-violet-950/30 dark:to-purple-950/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 select-none">
            Certificates & <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Achievements</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            My professional certifications, awards, and accomplishments
          </p>
        </motion.div>

        {/* Type Filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12 md:mb-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {types.map((type) => (
            <motion.button
              key={type}
              onClick={() => setActiveType(type)}
              className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-semibold text-xs sm:text-sm transition-all duration-300 flex items-center gap-2 ${
                activeType === type
                  ? "bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white shadow-lg"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 shadow-md"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {type !== "All" && getTypeIcon(type)}
              {type}
            </motion.button>
          ))}
        </motion.div>

        {/* Certificates Grid */}
        <motion.div 
          className="grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          key={activeType}
        >
          {filteredCertificates.map((certificate) => (
            <motion.div
              key={certificate.id}
              variants={cardVariants}
              whileHover={{ y: -10, boxShadow: "0 25px 50px rgba(99, 102, 241, 0.2)" }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden transition-all duration-300 flex flex-col group relative cursor-pointer"
              onClick={() => setSelectedCertificate(certificate)}
            >
              {/* Featured Badge */}
              {certificate.featured && (
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

              {/* Certificate Image */}
              <div className="relative overflow-hidden h-48 sm:h-52 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800">
                <motion.img
                  src={certificate.image}
                  alt={certificate.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent dark:from-black/80 dark:via-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {/* Type Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`bg-gradient-to-r ${getTypeColor(certificate.type)} text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg`}>
                      {getTypeIcon(certificate.type)}
                      {certificate.type}
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-5 sm:p-6 flex flex-col flex-grow">
                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-2">
                  {certificate.title}
                </h3>

                {/* Organization */}
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 font-medium">
                  {certificate.organization}
                </p>

                {/* Date */}
                <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 mb-3">
                  <FaCalendar />
                  <span>Issued: {certificate.issueDate}</span>
                </div>

                {/* Skills Preview */}
                {certificate.skills && certificate.skills.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {certificate.skills.slice(0, 3).map((skill, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-2 py-1 rounded-md font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                    {certificate.skills.length > 3 && (
                      <span className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-md font-medium">
                        +{certificate.skills.length - 3} more
                      </span>
                    )}
                  </div>
                )}

                {/* View Details Button */}
                <motion.button
                  className="mt-auto flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white px-6 py-2.5 rounded-xl text-sm font-semibold shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Details
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredCertificates.length === 0 && (
          <motion.div
            className="text-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <FaCertificate className="text-6xl text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 text-lg">No certificates found in this category</p>
          </motion.div>
        )}

        {/* Modal */}
        <AnimatePresence>
          {selectedCertificate && (
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 px-4 sm:px-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedCertificate(null)}
            >
              <motion.div
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-full sm:max-w-lg md:max-w-2xl lg:max-w-3xl w-full p-6 sm:p-8 relative overflow-y-auto max-h-[90vh]"
                initial={{ scale: 0.8, y: 50, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.8, y: 50, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <motion.button
                  onClick={() => setSelectedCertificate(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-red-500 text-white flex items-center justify-center text-xl font-bold shadow-lg hover:bg-red-600 z-10"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaTimes />
                </motion.button>

                {/* Certificate Image with better dark mode handling */}
                <div className="relative overflow-hidden rounded-xl mb-6 bg-gray-100 dark:bg-gray-700">
                  <motion.img
                    src={selectedCertificate.image}
                    alt={selectedCertificate.title}
                    className="w-full h-64 sm:h-80 object-cover shadow-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  />
                  {/* Subtle overlay for better text visibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent dark:from-black/30"></div>
                </div>

                {/* Type Badge */}
                <div className="mb-4">
                  <span className={`inline-flex items-center gap-2 bg-gradient-to-r ${getTypeColor(selectedCertificate.type)} text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg`}>
                    {getTypeIcon(selectedCertificate.type)}
                    {selectedCertificate.type}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl sm:text-3xl font-extrabold mb-3 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  {selectedCertificate.title}
                </h3>

                {/* Organization */}
                <p className="text-lg text-gray-700 dark:text-gray-300 font-semibold mb-4">
                  {selectedCertificate.organization}
                </p>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {selectedCertificate.description}
                </p>

                {/* Details Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Issue Date</p>
                    <p className="font-semibold text-gray-900 dark:text-gray-100">{selectedCertificate.issueDate}</p>
                  </div>
                  {selectedCertificate.expiryDate && (
                    <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                      <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Expiry Date</p>
                      <p className="font-semibold text-gray-900 dark:text-gray-100">{selectedCertificate.expiryDate}</p>
                    </div>
                  )}
                  {selectedCertificate.credentialID && (
                    <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                      <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Credential ID</p>
                      <p className="font-semibold text-gray-900 dark:text-gray-100 text-sm break-all">{selectedCertificate.credentialID}</p>
                    </div>
                  )}
                </div>

                {/* Skills */}
                {selectedCertificate.skills && selectedCertificate.skills.length > 0 && (
                  <div className="mb-6">
                    <strong className="text-gray-900 dark:text-white block mb-3">Skills Covered:</strong>
                    <div className="flex flex-wrap gap-2">
                      {selectedCertificate.skills.map((skill, idx) => (
                        <motion.span
                          key={idx}
                          className="bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/40 dark:to-purple-900/40 text-indigo-700 dark:text-indigo-300 text-sm font-semibold px-4 py-2 rounded-full"
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.3 + idx * 0.05 }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Verify Button */}
                {selectedCertificate.credentialURL && (
                  <motion.a
                    href={selectedCertificate.credentialURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-xl shadow-lg text-sm sm:text-base font-semibold w-full"
                    whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(34, 197, 94, 0.4)" }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FaExternalLinkAlt /> Verify Certificate
                  </motion.a>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Certificates;
