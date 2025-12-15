import React from "react";



const TransBack = ()=>{
    return (
        <div className="relative pl-40 w-full h-80 pt-20 
        bg-[url('/tetahub1.jpg')] 
        bg-cover 
        bg-center 
        bg-fixed 
         ">
            <div className="absolute inset-0 bg-black/40"></div>
        <div className=" absolute " >
            <h1 className="text-4xl font-thin-100 text-white ">
                Your Dream Jobs Are Waiting
            </h1>
            <p className="pt-1 text-slate-300">
                Over 2.5 million interactions, 30,000 success stories Make yours now.
            </p>
            <div className="pt-6 flex flex-row gap-4 ">
                <button className='bg-teal-700 h-12 w-30 rounded text-white ]' >
                   Apply Job
                </button>
                <button className=" h-12 w-35 text-white rounded border border-wite-900 border-2">
                    Search Job
                </button>
            </div>
            
        </div>
        </div>
    )
}
export default TransBack