"use client"
import axios from "axios";
import React, { useEffect, useState } from "react";
import AllIcons from "@/components/JobIcons";


const Jobs = () => {
    const [job, setJob] = useState([])
    const [jobApi, setJobapi] = useState([])
    const [error, setError] = useState(null)
    const [Search, SetSearch] = useState('')
    const [loading, setLoading] = useState('')
    const [filteredjobs, setFilteredjobs] = useState([])
    const [filterTypes, setFilterTypes] = useState({
        "FULL_TIME": false,
        "PART_TIME": false,
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
        "Software developer": false,
        Development: false,
        "Customer service": false,
        Designing: false,
        Marketing: false,
        Sales: false,
        "Senior Developer": false 
    })

    const [currentPage, setCurrentpage] = useState(1)
    const jobsPerpage = 5



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
                const response = await axios(options)
                const data = response.data.data
                setJob(data)
                setFilteredjobs(data)
            }
            catch (error) {
                setError("can't get job api")
            }
        }


        fetchData()

    }, [])

    useEffect(() => {
        const selectedTypes = Object.keys(filterTypes).filter(t => filterTypes[t]);

        if (selectedTypes.length > 0) {
            const filtered = job.filter(j =>
                selectedTypes.includes(j.job_employment_type)
            );

            setFilteredjobs(filtered);
        } else {
            setFilteredjobs(job);
        }

        setCurrentpage(1);
    }, [filterTypes, job]);
    useEffect(()=>{
          const selectedLevel = Object.keys(filterLevel).filter(l => filterLevel[l])
          if (selectedLevel.length > 0) {
            const filtered = job.filter(j => 
            selectedLevel.includes(j.job_level)
         );
         setFilteredjobs(filtered)
        }
         else 
            setFilteredjobs(job)
    },[filterLevel,job])

    useEffect(()=>{
        const selectedCategory = Object.keys(filterCategory).filter(c => filterCategory[c])
        if (selectedCategory.length > 0)
        {
            const filtered = job.filter(c =>
                selectedCategory.includes(c.job_title)
            )
            setFilteredjobs(filtered)
        }
        else 
            setFilteredjobs(job)
    },[filterCategory,job])



    useEffect(() => {
        const searchedjob = job.filter(jobb => jobb.job_title.toLowerCase().includes(Search.toLowerCase()))
        setFilteredjobs(searchedjob)
        setCurrentpage(1)
    }, [Search, job])


//     combining the three useffect together
//     useEffect(() => {
//   let results = [...job];

//   // 1. SEARCH FILTER
//   if (Search.trim() !== "") {
//     results = results.filter(j =>
//       j.job_title.toLowerCase().includes(Search.toLowerCase())
//     );
//   }

//   // 2. TYPE FILTER
//   const selectedTypes = Object.keys(filterTypes).filter(t => filterTypes[t]);
//   if (selectedTypes.length > 0) {
//     results = results.filter(j =>
//       selectedTypes.includes(j.job_employment_type)
//     );
//   }

//   // 3. LEVEL FILTER
//   const selectedLevels = Object.keys(filterLevel).filter(l => filterLevel[l]);
//   if (selectedLevels.length > 0) {
//     results = results.filter(j =>
//       selectedLevels.includes(j.job_level)
//     );
//   }

//   // 4. CATEGORY FILTER
//   const selectedCategories = Object.keys(filterCategory).filter(c => filterCategory[c]);
//   if (selectedCategories.length > 0) {
//     results = results.filter(j =>
//       selectedCategories.includes(j.job_category)
//     );
//   }

//   // SET FINAL FILTERED LIST
//   setFilteredjobs(results);
//   setCurrentpage(1);
// }, [Search, filterTypes, filterLevel, filterCategory, job]);


    const start = (currentPage - 1) * jobsPerpage
    const end = start + jobsPerpage
    // const currentJob = filteredjobs.slice(start, end)

    // if it is one we do it this way
    // const anyTypeChecked = Object.values(filterTypes).some(v => v === true);
    const anyFilterChecked =
  [...Object.values(filterTypes),
   ...Object.values(filterLevel),
   ...Object.values(filterCategory)
  ].some(v => v === true);


    const currentJob = Search.trim() === "" && !anyFilterChecked ? filteredjobs.slice(start, end) : filteredjobs


    const toggleType = (type) => {
        setFilterTypes({ ...filterTypes, [type]: !filterTypes[type] });
    };
    const toggleLevel = (level) =>{
        setfilterLevel({...filterLevel,[level]: !filterLevel[level]})
    }
    const toggeleCategory = (category) =>{
        setFilterCategory ({...filterCategory,[category]: !filterCategory[category]})
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






    return (
        <div>
            <div className="flex w-[75%] mx-auto">
                <div>
                    <h3>Featured Jobs</h3>
                    <div className="mt-20 ">

                        {
                            currentJob.map((jobitem, index) => {


                                return (
                                    <div
                                        key={index}
                                        className="w-[70%] bg-gray-100 mx-auto m-7 pt-10 pl-8 pr-6 flex-row justify-between border-l-3 rounded border-teal-700 h-35 shadow-xl flex">

                                        <div className=" w-[5%]">
                                            {AllIcons(jobitem.job_title)}
                                        </div>
                                        <div className=" w-[50%] -ml-10 ">
                                            <h1 className=" font-semibold text-lg">
                                                {jobitem.job_title}
                                            </h1>
                                            <div className="flex gap-4">
                                                <span>{jobitem.job_city}</span>
                                                <span>{jobitem.job_country}</span>
                                            </div>



                                        </div>
                                        <div>
                                            <p><span className="text-teal-700 text-bold text-lg font-bold">Type:</span>{jobitem.job_employment_type}</p>
                                            <p><span className="text-teal-700 text-bold text-lg font-bold">Time:</span>{jobitem.job_posted_at}</p>
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
                <div>
                    <div>
                        <h3>Search by keywords</h3>
                        <form action="">
                            <input value={Search} onChange={(e) => SetSearch(e.target.value)} type="text" placeholder="Search here" />
                        </form>

                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Job Type</h3>


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
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Job Level</h3>
                        {
                            Object.keys(filterLevel).map((level)=>
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
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Job Category</h3>
                        {
                            Object.keys(filterCategory).map((category)=>
                                <label key={category} className="flex items-center gap-2 mb-2"
                                >
                                    <input 
                                    type="checkbox"
                                    checked= {filterCategory[category]}
                                    onChange={() =>toggeleCategory(category)} />
                                    {category}
                                </label>
                            )
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Jobs