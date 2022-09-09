import React from 'react'
import {ChartBarIcon, UserIcon, GlobeEuropeAfricaIcon} from "@heroicons/react/24/outline"
import { motion } from 'framer-motion';

import {ReactComponent as Ethereum} from "../assets/Ethereum.svg"

function Proposition() {
	const container = {
		hidden: { y: 20, opacity: 0.2 },
		show: {
		  opacity: 1,
		  y: 0,
		  transition: {
			staggerChildren: 0.07,
			delayChildren: 0.2,
			type: "spring",
            bounce: 0.4,
            duration: 2,
		  }
		}
	  }

  return (
	  <div className='mt-14'>
			<motion.ul initial="hidden" whileInView="show" variants={container} className="flex flex-col lg:flex-row items-center lg:justify-between space-y-10 lg:space-y-0">
				<motion.li variants={container} className="flex space-x-2 lg:space-x-6 items-start">
					<span className="p-2 md:p-4 2xl:p-5 bg-opacity-10 bg-white rounded-full text-royal-blue">
						<ChartBarIcon className="w-8 md:w-9 2xl:w-10"/>
					</span>
					<div>
						<h1 className="font-bold text-2xl md:text-4xl 2xl:text-6xl mb-2">$30B</h1>
						<p className="text-[#E0E0E0] font-thin lg:font-normal text-sm md:text-base 2xl:text-lg">Digital Currency Exchanged</p>
					</div>
				</motion.li>
				<motion.li variants={container} className="flex space-x-2 lg:space-x-6 items-start">
					<span className="p-2 md:p-4 2xl:p-5 bg-opacity-10 bg-white rounded-full text-royal-blue">
						<UserIcon className="w-8 md:w-9 2xl:w-10"/>
					</span>
					<div>
						<h1 className="font-bold text-2xl md:text-4xl 2xl:text-6xl mb-2">10M+</h1>
						<p className="text-[#E0E0E0] font-thin lg:font-normal text-sm md:text-base 2xl:text-lg">Trusted Wallets Investor</p>
					</div>
				</motion.li>
				<motion.li variants={container} className="flex space-x-2 lg:space-x-6 items-start">
					<span className="p-2 md:p-4 2xl:p-5 bg-opacity-10 bg-white rounded-full text-royal-blue">
						<GlobeEuropeAfricaIcon className="w-8 md:w-9 2xl:w-10"/>
					</span>
					<div>
						<h1 className="font-bold text-2xl md:text-4xl 2xl:text-6xl mb-2">195</h1>
						<p className="text-[#E0E0E0] font-thin lg:font-normal text-sm md:text-base 2xl:text-lg">Countries Supported</p>
					</div>
				</motion.li>
			</motion.ul>
			<div className="grid grid-rows-1 md:grid-cols-2 items-center md:gap-10 mt-120">
				<motion.div initial={{ opacity: 0.2, scale: 0.4}} whileInView={{ opacity: 1, scale: 1, transition: { duration: 2}}} className="order-2 lg:order-1">
					<div><Ethereum className="w-full h-fit"/></div>
				</motion.div>

				<div className="order-1 lg:order-2">
					<motion.div initial={{ y: 100, opacity: 0.2 }} whileInView={{ y: 0, opacity: 1, transition: { duration: 2}}}>
						<h2 className="font-medium lg:font-bold text-2xl lg:text-[40px] lg:leading-[60px] mb-4 lg:mb-6">Why you should choose CRAPPO</h2>
						<p className="font-normal text-sm lg:text-lg">Experience the next generation cryptocurrency platform. No financial borders, extra fees, and fake reviews.</p>
						<button type="button" className="px-6 py-1 lg:py-4 mt-4 lg:mt-8 rounded-full bg-royal-blue font-medium text-lg">
							Learn More
						</button>
					</motion.div>
				</div>
			</div>
		</div>
  )
}

export default Proposition