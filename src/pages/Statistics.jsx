import React from 'react'

import Profit from './Profit'
import {ReactComponent as Statistic} from "../assets/Statistic.svg"

function Statistics() {
  return (
    <div className="bg-secondary -mx-32 pb-20 z-20">
        <div className="grid grid-cols-2">
            <div className="">
            <Statistic className="w-[710px] h-[453px]"/>
                <div>

                </div>
            </div>
            <div>
                <h1 className="font-bold text-[32px] leading-[48px]">Detailed Statistics</h1>
                <p className="leading-7 mt-6 mb-8 text-grey5 w-[408px]">View all mining related information in realtime, at any point at any location and decide which polls you want to mine in.</p>
                <button type="button" className="flex items-center space-x-6 mt-6 bg-accent text-white rounded-full px-6 py-4 font-medium text-lg leading-[27px] text-center">
                    Learn More
                </button>
            </div>
        </div>
        Statistics
        <Profit/>
    </div>
  )
}

export default Statistics