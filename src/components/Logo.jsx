import React from 'react'

import LogoSVG from "../assets/Logo.svg"

function Logo() {
  return (
    <div className="flex items-center space-x-4 font-medium leading-5 text-lg">
        <img src={LogoSVG} alt="Crypto Logo"/>
        <h3>CRAPPO</h3>
    </div>
  )
}

export default Logo