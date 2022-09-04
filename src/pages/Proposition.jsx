import React from 'react'
import {ChartBarIcon, UserIcon, GlobeEuropeAfricaIcon} from "@heroicons/react/24/outline"

import {ReactComponent as Ethereum} from "../assets/Ethereum.svg"

function Proposition() {
  return (
	<div className='pb-80 mt-28'>
		<ul className="flex items-center justify-between">
			<li className="flex space-x-6">
				<p className="p-6 bg-opacity-10 bg-white rounded-full text-royal-blue">
					<ChartBarIcon className="w-12"/>
				</p>
				<div>
					<h1 className="font-bold text-6xl mb-4">$30B</h1>
					<p className="text-[#E0E0E0] text-lg">Digital Currency Exchanged</p>
				</div>
			</li>
			<li className="flex space-x-6">
				<p className="p-6 bg-opacity-10 bg-white rounded-full text-royal-blue">
					<UserIcon className="w-12"/>
				</p>
				<div>
					<h1 className="font-bold text-6xl mb-4">10M+</h1>
					<p className="text-[#E0E0E0] text-lg">Trusted Wallets Investor</p>
				</div>
			</li>
			<li className="flex space-x-6">
				<p className="p-6 bg-opacity-10 bg-white rounded-full text-royal-blue">
					<GlobeEuropeAfricaIcon className="w-12"/>
				</p>
				<div>
					<h1 className="font-bold text-6xl mb-4">195</h1>
					<p className="text-[#E0E0E0] text-lg">Countries Supported</p>
				</div>
			</li>
		</ul>
		<div className="flex items-center space-x-[70px] mt-44">
			<div className=""><Ethereum/></div>
			<div className="">
				<h2 className="font-bold text-[40px] leading-[60px] mb-6">Why you should choose CRAPPO</h2>
				<p className="font-normal text-lg w-[408px]">Experience the next generation cryptocurrency platform. No financial borders, extra fees, and fake reviews.</p>
				<button type="button" className="px-6 py-4 mt-8 rounded-full bg-royal-blue font-medium text-lg">
					Learn More
				</button>

			</div>
		</div>
	</div>
  )
}

export default Proposition