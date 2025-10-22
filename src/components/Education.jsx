import React from 'react';
import { FaGraduationCap, FaSchool, FaLaptopCode } from 'react-icons/fa';
import { motion } from 'framer-motion';

const educationData = [
  {
    degree: "BSc in Computer Science & Engineering",
    institution: "Green University of Bangladesh",
    startYear: 2023,
    passingYear: "Running",
    details: "Currently pursuing Bachelor's degree in CSE with focus on software development and modern technologies.",
    icon: <FaGraduationCap className="w-6 h-6" />,
    gradient: "from-purple-600 via-violet-600 to-fuchsia-600",
    iconColor: "text-purple-600 dark:text-purple-400",
    bgGlow: "bg-purple-500/10"
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Altaf Golongag College",
    startYear: 2022,
    passingYear: 2024,
    details: "Completed Higher Secondary education in Science department.",
    icon: <FaSchool className="w-6 h-6" />,
    gradient: "from-indigo-600 via-purple-600 to-pink-600",
    iconColor: "text-indigo-600 dark:text-indigo-400",
    bgGlow: "bg-indigo-500/10"
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Immam Hossain High School",
    startYear: 2020,
    passingYear: 2022,
    details: "Completed Secondary education in Science department.",
    icon: <FaSchool className="w-6 h-6" />,
    gradient: "from-violet-600 via-purple-600 to-fuchsia-600",
    iconColor: "text-violet-600 dark:text-violet-400",
    bgGlow: "bg-violet-500/10"
  },
  {
    degree: "Web Development Bootcamp",
    institution: "Programming Hero",
    startYear: 2024,
    passingYear: 2025,
    details: "Intensive bootcamp covering MERN stack, modern JavaScript, and full-stack development.",
    icon: <FaLaptopCode className="w-6 h-6" />,
    gradient: "from-fuchsia-600 via-pink-600 to-rose-600",
    iconColor: "text-fuchsia-600 dark:text-fuchsia-400",
    bgGlow: "bg-fuchsia-500/10"
  }
];

const Education = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
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
    <section id='education' className="py-16  bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900 dark:text-white"
        >
          My Education
        </motion.h2>
        
        <motion.p
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center text-gray-600 dark:text-gray-400 mb-12 md:mb-16 max-w-2xl mx-auto"
        >
          My academic journey and professional learning experiences
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="relative space-y-6"
        >
          {/* Timeline line */}
          <div className="hidden md:block absolute left-6 top-8 bottom-8 w-0.5 bg-gradient-to-b from-purple-200 via-indigo-200 to-pink-200 dark:from-purple-800 dark:via-indigo-800 dark:to-pink-800"></div>
          
          {educationData.map((edu, index) => (
            <EducationCard key={index} edu={edu} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const EducationCard = ({ edu }) => {
  const cardVariants = {
    hidden: {
      opacity: 0,
      x: -50,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const iconVariants = {
    hover: {
      scale: 1.1,
      rotate: [0, -10, 10, -10, 0],
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -4, transition: { duration: 0.3 } }}
      className="relative group"
    >
      {/* Card */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-gray-200 dark:border-gray-700 relative overflow-hidden">
        {/* Gradient overlay on hover */}
        <div className={`absolute inset-0 bg-gradient-to-br ${edu.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
        
        {/* Glow effect */}
        <div className={`absolute -inset-0.5 ${edu.bgGlow} rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`}></div>
        
        <div className="flex items-start gap-4 md:gap-6 relative z-10">
          {/* Icon with timeline dot */}
          <div className="flex-shrink-0 relative">
            {/* Timeline dot (hidden on mobile) */}
            <div className={`hidden md:block absolute -left-[4.5rem] top-2 w-4 h-4 rounded-full bg-gradient-to-br ${edu.gradient} shadow-lg ring-4 ring-white dark:ring-gray-900`}></div>
            
            {/* Icon container */}
            <motion.div
              variants={iconVariants}
              whileHover="hover"
              className={`w-14 h-14 rounded-xl bg-gradient-to-br ${edu.gradient} flex items-center justify-center shadow-lg`}
            >
              <span className="text-white">
                {edu.icon}
              </span>
            </motion.div>
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
              {edu.degree}
            </h3>
            
            {edu.institution && (
              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-2 font-medium">
                📍 {edu.institution}
              </p>
            )}
            
            {(edu.startYear || edu.passingYear) && (
              <div className={`inline-flex items-center gap-2 text-xs sm:text-sm font-semibold mb-3 px-3 py-1.5 rounded-full bg-gradient-to-r ${edu.gradient} text-white shadow-sm`}>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
                <span>
                  {edu.startYear} {edu.passingYear && `- ${edu.passingYear}`}
                </span>
              </div>
            )}
            
            {edu.details && (
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                {edu.details}
              </p>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
