import React from 'react'
import {ChevronRightIcon} from "@heroicons/react/24/outline"


function Card({ index, isActive, setActive, title, shortCode, text, icon}) {
  return (
    <div className={`flex flex-col items-center py-12 px-6 max-w-[350px] ${isActive? "bg-secondary backdrop-blur-3xl": "bg-white text-black"} rounded-2xl text-center`}>
        {icon}
        <div className="flex items-center space-x-2 mt-12">
            <h3 className="text-lg lg:text-[32px] lg:leading-[48px] font-medium lg:font-bold">{title}</h3><span className="text-lg font-medium text-gray-500">{shortCode}</span>
        </div>
        <p className="mt-4 text-lg">{text}</p>
        {isActive ? <button type="button" className="flex items-center space-x-6 mt-6 bg-accent text-white rounded-full p-1 lg:px-4 xl:px-6 lg:py-2 xl:py-4 lg:font-medium text-sm lg:text-base xl:text-lg lg:leading-5 xl:leading-[27px] lg:text-center">
            Start mining
            <ChevronRightIcon className="w-6 h-6 font-extrabold text-royal-blue bg-white rounded-full p-1 lg:ml-2 xl:ml-6"/>
        </button>: 
        <button type="button" className="mt-6 border rounded-full p-2 lg:p-6" onClick={()=>setActive(index)}>{/* p-[22px] */}
            <ChevronRightIcon className="w-4 h-4 lg:w-6 lg:h-6 font-extrabold text-royal-blue bg-white"/>
        </button>}
    </div>
  )
}

export default Card