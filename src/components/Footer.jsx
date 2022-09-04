import React from 'react'

import Logo from './Logo'
import { ReactComponent as Visa} from "../assets/Visa.svg"
import { ReactComponent as Mastercard} from "../assets/Mastercard.svg"
import { ReactComponent as Bitcoin} from "../assets/Bitcoin_Footer.svg"
import { ReactComponent as Facebook} from "../assets/Facebook.svg"
import { ReactComponent as Instagram} from "../assets/Instagram.svg"
import { ReactComponent as Youtube} from "../assets/Youtube.svg"
import { ReactComponent as Twitter} from "../assets/Twitter.svg"
import { ReactComponent as LinkedIn} from "../assets/LinkedIn.svg"

function Footer() {
  return (
    <div className="bg-[#0D0D2B] mt-20">
        <div className="grid grid-cols-3 gap-4">
            <div><Logo/></div>
            <div className="flex">
                <div>
                    <h4 className="mb-6 font-medium">Quick Link</h4>
                    <div className="flex flex-col space-y-4">
                        <p>Home</p>
                        <p>Products</p>
                        <p>About</p>
                        <p>Features</p>
                        <p>Contact</p>
                    </div>
                </div>
                <div>
                    <h4 className="mb-6 font-medium">Resources</h4>
                    <div className="flex flex-col space-y-4 tracking-wide">
                        <p>Download Whitepaper</p>
                        <p>Smart Token</p>
                        <p>Blockchain Explorer</p>
                        <p>Crypto API</p>
                        <p>Interest</p>
                    </div>
                </div>
            </div>
            <div>
                <h2 className="font-medium text-4xl">We accept the following payment systems</h2>
                <div className="grid grid-cols-3 gap-6">
                    <div className="bg-grey5 bg-opacity-5 rounded-lg flex items-center justify-center p-6">
                        <Visa className=""/>
                    </div>
                    <div className="bg-grey5 bg-opacity-5 rounded-lg flex items-center justify-center">
                        <Mastercard className=""/>
                    </div>
                    <div className="bg-grey5 bg-opacity-5 rounded-lg flex items-center justify-center">
                        <Bitcoin className=""/>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex justify-between items-center mt-32 pb-20">
            <p className="leading-7">©2021 CRAPPO. All rights reserved</p>
            <div className="flex justify-between items-center space-x-9">
                <Facebook/>
                <Instagram/>
                <Youtube/>
                <Twitter/>
                <LinkedIn/>
            </div>
        </div>
    </div>
  )
}

export default Footer