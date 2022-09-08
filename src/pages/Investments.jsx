import React from 'react'
import { motion } from "framer-motion"

import {ReactComponent as Bitcoin } from "../assets/logos_bitcoin.svg"
import {ReactComponent as Lite } from "../assets/liteSM.svg"
import {ReactComponent as Ethereum } from "../assets/EthereumSM.svg"
import {ReactComponent as Caretup } from "../assets/Caretup.svg"

function Investments() {
  return (
    <div className="bg-secondary lg:-mx-32 px-4 lg:px-32 pt-24">
        <div className="grid grid-flow-row md:grid-cols-2">
            <div className="w-4/5">
                <h1 className="font-medium lg:font-bold text-2xl lg:text-[32px] lg:leading-[48px]">Grow your profit and track your investments</h1>
                <motion.p initial={{ opacity: 0.1 }} whileInView={{ opacity: 1, transition: { duration: 2}}} className="text-sm lg:leading-7 mt-6 lg:mb-8 text-grey5">Use advanced analytical tools. Clear TradingView charts let you track current and historical profit investments.</motion.p>
                <motion.button initial={{ scale: 0.4 }} whileInView={{ scale: 1, transition: { duration: 2}}} type="button" className="btn">
                    Learn More
                </motion.button>
            </div>
            <motion.div initial={{ scale: 0.4 }} whileInView={{ scale: 1, transition: { duration: 2}}} className="space-y-1 lg:space-y-4 bg-tertiary backdrop-blur-sm mt-8 p-4 lg:p-10 rounded-2xl ml-14">
                <div className="grid grid-cols-4 lg:font-bold text-xs lg:text-sm">
                    <p></p>
                    <p>Price</p>
                    <p>Change</p>
                    <p>Volume (24h)</p>
                </div>
                <div className="grid grid-cols-4 items-center font-bold text-sm leading-0 lg:leading-5">
                    <div className="flex space-x-2 lg:space-x-4">
                        <Bitcoin className="w-8 h-8 lg:w-full lg:h-full"/>
                        <div>
                            <p className="font-semibold lg:font-bold text-base md:text-xl">BTC</p>
                            <p className="font-thin lg:font-light text-lightText">Bitcoin</p>
                        </div>
                    </div>
                    <p className="font-thin text-lightText">$6750</p>
                    <p className="font-thin text-lightBlue"><span className="inline-flex bg-lightBlue/10 rounded-full items-center justify-center p-1 pr-2"><Caretup/></span>+7.3%</p>
                    <p className="font-thin text-lightText">$3420214</p>
                </div>
                <div className="grid grid-cols-4 items-center font-bold text-sm lg:leading-5 bg-darkBlue rounded-2xl -mx-10 px-5 lg:px-10 py-2 lg:py-5 -translate-x-10 lg:-translate-x-20">
                    <div className="flex space-x-2 lg:space-x-4">
                        <Ethereum className="w-8 h-8 lg:w-full lg:h-full"/>
                        <div className="">
                            <p className="font-semibold lg:font-bold text-base md:text-xl">ETH</p>
                            <p className="font-thin lg:font-light text-lightText">Ethereum</p>
                        </div>
                    </div>
                    <p className="font-thin text-lightText">$6750</p>
                    <p className="font-thin text-lightBlue"><span className="inline-flex bg-lightBlue/10 rounded-full items-center justify-center p-1 pr-2"><Caretup/></span>+7.3%</p>
                    <p className="font-thin text-lightText">$3420214</p>
                </div>
                <div className="grid grid-cols-4 items-center font-bold text-sm leading-0 lg:leading-5">
                    <div className="flex space-x-2 lg:space-x-4">
                        <Lite className="w-8 h-8 lg:w-full lg:h-full"/>
                        <div>
                            <p className="font-semibold lg:font-bold text-base md:text-xl">LTC</p>
                            <p className="font-thin lg:font-light text-lightText">Litecoin</p>
                        </div>
                    </div>
                    <p className="font-thin text-lightText">$6750</p>
                    <p className="font-thin text-lightBlue"><span className="inline-flex bg-lightBlue/10 rounded-full items-center justify-center p-1 pr-2"><Caretup/></span>+7.3%</p>
                    <p className="font-thin text-lightText">$3420214</p>
                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default Investments