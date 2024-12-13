const { ethers } = require("ethers");
const { developmentChains } = require("../helper-hardhat-config.js");

const BASE_FEE = ethers.utils.parseEther("0.25") // 0.25 is the premium. It costs 0.25 Link per requests.
const GAS_PRICE_LINK = 1e9 //calculated value based on the price of the chain.

// Chainlink nodes pay the gas fees to give us the randomness and do external execution.
// so the price of the requests changes based on the price of the gas

module.exports = async function ({ getNamedAccounts, deployments }) {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    const args = [BASE_FEE, GAS_PRICE_LINK]

    if(developmentChains.includes(network.name)){
        log("Local network detected! Deploying mocks...")
        // deploy mock vrfcoordinator...
        await deploy("VRFCoordinatorV2Mock", {
            from: deployer,
            log: true,
            args: args,
        })
        log("Mocks Deployed!");
        log("____________________________________________")
    }
}

module.exports.tags = ["all", "mocks"]