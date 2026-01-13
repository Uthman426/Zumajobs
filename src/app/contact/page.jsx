"use client"
import { useState } from "react";


export default function Contact(){
     const data ={
    newyork:[
        {city: "newyork",
        map:"https://www.google.com/maps?q=New+York&output=embed",
    address: "#302, 5th Floor, ALHK-2247 ek, Settlers Lane, New York.",
    email: ["support@Zumajobs.com", "admin@Zumajobs.com"],
    phone: ["1(21) 224-016-8765", "1(21) 224-016-8764"]
    }],
 dubai:[ { city: " dubai",
    map: "https://www.google.com/maps?q=Dubai&output=embed",
    address: "#302, 5th Floor, ALHK-2247 ek, Al Sharafi building, Dubai.",
    email: ["support@Zumajobs.com", "admin@Zumajobs.com"],
    phone: ["1(12) 422-610-4678", "1(21) 224-016-8765"]
  }],
  saudiarabia:[ {city: "saudiarabia",
    map: "https://www.google.com/maps?q=Saudi+Arabia&output=embed",
    address: "#411, 3rd Floor, SALK-2247 ek, Al Sharafi building, Saudi Arabia.",
    email: ["support@Zumajobs.com", "admin@Zumajobs.com"],
    phone: ["1(21) 224-016-8765", "1(21) 224-016-8764"]
  }],
   russia:[{ city:"russia",
    map:"https://www.google.com/maps?q=Russia&output=embed",
    address: "#248, 2nd Floor, RSSLK-2247 ek, Al Sharafi building, Russia.",
    email: ["support@Zumajobs.com", "admin@Zumajobs.com"],
    phone: ["1(12) 422-610-4678", "1(21) 224-016-8765"]
  }]
     };
const [location,setLocation]= useState("newyork");
const currentLocation = data[location]?.[0]


const [formData, setFormData] = useState({
    name: "",
    subject: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  // handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // remove error as user types
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Please fill this";
    if (!formData.subject.trim()) newErrors.subject = "Please fill this";
    if (!formData.email.trim()) newErrors.email = "Please fill this";
    if (!formData.message.trim()) newErrors.message = "Please fill this";

    setErrors(newErrors);

    // if no errors, submit
    if (Object.keys(newErrors).length === 0) {
      alert("Form submitted:");
      // reset form if needed
      setFormData({
        name: "",
        subject: "",
        email: "",
        message: "",
      });
    }
  };



    return(
        <div>
            <div>
                <iframe className="w-full h-[520px]" src={currentLocation.map} frameborder="0"></iframe>
            </div>
            <div className="mx-auto w-[90%] bg-white shadow rounded h-70 -mt-30 relative">
                <div className="border-b border-gray-300">
            <div className="flex gap-10 text-gray-500 justify-center items-center h-20 text-lg cursor-pointer ">
               <div className="flex gap-10 justify-center items-center h-20 text-lg">
  <div
    onClick={() => setLocation("newyork")}
    className={`cursor-pointer pb-2 transition-all
      ${location === "newyork"
        ? "text-green-600 border-b-2 border-green-600 h-14 mt-5"
        : "text-gray-500 hover:text-gray-700"}
    `}
  >
    New york
  </div>

  <div
    onClick={() => setLocation("dubai")}
    className={`cursor-pointer pb-2 transition-all
      ${location === "dubai"
        ? "text-green-600 border-b-2 border-green-600  h-14 mt-5"
        : "text-gray-500 hover:text-gray-700"}
    `}
  >
    Dubai
  </div>

  <div
    onClick={() => setLocation("saudiarabia")}
    className={`cursor-pointer pb-2 transition-all
      ${location === "saudiarabia"
        ? "text-green-600 border-b-2 border-green-600  h-14 mt-5"
        : "text-gray-500 hover:text-gray-700"}
    `}
  >
    Saudi Arabia
  </div>

  <div
    onClick={() => setLocation("russia")}
    className={`cursor-pointer pb-4 transition-all
      ${location === "russia"
        ? "text-green-600 border-b-2 border-green-600  h-14 mt-5"
        : "text-gray-500 hover:text-gray-700"}
    `}
  >
    Russia
  </div>
</div>

            </div>
            </div>
            <div className="">
                {
                    currentLocation?(
                    
                        <div className="flex mx-auto w-[90%] p-5 grid grid-cols-4 gap-5 text-gray-500 p-10">
                            <div><h2 className="mb-5 text-gray-700">Address</h2>
                            <h4>{currentLocation.address}</h4></div>
                            <div><h2 className="mb-5 text-gray-700">Email</h2>
                            {currentLocation.email.map((em,i)=>(
                                <h4 key={i}>{em}</h4>
                            )
                            
                             )}</div>
                            <div><h2 className="mb-5 text-gray-700">Phone</h2>
                            {
                                currentLocation.phone.map((ph,i)=>(
                                    <h4 key={i}>{ph}</h4>
                                ))
                            }</div>
                            <button className="bg-teal-700 shadow rounded w-38 h-12 p-3 text-white">Contact</button>

                        </div>
                    
                    
                    ):(<>
                    <h3>We dont have office there</h3></>
                )}
            </div>
            </div>




            <div className="min-h-screen flex justify-center items-start pt-20 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md"
      >
        <h1 className="text-3xl font-semibold text-center mb-10">
          Submit Your Query
        </h1>

        {/* Name */}
        <div className="mb-5">
          <label className="block mb-2 font-medium">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-600"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        {/* Subject */}
        <div className="mb-5">
          <label className="block mb-2 font-medium">Subject</label>
          <input
            type="text"
            name="subject"
            placeholder="Enter subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-600"
          />
          {errors.subject && (
            <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
          )}
        </div>

        {/* Email */}
        <div className="mb-5">
          <label className="block mb-2 font-medium">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-600"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        {/* Message */}
        <div className="mb-8">
          <label className="block mb-2 font-medium">Message</label>
          <textarea
            name="message"
            placeholder="Type your query here"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-600 resize-none"
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-teal-700 text-white py-3 rounded-md font-medium hover:bg-teal-800 transition"
        >
          Submit
        </button>
      </form>
    </div>
  
            
        </div>
    )
}