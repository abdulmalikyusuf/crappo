import React from 'react'

import {ReactComponent as ProfitSVG} from "../assets/Profit.svg"


function Profit() {
  return (
    <div className="bg-[#3671E9] mx-32 mt-20 rounded-2xl p-12">
        <ProfitSVG/>
        <div className="flex justify-between items-center z-20">
            <div>
                <h1 className="font-bold text-[32px] leading-[48px]">Start mining now</h1>
                <p className="mt-4 leading-7">Join now with CRAPPO to get the latest news and start mining now</p>
            </div>
            <div className="flex justify-between items-center">
                <input type="email" placeholder="Enter your Email" className="bg-transparent border-b leading-7 placeholder:text-white text-white mr-10 outline-none ring-0"/>
                <button type="button" className="flex items-center space-x-6 mt-6 bg-white text-black rounded-full px-8 py-4 font-medium text-lg text-center">
                    Subscribe
                </button>
            </div>
        </div>
    </div>
  )
}

export default Profit