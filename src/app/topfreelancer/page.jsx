import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
const Topfree = () => {
    const Freelance = [
        {
            id: 1,
            name: "Alexander Smith",
            role: "Web Designer",
            location: "Settlers Lane, New York",
            image: "/fr1.jpg",
        },
        {
            id: 2,
            name: "Laura Paul",
            role: "Software Developer",
            location: "Settlers Lane, New York",
            image: "/fr2.jpg",
        },
        {
            id: 3,
            name: "Elizabeth Ker",
            role: "Customer Service",
            location: "Settlers Lane, New York",
            image: "/fr3.jpg",
        },
        {
            id: 4,
            name: "John Smith",
            role: "Sales Manager",
            location: "Settlers Lane, New York",
            image: "/fr4.jpg",
        },
        {
            id: 5,
            name: "Michael Brown",
            role: "UI/UX Designer",
            location: "Settlers Lane, New York",
            image: "/fr5.jpg",
        },
        {
            id: 6,
            name: "Sophia Lee",
            role: "Frontend Developer",
            location: "Settlers Lane, New York",
            image: "/fr6.jpg",
        },
        {
            id: 7,
            name: "Daniel Kim",
            role: "Backend Developer",
            location: "Settlers Lane, New York",
            image: "/fr7.jpg",
        },
        {
            id: 8,
            name: "Emily Watson",
            role: "Project Manager",
            location: "Settlers Lane, New York",
            image: "/fr8.jpg",
        },
    ]
          const cards = []

    
                Freelance.forEach((Freelancer) =>{
                    cards.push(

                        
                    <div key={Freelancer.id}
                        className="border rounded-lg border-gray-300 ">

                        <div className="flex flex-col items-center py-8">
                            <img
                            className="rounded-[50%]" 
                            src={Freelancer.image} alt="" />
                            <div className="pt-2 font-semibold"><h1>{Freelancer.name}</h1></div>
                            <div className="text-gray-800 pb-4"><h3>{Freelancer.role}</h3></div>
                            <div className="text-gray-500"><h4>📍{Freelancer.location}</h4></div>

                            <button className="mt-4 px-6 py-2 border border-teal-600 text-teal-600 rounded hover:bg-teal-600 hover:text-white transition cursor-pointer">
                                View profile
                            </button>
                        </div>
                        <div className="grid grid-cols-3 border-t border-gray-500 text-center">
                            <div className="py-3 border-r border-gray-500">
                                <FaFacebookF className="mx-auto text-blue-600" />
                            </div>
                            <div className="py-3 border-r border-gray-500">
                                <FaTwitter className="mx-auto text-sky-500" />
                            </div>
                            <div className="py-3">
                                <FaLinkedinIn className="mx-auto text-blue-700" />
                            </div>
                        </div>


                    </div>
  )
})
      return(
        <div>
            <div className="mx-auto item-center justify-center w-[40%] mt-10 mb-10">
        <h1 className=" text-4xl pl-5 leading-normal font-thin pl-38 ">Our Candidates</h1>
        <div className="bg-teal-700 w-32  h-0.5 mx-auto"></div>
      </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-[75%] mx-auto">
            
            {cards}
        </div>
        </div>
      )      
}
export default Topfree