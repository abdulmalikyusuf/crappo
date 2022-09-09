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
    <motion.div initial="offscreen" whileInView="onscreen" className="bg-secondary lg:-mx-32 px-4 lg:px-32 z-20">
        <motion.div variants={cardVariants} className="pt-14">
            <h1 className="md:mx-auto md:w-3/4 text-center font-semibold lg:font-bold text-3xl lg:text-[40px] lg:leading-[60px] text-white">Market sentiments, portfolio, and run the infrastructure of your choice</h1>
        </motion.div>
        {/* <div className="w-[686px] h-[686px] rounded-full bg-gradient-to-r from-gradientStart to-gradientStop transform rotate-90 -translate-y-full z-0"></div> */}
        <motion.div variants={cardVariants} className="grid md:grid-cols-2 gap-10 -mt-[586]f mt-120">
            <div className=''>
                <h1 className="font-semibold lg:font-bold text-2xl lg:text-[32px] lg:leading-[48px]">Invest Smart</h1>
                <p className="leading-7 mt-6 mb-8 text-grey5 text-wrap">Get full statistic information about the behaviour of buyers and sellers will help you to make the decision. </p>
                <button type="button" className="btn">
                    Learn More
                </button>
            </div>
            <div className="">
                <div className="bg-tertiary text-white p-4 md:p-10 rounded-lg md:rounded-2xl">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-4">
                            <Bitcoin className="h-10 w-10"/>
                            <div className="">
                                <div className="flex items-center space-x-2">
                                    <h3 className="md:text-2xl lg:text-[32px] lg:leading-[48px] font-bold">Bitcoin</h3><span className="text-sm md:text-lg md:font-medium text-gray-500">BTC</span>
                                </div>
                                <p className="text-[#F2F2F2] text-xs md:text-sm">0.00080 BTC</p>
                            </div>
                        </div>
                        <p className="text-[#42FFFF] md:font-medium text-xs md:text-sm">+125%</p>
                    </div>
                    <div>
                    <Stroke className="w-full h-full"/>
                    <Chart className="w-full h-full"/>
                    </div>
                </div>
                <div className="flex justify-between space-x-4lg: space-x-8 mx-10 lg:mx-14">
                    <div className="flex flex-col lg:space-y-4 rounded-2xl bg-card backdrop-blur-[250px] p-2 lg:py-6 lg:px-4 w-fit h-fit -translate-y-1/3">
                        <p className="font-medium lg:font-semibold lg:text-lg">Increase in Trade</p>
                        <h1 className="text-sm lg:font-bold lg:text-2xl">+75%<ArrowUpIcon className="h-4 w-4 inline-flex place-self-center ml-2 text-red-500"/></h1>
                        <p className="text-xs lg:text-base text-[#F2F2F2]">Sell option</p>
                    </div>
                    <div className="flex flex-col lg:space-y-4 rounded-2xl bg-card backdrop-blur-[250px] p-2 lg:py-6 lg:px-4 w-fit h-fit -translate-y-1/2">
                        <h1 className="font-medium lg:font-bold lg:text-2xl">$15.32</h1>
                        <p className="text-xs lg:text-base text-[#F2F2F2]">Price in dollar</p>
                    </div>
                </div>
            </div>
        </motion.div>
    </motion.div>
  )
}

export default Features