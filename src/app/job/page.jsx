"use client"
import axios from "axios";
import React, { useEffect, useState } from "react";
import AllIcon from "@/components/JobIcons";
import { useSearchParams } from "next/navigation";
import { MapPin, Briefcase } from "lucide-react";



const Jobs = () => {
    const [job, setJob] = useState([])
    const [jobApi, setJobapi] = useState([])
    const [error, setError] = useState(null)
    const [Search, SetSearch] = useState('')
    const [loading, setLoading] = useState('')
    const [filteredjobs, setFilteredjobs] = useState([])
    const [filterTypes, setFilterTypes] = useState({
        "Full-time": false,
        "Part-time": false,
        Contract: false,
        Internship: false,
        Temporary: false,
    })
    const [filterLevel, setfilterLevel] = useState({
        Entry: false,
        Mid: false,
        Senior: false
    })
    const [filterCategory, setFilterCategory] = useState({
        "Software Developer": false,
        Marketing: false,
        Designer: false,
        Engineering: false,
        Data: false,
        Product: false,
        Security: false,
    })

    const [currentPage, setCurrentpage] = useState(1)
    const jobsPerpage = 5



    useEffect(() => {
        fetch("/api/jobs")
            .then(res => res.json())
            .then(data => {
                setJob(data.jobs)
                setFilteredjobs(data.jobs)
            })
            .catch(err => console.error("error mounting api in job page", err))


    }, [])

    // this code is for cross page filtering from jobcategory link till searchParams
    const searchParams = useSearchParams();

    useEffect(() => {
        const categoryFromUrl = searchParams.get("category");

        if (categoryFromUrl) {
            setFilterCategory(prev => {
                const updated = { ...prev };

                // reset all first
                Object.keys(updated).forEach(key => {
                    updated[key] = false;
                });

                // activate matching category
                if (updated.hasOwnProperty(categoryFromUrl)) {
                    updated[categoryFromUrl] = true;
                }

                return updated;
            });
        }
    }, [searchParams]);


    const applyFilters = () => {
        let filtered = [...job];

        // Type filter
        const selectedTypes = Object.keys(filterTypes).filter(t => filterTypes[t]);
        if (selectedTypes.length > 0) {
            filtered = filtered.filter(j => selectedTypes.includes(j.type));
        }

        // Level filter
        const selectedLevels = Object.keys(filterLevel).filter(l => filterLevel[l]);
        if (selectedLevels.length > 0) {
            filtered = filtered.filter(j => selectedLevels.includes(j.level)); // make sure level exists in data
        }

        // Category filter
        const selectedCategories = Object.keys(filterCategory).filter(c => filterCategory[c]);
        if (selectedCategories.length > 0) {
            filtered = filtered.filter(j => selectedCategories.includes(j.category));
        }

        // Search filter
        if (Search.trim() !== "") {
            filtered = filtered.filter(j => j.title.toLowerCase().includes(Search.toLowerCase()));
        }

        setFilteredjobs(filtered);
        setCurrentpage(1);
    };
    useEffect(() => {
        applyFilters();
    }, [filterTypes, filterLevel, filterCategory, Search, job]);



    //  if its only search you have in your page this is how to run it
    // useEffect(() => {
    //     const searchedjob = job.filter(jobb => jobb.title.toLowerCase().includes(Search.toLowerCase()))
    //     setFilteredjobs(searchedjob)
    //     setCurrentpage(1)
    // }, [Search, job])


    const totalPages = Math.ceil(filteredjobs.length / jobsPerpage);
    const start = (currentPage - 1) * jobsPerpage
    const end = start + jobsPerpage
    const currentJob = filteredjobs.slice(start, end)

    // if it is one we do it this way
    // const anyTypeChecked = Object.values(filterTypes).some(v => v === true);
    const anyFilterChecked =
        [...Object.values(filterTypes),
        ...Object.values(filterLevel),
        ...Object.values(filterCategory)
        ].some(v => v === true);


    // const currentJob = Search.trim() === "" && !anyFilterChecked ? filteredjobs.slice(start, end) : filteredjobs


    const toggleType = (type) => {
        setFilterTypes({ ...filterTypes, [type]: !filterTypes[type] });
    };
    const toggleLevel = (level) => {
        setfilterLevel({ ...filterLevel, [level]: !filterLevel[level] })
    }
    const toggeleCategory = (category) => {
        setFilterCategory({ ...filterCategory, [category]: !filterCategory[category] })
    }

    //     the three toggle in one
    //     const toggleFilter = (group, key) => {
    //   if (group === "type")
    //     setFilterTypes(prev => ({ ...prev, [key]: !prev[key] }));

    //   if (group === "level")
    //     setfilterLevel(prev => ({ ...prev, [key]: !prev[key] }));

    //   if (group === "category")
    //     setFilterCategory(prev => ({ ...prev, [key]: !prev[key] }));
    // };




    //     const resetFilters = () => {
    //   setJobTypes({
    //     "Full-time": false,
    //     "Part-time": false,
    //     Contract: false,
    //     Internship: false,
    //     Temporary: false,
    //   });

    //   setSearch("");

    //   setFiltered(jobs);
    // };
    const resetFilters = () => {
        // 1) Reset Search input
        SetSearch("");

        // 2) Reset Type checkboxes (all false)
        setFilterTypes({
            "Full-time": false,
            "Part-time": false,
            Contract: false,
            Internship: false,
            Temporary: false,
        });

        // 3) Reset Level checkboxes (all false)
        setfilterLevel({
            Entry: false,
            Mid: false,
            Senior: false,
        });

        // 4) Reset Category checkboxes (all false)
        setFilterCategory({
            "Software Developer": false,
            Marketing: false,
            Designer: false,
            Engineering: false,
            Data: false,
            Product: false,
            Security: false,
        });

        // 5) Reset list back to all jobs
        setFilteredjobs(job);

        // 6) Go back to page 1
        setCurrentpage(1);
    };







    return (
        <div>
            <div className="flex w-[75%] mx-auto gap-10 bg-white">
                <div className="mt-20 space-y-5 w-[70%]">
                    <h1 className="text-2xl" >Featured Jobs</h1>
                    <div className="space-y-5">

                        {

                            currentJob.length === 0 ? (
                                <div className="text-center text-gray-500 mt-10">
                                    <p className="text-lg font-semibold">No related jobs found</p>
                                    <p className="text-sm mt-2">
                                        Try adjusting your filters or search keywords.
                                    </p>
                                </div>
                            ) : (
                                currentJob.map((jobitem, index) => {


                                    return (
                                        <div
                                            key={index}
                                            className="  bg-gray-100 gap-5  pt-10 pl-8 pr-6 flex-row justify-between border-l-3 rounded border-teal-700 h-55 shadow-xl flex">

                                            <div className=" ">
                                                <AllIcon title={jobitem.title} />
                                                {/* <img src={AllIcon({ title: "Frontend Developer" })} alt={job.title} /> */}

                                            </div>
                                            <div className=" w-[30%] space-y-3   ">
                                                <h1 className=" font-semibold text-lg">
                                                    {jobitem.title}
                                                </h1>
                                                <div className="space-y-1">
                                                    <span className="flex gap-2 "><p className="pt-1"><MapPin size={18} color="gray" strokeWidth={3} /></p>{jobitem.location}</span>
                                                    <span className="flex gap-2"><p className="pt-1"><Briefcase size={18} color="gray" strokeWidth={3} /></p>{jobitem.category}</span>
                                                </div>



                                            </div>
                                            <div>
                                                <p><span className="text-teal-700 text-bold text-base font-semibold">Type:</span>{jobitem.type}</p>
                                                <p><span className="text-teal-700 text-bold text-base font-semibold">Level:</span>{jobitem.level}</p>
                                            </div>
                                            <div>
                                                <button className="h-20 w-35 shadow-xl text-teal-700  border-2 border-teal-700  hover:bg-black hover:text-white rounded hover:border-none">
                                                    Apply   <br />Now
                                                </button>
                                            </div>

                                        </div>
                                    )

                                })
                            )
                        }


                    </div>
                    <div>
                        {filteredjobs.length > 0 && (
                            <div className="flex justify-center items-center gap-6 mt-10">

                                <button
                                    onClick={() => setCurrentpage(p => Math.max(p - 1, 1))}
                                    disabled={currentPage === 1}
                                    className="px-4 py-2 border rounded disabled:opacity-50"
                                >
                                    Prev
                                </button>

                                <span className="text-sm font-medium">
                                    Page {currentPage} of {totalPages}
                                </span>

                                <button
                                    onClick={() => setCurrentpage(p => Math.min(p + 1, totalPages))}
                                    disabled={currentPage === totalPages}
                                    className="px-4 py-2 border rounded disabled:opacity-50"
                                >
                                    Next
                                </button>

                            </div>
                        )}

                    </div>





                </div>
                <div className="mt-15 w-[30%] space-y-8">
                    <div className=" bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Search by keywords</h3>
                        <form action="">
                            <input value={Search} onChange={(e) => SetSearch(e.target.value)} type="text" placeholder="Search here"
                                className="w-full h-12 rounded-md border border-gray-200 bg-white pl-4 pr-12 text-sm outline-none focus:border-teal-600  " />
                        </form>

                    </div>
                    <div className="bg-white rounded-lg shadow-lg p-10 border-gray-100 ">
                        <h3 className="text-xl font-base mb-4">Job Type</h3>


                        {Object.keys(filterTypes).map((type) => (
                            <label key={type} className="flex items-center gap-2 mb-2">
                                <input
                                    type="checkbox"
                                    checked={filterTypes[type]}
                                    onChange={() => toggleType(type)}
                                />
                                {type}
                            </label>
                        ))}
                    </div>
                    <div className="bg-white rounded-lg shadow-lg p-10 border-gray-100 ">
                        <h3 className="text-xl font-base mb-4">Job Level</h3>
                        {
                            Object.keys(filterLevel).map((level) =>
                                <label key={level} className="flex items-center gap-2 mb-2">
                                    <input
                                        type="checkbox"
                                        checked={filterLevel[level]}
                                        onChange={() => toggleLevel(level)} />
                                    {level}
                                </label>
                            )
                        }
                    </div>
                    <div className="bg-white rounded-lg shadow-lg p-10 border-gray-100 ">
                        <h3 className="text-xl font-base mb-4">Job Category</h3>
                        {
                            Object.keys(filterCategory).map((category) =>
                                <label key={category} className="flex items-center gap-2 mb-2"
                                >
                                    <input
                                        type="checkbox"
                                        checked={filterCategory[category]}
                                        onChange={() => toggeleCategory(category)} />
                                    {category}
                                </label>
                            )
                        }
                    </div>
                    <div>
                        <div className="pb-10">
                            <button
                                onClick={resetFilters}
                                disabled={!anyFilterChecked && Search.trim() === ""}
                                className="w-full h-12 rounded-md border-2 border-teal-700 text-teal-700 font-medium
               hover:bg-teal-700 hover:text-white transition
               disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                Reset Filter
                            </button>
                        </div>
                        
                    </div>
                </div>
            </div>



        </div>
    )
}

export default Jobs