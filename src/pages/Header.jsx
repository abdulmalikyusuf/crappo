import React from 'react'
import {ChevronRightIcon} from "@heroicons/react/24/outline"

import Logo from '../components/Logo';
import { ReactComponent as Illustration} from "../assets/Illustration.svg"

function Header() {
  return (
    <div className="pt-14">
			<nav className="flex justify-between items-center">
				<Logo/>
				<ul className="flex space-x-8 items-center text-base font-normal tracking-[0.01rem] leading-7 divide-x divide-slate-500 ">
					<div className="flex space-x-8">
						<li>Products</li>
						<li>Features</li>
						<li>About</li>
						<li>Contact</li>
						<li className="font-medium leading-normal">Login</li>
					</div>
					<div>
						<button type="button" className="bg-royal-blue rounded-full ml-8 py-4 px-8 font-medium leading-6">
							Register
						</button>
					</div>
				</ul>
			</nav>
			<div className="flex mt-36">
				<div className="w-1/2">
					<div className="flex items-center space-x-4 w-fit rounded-full bg-opacity-10 bg-white text-white font-medium p-1 pr-3">
						<p className="bg-white py-1 px-4 text-black rounded-full">75% SAVE</p>
						<p className="leading-7">For the Black Friday weekend</p>
					</div>
					<div className="my-6">
						<h1 className="font-bold text-[64px] leading-[75.84px]">Fastest & secure platform to invest in cryto</h1>
						<p className="leading-7 mt-6 w-[420px]">Buy and sell cryptocurrencies, trusted by 10M wallets with over $30 billion in transactions.</p>
						<button type="button" className="flex items-center space-x-6 mt-8 bg-royal-blue rounded-full p-4 pl-6 font-medium text-lg leading-[27px] text-center">
							Try for FREE
							<ChevronRightIcon className="w-6 h-6 font-extrabold text-royal-blue bg-white rounded-full p-1 ml-6"/>
						</button>
					</div>
				</div>
				<div className="">
					<div className="z-10 h-[997.88px] absolute opacity-5 bg-white w-[120px] -rotate-[120deg]"></div>
					<div className="z-10 h-[997.88px] absolute opacity-5 bg-white w-[120px] translate-x-[28rem] -rotate-[120deg]"></div>
					<Illustration className="z-30"/>
				</div>

			</div>
		</div>
  )
}

export default Header