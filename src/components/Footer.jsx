"use client"

import React from "react"
import Link from "next/link"
import { Code2 } from "lucide-react"


const Footer = () => {
  console.log("Footer rendered")


  const categories = [
    { name: "Web designer", href: "/jobs/web-designer" },
    { name: "Software developer", href: "/jobs/software-developer" },
    { name: "Designing", href: "/jobs/design" },
    { name: "Customer Service", href: "/jobs/customer-service" },
  ];

  const locations = [
    { name: "United States", href: "/jobs/united-states" },
    { name: "Australia", href: "/jobs/australia" },
    { name: "Sri Lanka", href: "/jobs/sri-lanka" },
    { name: "Saudi Arabia", href: "/jobs/saudi-arabia" },
  ];

  const links = [
    { name: "Candidates list", href: "/candidates" },
    { name: "Companies list", href: "/companies" },
    { name: "Contact Us", href: "/contact" },
    { name: "Job posts", href: "/jobs" },
  ];

  return (

    <div className="mt-10  bg-black/80 h-150">
      <footer className="w-[80%] mx-auto ">
        <div className=" flex  pt-15">
          <div className="w-[45%]">
            <h1 className="text-white text-lg font-bold">Get In touch</h1>
            <p className="mt-4 text-gray-400">Are you interested in jobs, need to get
              latest updates and information?</p>
            <div className=" h-13 mt-5 justify-between flex  text-gray-400 ">
              <input type="email" name="" id="" placeholder="Enter email" className=" pl-3 rounded bg-gray-700 w-[85%]"/>
              <button className="bg-teal-700 w-17 h-13 rounded "><Code2/> </button>
            </div>

          </div>
          <div className="ml-15">
            <FooterColumn title="Categories list" items={categories} />
          </div>
          <div className="ml-30">
            <FooterColumn title="Job Locations" items={locations} />
          </div>
        </div>
        <div className="flex gap-100 mt-20">

          <div>

            <FooterColumn title="Hot Links" items={links} />
          </div>
          <div className="">
            <h1 className="text-lg text-white font-bold mb-5">Mobile app</h1>
            <img src="/appstore.png" alt="apple" className="mb-2 border border-gray-500"/>
            <img src="/googleplay.png" alt="google" className="border border-gray-500" />
          </div>
        </div>
        <div className="text-gray-400 mt-20 item-center flex justify-center">
          © 2019 HR Crew. All rights reserved | Designed by  <span className="text-teal-500 ml-2"> Auth-Mern</span>
            
        </div>
      </footer>
    </div>
  )
}
function FooterColumn({ title, items }) {
  return (
    <div>
      <h3 className="text-white font-semibold mb-4 text-lg">{title}</h3>
      <ul className="space-y-2 text-md text-gray-500">
        {items.map((item) => (
          <li key={item.name}>
            <Link
              href={item.href}
              className="hover:text-white transition-colors duration-200 text-"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Footer