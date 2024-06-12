import React from "react"
import { HiArrowRight } from "react-icons/hi"


const Card =({title,des,icon}) => 
    {
        return (
            <div className="w-full h-100  px-12 py-10 rounded-lg shadow-shadowOne flex items-center
             bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b
             hover:from-black hover:to-[#1e2024] transition-colrs duration-100 group">

                <div className="h-70 ">
                <div className="flex h-full flex-col gap-6 translate-y-10 group-hover:translate-y-0
                transition-transform duration-500">
                    <div>
                    <span className="text-4xl text-designColor">{icon}</span>          
                </div>

                <div className="flex flex-col gap-6">
                    <h2 className="text-xl md:text-2xl font-tileFont font-bold text-gray-300">
                        {title}
                    </h2>
                    <p className="base">{des}</p>
                    
                </div>
                </div>

                </div>
            </div>
        )
    }

export default Card