import React from 'react'
import { motion } from "framer-motion";


function Profit() {
    const cardVariants = {
        offscreen: {
          y: 100 },
        onscreen: {
          y: 0,
        //   rotate: -10,
          transition: {
            type: "spring",
            bounce: 0.4,
            duration: 2
          }
        }
      };
    return (
        <motion.div className="bg-gradient-to-b from-[#2B076E] to-[#0D0D2B] lg:-mx-32 py-14 px-4 lg:px-32" initial="offscreen" whileInView="onscreen">
            <motion.div className="bg-[#3671E9] mxx-32 rounded-2xl p-6 lg:p-12" variants={cardVariants}>
                <div className="bg-profit bg-no-repeat bg-left-top bg-blend-lighten bg-origin-padding">
                    <div className="flex flex-col lg:flex-row justify-between items-center z-90">
                        <div>
                            <h1 className="font-medium lg:font-bold text-2xl lg:text-[32px] lg:leading-[48px]">Start mining now</h1>
                            <p className="mt-4 text-sm lg:leading-7">Join now with CRAPPO to get the latest news and start mining now</p>
                        </div>
                        <div className="flex flex-col lg:flex-row justify-start lg:justify-between items-stretch lg:items-center">
                            <input type="email" placeholder="Enter your Email" className="bg-transparent w-full border-0 border-b-2 border-white focus:border-white text-sm lg:leading-7 placeholder:text-white text-white lg:mr-10 outline-none focus:ring-0"/>
                            <button type="button" className="btn bg-white text-black text-center">
                                Subscribe
                            </button>
                        </div>
                        {/* <ProfitSVG className="bg-no-repeat bg-left-top bg-blend-lighten"/> */}
                    </div>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default Profit