
"use client";

import { useState } from "react";

export default function Signup() {
  const [userType, setUserType] = useState("fresher");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className=" w-[75%] bg-white p-8 rounded-lg shadow-md">
        {/* Toggle Buttons */}
        <div className="flex w-[30%] mx-auto  mb-6 border border-gray-300 rounded-lg overflow-hidden">
          <button
            onClick={() => setUserType("fresher")}
            className={`flex-1 py-2 text-center font-medium ${userType === "fresher"
              ? "bg-gray-800 text-white"
              : "bg-white text-gray-700"
              }`}
          >
            Fresher?
          </button>


          <button
            onClick={() => setUserType("experienced")}
            className={`flex-1 py-2 text-center font-medium ${userType === "experienced"
              ? "bg-gray-800 text-white"
              : "bg-white text-gray-700"
              }`}
          >
            Experienced?
          </button>

        </div>


        {userType === "fresher"
          ? <> <h2 className="text-2xl font-light text-center mb-6">If you are a Fresher, Apply here</h2>




            <form className="space-y-4">
              {/* Full Name */}
              <div>
                <label className="block text-gray-700 mb-1">Your Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-gray-700 mb-1">Email Address</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              {/* Mobile Number */}
              <div>
                <label className="block text-gray-700 mb-1">Mobile Number</label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 bg-gray-200 border border-r-0 border-gray-300 rounded-l">
                    91
                  </span>
                  <input
                    type="text"
                    placeholder="Mobile number"
                    className="w-full border border-gray-300 p-2 rounded-r focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
              </div>

              {/* Location */}
              <div>
                <label className="block text-gray-700 mb-1">Your Location</label>
                <input
                  type="text"
                  placeholder="Location"
                  className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-gray-700 mb-1">Create Password</label>
                <input
                  type="password"
                  placeholder="Minimum 6 characters"
                  className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              {/* Upload Resume */}
              <div>
                <label className="block text-gray-700 mb-1">Upload Resume</label>
                <input
                  type="file"
                  accept=".doc,.docx,.rtf,.pdf"
                  className="w-full border border-gray-300 p-2 rounded cursor-pointer focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <p className="text-sm text-gray-500 mt-1">doc, docx, rtf, pdf - 2MB max</p>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-green-700 text-white py-2 rounded mt-4 hover:bg-green-800 transition"
              >
                Apply
              </button>
            </form>
          </>
          : <>
            <div className="">
              <form action="" className="mx-auto w-[70%] space-y-5">
                <h2 className="text-4xl font-serif mb-6">If you are Experienced, Apply here</h2>
                <div className="flex gap-5 flex w-[100%] ">
                  <div className="p-3"><h3>Your Full Name</h3></div>
                  <div><input className="p-3 border border-gray-200 w-110 shadow rounded " placeholder="Enter your name" type="text" /></div>
                </div>
                <div className="flex gap-5 flex w-[100%] ">
                  <div className="p-3"><h3>Email Address</h3></div>
                  <div><input className="p-3 border border-gray-200 w-110 shadow rounded " placeholder="Enter your Email" type="email" /></div>
                </div>
                <div className="flex gap-5 flex w-[100%] ">
                  <div className="p-3"><h3>Create Password</h3></div>
                  <div><input className="p-3 border border-gray-200 w-100 shadow rounded " placeholder="Minimum of 8 characters" type="password" /></div>
                </div>
                <div className="flex gap-5 flex w-[100%] ">
                  <div className="p-3"><h3>Mobile Number</h3></div>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 bg-gray-200 border border-r-0 border-gray-300 rounded-l">
                      91
                    </span>
                    <input className="p-3 border border-gray-200 w-95 shadow rounded " placeholder="Enter your name" type="text" /></div>
                </div>
                <div className="flex gap-5 flex w-[100%] ">
                  <div className="p-3"><h3>Work Experience</h3></div>
                  <div className="flex gap-4">
                    <div className="flex gap-2">
                      <select
                        id="yearsSelect"
                        className="p-3 border border-gray-200 w-40 shadow rounded mt-2"
                      >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5+">5+</option>
                      </select>
                      <span className="mt-6 text-gray-500">Year(s)</span>
                    </div>

                    <div className="flex gap-3">
                      <input className="border border-gray-200 w-40 shadow rounded mt-2" type="number" name="" id="numbers" />
                      <datalist id="numbers">
                        {[...Array(10)].map((_, i) => (
                          <option key={i} value={i + 1} />
                        ))}
                      </datalist>
                      <span className="mt-6 text-gray-500">Month(s)</span>
                    </div>

                  </div>
                </div>
                <div className="flex gap-5">
                  <div className="p-3"><h3>Upload resume</h3></div>
                  <div className="flex gap-5">
                    <label class="cursor-pointer bg-teal-700 text-white p-3 border border-gray-300 rounded shadow inline-block text-gray-500">
                  Upload Resume
                  <input type="file" class="hidden" accept=".pdf,.doc,.docx"/>
                </label>
                    <span className="text-sm text-gray-500 mt-5">doc, docx, rtf, pdf - 2MB max </span></div>
                </div>



                <div className="mt-15">
                  <input className="w-10 h-5 accent-teal-700" type="checkbox" name="" id=""/>
                  <label className="text-gray-500 " htmlFor="I agree">I agree to the terms and agreement of Zuma jobs. I have reviewed the default mailer & communication settings</label>
                  
                  
                </div>
                <div className="float-right">
                  <button className="bg-black text-white w-35 h-13 rounded p-3 cursor-pointer hover:text-teal-700">Register Now</button>
                </div>
                

              </form>
            </div>
          </>}

      </div>
    </div>
  );
}
