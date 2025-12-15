import React from "react";
import {Brush, Code2, Headphones, Megaphone, ShoppingBag, Cpu, Smartphone, GraduationCap, Cog, Car} from "lucide-react"


const categories = [
  { title: "Designing", openings: 3, icon: Brush },
  { title: "Software developer", openings: 5, icon: Code2 },
  { title: "Customer service", openings: 5, icon: Headphones },
  { title: "Marketing", openings: 6, icon: Megaphone },
  { title: "Sales", openings: 5, icon: ShoppingBag },
  { title: "Development", openings: 5, icon: Cpu },
  { title: "App developer", openings: 2, icon: Smartphone },
  { title: "Software trainee", openings: 1, icon: GraduationCap },
  { title: "Digital service", openings: 1, icon: Cog },
  { title: "Automotive", openings: 1, icon: Car },
]


const Categories = ()=>{

     return(
        <div>
        <div className="w-[80%] mx-auto flex flex-wrap gap-6 pl-10">
            {
                categories.map((category,index)=>{
                    const Icon = category.icon

                    return(
                        <div key={index} className="bg- rounded shadow-sm w-55 h-25 p-5 bg-gray-200 relative z-50 hover:bg-gray-100 hover:shadow-lg hover:border hover:border-gray-300">
                            <h1 className="font-semibold text-lg" >{category.title}</h1>
                            <p className="text-slate-500">Opening:{category.openings}</p>

                            <div className="absolute text-gray-300 right-4 -mt-8 z-0"> 
                                <Icon size={64} strokeWidth={1}/>
                            </div>

                        </div>
                    )

                })
            }

        </div>
        </div>

     )
}
export default Categories