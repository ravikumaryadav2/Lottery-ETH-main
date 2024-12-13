import React from "react"
import { ConnectButton } from "web3uikit"

const Header = () => {
    return (
        <div className="p-5 border-b-2 flex flex-row">
            <h1
                className="py-2 px-5 font-blog text-2xl
            "
            >
                Decentralized Lottery
            </h1>
            <div className="ml-auto py-2 px-2">
                <ConnectButton moralisAuth={false} />
            </div>
        </div>
    )
}

export default Header
