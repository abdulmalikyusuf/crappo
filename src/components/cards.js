import {ReactComponent as Bitcoin} from "../assets/Bitcoin.svg"
import {ReactComponent as Ether} from "../assets/Ether.svg"
import {ReactComponent as Litecoin} from "../assets/Litecoin.svg"

export default [
    {
        title: "Bitcoin",
        shortCode: "BTC",
        text: "Digital currency in which a record of transactions is maintained.",
        icon: <Bitcoin/>
    },
    {
        title: "Ethereum",
        shortCode: "ETH",
        text: "Blockchain technology to create and run decentralized digital applications.",
        icon: <Ether/>
    },
    {
        title: "Litecoin",
        shortCode: "LTC",
        text: "Cryptocurrency that enables instant payments to anyone in the world.",
        icon: <Litecoin/>
    },
]