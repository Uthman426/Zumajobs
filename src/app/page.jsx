"use client";


import Image from "next/image";
import Link from "next/link";
import Categories from "../components/Jobcategories";
import TransBack from "../components/TransparentBackground";
import FeaturedJob from "../components/Featuredjobs";
import Threepics from "@/components/Threehomepics";


export default function Home() {







  return (
    <div className=" w-full ">
      <div className=" inset-0 bg-[url('/tetahub2.jpg')] h-190 bg-cover bg-contain z-0">
        <div className="absolute inset-0 bg-black/50 h-190 "></div>

        <div className="flex flex-col justify-center item-center   mx-auto w-[60%]  relative">
          <div className="pt-63">
            <h1 className="text-white text-5xl w-[90%] mx-auto">Starting from your Dream Jobs</h1>
            <p className="text-white text-[18.5px] mx-auto w-[93%] pt-3 text-slate-300">Seamlessly connect with top employers and discover the latest career opportunities</p>
          </div>
          <div className="mt-15">
            <div className="flex flex-row">
              <h2 className="text-xl text-white ">Most Searches: </h2>
              <nav className="ml-6 flex gap-3  underline pt- ">
                <Link className="hover:text-teal-700 text-slate-300" href="#" onClick={(e) => e.preventDefault()} >Designing</Link>
                <Link className="hover:text-teal-700 text-slate-300" href="#" onClick={(e) => e.preventDefault()}>Software Developer</Link>
                <Link className="hover:text-teal-700 text-slate-300" href="#" onClick={(e) => e.preventDefault()}>Customer Service</Link>


                {/* href={`/jobs/${designing}`}
            href={`/jobs/${software}`}
            href={`/jobs/${costomer}`} */}
              </nav>
            </div>
            <div className="h-13 bg-white mt-4 pl-5 rounded w-[96%]">
              <input type="text"
                placeholder="Search keyword..."
                className=" h-14 w-[31%] bl-2  " />

              <select name="" id="" className="h-12  w-[23%] border-l border-gray-200 pl-2">
                <option value="">Select Category</option>
                <option value="">Designing</option>
                <option value="">Development</option>
                <option value="">Software developer</option>
                <option value="">.net developer</option>
                <option value="">Customer service</option>
                <option value="">Human resources</option>
                <option value="">IT(CSE)</option>
              </select>
              <select name="" id="" className="h-12 text-grey pl-3  w-[23%] border-l border-gray-200">
                <option value="">Select country</option>
                <optgroup label="Africa">
                  <option value="">Nigeria</option>
                  <option value="">Ghana</option>
                  <option value="">Togo</option>
                </optgroup>
                <optgroup label="Europe">
                  <option value="">USA</option>
                  <option value="">England</option>
                  <option value="">Spain</option>
                </optgroup>
              </select>
              <button className="bg-teal-700 h-14  text-white  w-[23%] rounded-r" >Search</button>

            </div>

          </div>
        </div>
      </div>
      <div>
        <div className="" >
          <div className="">
            <div className="mx-auto text-center w-[30%] mt-17">
              <h1 className="text-4xl ">Explore Categories</h1>
              <div className="bg-teal-700 w-28  h-0.5 mx-auto"></div>
            </div>
            <div className="mt-10">

              <Categories />

            </div>

          </div>

          <div className="h-80 mt-20">
            <TransBack />
          </div>
        </div>

      </div>

      <div>
        <div className="mx-auto text-center w-[30%] mt-17">
          <h1 className="text-4xl ">Featured Jobs</h1>
          <div className="bg-teal-700 w-28  h-0.5 mx-auto"></div>
        </div>

        <FeaturedJob />

      </div>


      <section className="mt-20 bg-white-900">

        <div className="">
          <div className="flex flex-row w-[70%] mx-auto gap-10 ">
            <div className="w-[50%] ">
              <h1 className="text-4xl font-sans font-medium text-gray-500">
                Looking for resources? Want to apply for a Job?
              </h1>
              <p className="py-5 text-slate-500 text-sm font-Black leading-relaxed ">
                Whether you're taking the first step in your career or searching for your next big opportunity,
                we’re here to support you. Our platform offers a wide range of tools and resources—from resume
                tips and interview guides to real-time job listings across multiple industries. Find jobs that
                match your skills and apply with confidence. With thousands of employers looking for talents
                like you, your next opportunity is just a click away.
              </p>
            </div>
            <div className="w-[50%]">

              <img src="/tetahub3.jpg" alt="" className="rounded h-70 w-125 " />

            </div>
          </div>
          <button className="h-12 w-35 ml-47 mt-6 text-white shadow-xl  bg-teal-700  hover:bg-teal-900 hover:text-slate-300 transition rounded hover:border-none">
            Apply Now
          </button>

        </div>
      </section>
      <section>
        <div>
          <div>
            <header className="mt-20 flex justify-center text-4xl">Latest News</header>
            <div className="bg-teal-700 w-28  h-0.5 mx-auto"></div>
          </div>
          <div className="mt-10">
           < Threepics/>
          </div>

        </div>
      </section>
      <section>
        <div className="mx-auto w-[80%]">
        <h2 className="mt-25 text-lg text-slate-500">Easy way to use mobile app</h2>
        <div className="flex mt-5">

          <div className="w-[50%]">
            <h1 className="text-4xl text-gray-600">
              Download our mobile apps today
            </h1>
            <p className="mt-5 w-[90%] text-slate-500">
              Job hunting just got easier — anytime, anywhere.
               With our mobile app, you can search for jobs, apply on the go,
                and get instant updates on new opportunities. Whether you're 
                commuting, taking a break, or relaxing at home, the next step 
                in your career is always at your fingertips. 
              Download the app today and take control of your job search.
            </p>
            <p className="mt-9 text-slate-500">
              Enter email address to get download link
            </p>
          </div>
          <div className="w-[50%]">
            <img src="/tetahub7.jpg" alt="" className="rounded h-75 w-125" />
          </div>
        </div>
        <div>
        <div className="border w-77 h-10 rounded pl-5 flex mt-2">
        <input type="email" name="" placeholder="Enter Email" id="" />
        <button className=" text-white bg-teal-700  hover:bg-teal-900 w-33 h-10">Get link</button>
        </div>
        <div>

        </div>
        </div>
        

         </div>
      </section>

    </div>
  );
}