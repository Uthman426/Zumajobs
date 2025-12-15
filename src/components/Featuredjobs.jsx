"use client"
import React, { useEffect, useState } from "react";
import AllIcons from "./JobIcons";
import axios from "axios";


const FeaturedJob = () => {

    const [recentJob, setRecentjob] = useState([])
    const [updateJob, setUpdatejob] = useState([])
    const [activebtn, setActivebtn] = useState("available")



    useEffect(() => {
        const options = {
            method: 'GET',
             url: 'https://jsearch.p.rapidapi.com/search',
            params: {
                query: 'developer jobs in chicago',
                page: '1',
                num_pages: '1',
                country: 'us',
                date_posted: 'all'
            },
            headers: {
                'x-rapidapi-key': '61865e14c4msh84d4f016739b395p1e3bb9jsn59850f1a5e32',
                'x-rapidapi-host': 'jsearch.p.rapidapi.com'
            }
        };

        async function fetchData() {
            try {
                const response = await axios.request(options);
                const result = response.data.data
                console.log(result);
                setRecentjob(result.slice(0,4))
                setUpdatejob(result.slice(5,10))
                
            } catch (error) {
                console.error(error);
            }
        }

        fetchData();
    }, [])

    const jobTodisplay = activebtn === "available" ? recentJob : updateJob;
    const handleChange =(tab)=>{
        setActivebtn(tab)
    }

    return (
        <div className="item-center justify-center mt-12  mx-auto flex flex-col">
            <div className="flex flex-row mx-auto gap-2">
                <button onClick={()=>handleChange("available")} className="h-12 w-35 shadow-xl border border-slate-300 bg-white rounded hover:bg-black hover:text-white hover:border hover:border-white transition-colors duration-200">Recent jobs</button>
                <button onClick={()=>handleChange("")} className="h-12 w-35 shadow-xl border border-slate-300 rounded hover:bg-black hover:text-white hover:border hover:border-white transition-colors duration-200">Updated jobs</button>
            </div>


            <div className="mt-20 ">

                {
                    jobTodisplay.map((job,index) => {


                        return(
                        <div
                            key={index}
                            className="w-[70%] bg-gray-100 mx-auto m-7 pt-10 pl-8 pr-6 flex-row justify-between border-l-3 rounded border-teal-700 h-35 shadow-xl flex">

                            <div className=" w-[5%]">
                              {AllIcons(job.job_title)}
                            </div>
                            <div className=" w-[50%] -ml-10 ">
                                <h1 className=" font-semibold text-lg">
                                  {job.job_title}
                                </h1>
                                <div className="flex gap-4">
                                    <span>{job.job_city}</span>
                                    <span>{job.job_country}</span>
                                </div>
                                
                                

                            </div>
                            <div>
                                <p><span className="text-teal-700 text-bold text-lg font-bold">Type:</span>{job.job_employment_type}</p>
                                <p><span className="text-teal-700 text-bold text-lg font-bold">Time:</span>{job.job_posted_at}</p>
                            </div>
                            <div>
                                <button className="h-12 w-35 shadow-xl border-2 border-teal-700  hover:bg-black hover:text-white rounded hover:border-none">
                                    Apply Now
                                </button>
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