import React from 'react'
import {ChevronRightIcon} from "@heroicons/react/24/outline"
import { motion } from 'framer-motion';

import { ReactComponent as Illustration} from "../assets/Illustration.svg"
import Navigation from '../components/Navigation';

function Header() {
  return (
    <div className="pt-2 lg:pt-8 14">
			<Navigation/>
			<div className="flex flex-col md:items-center md:justify-between md:flex-row mt-120">
				<div className="md:w-1/2 font-thin text-xs lg:font-medium">
					<div className="flex items-center space-x-6 w-fit rounded-full bg-opacity-10 bg-white text-white p-1 pr-3">
						<p className="bg-white py-1 px-4 text-black rounded-full">75% SAVE</p>
						<p className="lg:leading-7">For the Black Friday weekend</p>
					</div>
					<div className="my-6">
						<h1 className="font-medium lg:font-bold text-3xl lg:text-[64px] lg:leading-[75.84px] font-Rubik">Fastest & secure platform to invest in crypto</h1>
						<p className="text-sm lg:text-base font-thin lg:font-medium lg:leading-7 mt-4 lg:mt-6 lg:w-[420px]">Buy and sell cryptocurrencies, trusted by 10M wallets with over $30 billion in transactions.</p>
						<button type="button" className="btn">
							Try for FREE
							<ChevronRightIcon className="w-6 h-6 font-thin text-royal-blue bg-white rounded-full p-1 ml-6"/>
						</button>
					</div>
				</div>
				<div className="">
					{/* <div className="z-10 h-[997.88px] absolute opacity-5 bg-white w-[120px] -rotate-[120deg]"></div> */}
					{/* <div className="z-10 h-[997.88px] absolute opacity-5 bg-white w-[120px] translate-x-[28rem] -rotate-[120deg]"></div> */}
					<Illustration className="z-30 w-96 h-96 lg:w-full lg:h-full"/>
				</div>

			</div>
		</div>
  )
}

export default Header