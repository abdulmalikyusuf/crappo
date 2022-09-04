import React from 'react'
import {ChevronRightIcon} from "@heroicons/react/24/outline"

import {ReactComponent as Bitcoin} from "../assets/Bitcoin.svg"
import {ReactComponent as Ether} from "../assets/Ether.svg"
import {ReactComponent as Litecoin} from "../assets/Litecoin.svg"


function Value() {
  return (
    <div className="flex flex-col justify-center">
        <div className="space-y-6 text-center">
            <h2 className="font-bold text-[40px] leading-[60px]">Check how much you can earn</h2>
            <div>
                <p>Let’s check your hash rate to see how much you will earn today</p>
                <p>Exercitation veniam consequat sunt nostrud amet.</p>
            </div>
        </div>
        <div className="flex space-x-12 rounded-t-2xl mx-32 p-12 bg-[#FBFCFE]">
            <input type="text" placeholder="Enter your hash rate" className="bg-[#FBFCFE] w-1/2 border-b-2 border-black placeholder:text-black outline-none ring-0 text-black"/>
            <select className="bg-[#FBFCFE] w-1/4 border-b-2 placeholder:text-black">
                <option selected={true}>TH/s</option>
            </select>
            <button type="button" className="py-4 px-8 rounded-full bg-royal-blue font-medium text-lg">Calculate</button>
        </div>
        
        <div className="bg-white -mx-32 px-32 pb-20 z-20">
            <div className="bg-white rounded-b-2xl shadow-lg mx-32 p-12 translate-y-ful text-black">
                <h5 className="font-medium text-accent">ESTIMATED 24 HOUR REVENUE:</h5>
                <h2 className="mt-4 mb-1 font-bold text-[32px] leading-[48px]">0.055 130 59 ETH <span className="text-accent">($1275)</span></h2>
                <p className="leading-7 text-grey">Revenue will change based on mining difficulty and Ethereum price.</p>
            </div>
            <div className="mt-[100px] flex flex-col justify-center items-center">
                <h3 className="font-bold text-center text-[40px] leading-[60px] text-black mb-16">Trade securely and market the high growth cryptocurrencies.</h3>
                <div className="flex space-x-9">
                    <div className="flex flex-col items-center py-12 px-6 bg-secondary backdrop-blur-3xl rounded-2xl text-center">
                        <Bitcoin/>
                        <div className="flex items-center space-x-2 mt-12">
                            <h3 className="text-[32px] leading-[48px] font-bold">Bitcoin</h3><span className="text-lg font-medium text-gray-500">BTC</span>
                        </div>
                        <p className="mt-4 text-lg">Digital currency in which a record of transactions is maintained.</p>
                        <button type="button" className="flex items-center space-x-6 mt-6 bg-accent text-white rounded-full px-6 py-4 font-medium text-lg leading-[27px] text-center">
                            Start mining
                            <ChevronRightIcon className="w-6 h-6 font-extrabold text-royal-blue bg-white rounded-full p-1 ml-6"/>
                        </button>
                    </div>
                    <div className="flex flex-col items-center py-12 px-6 rounded-2xl text-black text-center">
                        <Ether/>
                        <div className="flex items-center space-x-2 mt-12">
                            <h3 className="text-[32px] leading-[48px] font-bold">Ethereum</h3><span className="text-lg font-medium text-gray-500">ETH</span>
                        </div>
                        <p className="mt-4 text-lg">Blockchain technology to create and run decentralized digital applications.</p>
                        <button type="button" className="mt-6 border rounded-full p-6">
                        {/* p-[22px] */}
                            <ChevronRightIcon className="w-6 h-6 font-extrabold text-royal-blue bg-white"/>
                        </button>
                    </div>
                    <div className="flex flex-col items-center py-12 px-6 rounded-2xl text-black text-center">
                        <Litecoin/>
                        <div className="flex items-center space-x-2 mt-12">
                            <h3 className="text-[32px] leading-[48px] font-bold">Litecoin</h3><span className="text-lg font-medium text-gray-500">LTC</span>
                        </div>
                        <p className="mt-4 text-lg">Cryptocurrency that enables instant payments to anyone in the world.</p>
                        <button type="button" className="mt-6 border rounded-full p-6">
                        {/* p-[22px] */}
                            <ChevronRightIcon className="w-6 h-6 font-extrabold text-royal-blue bg-white"/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Value