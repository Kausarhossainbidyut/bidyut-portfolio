import React from 'react';
import { useInView } from 'react-intersection-observer';
import { FaGraduationCap, FaSchool, FaLaptopCode } from 'react-icons/fa';

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
  return (
    <section className="py-20 bg-gradient-to-br from-green-100 via-white to-green-100 min-h-screen">
      <h2 className="text-5xl font-extrabold text-center mb-16 text-green-900 tracking-wide font-sans select-none">
        Education
      </h2>

      <div className="relative max-w-5xl mx-auto px-6">
        {/* Vertical timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-1 bg-green-300 rounded-full hidden sm:block"></div>

        <div className="space-y-12">
          {educationData.map((edu, index) => (
            <EducationCard key={index} edu={edu} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const EducationCard = ({ edu, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const isEven = index % 2 === 0;

  return (
    <article
      ref={ref}
      tabIndex={0}
      aria-label={`${edu.degree} details`}
      className={`relative pl-20 sm:pl-24 cursor-pointer focus:outline-none focus:ring-4 focus:ring-green-400
         transition-transform duration-700 ease-out
        ${inView ? "opacity-100 translate-x-0 translate-y-0" : "opacity-0 " + (isEven ? "-translate-x-10 translate-y-5" : "translate-x-10 translate-y-5")}
      `}
      style={{ willChange: "opacity, transform" }}
    >
      {/* Icon bubble */}
      <div className="absolute left-0 top-1.5 sm:top-3 w-12 h-12 rounded-full bg-white border-4 border-green-500 flex items-center justify-center shadow-md">
        {edu.icon}
      </div>

      <h3 className="text-3xl font-bold text-green-700 mb-3 tracking-tight leading-tight font-serif">
        {edu.degree}
      </h3>

      {edu.institution && (
        <p className="text-gray-600 italic mb-3 text-lg font-medium tracking-wide">
          {edu.institution}
        </p>
      )}

      {(edu.startYear || edu.passingYear) && (
        <p className="text-green-600 font-semibold mb-6 tracking-wide text-base">
          {edu.startYear ? `Start Year: ${edu.startYear}` : ""}
          {edu.startYear && edu.passingYear ? "  |  " : ""}
          {edu.passingYear ? `Passing Year: ${edu.passingYear}` : ""}
        </p>
      )}

      {edu.details && (
        <p className="text-gray-800 leading-relaxed text-base font-normal">
          {edu.details}
        </p>
      )}
    </article>
  );
};

export default Education;
