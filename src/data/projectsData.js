// 🎯 PROJECT DATA FILE
// This file contains all your project information in one place
// To add a new project, simply copy the template below and fill in your details!

/* 
📝 PROJECT TEMPLATE - Copy this to add a new project:

{
  id: 4, // Increment the number
  name: "Your Project Name",
  category: "Web App", // Options: "Web App", "Mobile App", "E-commerce", "Portfolio", "Full Stack", etc.
  image: "your-image-url-here",
  shortDescription: "A brief one-line description for the card",
  description: "Detailed description of what your project does and its purpose",
  techStack: ["React", "Node.js", "etc"], // List all technologies used
  features: [
    "Feature 1",
    "Feature 2", 
    "Feature 3"
  ],
  liveLink: "https://your-live-demo.com",
  githubClient: "https://github.com/username/repo-client",
  githubServer: "https://github.com/username/repo-server", // Optional - remove if no backend
  challenges: "Describe the main challenges you faced during development",
  improvements: "What improvements or features you plan to add in the future",
  featured: false, // Set to true for your best projects
  year: "2024" // Year completed
},

*/

export const projectsData = [
  {
    id: 1,
    name: "BloodConnect",
    category: "Full Stack",
    image: "https://i.ibb.co/BMPNmmX/finall-project.jpg",
    shortDescription: "A community platform connecting blood donors with recipients",
    description:
      "BloodConnect is a community-driven platform that bridges the gap between blood donors and recipients. It empowers users to save lives by making blood donation accessible, easy, and impactful through real-time connectivity and seamless user experience.",
    techStack: [
      "React",
      "Node.js",
      "Express.js",
      "JavaScript",
      "Tailwind CSS",
      "MongoDB",
      "Firebase Auth",
      "JWT",
    ],
    features: [
      "Real-time donor availability tracking",
      "Secure user authentication",
      "Location-based donor search",
      "Donation history tracking",
      "Emergency blood request system"
    ],
    liveLink: "https://assignment-12-b4719.web.app/",
    githubClient: "https://github.com/Kausarhossainbidyut/BloodConnect-client-side",
    githubServer: "https://github.com/Kausarhossainbidyut/BloodConnect-server-side",
    challenges:
      "Ensuring smooth real-time updates for donor availability, optimizing backend API performance under high load, and maintaining secure user authentication across devices.",
    improvements:
      "Integrate a blog section for awareness articles, implement multi-language support for wider reach, and add an AI-powered matching system to improve donor-recipient pairing.",
    featured: true,
    year: "2024"
  },
  {
    id: 2,
    name: "FoodBond",
    category: "Web App",
    image: "https://i.ibb.co/4hVwkPv/res.jpg",
    shortDescription: "Platform to share food and reduce waste sustainably",
    description:
      "FoodBond connects food lovers to promote sharing and reduce food waste. The platform encourages users to discover, share, and enjoy delicious food responsibly, fostering a sustainable community-driven movement towards food conservation.",
    techStack: [
      "React",
      "Node.js",
      "Express.js",
      "JavaScript",
      "Tailwind CSS",
      "MongoDB",
      "Stripe",
      "JWT",
    ],
    features: [
      "Food sharing marketplace",
      "Secure payment integration",
      "User ratings and reviews",
      "Real-time inventory updates",
      "Geolocation-based food discovery"
    ],
    liveLink: "https://assignment-11-2a60f.web.app/",
    githubClient: "https://github.com/Kausarhossainbidyut/FoodBond-client-side",
    githubServer: "https://github.com/Kausarhossainbidyut/FoodBond-server-side",
    challenges:
      "Managing complex application state with numerous user interactions, securing online transactions, and handling inventory updates in real-time.",
    improvements:
      "Introduce personalized product recommendations based on user preferences and history, enable user reviews and ratings for better trust, and add social sharing features.",
    featured: true,
    year: "2024"
  },
  {
    id: 3,
    name: "GreenNest",
    category: "Community Platform",
    image: "https://i.ibb.co/hxjfJmtb/project-2.jpg",
    shortDescription: "Social network for gardening enthusiasts and plant lovers",
    description:
      "GreenNest is a vibrant community platform for gardeners to connect, exchange expert tips, discover local gardening events, and nurture their passion for plants. It promotes collaboration and knowledge sharing among gardening enthusiasts.",
    techStack: [
      "React",
      "Node.js",
      "Express.js",
      "JavaScript",
      "Tailwind CSS",
      "MongoDB",
      "Socket.io",
      "Firebase",
    ],
    features: [
      "Real-time chat and collaboration",
      "Event discovery and management",
      "Plant care tip sharing",
      "Photo gallery and showcases",
      "Expert Q&A forum"
    ],
    liveLink: "https://assignment-10-b19a1.web.app/",
    githubClient: "https://github.com/Kausarhossainbidyut/GreenNests-client-side",
    githubServer: "https://github.com/Kausarhossainbidyut/GreenNests-server-side",
    challenges:
      "Implementing real-time data synchronization between users, resolving conflicts from concurrent edits, and ensuring a seamless UX on both desktop and mobile devices.",
    improvements:
      "Develop a mobile app for on-the-go gardening help, add offline mode for access without internet, and introduce AI-based plant disease detection to assist gardeners.",
    featured: false,
    year: "2024"
  },
];

// 🎨 Optional: Filter projects by category
export const getProjectsByCategory = (category) => {
  if (!category || category === "All") return projectsData;
  return projectsData.filter(project => project.category === category);
};

// ⭐ Optional: Get featured projects only
export const getFeaturedProjects = () => {
  return projectsData.filter(project => project.featured);
};

// 📊 Optional: Get all unique categories
export const getCategories = () => {
  const categories = [...new Set(projectsData.map(project => project.category))];
  return ["All", ...categories];
};

export default projectsData;
