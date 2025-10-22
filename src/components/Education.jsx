import React from 'react';
import { useInView } from 'react-intersection-observer';
import { FaGraduationCap, FaSchool, FaLaptopCode } from 'react-icons/fa';
import { motion } from 'framer-motion';

const educationData = [
  {
    degree: "BSc in Computer Science & Engineering",
    institution: "Green University of Bangladesh",
    startYear: 2023,
    passingYear: "Running",
    details: "Currently pursuing Bachelor’s degree in CSE.",
    icon: <FaGraduationCap className="text-green-600 w-6 h-6" />
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Altaf Golongag College",
    startYear: 2022,
    passingYear: 2024,
    details: "I completed my HSC in Science department.",
    icon: <FaSchool className="text-yellow-500 w-6 h-6" />
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Immam Hossain High School",
    startYear: 2020,
    passingYear: 2022,
    details: "I completed my SSC in Science department.",
    icon: <FaSchool className="text-blue-500 w-6 h-6" />
  },
  {
    degree: "Programming Hero & Web Development Course",
    institution: "Programming Hero",
    startYear: 2024,
    passingYear: 2025,
    details: "Completed courses on programming fundamentals and web development.",
    icon: <FaLaptopCode className="text-purple-600 w-6 h-6" />
  }
];

const Education = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  return (
    <section id='education' className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-green-50 via-white to-green-100">
      <motion.h2 
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-12 md:mb-16 text-green-900 tracking-wide select-none"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        My <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Education</span>
      </motion.h2>

      <motion.div 
        className="relative max-w-6xl mx-auto px-4 sm:px-6 md:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Vertical timeline line */}
        <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 sm:w-1 bg-gradient-to-b from-green-300 via-green-400 to-green-500 rounded-full hidden sm:block"></div>

        <div className="space-y-8 md:space-y-12">
          {educationData.map((edu, index) => (
            <EducationCard key={index} edu={edu} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

const EducationCard = ({ edu, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const isEven = index % 2 === 0;

  const cardVariants = {
    hidden: { 
      opacity: 0,
      x: isEven ? -50 : 50,
      y: 20
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.article
      ref={ref}
      tabIndex={0}
      aria-label={`${edu.degree} details`}
      className="relative pl-16 sm:pl-20 md:pl-24 cursor-pointer focus:outline-none focus:ring-4 focus:ring-green-400 rounded-xl"
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      whileHover={{ scale: 1.02, x: 10 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      {/* Icon bubble */}
      <motion.div 
        className="absolute left-0 top-1 sm:top-1.5 md:top-3 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white border-4 border-green-500 flex items-center justify-center shadow-xl"
        whileHover={{ scale: 1.3, rotate: 360, borderColor: "#10b981" }}
        transition={{ duration: 0.5 }}
      >
        {edu.icon}
      </motion.div>

      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-green-700 mb-2 md:mb-3 tracking-tight leading-tight">
        {edu.degree}
      </h3>

      {edu.institution && (
        <p className="text-gray-600 italic mb-2 md:mb-3 text-base sm:text-lg font-medium tracking-wide">
          {edu.institution}
        </p>
      )}

      {(edu.startYear || edu.passingYear) && (
        <p className="text-green-600 font-semibold mb-4 md:mb-6 tracking-wide text-sm sm:text-base">
          {edu.startYear ? `Start Year: ${edu.startYear}` : ""}
          {edu.startYear && edu.passingYear ? "  |  " : ""}
          {edu.passingYear ? `Passing Year: ${edu.passingYear}` : ""}
        </p>
      )}

      {edu.details && (
        <p className="text-gray-800 leading-relaxed text-sm sm:text-base font-normal">
          {edu.details}
        </p>
      )}
    </motion.article>
  );
};

export default Education;
