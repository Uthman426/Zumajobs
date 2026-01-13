"use client"
import React from "react"
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa"

const TopEmployer = () => {
  const workers = [
    {
      id: 1,
      name: "Sergio Pliego",
      role: "Head of Product",
      image: "/em1.jpg",
      socials: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
      },
    },
    {
      id: 2,
      name: "David Chen",
      role: "CTO of Innovatek",
      image: "em2.jpg",
      socials: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
      },
    },
    {
      id: 3,
      name: "Amira Osei",
      role: "Creative Director",
      image: "/em3.jpg",
      socials: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
      },
    },
    {
      id: 4,
      name: "Liam Bennett",
      role: "HR Manager",
      image: "/em4.jpg",
      socials: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
      },
    },
    {
      id: 5,
      name: "Sophia Martins",
      role: "Operations Lead",
      image: "/em5.jpg",
      socials: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
      },
    },
    {
      id: 6,
      name: "Daniel Okafor",
      role: "Tech Recruiter",
      image: "/em6.jpg",
      socials: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
      },
    },
    {
      id: 7,
      name: "Isabella Rossi",
      role: "Product Manager",
      image: "/em7.jpg",
      socials: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
      },
    },
    {
      id: 8,
      name: "Michael Thompson",
      role: "Startup Founder",
      image: "/em8.jpg",
      socials: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
      },
    },
    {
      id: 9,
      name: "Aisha Bello",
      role: "Talent Acquisition Lead",
      image: "/.jpg",
      socials: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
      },
    },
    {
      id: 10,
      name: "Carlos Mendes",
      role: "Business Strategist",
      image: "/images/workers/worker10.jpg",
      socials: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
      },
    },
    {
      id: 11,
      name: "Emily Watson",
      role: "People Operations",
      image: "/images/workers/worker11.jpg",
      socials: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
      },
    },
  ];





  return (
    <div>
      <div className="mx-auto item-center justify-center w-[40%] mt-10 mb-10">
        <h1 className=" text-4xl pl-5 leading-normal font-thin pl-38 ">Our Employers</h1>
        <div className="bg-teal-700 w-32  h-0.5 mx-auto"></div>
      </div>
      <div>
        <div className="flex flex-wrap gap-5 mx-auto w-[75%]  ">
          {
            workers.map((works, index) => {

              return (
                <div key={index}
                className="w-75 bg-black   my-5 rounded-lg  shadow-xl shadow-gray-100 ">
                  <div className="flex flex-col items-center   ">
                    <img
                    className="border border-white border-2 rounded-[50%] mt-8 " 
                     src={works.image} alt="" />
                    <div className="text-white text-lg pt-5">{works.name}</div>
                    <div className="text-gray-500 ">{works.role}</div>

                     <button className="bg-teal-700 text-white px-8 py-2 rounded-md mt-10 -mb-4 hover:text-green-500">view</button>
                  </div>
                 
                  <div className="flex px-28 pt-10 gap-2  h-20 bg-white ">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                      <FaFacebookF className="text-blue-600 text-xl hover:text-blue-800" />
                    </a>

                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                      <FaTwitter className="text-sky-500 text-xl hover:text-sky-700" />
                    </a>

                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                      <FaLinkedinIn className="text-blue-700 text-xl hover:text-blue-900" />
                    </a>
                  </div>
                </div>
              )

            })
          }
        </div>
      </div>
    </div>
  )
}
export default TopEmployer