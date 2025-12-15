import React from "react";
import Image from "next/image";

const Threepics = ()=>{

       const pics = [
        {pic:"/tetahub4.jpg", 
         date:"October 7, 2019",
          head:"What to wear to a job interview",
         writeup:"Dress professionally and appropriately for the company culture. First impressions count, so keep it clean, simple, and confident."
        },
        { pic:"/tetahub5.jpg", 
         date:"October 7, 2019",
          head:"Resume Writing Do's and Don't",
         writeup:"Highlight relevant experience, keep formatting consistent, and avoid common mistakes like typos or exaggerations."

        },
        {pic:"/tetahub6.jpg", 
         date:"October 7, 2019",
         head:"How to Ace your next virtual interview",
         writeup:"Ensure a quiet environment, dress the part, maintain eye contact through the camera, and prepare thoroughly in advance."
        }
        

       ]


    return(
            <div className="flex gap-4 mx-auto w-[80%] ">
        {
            pics.map((items,index)=>(
                <div key={index} className="w-80 h-120 shadow-md rounded hover:-mt-2 hover:transform ">
                     <img
            src={items.pic}
            alt={"normal"}
            className="w-80 h-50"
            loading="lazy" 
          />    <div className="mx-auto w-[80%] mt-5">
            <h2 className=" text-slate-500">{items.date}</h2>
                     <h1 className="text-xl mt-3 font-bold ">{items.head}</h1>
                     <p className="mt-5 text-md text-slate-500 ">{items.writeup}</p>
          </div>
                     

                </div>
            )
                
            )
        }
        </div>
    )
}
export default Threepics