import React from 'react'
import { motion } from "framer-motion";

function Calculator() {
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
            type: "spring",
            bounce: 0.4,
            duration: 2
          }
        }
      };
  return (
    <motion.div className="flex flex-col justify-center translate-y-1/3 -mt-14" initial="offscreen" whileInView="onscreen">
        <motion.div className="space-y-2 sm:space-y-4 lg:space-y-6 text-center" variants={cardVariants}>
            <h2 className="font-bold text-3xl lg:text-[40px] lg:leading-[60px]">Check how much you can earn</h2>
            <div className="text-sm lg:text-base leading-0">
                <p>Let’s check your hash rate to see how much you will earn today</p>
                <p>Exercitation veniam consequat sunt nostrud amet.</p>
            </div>
        </motion.div>
        <motion.div variants={cardVariants} className="z-40">
            <div className="grid grid-flow-row gap-4 md:gap-10 rounded-2xl mx-4 lg:mx-32 p-4 sm:p-8 lg:p-12 bg-[#FBFCFE] mt-8 lg:mt-14">
                <div className="flex flex-col md:flex-row items-center space-y-2 sm:space-y-4 md:space-y-0 md:space-x-12">
                    <input type="text" placeholder="Enter your hash rate" className="bg-[#FBFCFE] w-full lg:w-1/2 h-fit border-0 border-b-2 border-black placeholder:text-black outline-none focus:ring-0 text-black"/>
                    <select className="bg-[#FBFCFE] w-full md:w-1/4 h-fit outline-none border-0 border-b-2 p-0d placeholder:text-black  focus:ring-0 text-black">
                        <option>TH/s</option>
                    </select>
                    <button type="button" className="btn w-fit h-fit">Calculate</button>
                </div>
                <div className="text-black">
                    <h5 className="font-medium text-accent">ESTIMATED 24 HOUR REVENUE:</h5>
                    <h2 className="mt-2 md:mt-4 mb-1 font-medium md:font-bold md:text-2xl lg:text-[32px] lg:leading-[48px]">0.055 130 59 ETH <span className="text-accent">($1275)</span></h2>
                    <p className="leading-none lg:leading-7 text-grey">Revenue will change based on mining difficulty and Ethereum price.</p>
                </div>

            </div>
        </motion.div>
    </motion.div>
  )
}

export default Calculator