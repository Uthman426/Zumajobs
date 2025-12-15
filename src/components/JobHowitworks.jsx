
import React from "react";
import { UserPlus, User, GraduationCap, Send, Wallet } from "lucide-react";
import Link from "next/link";





const jobcard = [
    {
        cardicon: UserPlus,
        bg: "bg-green-100",
        cardname: "Register account",
        cardwriteup: "Create a free account in just a few steps. Gain access to a wide range of job listings, personalized alerts, and essential tools to kick-start your job search."
    },
    {
        cardicon: User,
        bg: "bg-teal-100",
        cardname: "Update profilet",
        cardwriteup: "Complete your profile with your skills, experience, and interests. A well-updated profile increases your visibility and helps employers find you faster."
    },
    {
        cardicon: GraduationCap,
        bg: "bg-emerald-100",
        cardname: "Search dream job",
        cardwriteup: "Browse thousands of verified job listings across various industries and locations. Use filters to narrow down your search and find opportunities that match your career goals."

    },
    {
        cardicon: Send,
        bg: "bg-lime-100",
        cardname: "Apply job",
        cardwriteup: "Found the right fit? Submit your application with a single click. Track your application status and communicate directly with potential employers—all in one place."

    }

]
const features = [
    {
        icon: UserPlus,
        color: "text-green-700",
        title: "Experienced Employers",
        desc: "Connect with top-tier companies and seasoned recruiters actively hiring across various sectors.",
    },
    {
        icon: GraduationCap,
        color: "text-emerald-600",
        title: "Millions of jobs",
        desc: "Explore a vast database of current job openings tailored to diverse skills and industries.",
    },
    {
        icon: User,
        color: "text-teal-700",
        title: "Secure profiles",
        desc: "Your personal data is protected. Manage your resume, credentials, and visibility with full control.",
    },
    {
        icon: Wallet,
        color: "text-green-800",
        title: "No advance payments",
        desc: "Apply and get hired without paying any upfront fees. Our platform is completely free for job seekers.",
    },
];



const Jobhow = () => {


    return (
        <div>
            <div className="w-full bg-green-100 h-155 ">
            <div className="mb-10 w-[75%] mx-auto">
                <div className="mx-auto item-center justify-center w-[40%] mt-20 pt-20">
                    <h1 className=" text-4xl pl-17 leading-normal font-thin ">How It Works</h1>
                    <div className="bg-teal-700 w-30  h-0.5 mx-auto"></div>
                </div>

                <div className="flex gap-5 mt-15 ">
                    {jobcard.map((job, index) => {
                        const Icon = job.cardicon
                        return (
                            <div className="border border-gray-200 w-[25%] shadow rounded h-90 p-5 bg-white" key={index}>
                                <div className={`bg-blue-300 w-[35%] h-[18%] rounded-[50%] items-center justify-center p-2 ${job.bg}`}><Icon className="text-green-500 p-2" size={40} /></div>
                                <Link href={"/about"}><h1 className="mt-5 text-xl font-normal">{job.cardname}</h1></Link>

                                <p className="mt-3 text-gray-500 leading-normal ">{job.cardwriteup}</p>
                            </div>
                        )
                    })

                    }
                </div>





            </div>
            </div>
            <div className="h-110">
                <div className="flex ">
                    <div className="w-1/2  ">
                        <img className="h-110" src="tetahub6.jpg" alt="" />
                    </div>
                    <div className="w-1/2">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-12 px-15">
                            {
                                features.map((feature, index) => {
                                    const Icon = feature.icon
                                    return (
                                        <div className="w-60" key={index}>
                                            <div className="mb-4"> <Icon className="text-green-700" strokeWidth={3}/></div>
                                            <h1 className="mb-4 font-normal text-md">{feature.title}</h1>
                                            <p className="text-gray-500">{feature.desc}</p>



                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>

            

        </div>




    )
}
export default Jobhow