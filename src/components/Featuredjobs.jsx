"use client"
import React, { useEffect, useState } from "react";
import AllIcon from "./JobIcons";
import Jobs from "@/app/job/page";
import Link from "next/link";


const FeaturedJob = () => {
    const [jobs, setjobs] = useState([])

    const [recentJob, setRecentjob] = useState([])
    const [updateJob, setUpdatejob] = useState([])
    const [activebtn, setActivebtn] = useState("available")



    useEffect(() => {
        fetch("/api/jobs")
            .then(res => res.json())
            .then(data => {
                setjobs(data.jobs),
                    setRecentjob(data.jobs.slice(0, 4)),
                    setUpdatejob(data.jobs.slice(5, 10))
            })

            .catch(err => console.error("api mounting error", err))


    }, [])

    const jobTodisplay = activebtn === "available" ? recentJob : updateJob;
    const handleChange = (tab) => {
        setActivebtn(tab)
    }

    return (
        <div className="item-center justify-center mt-12  mx-auto flex flex-col">
            <div className="flex flex-row mx-auto gap-2">
                <button onClick={() => handleChange("available")} className="h-12 w-35 shadow-xl border border-slate-300 bg-white rounded hover:bg-black hover:text-white hover:border hover:border-white transition-colors duration-200">Recent jobs</button>
                <button onClick={() => handleChange("")} className="h-12 w-35 shadow-xl border border-slate-300 rounded hover:bg-black hover:text-white hover:border hover:border-white transition-colors duration-200">Updated jobs</button>
            </div>


            <div className="mt-20 ">

                {
                    jobTodisplay.map((job, index) => {


                        return (
                            <div
                                key={index}
                                className="group relative w-[75%] bg-gray-100 mx-auto m-7 pt-7 pl-8 pr-6 flex-row justify-between border-l-3 rounded border-teal-700 h-35 shadow-xl flex hover: hover:transform">
                                {/* Top-right triangle */}
                                <div className="absolute top-0 right-0   border-t-[90px] border-t-teal-700 border-l-[90px] border-l-transparent opacity-0 scale-50 translate-x-2 translate-y-2
                  group-hover:opacity-100 group-hover:scale-100 group-hover:translate-x-0 group-hover:translate-y-0
                  transition-all duration-500 ease-in-out"></div>

                                {/* Bottom-left triangle */}
                                <div className="absolute bottom-0 left-0 w-0 h-0 border-b-[90px] border-b-teal-700 border-r-[90px] border-r-transparent opacity-0 scale-50 -translate-x-2 -translate-y-2
                  group-hover:opacity-100 group-hover:scale-100 group-hover:translate-x-0 group-hover:translate-y-0
                  transition-all duration-500 ease-in-out"></div>
                                <div className=" w-[5%]">
                                    <AllIcon title={job.title} />
                                </div>
                                <div className=" w-[50%] -ml-10 ">
                                    <h1 className=" font-normal text-xl">
                                        {job.title}
                                    </h1>
                                    <div className="flex gap-4 mt-2">
                                        <span>{job.location}</span>
                                        <span>{job.category}</span>
                                    </div>



                                </div>
                                <div>
                                    <p><span className="text-teal-700 text-bold text-lg font-bold">Type:</span>{job.type}</p>
                                    <p><span className="text-teal-700 text-bold text-lg font-bold">Time:</span>{job.postedAt}</p>
                                </div>
                                <div>
                                    <Link href={"/job"}>
                                    <button className=" h-12 w-35 shadow-xl border-2 border-teal-700  hover:bg-black hover:text-white cursor-pointer rounded hover:border-none">
                                        Apply Now
                                    </button>
                                    </Link>
                                </div>

                            </div>
                        )

                    })
                }


            </div>


        </div>


    )
}
export default FeaturedJob