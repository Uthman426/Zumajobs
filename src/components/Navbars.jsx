'use client'

import react, { Children } from 'react'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Breadcrumb from './Filepath'


const NavBar = () => {


    const navbarLinks = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/job", label: "Job" },
        {
            label: "Resources",
            Children: [
                { name: "Top Employers", href: "/topEmployer" },
                { name: "Top Freelancers", href: "/topfreelancer" },
                { name: "FAQs", href: "/faqs" },
            ],
        },
        { label: "Blog",
            Children:[
                {name:"Blog & Resources", href:"/blog"}
            ]
         },
        {  label: "Accounts",
            Children:[
                {name:"Login profile", href:"/login"},
                {name:"Signup / New User", href:"signup"}
            ]
         },
        { href: "/contact", label: "Contact" }
    ]
    const pathname = usePathname()
    const isHome = pathname === '/'
    const [openIndex, setOpenIndex] = useState(null);
    //  const isOpen = openIndex === index;
    return (
        <div className={`w-full  ${isHome ? " bg-black/30 z-30 absolute" : "bg-black"} space-y-2 `}>
            <div className='w-[75%] mx-auto flex justify-between gap-20'>

                <div className=' text-3xl text-white font-semibold pt-7 flex gap-1'>
                     Zumajobs <span className='text-teal-700'>HR</span>

                </div>
                <div>
                    <div className='bg-black w-full h-23 py-8  brightness-75 bg-transparent'>
                        <nav className='flex gap-6  pr-20 ml-5 ' >
                            {navbarLinks.map((link, index) => {
                                const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href))

                                //  normal links
                                if (!link.Children) {
                                    return (
                                        <div key={link.href} className="">
                                            <Link href={link.href} className={isActive ? `text-teal-200 hover:underline ` : `text-white hover:text-teal-500 gap-2`}>
                                                <div className='text'>{link.label}</div>
                                            </Link>
                                        </div>
                                    )
                                }

                                return (
                                    <div
                                        key={link.id}
                                        className="relative"
                                        onMouseEnter={() => setOpenIndex(index)}
                                        onMouseLeave={() => setOpenIndex(null)}>

                                        <div
                                            className='text-gray-200 hover:gray-100'>{link.label}
                                            <span className="text-sm">▾</span>
                                        </div>
                                        

                                        {openIndex === index && (
                                            
                                         <div className='absolute top-full  left-1/2 -translate-x-1/2  '>
                                            <div className="mx-auto w-0 h-0 
                                               border-l-8 border-r-8 border-b-8 
                                               border-l-transparent border-r-transparent border-b-white">

                                                 </div>
                                              <ul className="bg-white text-teal-600 px-4 py-6 flex space-x-20 rounded shadow-lg">
                                               
                                                {link.Children.map(item => (
                                                    <li key={item.href}
                                                    >
                                                        <Link href={item.href} className="text-teal-600 hover:text-grey-500 hover:pl-2 whitespace-nowrap">
                                                            {item.name}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                         </div>      


                                      
                                        )}
                                    </div>
                                )
                               
                            })
                            }
                            <Link href={'/jobpost'}>
                            <button className='bg-teal-700 h-10 w-30 rounded text-white mt-[-12px]'>
                                Jobs Post
                            </button>
                            </Link>
                        </nav>
                    </div>


                </div>
               
            </div>
             <div>
                    {
                        isHome?<></>:<Breadcrumb/>
                    }
                </div>
        </div>
    )
}
export default NavBar