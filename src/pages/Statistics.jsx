import React from 'react'
import { motion } from "framer-motion"

import {ReactComponent as Statistic} from "../assets/Statistic.svg"

function Statistics() {
  return (
    <div className="bg-secondary lg:-mx-32 px-4 pt-14 z-20">
        <div className="grid md:grid-cols-2 items-center gap-10">
            <div className="">
                <Statistic className="w-full h-full"/>
            </div>
            <div>
                <h1 className="font-medium lg:font-bold text-2xl text-[32px] leading-[48px]">Detailed Statistics</h1>
                <motion.p initial={{ opacity: 0.1 }} whileInView={{ opacity: 1, transition: { duration: 2}}} className="text-sm lg:leading-7 mt-4 lg:mt-6 mb-6 lg:mb-8 text-grey5 text-wrap">View all mining related information in realtime, at any point at any location and decide which polls you want to mine in.</motion.p>
                <motion.button initial={{ x: 100, }} whileInView={{ x: 0, transition: { duration: 2}}} type="button" className="btn">
                    Learn More
                </motion.button>
            </div>
        </div>
    </div>
  )
}

export default Statistics