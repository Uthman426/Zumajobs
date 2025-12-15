"use client"

import React from "react"
import {
  Code2,
  Megaphone,
  Headphones,
  LineChart,
  Pen,
  Brush,
  Laptop,
  Briefcase,
} from "lucide-react";

 const AllIcon = (title = "") => {

       const jobCategories = [
  {
    name: "developer",
    keywords: ["developer", "engineer", "software", "frontend", "backend", "fullstack"],
    icon: <Code2 className="text-teal-600 w-6 h-6" />,
  },
  {
    name: "marketing",
    keywords: ["marketing", "social", "media", "ads", "promotion", "campaign"],
    icon: <Megaphone className="text-orange-500 w-6 h-6" />,
  },
  {
    name: "support",
    keywords: ["support", "customer", "help", "service", "call"],
    icon: <Headphones className="text-blue-500 w-6 h-6" />,
  },
  {
    name: "sales",
    keywords: ["sales", "account", "business", "revenue"],
    icon: <LineChart className="text-green-600 w-6 h-6" />,
  },
  {
    name: "design",
    keywords: ["design", "designer", "graphics", "ui", "ux", "illustrator"],
    icon: <Brush className="text-purple-500 w-6 h-6" />,
  },
  {
    name: "writing",
    keywords: ["writer", "content", "copy", "editor", "blog"],
    icon: <Pen className="text-amber-600 w-6 h-6" />,
  },
];


  const lowerTitle = title.toLowerCase();

  let bestMatch = { score: 0, icon: <Briefcase className="text-3xl text-gray-500" /> };

  jobCategories.forEach((category) => {
    // Count how many of that category’s keywords appear in the title
    const score = category.keywords.filter((kw) => lowerTitle.includes(kw)).length;
    if (score > bestMatch.score) bestMatch = { score, icon: category.icon };
  });

  return bestMatch.icon;
};

export default AllIcon









// import {FaCode,         // Developer / Engineer
//   FaBullhorn,     // Marketing / Social Media
//   FaHeadset,      // Customer Support
//   FaChartLine,    // Sales
//   FaPenNib,       // Writer
//   FaPaintBrush,   // Graphic Designer
//   FaLaptopCode,   // Software / Web Developer
//   FaPencilRuler,
//   FaBriefcase  } from "react-icons/fa"



// const AllIcons = (title)=>{
//     const lower = title.toLowerCase()


//     if (lower.includes("developer")||lower.includes("engineer")){
//         return< FaLaptopCode className="w-12 h-12 rounded"/>;
//     } else if (lower.includes("marketing") || lower.includes("social")) {
//     return <FaBullhorn className="text-3xl text-orange-500" />;
//   } else if (lower.includes("support") || lower.includes("customer")) {
//     return <FaHeadset className="text-3xl text-blue-500" />;
//   } else if (lower.includes("sales") || lower.includes("representative")) {
//     return <FaChartLine className="text-3xl text-green-600" />;
//   } else if (lower.includes("designer") || lower.includes("graphics")) {
//     return <FaPaintBrush className="text-3xl text-purple-500" />;
//   } else if (lower.includes("writer") || lower.includes("content")) {
//     return <FaPenNib className="text-3xl text-amber-600" />;
//   } else {
//     return <FaBriefcase className="text-3xl text-gray-500" />; // default
//   }
    
        
    
    

//     return
// }
// export default AllIcons


// {
//     METHOD 1 — Manual Icons (Local Files)
// 🧩 Step 1: Create a folder for icons

// Inside your Next.js or React project:

// /public/icons/


// Add PNG or SVG icons such as:

// developer.png
// marketing.png
// designer.png
// default.png

// 🧩 Step 2: Create an icon selector function

// Create a helper file — iconMapper.js:

// export const getJobIcon = (title) => {
//   const lower = title.toLowerCase();

//   if (lower.includes("developer") || lower.includes("engineer")) {
//     return "/icons/developer.png";
//   } else if (lower.includes("marketing")) {
//     return "/icons/marketing.png";
//   } else if (lower.includes("designer") || lower.includes("ui") || lower.includes("ux")) {
//     return "/icons/designer.png";
//   } else {
//     return "/icons/default.png"; // fallback icon
//   }
// };

// 🧩 Step 3: Use in your job card
// import { getJobIcon } from "@/utils/iconMapper";

// export default function JobCard({ job }) {
//   const iconPath = getJobIcon(job.title);

//   return (
//     <div className="flex items-center gap-4 border p-4 rounded-xl shadow-sm">
//       <img
//         src={iconPath}
//         alt={job.title}
//         className="w-12 h-12 object-contain"
//       />
//       <div className="flex-1">
//         <h3 className="font-semibold text-lg">{job.title}</h3>
//         <p className="text-gray-500">{job.location}</p>
//       </div>
//       <div>
//         <p><span className="font-semibold">Type:</span> {job.type}</p>
//         <p><span className="font-semibold">Time:</span> {job.posted_at}</p>
//       </div>
//       <button className="border border-teal-700 px-4 py-2 rounded hover:bg-teal-700 hover:text-white">
//         Apply Now
//       </button>
//     </div>
//   );
// }


// ✅ Now each job gets a different local icon based on keywords in the title.
// You can expand that mapping anytime.}
// {
//     FOR AUTO FOR MUTIPLE WORDS IN THE TITLE NAME 
//     1. Your Icon Mapper (Auto-detect logic)

// Create a utility file:
// src/utils/iconMapper.js

// import {
//   FaCode,
//   FaBullhorn,
//   FaHeadset,
//   FaChartLine,
//   FaPenNib,
//   FaPaintBrush,
//   FaLaptopCode,
//   FaBriefcase,
// } from "react-icons/fa";

// const jobCategories = [
//   {
//     name: "developer",
//     keywords: ["developer", "engineer", "programmer", "software", "frontend", "backend", "fullstack"],
//     icon: <FaLaptopCode className="text-3xl text-teal-600" />,
//   },
//   {
//     name: "marketing",
//     keywords: ["marketing", "social", "media", "ads", "promotion", "campaign", "seo"],
//     icon: <FaBullhorn className="text-3xl text-orange-500" />,
//   },
//   {
//     name: "support",
//     keywords: ["support", "customer", "help", "service", "call", "representative"],
//     icon: <FaHeadset className="text-3xl text-blue-500" />,
//   },
//   {
//     name: "sales",
//     keywords: ["sales", "account", "business", "revenue", "representative"],
//     icon: <FaChartLine className="text-3xl text-green-600" />,
//   },
//   {
//     name: "design",
//     keywords: ["designer", "design", "graphics", "ui", "ux", "illustrator"],
//     icon: <FaPaintBrush className="text-3xl text-purple-500" />,
//   },
//   {
//     name: "writing",
//     keywords: ["writer", "content", "copy", "editor", "blog", "journalist"],
//     icon: <FaPenNib className="text-3xl text-amber-600" />,
//   },
// ];

// export const getJobIcon = (title = "") => {
//   const lowerTitle = title.toLowerCase();

//   let bestMatch = { score: 0, icon: <FaBriefcase className="text-3xl text-gray-500" /> };

//   jobCategories.forEach((category) => {
//     // Count how many of that category’s keywords appear in the title
//     const score = category.keywords.filter((kw) => lowerTitle.includes(kw)).length;
//     if (score > bestMatch.score) bestMatch = { score, icon: category.icon };
//   });

//   return bestMatch.icon;
// };
// }