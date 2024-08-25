const { version } = require("chai")

require("hardhat-gas-reporter")
require("dotenv").config()
//require("solidity-coverage")
require("hardhat-deploy")
//require("@nomiclabs/hardhat-waffle")
require("@nomicfoundation/hardhat-toolbox")
require("@nomiclabs/hardhat-ethers")
//require("@nomicfoundation/hardhat-verify")
//require("@nomiclabs/hardhat-etherscan")
//require("@nomicfoundation/hardhat-verify")
/** @type import('hardhat/config').HardhatUserConfig */

const RINKEBY_RPC_URL = process.env.RINKEBY_RPC_URL
const PRIVATE_KEY = process.env.PRIVATE_KEY
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY
const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY

module.exports = {
    solidity: {
        compilers: [{ version: "0.8.24" }, { version: "0.6.6" }],
    },
    defaultNetwork: "hardhat",
    networks: {
        sepolia: {
            url: RINKEBY_RPC_URL,
            accounts: [PRIVATE_KEY],
            chainId: 11155111,
            blockConfirmations: 6,
        },
        hardhat: {
            //url: "http://127.0.0.1:8545/",
            //accounts: [PRIVATE_KEY],
            chainId: 31337,
        },
    },
    namedAccounts: {
        deployer: {
            default: 0, // here this will by default take the first account as deployer
            1: 0, // similarly on mainnet it will take the first account as deployer. Note though that depending on how hardhat network are configured, the account 0 on one network can be different than on another
        },
    },
    gasReporter: {
        enable: true,
        outputFile: "gas-report.txt",
        noColors: true,
        currency: "USD",
        //coinmarketcap:COINMARKETCAP_API_KEY,
        token: "MATIC",
    },
    etherscan: {
        apiKey: ETHERSCAN_API_KEY,
        // customChains: [], // uncomment this line if you are getting a TypeError: customChains is not iterable
    },
    mocha: {
        timeout: 500000,
    },
}
