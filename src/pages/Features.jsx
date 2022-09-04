import React from 'react'
import { ArrowUpIcon } from "@heroicons/react/24/outline"
import {ReactComponent as Bitcoin} from "../assets/Bitcoin.svg"
import {ReactComponent as Chart} from "../assets/Chart.svg"
import {ReactComponent as Stroke} from "../assets/Stroke.svg"


function Features() {
  return (
    <div className="bg-secondary -mx-32 px-32 pb-20 z-20">
        <div className="pt-[100px]">
            <h1 className="w-[758px] mx-auto text-center font-bold text-[40px] leading-[60px] text-white">Market sentiments, portfolio, and run the infrastructure of your choice</h1>
        </div>
        <div className="w-[686px] h-[686px] rounded-full bg-gradient-to-r from-gradientStart to-gradientStop transform rotate-90 -translate-y-full z-0"></div>
        <div className="grid grid-cols-2 -mt-[586px]">
            <div>
                <h1 className="font-bold text-[32px] leading-[48px]">Invest Smart</h1>
                <p className="leading-7 mt-6 mb-8 text-grey5 w-[408px]">Get full statistic information about the behaviour of buyers and sellers will help you to make the decision. </p>
                <button type="button" className="flex items-center space-x-6 mt-6 bg-accent text-white rounded-full px-6 py-4 font-medium text-lg leading-[27px] text-center">
                    Learn More
                </button>
            </div>
            <div className="">
                <div className="bg-tertiary text-white p-10 rounded-2xl">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-4">
                            <Bitcoin className="h-10 w-10"/>
                            <div className="">
                                <div className="flex items-center space-x-2">
                                    <h3 className="text-[32px] leading-[48px] font-bold">Bitcoin</h3><span className="text-lg font-medium text-gray-500">BTC</span>
                                </div>
                                <p className="text-[#F2F2F2] text-sm">0.00080 BTC</p>
                            </div>
                        </div>
                        <p className="text-[#42FFFF] font-medium text-sm">+125%</p>
                    </div>
                    <Stroke/>
                    <Chart/>
                </div>
                <div className="flex justify-between mx-16">
                    <div className="flex flex-col space-y-4 rounded-2xl bg-card backdrop-blur-[250px] py-6 px-4 -translate-y-1/3">
                        <p className="font-semibold text-lg">Increase in Trade</p>
                        <h1 className="font-bold text-2xl">+75%<ArrowUpIcon className="h-4 w-4 inline-flex place-self-center ml-2 text-red-500"/></h1>
                        <p className="text-[#F2F2F2]">Sell option</p>
                    </div>
                    <div className="flex flex-col space-y-4 rounded-2xl bg-card backdrop-blur-[250px] py-4 px-11 w-fit h-fit -translate-y-1/2">
                        <h1 className="font-bold text-2xl">$15.32</h1>
                        <p className="text-[#F2F2F2]">Price in dollar</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Features