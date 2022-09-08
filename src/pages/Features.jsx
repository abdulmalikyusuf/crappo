import React from 'react'
import { ArrowUpIcon } from "@heroicons/react/24/outline"
import {motion } from "framer-motion"

import {ReactComponent as Bitcoin} from "../assets/Bitcoin.svg"
import {ReactComponent as Chart} from "../assets/Chart.svg"
import {ReactComponent as Stroke} from "../assets/Stroke.svg"


function Features() {
    const cardVariants = {
        offscreen: {
          opacity: 0.2,
          scale: 0.4
        },
        onscreen: {
          opacity: 1,
          scale: 1,
        //   rotate: -10,
          transition: {
			staggerChildren: 0.07,
            delayChildren: 1,
            type: "spring",
            bounce: 0.4,
            duration: 2
          }
        }
      };
  return (
    <motion.div initial="offscreen" whileInView="onscreen" className="bg-secondary lg:-mx-32 px-4 lg:px-32 pb-20 z-20">
        <motion.div variants={cardVariants} className="pt-24">
            <h1 className="lg:w-[758px] lg:mx-auto text-center font-semibold lg:font-bold text-3xl lg:text-[40px] lg:leading-[60px] text-white">Market sentiments, portfolio, and run the infrastructure of your choice</h1>
        </motion.div>
        {/* <div className="w-[686px] h-[686px] rounded-full bg-gradient-to-r from-gradientStart to-gradientStop transform rotate-90 -translate-y-full z-0"></div> */}
        <motion.div variants={cardVariants} className="grid grid-flow-row md:grid-cols-2 gap-10 -mt-[586px]f mt-120">
            <div className=''>
                <h1 className="font-semibold lg:font-bold text-2xl lg:text-[32px] lg:leading-[48px]">Invest Smart</h1>
                <p className="leading-7 mt-6 mb-8 text-grey5 w-[408px] text-wrap">Get full statistic information about the behaviour of buyers and sellers will help you to make the decision. </p>
                <button type="button" className="btn">
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
                    <Stroke className="w-full h-full"/>
                    <Chart className="w-full h-full"/>
                </div>
                <div className="flex justify-around lg:justify-between space-x-8 lg:mx-14">
                    <div className="flex flex-col space-y-4 rounded-2xl bg-card backdrop-blur-[250px] py-6 px-4 w-fit h-fit -translate-y-1/3">
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
        </motion.div>
    </motion.div>
  )
}

export default Features