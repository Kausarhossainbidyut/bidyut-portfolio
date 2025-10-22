// 🏆 CERTIFICATES & ACHIEVEMENTS DATA FILE
// This file contains all your certificates, awards, and achievements
// To add a new item, simply copy the template and fill in your details!

/* 
📝 CERTIFICATE/ACHIEVEMENT TEMPLATE - Copy this to add new:

{
  id: 1,
  title: "Certificate Name",
  type: "Certificate", // Options: "Certificate", "Award", "Achievement", "Course", "License", "Recognition"
  organization: "Issuing Organization",
  issueDate: "January 2024",
  expiryDate: "Never", // Or "January 2026" or leave empty
  credentialID: "ABC123XYZ", // Optional
  credentialURL: "https://verify-link.com", // Optional
  image: "certificate-image-url",
  description: "Brief description of what this certificate/achievement represents",
  skills: ["Skill 1", "Skill 2", "Skill 3"], // Related skills
  featured: true, // Set to true for most important ones
},

*/

export const certificatesData = [
  {
    id: 1,
    title: "Complete Web Development Course",
    type: "Certificate",
    organization: "Programming Hero",
    issueDate: "December 2024",
    expiryDate: "Never",
    credentialID: "PH-WD-2024-12345",
    credentialURL: "https://web.programming-hero.com/",
    image: "https://i.ibb.co/placeholder-certificate-1.jpg", // Replace with your certificate image
    description: "Completed comprehensive web development bootcamp covering HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, and more. Built 12+ real-world projects.",
    skills: ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB", "Express.js"],
    featured: true,
  },
  {
    id: 2,
    title: "React Advanced Certification",
    type: "Certificate",
    organization: "Udemy",
    issueDate: "October 2024",
    expiryDate: "Never",
    credentialID: "UC-REACT-2024",
    credentialURL: "https://udemy.com",
    image: "https://i.ibb.co/placeholder-certificate-2.jpg", // Replace with your certificate image
    description: "Advanced React concepts including hooks, context API, Redux, performance optimization, and testing.",
    skills: ["React", "Redux", "React Hooks", "Testing", "Performance Optimization"],
    featured: true,
  },
  {
    id: 3,
    title: "Best Project Award",
    type: "Award",
    organization: "Programming Hero",
    issueDate: "December 2024",
    expiryDate: "",
    credentialID: "",
    credentialURL: "",
    image: "https://i.ibb.co/placeholder-award.jpg", // Replace with your award image
    description: "Received award for BloodConnect project - recognized as the best full-stack project in the batch for its innovative approach and social impact.",
    skills: ["Full Stack Development", "MERN Stack", "Problem Solving"],
    featured: true,
  },
  {
    id: 4,
    title: "MongoDB University Certification",
    type: "Certificate",
    organization: "MongoDB University",
    issueDate: "September 2024",
    expiryDate: "Never",
    credentialID: "MDB-2024-567",
    credentialURL: "https://university.mongodb.com/",
    image: "https://i.ibb.co/placeholder-mongodb.jpg", // Replace with your certificate image
    description: "Completed MongoDB certification covering database design, aggregation, indexing, and performance optimization.",
    skills: ["MongoDB", "Database Design", "NoSQL", "Data Modeling"],
    featured: false,
  },
  // Add more certificates here...
];

// 🎯 Filter by type
export const getCertificatesByType = (type) => {
  if (!type || type === "All") return certificatesData;
  return certificatesData.filter(cert => cert.type === type);
};

// ⭐ Get featured certificates only
export const getFeaturedCertificates = () => {
  return certificatesData.filter(cert => cert.featured);
};

// 📊 Get all unique types
export const getCertificateTypes = () => {
  const types = [...new Set(certificatesData.map(cert => cert.type))];
  return ["All", ...types];
};

// 📈 Get total count
export const getTotalCertificates = () => certificatesData.length;

export default certificatesData;
