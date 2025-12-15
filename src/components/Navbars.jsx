'use client'

import react from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'


const NavBar = () => {


    const navbarLinks = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/job", label: "Job" },
        { href: "/resources", label: "Resources" },
        { href: "/blog", label: "Blog" },
        { href: "/accounts", label: "Accounts" },
        { href: "/contact", label: "Contact" }
    ]
    const pathname = usePathname()
    const isHome = pathname === '/'
    return (
        <div className={`w-full  ${isHome ? " bg-black/30 z-30 absolute" : "bg-black"} `}>
            <div className='w-[80%] ml-[11%] flex justify-between '>

                <div className=' w-[25%] '>
                    <h1 className='text-3xl text-white font-black-900 mt-8.5 '> Zumajobs <span className='text-teal-700'>HR</span></h1>

                </div>
                <div>
                    <div className='bg-black w-full h-23 py-8 px-4 brightness-75 bg-transparent'>
                        <nav className='flex gap-7  ml-0 py-1 pr-7 ' >
                            {navbarLinks.map((link) => {
                                const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href))


                                return (
                                    <div key={link.href} className="">
                                        <Link href={link.href} className={isActive ? `text-red-700 hover:underline gap-2 text-2xl` : `text-blue-600 hover:underline gap-2`}>
                                            <div className='text-white'>{link.label}</div>
                                        </Link>
                                    </div>
                                )

                            })
                            }
                            <button className='bg-teal-700 h-10 w-30 rounded text-white mt-[-12px]'>
                                Jobs Post
                            </button>
                        </nav>
                    </div>


                </div>
            </div>
        </div>
    )
}
export default NavBar