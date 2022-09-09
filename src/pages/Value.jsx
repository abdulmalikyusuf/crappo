import React from 'react'

import cards from '../components/cards'
import Card from '../components/Card'


function Value() {
    const [activeCard, setActiveCard] = React.useState(2)
  return (  
        <div className="bg-grey5 px-6 lg:px-32 sm:px-0 pb-20 lg:-mx-32 z-20 pt-40">
            <div className="mt-16 flex flex-col justify-center items-center">
                <h3 className="font-semibold lg:font-bold text-center text-2xl lg:text-[40px] lg:leading-[60px] text-black mb-16">Trade securely and market the high growth cryptocurrencies.</h3>
                <div className="grid grid-flow-row sm:grid-cols-2 md:grid-cols-3 gap-8 lg:gap-14 px-4">
                    {cards.map((card, idx) => (
                        <Card key={card.title} index={idx+1} isActive={activeCard===idx+1} setActive={setActiveCard} title={card.title} shortCode={card.shortCode} text={card.text} icon={card.icon}/>
                    ))}
                </div>
            </div>
        </div>
  )
}

export default Value