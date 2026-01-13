import React from "react";
import Link from "next/link";
import Image from "next/image";
import Jobhow from "@/components/JobHowitworks";
import TransBack from "@/components/TransparentBackground";



const About = () => {
    const testimonials = [
        {
            name: "Williams",
            writeup: "ZumaJobs made my job search incredibly smooth. Within days, I had multiple interviews lined up with reputable companies. The platform is easy to use and the listings👌",
            pics: "williamszumajobs.jpg",
            company: "Co-founder of Company"
        },
        {
            name: "Robert",
            writeup: "I’ve used several job platforms, but none compares to the support and quality of ZumaJobs. I was able to find a full-time role that matched my exact skills and expectations",
            pics: "robertzumajobs.jpg",
            company: "Co-founder of Company"
        },
        {
            name: "Micheal",
            writeup: "Thanks to ZumaJobs, I transitioned into a new industry with confidence. The guidance, resources, and employer connections were outstanding throughout the process.",
            pics: "michealzumajobs.jpg",
            company: "Co-founder of Company"
        }
    ]

    return (
        <div>
            <div className="w-[75%] mx-auto item-center justify-center">
                <div className="mx-auto item-center justify-center w-[40%] mt-20">
                    <h1 className=" text-4xl pl-5 leading-normal font-thin ">About HR Resources</h1>
                    <div className="bg-teal-700 w-28  h-0.5 mx-auto"></div>
                </div>
                <div>
                    <div className="w-  mt-10">
                        <h1 className="text-4xl">First Job portal theme having <br></br> mobile app application</h1>

                    </div>


                    <div className="flex   gap-5">

                        <div className="w-1/2 mt-5 ">

                            <p className="w-[95%] tracking-wide leading-relaxed">
                                A Complete Job Portal Experience – Now with
                                Mobile Access Stay connected to your career
                                goals wherever you are. Our platform combines
                                powerful job search tools with the convenience
                                of a mobile app, allowing you to browse listings,
                                apply instantly, and stay updated on the go.
                            </p>

                            <div className="flex mt-10 gap-5">
                                <div>
                                    <img className="w-[18%]" src="/icons/bob-image.jpg" alt="geek" />
                                    <h4 className="text-xl  mt-3 font-medium"><Link href="/home"> Login to portal</Link> </h4>
                                    <p className=" tracking-wide leading-relaxed  mt-3">
                                        Log in to manage your profile, track job applications,
                                        and receive personalized recommendations tailored
                                        to your skills and interests.
                                    </p>
                                </div>
                                <div>
                                    <img className="w-[20%] h-15" src="/icons/message image.jpeg" alt="data" />
                                    <h4 className="text-xl mt-3">
                                        <Link href={'/home'}>Apply for a job</Link>
                                    </h4>
                                    <p className="mt-3 tracking-wide leading-relaxed">
                                        Take the First Step Toward Your
                                        Career Goals. Browse thousands of
                                        verified job listings and apply with ease.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="w-[50%]">
                            <img className="w-[]" src="/tetahub4.jpg" alt="iscoming" />
                        </div>
                    </div>



                </div>




            </div>
            <div className="">
                <Jobhow />
            </div>
            <div>
                < TransBack />
            </div>

            -<div className="mb-20">


                <div className="mx-auto item-center justify-center w-[40%] mt-10 mb-10">
                    <h1 className=" text-4xl pl-5 leading-normal font-thin pl-38 ">Testimonials</h1>
                    <div className="bg-teal-700 w-32  h-0.5 mx-auto"></div>
                </div>
                <div className="flex w-[75%] mx-auto">
                    {
                        testimonials.map((test, index) => {
                            return (
                                <div key={index} className="w-70 mx-auto">
                                    <p className="text-md text-gray-500 leading-relaxed mb-4">{test.writeup}</p>
                                    <div className="flex gap-4">
                                        <div className="rounded-full ">
                                            <img className="rounded-full h-12" src={test.pics} alt="" />
                                        </div>
                                        <div>
                                            <h4 className="text-gray-600 text-lg font-medium">{test.name}</h4>
                                            <h1 className="text-gray-500">{test.company}</h1>
                                        </div>
                                    </div>

                                </div>

                            )
                        })
                    }
                </div>
            </div>


        </div>
    )
}
export default About